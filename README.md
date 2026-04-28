# Chatbot Project

A simple interactive chatbot built with **HTML, CSS, and JavaScript**.  
It simulates a messenger-style conversation with:
- 🎨 Chat bubbles (user right, bot left)
- 💬 Keyword-based responses (Education, Skills, Projects, Greetings)
- 🧑 Combined creator profile with menu navigation
- ⏳ Typing effect and animated typing indicator (three dots)
- 🌐 Deployable on GitHub Pages with optional custom domain

---

## 🚀 Live Demo
Once deployed, you can access it here:  
https://saurabhgautam56.github.io/chatbot-project/
 
Or via your custom domain:  
`https://saurabhchatbot.com`

---

## 📂 Project Structure
```
chatbot-project/
│── index.html   # Main entry point
│── style.css    # Chat UI styling (bubbles, colors, alignment)
│── script.js    # Chatbot logic (responses, typing effect, menu system)
│── README.md    # Project documentation
│── LICENSE      # Open-source license (MIT)
```

---

## 📖 Usage

Open the chatbot in your browser and interact using simple keywords:

- **hello / hi / hey** → Bot greets you  
- **how are you** → Bot replies with its status  
- **who are you** → Bot introduces itself  
- **what is your creator name** → Bot tells you about the creator  
- **profile** → Shows a menu:
  - `1` → Education  
  - `2` → Skills  
  - `3` → Projects  
  - `all` → Full combined profile  

---

### 💬 Example Screenshots

**Profile Menu Example**  
<img width="1366" height="768" alt="Screenshot (18)" src="https://github.com/user-attachments/assets/36a2a96a-acfd-4113-84d5-aaf4046d6245" />
<img width="1366" height="768" alt="Screenshot (19)" src="https://github.com/user-attachments/assets/f89b4b19-7ee3-4a7a-aa17-dfdca74d2004" />
<img width="1366" height="768" alt="Screenshot (20)" src="https://github.com/user-attachments/assets/8d75838c-0d56-4e27-acfa-c96827be10e2" />
 
**Chat Bubbles Example**  
<img width="1366" height="768" alt="Screenshot (14)" src="https://github.com/user-attachments/assets/8314f97c-abe6-4a9d-98d7-11c0d1dcac44" />
<img width="1366" height="768" alt="Screenshot (16)" src="https://github.com/user-attachments/assets/c9fa768c-1671-48be-8cf7-3632d8fab818" />

 

---

### 🧑 Example Interaction
```
You: profile
Bot: Here’s my creator’s profile. Choose a number:
1️⃣ Education
2️⃣ Skills
3️⃣ Projects
Or type 'all' to see everything together.

You: 2
Bot: My skills include Web Development(HTML, CSS, JavaScript, React), Software Development(Java, C++), QA Testing, and Programming (Java, C++, Python).
```

---

## 🛠 Deployment

### GitHub Pages
1. Create a GitHub repository and upload your files.  
2. Go to **Settings → Pages**.  
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/root`  
4. Save.  
5. Your chatbot will be live at:  
   `https://your-username.github.io/chatbot-project/`

### Custom Domain
1. Buy a domain (e.g., `saurabhchatbot.com`).  
2. Add it under **Custom domain** in GitHub Pages settings.  
3. Update DNS records at your registrar:  
   - **A Records** → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`  
   - **CNAME Record** → `www` → `your-username.github.io`  
4. Enable **Enforce HTTPS**.  

---

## 📜 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🔮 Future Improvements
- Add more dynamic responses (regex, random replies)  
- Integrate APIs for real-time data (weather, jokes, news)  
- Enhance UI with animations and themes (dark mode, transitions)  
- Add smooth auto-scroll and typing delay for realism  

