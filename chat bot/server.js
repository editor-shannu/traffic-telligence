/*********************************************************************/
/*  server.js  – TrafficBot backend using Together AI + Axios        */
/*********************************************************************/
const express = require('express');
const cors    = require('cors');
const axios   = require('axios');
const path    = require('path');
require('dotenv').config({ path: './key.env' });   // <-- loads TOGETHER_API_KEY

const app  = express();
const PORT = 3000;
const API  = 'https://api.together.xyz/v1/chat/completions';
const KEY  = process.env.TOGETHER_API_KEY;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));   // serves index.html

/* ---------- Chat endpoint ---------- */
app.post('/api/chat', async (req, res) => {
  const userMsg = req.body.message || '';

  try {
    const { data } = await axios.post(
      API,
      {
        model: 'meta-llama/Llama-3-8b-chat-hf',
        messages: [
          { role: 'system', content: 'You are TrafficBot, an expert on traffic and pollution.' },
          { role: 'user',   content: userMsg }
        ],
        max_tokens: 256,
        temperature: 0.7,
        stream: false               // simpler: plain JSON reply
      },
      {
        headers: {
          Authorization: `Bearer ${KEY}`,
          'Content-Type': 'application/json'
        },
        timeout: 15000              // 15 s safeguard
      }
    );

    const botReply = data.choices?.[0]?.message?.content?.trim() || '(No reply)';
    res.json({ reply: botReply });

  } catch (err) {
    console.error('Together AI error:', err.response?.data || err.message);
    res
      .status(err.response?.status || 500)
      .json({ reply: '❗ Could not reach Together AI. Try again later.' });
  }
});

/* ---------- Fallback root ---------- */
app.get('/', (_, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

app.listen(PORT, () =>
  console.log(`✅ TrafficBot server running at http://localhost:${PORT}`)
);