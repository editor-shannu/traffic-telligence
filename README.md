# 🚦 TrafficTelligence

**TrafficTelligence** is an AI-powered web platform designed to predict traffic volumes using machine learning and provide a smart, conversational assistant (TrafficBot) to answer queries related to traffic and pollution.

---

## ✨ Features

- **Traffic Volume Prediction:** Predicts real-time traffic volumes based on historical data, weather conditions, temperature, and holidays using a pre-trained Machine Learning model.
- **Smart Assistant (TrafficBot):** An integrated conversational AI powered by Meta's Llama-3-8b (via Together AI) that can understand multiple languages and assist users with traffic-related inquiries.
- **Interactive Dashboards:** Visualizes traffic predictions over a 24-hour period using Chart.js.
- **Dual Architecture:** Contains a primary Python/Flask application for ML predictions and a dedicated Node.js/Express service for the AI Chatbot.

---

## 🛠️ Tech Stack

### Traffic Volume Prediction (Backend & ML)
- **Language:** Python 3
- **Framework:** Flask
- **Machine Learning:** Scikit-Learn, NumPy, Pickle
- **Frontend:** HTML, Tailwind CSS, Chart.js

### Chatbot Service (TrafficBot)
- **Language:** JavaScript (Node.js)
- **Framework:** Express.js
- **AI Model:** Meta Llama-3-8b (Together AI API)
- **HTTP Client:** Axios

---

## 📂 Repository Structure

```text
TRAFFIC INTELLIGENCE/
├── traffic_volume_app/      # Main Flask App for ML Traffic Prediction
│   ├── app.py               # Flask application entry point
│   ├── model.pkl            # Pre-trained ML model (not included in repo)
│   ├── scaler.pkl           # Data scaler for the ML model
│   ├── requirements.txt     # Python dependencies
│   ├── static/              # CSS/JS static files
│   └── templates/           # HTML templates (index.html, result.html)
│
├── chat bot/                # Dedicated Node.js Chatbot Service
│   ├── server.js            # Express server
│   ├── package.json         # Node.js dependencies
│   └── public/              # Frontend for the chatbot
│
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- [Python 3.8+](https://www.python.org/downloads/)
- [Node.js v16+](https://nodejs.org/)
- A [Together AI](https://together.ai/) account for the API key.

### 1. Setting up the Traffic Volume App (Flask)

1. Navigate to the `traffic_volume_app` directory:
   ```bash
   cd "traffic_volume_app"
   ```
2. Create and activate a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```
3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```
4. Create a `key.env` file in the directory and add your Together AI API key:
   ```env
   TOGETHER_API_KEY=your_together_api_key_here
   ```
5. Run the Flask application:
   ```bash
   python app.py
   ```
   The app will be available at `http://localhost:8080`.

### 2. Setting up the Chatbot Service (Node.js)

1. Navigate to the `chat bot` directory:
   ```bash
   cd "chat bot"
   ```
2. Install the required Node.js dependencies:
   ```bash
   npm install
   ```
3. Create a `key.env` file in the directory and add your Together AI API key:
   ```env
   TOGETHER_API_KEY=your_together_api_key_here
   ```
4. Start the Express server:
   ```bash
   node server.js
   ```
   The chatbot interface will be available at `http://localhost:3000`.

---

## 👨‍💻 Author

Developed by **Medisetty Shanmukha Sri Saikumar**  
🔗 [LinkedIn Profile](https://www.linkedin.com/in/medisetty-shanmukha-sri-saikumar-b6195731a)

---

## 📄 License
This project is for educational and portfolio purposes.
