let know = {
  // 👋 Greetings
  "hello": "Hi there!",
  "hi": "Hello! Nice to see you.",
  "hey": "Hey! How’s it going?",
  "how are you": "I am Fine",
  "who are you": "I am Saurabh's Assistant",
  "who is your developer": "My developer is Saurabh Gautam",

    // 🎓 Education
  "education": "My developer have completed his engineering degree in Computer Science and Engineering.",
  "college": "My developer completed B.Tech at Nitra Technical Campus, Ghaziabad, specializing in Computer Science and Engineering.",
  "university": "My developer completed his degree at Dr. A.P.J. Abdul Kalam Technical University, Lucknow, Uttar Pradesh.",
  "school": "My developer completed his schooling at Jawahar Navodaya Vidyalaya, Etah, Uttar Pradesh.",

  // 🛠 Skills
  "skills": "My developer's skills include Programming, Web Development, Software Development, and QA Testing.",
  "web development": "He is proficient in HTML, CSS, JavaScript, and React.",
  "software development": "My developer has experience in developing desktop applications using Java and C++.",
  "qa": "My developer is skilled in Quality Assurance, including test planning, automation, and bug tracking.",
  "programming": "My developer is proficient in Java, C++, and Python.",

  // 📂 Projects
  "projects": "My developer has worked on a custom music player, a chatbot, and several web applications.",
  "music player": "My developer built a custom music player with shuffle, repeat, and a dynamic 'Now Playing' indicator.",
  "chatbot": "My developer developed a rule-based chatbot that responds to keywords with typing effects.",

  // 🧑 Combined Creator Profile
  "tell me about yourself": 
    "Here's a little about my creator:\n\n" +
    "🎓 Education: Completed Computer Science and Engineering at Dr. A.P.J. Abdul Kalam Technical University.\n" +
    "🛠 Skills: Web Development(HTML, CSS, JavaScript, React), Software Development(Java, C++), QA Testing, Programming (Java, C++, Python).\n" +
    "📂 Projects: Built a custom music player, a chatbot, and several web applications.",

  // 🔑 Shortcut keyword with menu
  "profile": 
    "Here’s my creator’s profile. Choose a number:\n\n" +
    "1️⃣ Education\n" +
    "2️⃣ Skills\n" +
    "3️⃣ Projects\n" +
    "Or type 'all' to see everything together."
};

// Typing effect function
function typeText(element, text, speed = 40) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else {
      element.innerHTML += "<br>";
      element.scrollTop = element.scrollHeight;
    }
  }
  typing();
}

// Show typing indicator with animated dots
function showTyping(chatLog) {
  let typingDiv = document.createElement("div");
  typingDiv.className = "typingIndicator";
  typingDiv.innerHTML = "<span class='dot'></span><span class='dot'></span><span class='dot'></span>";
  chatLog.appendChild(typingDiv);
  return typingDiv;
}

// Auto-scroll function
function autoScroll() {
  let chatLog = document.getElementById("chatLog");
  chatLog.scrollTop = chatLog.scrollHeight;
}

function talk() {
  let user = document.getElementById("userBox").value.trim().toLowerCase();
  document.getElementById("userBox").value = "";
  let chatLog = document.getElementById("chatLog");

  // Show user input bubble (right side)
  let userDiv = document.createElement("div");
  userDiv.className = "userMsg";
  userDiv.textContent = user;
  chatLog.appendChild(userDiv);
  autoScroll();

  let reply = "";

  // Handle menu choices
  if (user === "1") reply = know["education"];
  else if (user === "2") reply = know["skills"];
  else if (user === "3") reply = know["projects"];
  else if (user === "all") reply = know["tell me about yourself"];
  else {
    for (let key in know) {
      if (user.includes(key)) {
        reply = know[key];
        break;
      }
    }
  }

  if (!reply) reply = "I don't understand...";

  // Show typing indicator first
  let typingDiv = showTyping(chatLog);

  // Random delay (0.8–1.5s) before reply starts
  let delay = Math.floor(Math.random() * 700) + 800;

  setTimeout(() => {
    chatLog.removeChild(typingDiv);
    let botDiv = document.createElement("div");
    botDiv.className = "botMsg";
    chatLog.appendChild(botDiv);
    typeText(botDiv, reply);
    autoScroll();
  }, delay);
}
