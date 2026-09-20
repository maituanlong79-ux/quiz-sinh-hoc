```javascript
/* =========================================================
   QUIZ SINH HỌC 7–8–9
   SCRIPT HOÀN CHỈNH
   ========================================================= */


/* =========================================================
   DỮ LIỆU QUIZ
   ========================================================= */

const quizData = {

  7: [
    {
      topic: "Tế bào",
      icon: "🔬",
      description: "Khám phá đơn vị cơ bản của sự sống.",
      questions: [
        {
          question: "Tế bào được xem là gì của cơ thể sống?",
          answers: [
            "Đơn vị cấu trúc và chức năng cơ bản",
            "Một cơ quan",
            "Một hệ cơ quan",
            "Một mô"
          ],
          correct: 0,
          explanation: "Tế bào là đơn vị cấu trúc và chức năng cơ bản của cơ thể sống."
        },
        {
          question: "Bộ phận nào điều khiển nhiều hoạt động của tế bào nhân thực?",
          answers: [
            "Màng tế bào",
            "Nhân",
            "Không bào",
            "Thành tế bào"
          ],
          correct: 1,
          explanation: "Nhân chứa vật chất di truyền và điều khiển nhiều hoạt động của tế bào."
        },
        {
          question: "Bào quan thực hiện phần lớn quá trình hô hấp tế bào là?",
          answers: [
            "Ribosome",
            "Lục lạp",
            "Ti thể",
            "Không bào"
          ],
          correct: 2,
          explanation: "Ti thể là nơi diễn ra phần lớn quá trình hô hấp tế bào."
        }
      ]
    },

    {
      topic: "Quang hợp",
      icon: "🌱",
      description: "Tìm hiểu cách cây xanh tạo chất hữu cơ.",
      questions: [
        {
          question: "Quang hợp ở cây xanh cần yếu tố nào?",
          answers: [
            "Ánh sáng",
            "Oxi duy nhất",
            "Nitơ duy nhất",
            "Không cần nước"
          ],
          correct: 0,
          explanation: "Quang hợp cần ánh sáng, nước, carbon dioxide và hệ sắc tố quang hợp."
        },
        {
          question: "Khí nào được cây sử dụng trong quang hợp?",
          answers: [
            "Oxi",
            "Carbon dioxide",
            "Nitơ",
            "Hydrogen"
          ],
          correct: 1,
          explanation: "Cây sử dụng carbon dioxide (CO₂) trong quá trình quang hợp."
        },
        {
          question: "Sản phẩm hữu cơ chủ yếu của quang hợp là?",
          answers: [
            "Glucose",
            "Oxi",
            "Nước",
            "Nitơ"
          ],
          correct: 0,
          explanation: "Quang hợp tạo chất hữu cơ, điển hình là glucose, đồng thời giải phóng oxygen."
        }
      ]
    },

    {
      topic: "Sinh thái",
      icon: "🌍",
      description: "Khám phá quần thể, quần xã và chuỗi thức ăn.",
      questions: [
        {
          question: "Một nhóm cá thể cùng loài sống trong một khu vực xác định được gọi là?",
          answers: [
            "Quần thể",
            "Quần xã",
            "Hệ sinh thái",
            "Sinh quyển"
          ],
          correct: 0,
          explanation: "Quần thể gồm các cá thể cùng loài sống trong một khu vực xác định."
        },
        {
          question: "Cỏ → châu chấu → ếch là ví dụ về?",
          answers: [
            "Chuỗi thức ăn",
            "Quần thể",
            "Mô",
            "Cơ quan"
          ],
          correct: 0,
          explanation: "Đây là một chuỗi thức ăn đơn giản."
        }
      ]
    }
  ],


  8: [
    {
      topic: "Hệ vận động",
      icon: "🦴",
      description: "Tìm hiểu xương, khớp và cơ.",
      questions: [
        {
          question: "Hệ vận động của người gồm những thành phần chính nào?",
          answers: [
            "Xương và cơ",
            "Tim và máu",
            "Não và tủy sống",
            "Phổi và khí quản"
          ],
          correct: 0,
          explanation: "Hệ vận động gồm bộ xương và hệ cơ, phối hợp tạo ra vận động."
        },
        {
          question: "Cơ bám vào xương nhờ?",
          answers: [
            "Gân",
            "Dây thần kinh",
            "Mạch máu",
            "Sụn"
          ],
          correct: 0,
          explanation: "Gân nối cơ với xương."
        }
      ]
    },

    {
      topic: "Tuần hoàn",
      icon: "🫀",
      description: "Khám phá tim và hệ mạch.",
      questions: [
        {
          question: "Cơ quan trung tâm của hệ tuần hoàn là?",
          answers: [
            "Tim",
            "Phổi",
            "Gan",
            "Thận"
          ],
          correct: 0,
          explanation: "Tim co bóp để tạo lực đẩy máu trong hệ mạch."
        },
        {
          question: "Động mạch có chức năng chủ yếu là?",
          answers: [
            "Đưa máu từ tim đi",
            "Đưa máu về tim",
            "Tạo tế bào máu",
            "Tiêu hóa thức ăn"
          ],
          correct: 0,
          explanation: "Động mạch đưa máu từ tim đến các cơ quan."
        }
      ]
    },

    {
      topic: "Hô hấp",
      icon: "🫁",
      description: "Tìm hiểu quá trình trao đổi khí.",
      questions: [
        {
          question: "Cơ quan chính thực hiện trao đổi khí ở người là?",
          answers: [
            "Phổi",
            "Tim",
            "Dạ dày",
            "Thận"
          ],
          correct: 0,
          explanation: "Phổi là cơ quan chính thực hiện trao đổi khí."
        },
        {
          question: "Khí nào cần thiết cho hô hấp tế bào?",
          answers: [
            "Oxi",
            "Carbon dioxide",
            "Nitơ",
            "Methane"
          ],
          correct: 0,
          explanation: "Oxi được sử dụng trong hô hấp tế bào để giải phóng năng lượng."
        }
      ]
    }
  ],


  9: [
    {
      topic: "ADN",
      icon: "🧬",
      description: "Khám phá vật chất di truyền.",
      questions: [
        {
          question: "ADN là viết tắt của?",
          answers: [
            "Axit deoxyribonucleic",
            "Axit ribonucleic",
            "Protein",
            "Glucose"
          ],
          correct: 0,
          explanation: "ADN là axit deoxyribonucleic, một loại vật chất di truyền quan trọng."
        },
        {
          question: "Trong ADN, A liên kết bổ sung với?",
          answers: [
            "G",
            "C",
            "T",
            "U"
          ],
          correct: 2,
          explanation: "Trong ADN: A liên kết với T, G liên kết với C."
        },
        {
          question: "Trong ADN, G liên kết bổ sung với?",
          answers: [
            "A",
            "T",
            "C",
            "U"
          ],
          correct: 2,
          explanation: "G liên kết bổ sung với C."
        }
      ]
    },

    {
      topic: "ARN",
      icon: "🧪",
      description: "Tìm hiểu RNA và vai trò của nó.",
      questions: [
        {
          question: "ARN thường chứa loại base nào thay cho T?",
          answers: [
            "A",
            "U",
            "G",
            "C"
          ],
          correct: 1,
          explanation: "ARN sử dụng uracil (U) thay cho thymine (T)."
        },
        {
          question: "mARN có vai trò gì?",
          answers: [
            "Mang thông tin di truyền tham gia tổng hợp protein",
            "Tạo xương",
            "Vận chuyển oxi",
            "Tiêu hóa thức ăn"
          ],
          correct: 0,
          explanation: "mARN mang thông tin mã hóa từ ADN đến ribosome để tổng hợp protein."
        }
      ]
    },

    {
      topic: "Nguyên phân",
      icon: "🧬",
      description: "Khám phá quá trình phân chia tế bào.",
      questions: [
        {
          question: "Kết quả của một lần nguyên phân từ một tế bào mẹ thường là?",
          answers: [
            "2 tế bào con",
            "3 tế bào con",
            "4 tế bào con",
            "8 tế bào con"
          ],
          correct: 0,
          explanation: "Một tế bào mẹ nguyên phân tạo ra hai tế bào con."
        },
        {
          question: "Nguyên phân có vai trò quan trọng trong?",
          answers: [
            "Sinh trưởng và sửa chữa mô",
            "Chỉ tạo giao tử",
            "Chỉ tạo hormone",
            "Chỉ tiêu hóa thức ăn"
          ],
          correct: 0,
          explanation: "Nguyên phân giúp cơ thể sinh trưởng và thay thế, sửa chữa tế bào."
        }
      ]
    }
  ]

};


/* =========================================================
   TRẠNG THÁI ỨNG DỤNG
   ========================================================= */

let selectedClass = null;
let selectedTopic = null;

let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

let timerInterval = null;
let timeLeft = 60;

let lastAIAnswer = "";

let streak = Number(localStorage.getItem("bioStreak") || 0);
let xp = Number(localStorage.getItem("bioXP") || 0);

let lastStudyDate =
  localStorage.getItem("bioLastStudyDate") || "";

let achievements =
  JSON.parse(
    localStorage.getItem("bioAchievements") || "{}"
  );


/* =========================================================
   KHỞI TẠO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  updateDashboard();
  updateAchievements();

  showScreen("homeScreen");

});


/* =========================================================
   CHUYỂN SCREEN
   ========================================================= */

function showScreen(id) {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {
      screen.classList.remove("active");
    });

  const target =
    document.getElementById(id);

  if (target) {
    target.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   TRANG CHỦ
   ========================================================= */

function goHome() {
  showScreen("homeScreen");
}

function showClasses() {
  showScreen("classScreen");
}


/* =========================================================
   CHỌN LỚP
   ========================================================= */

function selectClass(classNumber) {

  selectedClass = classNumber;

  const title =
    document.getElementById("topicTitle");

  const badge =
    document.getElementById("selectedClassBadge");

  if (title) {
    title.textContent =
      `Sinh học ${classNumber} — Chọn chủ đề`;
  }

  if (badge) {
    badge.textContent =
      `📚 SINH HỌC ${classNumber}`;
  }

  renderTopics();

  showScreen("topicScreen");
}


/* =========================================================
   HIỂN THỊ CHỦ ĐỀ
   ========================================================= */

function renderTopics() {

  const grid =
    document.getElementById("topicGrid");

  if (!grid) return;

  grid.innerHTML = "";

  const topics =
    quizData[selectedClass] || [];

  topics.forEach((topic, index) => {

    const button =
      document.createElement("button");

    button.className = "topic-card";

    button.innerHTML = `
      <div class="topic-icon">
        ${topic.icon}
      </div>

      <h3>${escapeHTML(topic.topic)}</h3>

      <p>
        ${escapeHTML(topic.description)}
      </p>

      <br>

      <small>
        📝 ${topic.questions.length} câu hỏi
      </small>
    `;

    button.onclick = () => {
      startQuiz(index);
    };

    grid.appendChild(button);

  });

}


/* =========================================================
   BẮT ĐẦU QUIZ
   ========================================================= */

function startQuiz(topicIndex) {

  selectedTopic = topicIndex;

  const topic =
    quizData[selectedClass][topicIndex];

  currentQuestions =
    [...topic.questions];

  currentQuestion = 0;
  score = 0;
  correctAnswers = 0;
  wrongAnswers = 0;

  document.getElementById("quizTopic")
    .textContent =
      `Sinh học ${selectedClass} • ${topic.topic}`;

  showScreen("quizScreen");

  loadQuestion();

}


/* =========================================================
   LOAD QUESTION
   ========================================================= */

function loadQuestion() {

  clearInterval(timerInterval);

  const question =
    currentQuestions[currentQuestion];

  const questionText =
    document.getElementById("questionText");

  const number =
    document.getElementById("questionNumber");

  const progress =
    document.getElementById("quizProgress");

  const answers =
    document.getElementById("answers");

  const nextButton =
    document.getElementById("nextButton");

  if (!question) return;

  questionText.textContent =
    question.question;

  number.textContent =
    `Câu ${currentQuestion + 1} / ${currentQuestions.length}`;

  progress.style.width =
    `${((currentQuestion) / currentQuestions.length) * 100}%`;

  answers.innerHTML = "";

  nextButton.disabled = true;

  question.answers.forEach((answer, index) => {

    const button =
      document.createElement("button");

    button.className = "answer-btn";

    button.textContent =
      `${String.fromCharCode(65 + index)}. ${answer}`;

    button.onclick =
      () => checkAnswer(index, button);

    answers.appendChild(button);

  });

  timeLeft = 60;

  document.getElementById("timer")
    .textContent = timeLeft;

  startTimer();

}


/* =========================================================
   TIMER
   ========================================================= */

function startTimer() {

  timerInterval =
    setInterval(() => {

      timeLeft--;

      document.getElementById("timer")
        .textContent = timeLeft;

      if (timeLeft <= 0) {

        clearInterval(timerInterval);

        autoNextAfterTimeout();

      }

    }, 1000);

}


function autoNextAfterTimeout() {

  const question =
    currentQuestions[currentQuestion];

  const buttons =
    document.querySelectorAll(".answer-btn");

  buttons.forEach((button, index) => {

    button.disabled = true;

    if (index === question.correct) {
      button.classList.add("correct");
    }

  });

  wrongAnswers++;

  document.getElementById("nextButton")
    .disabled = false;

  showToast(
    "⏰",
    "Hết giờ! Đáp án đúng đã được đánh dấu."
  );

}


/* =========================================================
   CHECK ANSWER
   ========================================================= */

function checkAnswer(index, clickedButton) {

  clearInterval(timerInterval);

  const question =
    currentQuestions[currentQuestion];

  const buttons =
    document.querySelectorAll(".answer-btn");

  buttons.forEach(button => {
    button.disabled = true;
  });

  if (index === question.correct) {

    clickedButton.classList.add("correct");

    score++;

    correctAnswers++;

    addXP(20);

    showToast(
      "✅",
      "+20 XP — Chính xác!"
    );

  } else {

    clickedButton.classList.add("wrong");

    buttons[question.correct]
      .classList.add("correct");

    wrongAnswers++;

    showToast(
      "💡",
      "Chưa đúng, xem lại đáp án nhé!"
    );

  }

  const nextButton =
    document.getElementById("nextButton");

  nextButton.disabled = false;

  const progress =
    document.getElementById("quizProgress");

  progress.style.width =
    `${((currentQuestion + 1) / currentQuestions.length) * 100}%`;

}


/* =========================================================
   NEXT QUESTION
   ========================================================= */

function nextQuestion() {

  currentQuestion++;

  if (
    currentQuestion >=
    currentQuestions.length
  ) {

    finishQuiz();

    return;

  }

  loadQuestion();

}


/* =========================================================
   FINISH QUIZ
   ========================================================= */

function finishQuiz() {

  clearInterval(timerInterval);

  updateStreak();

  if (
    currentQuestions.length > 0 &&
    score / currentQuestions.length >= 0.8
  ) {

    addXP(30);

  }

  unlockAchievement("start");

  if (score >= 10) {
    unlockAchievement("memory");
  }

  if (
    selectedClass === 9
  ) {
    unlockAchievement("grade9");
  }

  if (
    quizData[selectedClass][selectedTopic]
      .topic
      .toLowerCase()
      .includes("adn")
  ) {

    unlockAchievement("dna");

  }

  const finalScore =
    document.getElementById("finalScore");

  const correct =
    document.getElementById("correctCount");

  const wrong =
    document.getElementById("wrongCount");

  const earned =
    document.getElementById("earnedXP");

  finalScore.textContent =
    score;

  correct.textContent =
    correctAnswers;

  wrong.textContent =
    wrongAnswers;

  earned.textContent =
    score * 20;

  const percent =
    (score / currentQuestions.length) * 100;

  const message =
    document.getElementById("resultMessage");

  if (percent === 100) {
    message.textContent =
      "🌟 Tuyệt vời! Bạn đã trả lời đúng tất cả!";
  }
  else if (percent >= 80) {
    message.textContent =
      "🔥 Rất tốt! Kiến thức của bạn đang tiến bộ!";
  }
  else if (percent >= 50) {
    message.textContent =
      "🌱 Khá tốt! Hãy ôn lại những câu sai nhé!";
  }
  else {
    message.textContent =
      "💪 Đừng nản! Làm lại một lần nữa và bạn sẽ tiến bộ.";
  }

  updateDashboard();
  updateAchievements();

  showScreen("resultScreen");

}


/* =========================================================
   RESTART
   ========================================================= */

function restartQuiz() {

  if (
    selectedClass === null ||
    selectedTopic === null
  ) {
    showClasses();
    return;
  }

  startQuiz(selectedTopic);

}


/* =========================================================
   QUIT
   ========================================================= */

function quitQuiz() {

  clearInterval(timerInterval);

  showClasses();

}


/* =========================================================
   STREAK
   ========================================================= */

function updateStreak() {

  const today =
    new Date()
      .toISOString()
      .slice(0, 10);

  if (lastStudyDate === today) {
    return;
  }

  if (!lastStudyDate) {

    streak = 1;

  } else {

    const previous =
      new Date(lastStudyDate);

    const current =
      new Date(today);

    const difference =
      Math.floor(
        (
          current - previous
        ) /
        (1000 * 60 * 60 * 24)
      );

    if (difference === 1) {

      streak++;

    } else {

      streak = 1;

    }

  }

  lastStudyDate = today;

  localStorage.setItem(
    "bioStreak",
    streak
  );

  localStorage.setItem(
    "bioLastStudyDate",
    lastStudyDate
  );

  if (streak >= 7) {

    unlockAchievement("streak");

  }

  if (streak >= 3) {

    addXP(50);

  }

  updateDashboard();

}


/* =========================================================
   XP
   ========================================================= */

function addXP(amount) {

  xp += amount;

  localStorage.setItem(
    "bioXP",
    xp
  );

  updateDashboard();

}


/* =========================================================
   LEVEL
   ========================================================= */

function getLevelData() {

  const levels = [
    {
      level: 1,
      name: "Người mới",
      min: 0,
      max: 100
    },
    {
      level: 2,
      name: "Nhà khám phá",
      min: 100,
      max: 300
    },
    {
      level: 3,
      name: "Học sinh Sinh học",
      min: 300,
      max: 600
    },
    {
      level: 4,
      name: "Nhà nghiên cứu",
      min: 600,
      max: 1000
    },
    {
      level: 5,
      name: "Chuyên gia Sinh học",
      min: 1000,
      max: 1500
    },
    {
      level: 6,
      name: "Bậc thầy Sinh học",
      min: 1500,
      max: 2500
    }
  ];

  for (let i = 0; i < levels.length; i++) {

    if (
      xp >= levels[i].min &&
      xp < levels[i].max
    ) {
      return levels[i];
    }

  }

  return levels[levels.length - 1];

}


/* =========================================================
   DASHBOARD
   ========================================================= */

function updateDashboard() {

  const level =
    getLevelData();

  const levelProgress =
    Math.min(
      100,
      (
        (xp - level.min) /
        (level.max - level.min)
      ) * 100
    );

  const streakNumber =
    document.getElementById("streakNumber");

  const streakText =
    document.getElementById("streakText");

  const xpNumber =
    document.getElementById("xpNumber");

  const levelText =
    document.getElementById("levelText");

  const levelName =
    document.getElementById("levelName");

  const levelXP =
    document.getElementById("levelXP");

  const progress =
    document.getElementById("levelProgress");

  const headerStreak =
    document.getElementById("headerStreak");

  const headerXP =
    document.getElementById("headerXP");

  if (streakNumber)
    streakNumber.textContent = streak;

  if (headerStreak)
    headerStreak.textContent = streak;

  if (xpNumber)
    xpNumber.textContent = `${xp} XP`;

  if (headerXP)
    headerXP.textContent = xp;

  if (levelText)
    levelText.textContent =
      `Cấp ${level.level} — ${level.name}`;

  if (levelName)
    levelName.textContent =
      `Cấp ${level.level} — ${level.name}`;

  if (levelXP)
    levelXP.textContent =
      `${xp - level.min} / ${level.max - level.min} XP`;

  if (progress)
    progress.style.width =
      `${levelProgress}%`;

  if (streakText) {

    if (streak === 0) {
      streakText.textContent =
        "Bắt đầu chuỗi học hôm nay!";
    }
    else if (streak === 1) {
      streakText.textContent =
        "Ngày đầu tiên! Cố lên 🔥";
    }
    else {
      streakText.textContent =
        `${streak} ngày liên tiếp 🔥`;
    }

  }

  const achievementNumber =
    document.getElementById(
      "achievementNumber"
    );

  if (achievementNumber) {

    achievementNumber.textContent =
      Object.values(achievements)
        .filter(Boolean)
        .length;

  }

}


/* =========================================================
   ACHIEVEMENTS
   ========================================================= */

function unlockAchievement(id) {

  if (achievements[id]) {
    return;
  }

  achievements[id] = true;

  localStorage.setItem(
    "bioAchievements",
    JSON.stringify(achievements)
  );

  updateAchievements();

  const names = {
    start: "🌱 Khởi đầu",
    streak: "🔥 7 ngày",
    dna: "🧬 DNA Master",
    memory: "🧠 Siêu trí nhớ",
    grade9: "🏆 Sinh học 9"
  };

  showToast(
    "🏆",
    `Mở khóa: ${names[id] || "Thành tích"}`
  );

}


function updateAchievements() {

  const map = {
    start: "achievement-start",
    streak: "achievement-streak",
    dna: "achievement-dna",
    memory: "achievement-memory",
    grade9: "achievement-grade9"
  };

  Object.keys(map).forEach(id => {

    const element =
      document.getElementById(map[id]);

    if (!element) return;

    if (achievements[id]) {

      element.classList.remove("locked");
      element.classList.add("unlocked");

    }

  });

  const achievementNumber =
    document.getElementById(
      "achievementNumber"
    );

  if (achievementNumber) {

    achievementNumber.textContent =
      Object.values(achievements)
        .filter(Boolean)
        .length;

  }

}


/* =========================================================
   3D MODEL
   ========================================================= */

const modelInfo = {

  dna: {
    title: "🧬 ADN",
    description:
      "Mô hình ADN giúp quan sát cấu trúc xoắn kép."
  },

  heart: {
    title: "🫀 Tim",
    description:
      "Mô hình tim dùng để quan sát cấu trúc bên ngoài."
  },

  brain: {
    title: "🧠 Não",
    description:
      "Mô hình não giúp khám phá cơ quan điều khiển hệ thần kinh."
  },

  cell: {
    title: "🌱 Tế bào",
    description:
      "Mô hình tế bào giúp hình dung các thành phần bên trong tế bào."
  }

};


/*
   Các file GLB thật có thể thay vào đây.
   Hiện tại dùng model mẫu để đảm bảo khu 3D hoạt động.
*/

const modelFiles = {

  dna:
    "https://modelviewer.dev/shared-assets/models/Astronaut.glb",

  heart:
    "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",

  brain:
    "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",

  cell:
    "https://modelviewer.dev/shared-assets/models/Astronaut.glb"

};


function changeModel(type) {

  const viewer =
    document.getElementById("bioModel");

  if (!viewer) return;

  viewer.src =
    modelFiles[type];

  document.getElementById(
    "modelTitle"
  ).textContent =
    modelInfo[type].title;

  document.getElementById(
    "modelDescription"
  ).textContent =
    modelInfo[type].description;

}


/* =========================================================
   AI TRỢ LÝ
   ========================================================= */

function askAI() {

  const input =
    document.getElementById("aiInput");

  if (!input) return;

  const question =
    input.value.trim();

  if (!question) return;

  addUserMessage(question);

  const answer =
    generateAIAnswer(question);

  lastAIAnswer =
    answer;

  addAIMessage(answer);

  input.value = "";

  speak(answer);

}


function generateAIAnswer(question) {

  const q =
    question
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  if (
    q.includes("adn")
  ) {

    return `
      🧬 <b>ADN</b> là axit deoxyribonucleic,
      một loại vật chất di truyền.
      <br><br>
      ADN có cấu trúc xoắn kép và gồm
      bốn loại nucleotide: A, T, G và C.
      <br><br>
      🔬 Trong ADN:
      <b>A liên kết với T</b>,
      <b>G liên kết với C</b>.
    `;

  }


  if (
    q.includes("gen")
  ) {

    return `
      🧬 <b>Gen</b> là một đoạn của phân tử ADN
      mang thông tin quy định một sản phẩm
      nhất định hoặc góp phần quy định một tính trạng.
    `;

  }


  if (
    q.includes("quang hop")
  ) {

    return `
      🌱 <b>Quang hợp</b> là quá trình cây xanh
      sử dụng năng lượng ánh sáng để tổng hợp
      chất hữu cơ từ CO₂ và nước,
      đồng thời giải phóng O₂.
    `;

  }


  if (
    q.includes("nguyen phan")
  ) {

    return `
      🧬 <b>Nguyên phân</b> là quá trình phân chia
      tế bào giúp tạo ra các tế bào con.
      <br><br>
      Quá trình này có vai trò quan trọng
      trong sinh trưởng và thay thế tế bào.
    `;

  }


  if (
    q.includes("tuan hoan") ||
    q.includes("tim")
  ) {

    return `
      🫀 <b>Hệ tuần hoàn</b> gồm tim và hệ mạch,
      có vai trò vận chuyển máu,
      chất dinh dưỡng, khí và nhiều chất khác
      trong cơ thể.
      <br><br>
      Nếu bạn muốn, hãy bấm
      <b>“Giải thích bằng 3D”</b>
      để mở phòng thí nghiệm.
    `;

  }


  if (
    q.includes("arn") ||
    q.includes("rna")
  ) {

    return `
      🧪 <b>ARN</b> là một loại axit nucleic.
      ARN thường có các base A, U, G và C;
      trong đó U thay cho T của ADN.
    `;

  }


  if (
    q.includes("ti the") ||
    q.includes("mitochondria")
  ) {

    return `
      🔬 <b>Ti thể</b> là bào quan tham gia
      chủ yếu vào quá trình hô hấp tế bào
      và cung cấp năng lượng cho hoạt động tế bào.
    `;

  }


  if (
    q.includes("te bao")
  ) {

    return `
      🔬 <b>Tế bào</b> là đơn vị cấu trúc
      và chức năng cơ bản của cơ thể sống.
      <br><br>
      Có thể tìm hiểu tế bào động vật
      và tế bào thực vật để thấy những điểm
      giống và khác nhau.
    `;

  }


  return `
    🤖 Mình chưa có câu trả lời phù hợp
    cho câu hỏi này trong thư viện Sinh học hiện tại.
    <br><br>
    Bạn thử hỏi về:
    <b>ADN, Gen, ARN, quang hợp,
    nguyên phân, tế bào, tim hoặc tuần hoàn</b> nhé! 🌿
  `;

}


/* =========================================================
   CHAT
   ========================================================= */

function addUserMessage(text) {

  const box =
    document.getElementById("aiMessages");

  const message =
    document.createElement("div");

  message.className =
    "ai-message user";

  message.textContent =
    "🧑 " + text;

  box.appendChild(message);

  box.scrollTop =
    box.scrollHeight;

}


function addAIMessage(html) {

  const box =
    document.getElementById("aiMessages");

  const message =
    document.createElement("div");

  message.className =
    "ai-message bot";

  message.innerHTML =
    "🤖 " + html;

  box.appendChild(message);

  box.scrollTop =
    box.scrollHeight;

}


/* =========================================================
   GIỌNG NÓI
   ========================================================= */

function startVoiceInput() {

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {

    showToast(
      "🎤",
      "Trình duyệt này chưa hỗ trợ nhận dạng giọng nói."
    );

    return;

  }

  const recognition =
    new SpeechRecognition();

  recognition.lang =
    "vi-VN";

  recognition.interimResults =
    false;

  recognition.continuous =
    false;

  const mic =
    document.getElementById(
      "micButton"
    );

  if (mic) {
    mic.textContent = "🔴";
  }

  showToast(
    "🎤",
    "Mình đang nghe..."
  );

  recognition.start();

  recognition.onresult =
    event => {

      const text =
        event
          .results[0][0]
          .transcript;

      const input =
        document.getElementById(
          "aiInput"
        );

      input.value =
        text;

      askAI();

    };

  recognition.onerror =
    () => {

      showToast(
        "⚠️",
        "Không nhận được giọng nói. Bạn thử lại nhé!"
      );

    };

  recognition.onend =
    () => {

      if (mic) {
        mic.textContent = "🎤";
      }

    };

}


/* =========================================================
   ĐỌC CÂU TRẢ LỜI
   ========================================================= */

function speak(html) {

  if (!("speechSynthesis" in window)) {
    return;
  }

  const temp =
    document.createElement("div");

  temp.innerHTML =
    html;

  const text =
    temp.textContent;

  speechSynthesis.cancel();

  const utterance =
    new SpeechSynthesisUtterance(
      text
    );

  utterance.lang =
    "vi-VN";

  utterance.rate =
    0.95;

  utterance.pitch =
    1;

  speechSynthesis.speak(
    utterance
  );

}


function speakLastAnswer() {

  if (!lastAIAnswer) {

    showToast(
      "🔊",
      "Hãy hỏi trợ lý trước nhé!"
    );

    return;

  }

  speak(lastAIAnswer);

}


/* =========================================================
   AI → 3D
   ========================================================= */

function open3DFromAI() {

  const input =
    document.getElementById("aiInput");

  const question =
    input
      ? input.value.toLowerCase()
      : "";

  if (
    question.includes("tim")
  ) {

    changeModel("heart");

  }
  else if (
    question.includes("nao")
  ) {

    changeModel("brain");

  }
  else if (
    question.includes("te bao")
  ) {

    changeModel("cell");

  }
  else {

    changeModel("dna");

  }

  document
    .querySelector(".lab-card")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

}


/* =========================================================
   CHIA SẺ
   ========================================================= */

async function shareQuiz() {

  const url =
    window.location.href;

  const text =
    "🧬 Mình vừa làm Quiz Sinh Học! Bạn thử làm xem nhé 🌿";

  if (navigator.share) {

    try {

      await navigator.share({
        title: "Quiz Sinh Học",
        text: text,
        url: url
      });

      return;

    }
    catch (error) {

      console.log(
        "Share cancelled:",
        error
      );

    }

  }

  try {

    await navigator.clipboard.writeText(
      url
    );

    showToast(
      "📋",
      "Đã sao chép link Quiz Sinh Học!"
    );

  }
  catch (error) {

    const input =
      document.createElement(
        "input"
      );

    input.value =
      url;

    document.body.appendChild(
      input
    );

    input.select();

    document.execCommand(
      "copy"
    );

    document.body.removeChild(
      input
    );

    showToast(
      "📋",
      "Đã sao chép link website!"
    );

  }

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(
  icon,
  message
) {

  const toast =
    document.getElementById(
      "toast"
    );

  const toastIcon =
    document.getElementById(
      "toastIcon"
    );

  const toastText =
    document.getElementById(
      "toastText"
    );

  if (!toast) return;

  toastIcon.textContent =
    icon;

  toastText.textContent =
    message;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    window.toastTimer
  );

  window.toastTimer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 2600);

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(text) {

  return String(text)
    .replace(
      /&/g,
      "&amp;"
    )
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&#039;"
    );

}
```
