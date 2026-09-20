/* =========================================================
   🧬 BIO QUIZ - SCRIPT.JS
   Quiz Sinh học lớp 7 - 8 - 9
   ========================================================= */

/* =========================
   DỮ LIỆU QUIZ
========================= */

const quizData = {
    7: [
        {
            title: "Tế bào",
            icon: "🔬",
            description: "Cấu tạo và chức năng của tế bào",
            questions: [
                {
                    q: "Đơn vị cấu tạo cơ bản của cơ thể sống là gì?",
                    answers: ["Tế bào", "Mô", "Cơ quan", "Hệ cơ quan"],
                    correct: 0
                },
                {
                    q: "Bộ phận nào điều khiển hoạt động của tế bào nhân thực?",
                    answers: ["Màng tế bào", "Nhân", "Tế bào chất", "Không bào"],
                    correct: 1
                },
                {
                    q: "Bào quan thực hiện quang hợp ở thực vật là gì?",
                    answers: ["Ti thể", "Ribosome", "Lục lạp", "Nhân"],
                    correct: 2
                }
            ]
        },

        {
            title: "Quang hợp",
            icon: "🌱",
            description: "Quá trình quang hợp ở thực vật",
            questions: [
                {
                    q: "Quang hợp chủ yếu diễn ra ở bào quan nào?",
                    answers: ["Ti thể", "Lục lạp", "Nhân", "Không bào"],
                    correct: 1
                },
                {
                    q: "Nguyên liệu của quá trình quang hợp gồm gì?",
                    answers: [
                        "Oxygen và glucose",
                        "Carbon dioxide và nước",
                        "Glucose và oxygen",
                        "Protein và nước"
                    ],
                    correct: 1
                },
                {
                    q: "Quang hợp tạo ra chất hữu cơ chủ yếu nào?",
                    answers: ["Glucose", "Protein", "DNA", "Oxygen"],
                    correct: 0
                }
            ]
        },

        {
            title: "Sinh thái",
            icon: "🌍",
            description: "Quần thể, quần xã và hệ sinh thái",
            questions: [
                {
                    q: "Tập hợp các cá thể cùng loài sống trong một khu vực nhất định là gì?",
                    answers: ["Quần xã", "Quần thể", "Hệ sinh thái", "Sinh quyển"],
                    correct: 1
                },
                {
                    q: "Chuỗi thức ăn bắt đầu thường bằng nhóm sinh vật nào?",
                    answers: ["Sinh vật sản xuất", "Động vật ăn thịt", "Sinh vật phân giải", "Động vật ăn tạp"],
                    correct: 0
                },
                {
                    q: "Ví dụ nào là một quần thể?",
                    answers: [
                        "Một đàn cá rô phi trong ao",
                        "Rừng Cúc Phương",
                        "Một hệ sinh thái ao",
                        "Toàn bộ sinh vật trên Trái Đất"
                    ],
                    correct: 0
                }
            ]
        }
    ],

    8: [
        {
            title: "Hệ vận động",
            icon: "🦴",
            description: "Xương, cơ và hệ vận động",
            questions: [
                {
                    q: "Bộ phận nào cùng với cơ tạo nên hệ vận động?",
                    answers: ["Xương", "Tim", "Phổi", "Dạ dày"],
                    correct: 0
                },
                {
                    q: "Cơ hoạt động như thế nào để tạo vận động?",
                    answers: [
                        "Co và giãn",
                        "Chỉ co",
                        "Chỉ giãn",
                        "Không thay đổi"
                    ],
                    correct: 0
                },
                {
                    q: "Xương dài ra chủ yếu nhờ bộ phận nào?",
                    answers: [
                        "Màng xương",
                        "Sụn tăng trưởng",
                        "Tủy xương",
                        "Cơ"
                    ],
                    correct: 1
                }
            ]
        },

        {
            title: "Tuần hoàn",
            icon: "❤️",
            description: "Tim và hệ tuần hoàn",
            questions: [
                {
                    q: "Cơ quan trung tâm của hệ tuần hoàn là gì?",
                    answers: ["Phổi", "Tim", "Gan", "Thận"],
                    correct: 1
                },
                {
                    q: "Máu có chức năng nào sau đây?",
                    answers: [
                        "Vận chuyển các chất",
                        "Tiêu hóa thức ăn",
                        "Tạo xương",
                        "Điều khiển cơ thể"
                    ],
                    correct: 0
                },
                {
                    q: "Mạch máu đưa máu từ tim đi là gì?",
                    answers: ["Tĩnh mạch", "Động mạch", "Mao mạch", "Ống bạch huyết"],
                    correct: 1
                }
            ]
        },

        {
            title: "Hô hấp",
            icon: "🫁",
            description: "Cơ quan và quá trình hô hấp",
            questions: [
                {
                    q: "Cơ quan chính của hệ hô hấp là gì?",
                    answers: ["Tim", "Phổi", "Gan", "Thận"],
                    correct: 1
                },
                {
                    q: "Trao đổi khí ở phổi chủ yếu diễn ra tại đâu?",
                    answers: ["Khí quản", "Phế nang", "Thanh quản", "Mũi"],
                    correct: 1
                },
                {
                    q: "Khí nào cơ thể cần lấy vào khi hô hấp?",
                    answers: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
                    correct: 1
                }
            ]
        }
    ],

    9: [
        {
            title: "ADN",
            icon: "🧬",
            description: "Cấu trúc và chức năng của ADN",
            questions: [
                {
                    q: "ADN là viết tắt của chất nào?",
                    answers: [
                        "Axit đêôxiribônuclêic",
                        "Axit ribônuclêic",
                        "Protein",
                        "Glucose"
                    ],
                    correct: 0
                },
                {
                    q: "Trong ADN, A liên kết bổ sung với bazơ nào?",
                    answers: ["G", "X", "T", "U"],
                    correct: 2
                },
                {
                    q: "Trong ADN, G liên kết bổ sung với bazơ nào?",
                    answers: ["A", "T", "G", "X"],
                    correct: 3
                }
            ]
        },

        {
            title: "ARN",
            icon: "🧬",
            description: "Các loại ARN và vai trò",
            questions: [
                {
                    q: "ARN có loại bazơ nào thay cho T của ADN?",
                    answers: ["A", "U", "G", "X"],
                    correct: 1
                },
                {
                    q: "mARN có chức năng chủ yếu gì?",
                    answers: [
                        "Mang thông tin di truyền từ ADN đến ribosome",
                        "Tạo năng lượng",
                        "Phân giải glucose",
                        "Tạo màng tế bào"
                    ],
                    correct: 0
                }
            ]
        },

        {
            title: "Nguyên phân",
            icon: "🧫",
            description: "Các giai đoạn của nguyên phân",
            questions: [
                {
                    q: "Nguyên phân tạo ra bao nhiêu tế bào con?",
                    answers: ["1", "2", "3", "4"],
                    correct: 1
                },
                {
                    q: "Các tế bào con sau nguyên phân có bộ NST như thế nào so với tế bào mẹ?",
                    answers: [
                        "Giảm một nửa",
                        "Tăng gấp đôi",
                        "Giống tế bào mẹ",
                        "Không có NST"
                    ],
                    correct: 2
                }
            ]
        }
    ]
};


/* =========================
   BIẾN QUIZ
========================= */

let currentClass = 7;
let currentTopic = 0;
let currentQuestion = 0;

let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

let timerInterval = null;
let timeLeft = 30;

let selectedAnswer = false;
let correctStreak = 0;

let quizEarnedXP = 0;

let lastAIQuestion = "";
let lastAIAnswer = "";


/* =========================
   LOCAL STORAGE
========================= */

let streak = Number(localStorage.getItem("bioStreak")) || 0;
let xp = Number(localStorage.getItem("bioXP")) || 0;

let lastStudyDate =
    localStorage.getItem("bioLastStudyDate") || "";

let achievements =
    JSON.parse(localStorage.getItem("bioAchievements") || "[]");


/* =========================
   TIỆN ÍCH
========================= */

function $(id) {
    return document.getElementById(id);
}

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const screen = $(id);

    if (screen) {
        screen.classList.add("active");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

function goHome() {
    stopTimer();
    showScreen("homeScreen");
    updateDashboard();
}

function showClasses() {
    showScreen("homeScreen");

    setTimeout(() => {
        const element = $("classSection");

        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, 100);
}


/* =========================
   CHỌN LỚP
========================= */

function selectClass(classNumber) {
    currentClass = classNumber;

    const badge = $("selectedClassBadge");
    const title = $("topicTitle");

    if (badge) {
        badge.textContent = "LỚP " + classNumber;
    }

    if (title) {
        title.textContent = "Chủ đề Sinh học lớp " + classNumber;
    }

    renderTopics();
    showScreen("topicScreen");
}


/* =========================
   HIỂN THỊ CHỦ ĐỀ
========================= */

function renderTopics() {
    const grid = $("topicGrid");

    if (!grid) return;

    grid.innerHTML = "";

    const topics = quizData[currentClass] || [];

    topics.forEach((topic, index) => {
        const card = document.createElement("button");

        card.className = "topic-card";

        card.innerHTML = `
            <div class="topic-icon">${topic.icon}</div>
            <div class="topic-info">
                <h3>${escapeHTML(topic.title)}</h3>
                <p>${escapeHTML(topic.description)}</p>
                <span>📝 ${topic.questions.length} câu</span>
            </div>
            <div class="topic-arrow">→</div>
        `;

        card.onclick = () => startQuiz(index);

        grid.appendChild(card);
    });
}


/* =========================
   BẮT ĐẦU QUIZ
========================= */

function startQuiz(topicIndex) {
    currentTopic = topicIndex;
    currentQuestion = 0;

    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    correctStreak = 0;
    quizEarnedXP = 0;

    selectedAnswer = false;

    const topic = quizData[currentClass][currentTopic];

    if ($("quizTopic")) {
        $("quizTopic").textContent =
            `${topic.icon} ${topic.title}`;
    }

    showScreen("quizScreen");

    loadQuestion();
}


/* =========================
   LOAD CÂU HỎI
========================= */

function loadQuestion() {
    stopTimer();

    const topic = quizData[currentClass][currentTopic];
    const question = topic.questions[currentQuestion];

    if (!question) return;

    selectedAnswer = false;

    if ($("questionNumber")) {
        $("questionNumber").textContent =
            `Câu ${currentQuestion + 1}/${topic.questions.length}`;
    }

    if ($("scoreDisplay")) {
        $("scoreDisplay").textContent =
            `Điểm: ${score}`;
    }

    if ($("questionCategory")) {
        $("questionCategory").textContent =
            `${topic.icon} ${topic.title}`;
    }

    if ($("questionText")) {
        $("questionText").textContent =
            question.q;
    }

    const answersContainer = $("answers");

    if (answersContainer) {
        answersContainer.innerHTML = "";

        question.answers.forEach((answer, index) => {
            const button = document.createElement("button");

            button.className = "answer-btn";

            button.innerHTML = `
                <span class="answer-letter">
                    ${String.fromCharCode(65 + index)}
                </span>
                <span>${escapeHTML(answer)}</span>
            `;

            button.onclick = () =>
                checkAnswer(index, button);

            answersContainer.appendChild(button);
        });
    }

    updateQuizProgress();
    startTimer();
}


/* =========================
   TIẾN TRÌNH QUIZ
========================= */

function updateQuizProgress() {
    const topic = quizData[currentClass][currentTopic];

    const progress =
        ((currentQuestion + 1) / topic.questions.length) * 100;

    if ($("quizProgress")) {
        $("quizProgress").style.width =
            progress + "%";
    }
}


/* =========================
   TIMER
========================= */

function startTimer() {
    timeLeft = 30;

    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeLeft--;

        updateTimerDisplay();

        if (timeLeft <= 0) {
            stopTimer();
            autoNextAfterTimeout();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay() {
    const timer = $("timer");

    if (!timer) return;

    timer.textContent = `⏱️ ${timeLeft}s`;

    timer.classList.remove(
        "timer-warning",
        "timer-danger"
    );

    if (timeLeft <= 10) {
        timer.classList.add("timer-warning");
    }

    if (timeLeft <= 5) {
        timer.classList.add("timer-danger");
    }
}

function autoNextAfterTimeout() {
    if (selectedAnswer) return;

    selectedAnswer = true;
    wrongAnswers++;
    correctStreak = 0;

    const buttons =
        document.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
        button.disabled = true;
    });

    showToast(
        "⏰",
        "Hết giờ! Đáp án chưa được chọn."
    );

    if ($("nextButton")) {
        $("nextButton").style.display = "block";
    }
}


/* =========================
   KIỂM TRA ĐÁP ÁN
========================= */

function checkAnswer(index, clickedButton) {
    if (selectedAnswer) return;

    selectedAnswer = true;
    stopTimer();

    const topic = quizData[currentClass][currentTopic];
    const question = topic.questions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (index === question.correct) {
        clickedButton.classList.add("correct");

        score++;
        correctAnswers++;
        correctStreak++;

        addXP(20);
        quizEarnedXP += 20;

        showToast(
            "🎉",
            "Chính xác! +20 XP"
        );

        unlockAchievement("first");

        if (correctStreak >= 10) {
            unlockAchievement("memory");
        }

    } else {
        clickedButton.classList.add("wrong");

        if (buttons[question.correct]) {
            buttons[question.correct]
                .classList.add("correct");
        }

        wrongAnswers++;
        correctStreak = 0;

        showToast(
            "💡",
            "Chưa đúng! Hãy ghi nhớ đáp án nhé."
        );
    }

    if ($("scoreDisplay")) {
        $("scoreDisplay").textContent =
            `Điểm: ${score}`;
    }

    if ($("nextButton")) {
        $("nextButton").style.display = "block";
    }
}


/* =========================
   CÂU TIẾP
========================= */

function nextQuestion() {
    const topic = quizData[currentClass][currentTopic];

    if (currentQuestion < topic.questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        finishQuiz();
    }
}


/* =========================
   KẾT THÚC QUIZ
========================= */

function finishQuiz() {
    stopTimer();

    const topic = quizData[currentClass][currentTopic];

    const total = topic.questions.length;

    const percent =
        Math.round((correctAnswers / total) * 100);

    updateStreak();

    if (correctAnswers === total) {
        addXP(30);
        quizEarnedXP += 30;

        unlockAchievement("grade9");
    }

    if (streak >= 3) {
        addXP(50);
        quizEarnedXP += 50;

        unlockAchievement("streak");
    }

    if (currentClass === 9 && correctAnswers >= 2) {
        unlockAchievement("dna");
    }

    updateDashboard();

    if ($("finalScore")) {
        $("finalScore").textContent =
            `${correctAnswers}/${total}`;
    }

    if ($("correctCount")) {
        $("correctCount").textContent =
            correctAnswers;
    }

    if ($("wrongCount")) {
        $("wrongCount").textContent =
            wrongAnswers;
    }

    if ($("earnedXP")) {
        $("earnedXP").textContent =
            `+${quizEarnedXP} XP`;
    }

    let message = "";

    if (percent === 100) {
        message = "🏆 Xuất sắc! Bạn đã trả lời đúng tất cả!";
    } else if (percent >= 80) {
        message = "🌟 Rất tốt! Hãy tiếp tục phát huy!";
    } else if (percent >= 50) {
        message = "💪 Khá tốt! Ôn thêm một chút nữa nhé!";
    } else {
        message = "📚 Đừng nản! Học lại bài rồi thử lại nhé!";
    }

    if ($("resultMessage")) {
        $("resultMessage").textContent =
            message;
    }

    updateAchievements();

    showScreen("resultScreen");
}


/* =========================
   LÀM LẠI
========================= */

function restartQuiz() {
    startQuiz(currentTopic);
}

function quitQuiz() {
    stopTimer();
    showScreen("topicScreen");
}


/* =========================
   STREAK
========================= */

function getLocalDateString() {
    const now = new Date();

    const year = now.getFullYear();
    const month =
        String(now.getMonth() + 1).padStart(2, "0");
    const day =
        String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function getYesterdayString() {
    const date = new Date();

    date.setDate(date.getDate() - 1);

    const year = date.getFullYear();
    const month =
        String(date.getMonth() + 1).padStart(2, "0");
    const day =
        String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function updateStreak() {
    const today = getLocalDateString();

    if (!lastStudyDate) {
        streak = 1;
    } else if (lastStudyDate === today) {
        return;
    } else if (lastStudyDate === getYesterdayString()) {
        streak++;
    } else {
        streak = 1;
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

    if (streak === 3) {
        addXP(50);
        quizEarnedXP += 50;

        unlockAchievement("streak");
    }

    updateDashboard();
}


/* =========================
   XP
========================= */

function addXP(amount) {
    xp += amount;

    localStorage.setItem(
        "bioXP",
        xp
    );

    updateDashboard();
}


/* =========================
   LEVEL
========================= */

function getLevelData() {
    if (xp < 100) {
        return {
            level: 1,
            name: "Mầm non Sinh học",
            min: 0,
            max: 100
        };
    }

    if (xp < 300) {
        return {
            level: 2,
            name: "Nhà khám phá",
            min: 100,
            max: 300
        };
    }

    if (xp < 700) {
        return {
            level: 3,
            name: "Học sinh Sinh học",
            min: 300,
            max: 700
        };
    }

    if (xp < 1200) {
        return {
            level: 4,
            name: "Nhà nghiên cứu trẻ",
            min: 700,
            max: 1200
        };
    }

    if (xp < 2500) {
        return {
            level: 5,
            name: "Chuyên gia Sinh học",
            min: 1200,
            max: 2500
        };
    }

    return {
        level: 6,
        name: "Bậc thầy Sinh học",
        min: 2500,
        max: 2500
    };
}


/* =========================
   DASHBOARD
========================= */

function updateDashboard() {
    const level = getLevelData();

    const progress =
        level.max === level.min
            ? 100
            : ((xp - level.min) /
                (level.max - level.min)) * 100;

    if ($("headerStreak")) {
        $("headerStreak").textContent =
            `🔥 ${streak}`;
    }

    if ($("headerXP")) {
        $("headerXP").textContent =
            `⭐ ${xp} XP`;
    }

    if ($("streakNumber")) {
        $("streakNumber").textContent =
            streak;
    }

    if ($("streakText")) {
        $("streakText").textContent =
            streak === 0
                ? "Bắt đầu học hôm nay!"
                : `Bạn đã học ${streak} ngày liên tiếp`;
    }

    if ($("xpNumber")) {
        $("xpNumber").textContent =
            xp;
    }

    if ($("levelText")) {
        $("levelText").textContent =
            `Level ${level.level}`;
    }

    if ($("levelName")) {
        $("levelName").textContent =
            level.name;
    }

    if ($("levelXP")) {
        $("levelXP").textContent =
            `${xp} / ${level.max} XP`;
    }

    if ($("levelProgress")) {
        $("levelProgress").style.width =
            Math.min(progress, 100) + "%";
    }

    if ($("achievementNumber")) {
        $("achievementNumber").textContent =
            achievements.length;
    }
}


/* =========================
   THÀNH TỰU
========================= */

const achievementData = {
    first: {
        title: "Khởi động",
        description: "Hoàn thành quiz đầu tiên",
        icon: "🚀"
    },

    streak: {
        title: "Không ngừng học",
        description: "Học 3 ngày liên tiếp",
        icon: "🔥"
    },

    dna: {
        title: "Nhà di truyền học",
        description: "Chinh phục kiến thức ADN",
        icon: "🧬"
    },

    memory: {
        title: "Siêu trí nhớ",
        description: "Đúng 10 câu liên tiếp",
        icon: "🧠"
    },

    grade9: {
        title: "Tiến tới lớp 9",
        description: "Hoàn thành tốt một quiz",
        icon: "🏆"
    }
};

function unlockAchievement(id) {
    if (!achievementData[id]) return;

    if (achievements.includes(id)) return;

    achievements.push(id);

    localStorage.setItem(
        "bioAchievements",
        JSON.stringify(achievements)
    );

    const achievement =
        achievementData[id];

    showToast(
        achievement.icon,
        `Mở khóa: ${achievement.title}!`
    );

    updateAchievements();
    updateDashboard();
}

function updateAchievements() {
    Object.keys(achievementData).forEach(id => {
        const element =
            $("achievement-" + id);

        if (!element) return;

        if (achievements.includes(id)) {
            element.classList.add("unlocked");
        } else {
            element.classList.remove("unlocked");
        }
    });

    if ($("achievementNumber")) {
        $("achievementNumber").textContent =
            achievements.length;
    }
}


/* =========================
   3D BIOLOGY LAB
========================= */

const modelFiles = {
    dna: {
        title: "🧬 Mô hình DNA",
        description: "Khám phá cấu trúc không gian của vật thể 3D.",
        src: "https://modelviewer.dev/shared-assets/models/Astronaut.glb"
    },

    heart: {
        title: "❤️ Mô hình cơ quan",
        description: "Quan sát mô hình 3D để hỗ trợ học Sinh học.",
        src: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
    },

    cell: {
        title: "🔬 Mô hình tế bào",
        description: "Quan sát cấu trúc dưới góc nhìn 3D.",
        src: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb"
    }
};

function changeModel(type) {
    const model = modelFiles[type];

    if (!model) return;

    const viewer = $("bioModel");

    if (viewer) {
        viewer.src = model.src;
    }

    if ($("modelTitle")) {
        $("modelTitle").textContent =
            model.title;
    }

    if ($("modelDescription")) {
        $("modelDescription").textContent =
            model.description;
    }
}


/* =========================
   TRỢ LÝ SINH HỌC
========================= */

function askAI() {
    const input = $("aiInput");

    if (!input) return;

    const question = input.value.trim();

    if (!question) {
        showToast(
            "💬",
            "Hãy nhập câu hỏi trước nhé!"
        );
        return;
    }

    lastAIQuestion = question;

    addUserMessage(question);

    const answer =
        generateAIAnswer(question);

    lastAIAnswer = answer;

    addAIMessage(answer);

    input.value = "";
}


/* =========================
   TẠO CÂU TRẢ LỜI
========================= */

function generateAIAnswer(question) {
    const q = question.toLowerCase();

    if (
        q.includes("adn") ||
        q.includes("dna")
    ) {
        return `
            <strong>🧬 ADN là gì?</strong><br><br>
            ADN là vật chất di truyền chứa thông tin
            di truyền của sinh vật.<br><br>
            ADN gồm 4 loại nucleotide:
            <strong>A, T, G, X</strong>.<br><br>
            Quy tắc bổ sung:
            <strong>A - T</strong> và
            <strong>G - X</strong>.
        `;
    }

    if (
        q.includes("arn") ||
        q.includes("rna")
    ) {
        return `
            <strong>🧬 ARN là gì?</strong><br><br>
            ARN là axit ribonucleic.
            ARN thường có một mạch và gồm
            các bazơ <strong>A, U, G, X</strong>.<br><br>
            Trong ARN, <strong>U</strong> thay cho
            <strong>T</strong> của ADN.
        `;
    }

    if (
        q.includes("tim") ||
        q.includes("tuần hoàn")
    ) {
        return `
            <strong>❤️ Tim hoạt động thế nào?</strong><br><br>
            Tim là cơ quan trung tâm của hệ tuần hoàn.
            Tim co bóp để đẩy máu đi khắp cơ thể,
            giúp vận chuyển oxygen và các chất cần thiết.
        `;
    }

    if (
        q.includes("phổi") ||
        q.includes("hô hấp") ||
        q.includes("thở")
    ) {
        return `
            <strong>🫁 Hô hấp là gì?</strong><br><br>
            Hệ hô hấp giúp cơ thể lấy
            <strong>oxygen</strong> từ môi trường
            và thải <strong>carbon dioxide</strong>.<br><br>
            Trao đổi khí chủ yếu diễn ra ở
            <strong>phế nang</strong>.
        `;
    }

    if (
        q.includes("quang hợp") ||
        q.includes("cây")
    ) {
        return `
            <strong>🌱 Quang hợp</strong><br><br>
            Quang hợp là quá trình thực vật sử dụng
            năng lượng ánh sáng để tổng hợp chất hữu cơ
            từ carbon dioxide và nước.<br><br>
            Quá trình này diễn ra chủ yếu ở
            <strong>lục lạp</strong>.
        `;
    }

    if (
        q.includes("tế bào") ||
        q.includes("cell")
    ) {
        return `
            <strong>🔬 Tế bào</strong><br><br>
            Tế bào là đơn vị cấu tạo và chức năng cơ bản
            của cơ thể sống.<br><br>
            Tế bào nhân thực thường có
            <strong>màng tế bào, tế bào chất và nhân</strong>.
        `;
    }

    if (
        q.includes("nguyên phân") ||
        q.includes("phân bào")
    ) {
        return `
            <strong>🧫 Nguyên phân</strong><br><br>
            Nguyên phân là quá trình một tế bào mẹ
            phân chia tạo thành <strong>2 tế bào con</strong>.<br><br>
            Các tế bào con thường có bộ nhiễm sắc thể
            giống tế bào mẹ về số lượng.
        `;
    }

    if (
        q.includes("xương") ||
        q.includes("cơ") ||
        q.includes("vận động")
    ) {
        return `
            <strong>🦴 Hệ vận động</strong><br><br>
            Hệ vận động gồm hệ xương và hệ cơ.
            Sự phối hợp giữa xương và cơ giúp cơ thể
            thực hiện các vận động.
        `;
    }

    return `
        <strong>🤖 Trợ lý Sinh học</strong><br><br>
        Mình chưa có câu trả lời chính xác cho câu này
        trong dữ liệu hiện tại.<br><br>
        Bạn thử hỏi như:<br>
        • ADN là gì?<br>
        • ARN có những loại nào?<br>
        • Tim hoạt động thế nào?<br>
        • Quang hợp là gì?<br>
        • Tế bào là gì?<br>
        • Nguyên phân là gì?
    `;
}


/* =========================
   CHAT
========================= */

function addUserMessage(text) {
    const container = $("aiMessages");

    if (!container) return;

    const message =
        document.createElement("div");

    message.className =
        "ai-message user-message";

    message.innerHTML = `
        <div class="message-bubble">
            ${escapeHTML(text)}
        </div>
    `;

    container.appendChild(message);

    container.scrollTop =
        container.scrollHeight;
}

function addAIMessage(html) {
    const container = $("aiMessages");

    if (!container) return;

    const message =
        document.createElement("div");

    message.className =
        "ai-message assistant-message";

    message.innerHTML = `
        <div class="message-bubble">
            ${html}
        </div>
    `;

    container.appendChild(message);

    container.scrollTop =
        container.scrollHeight;
}


/* =========================
   🎤 MICROPHONE
========================= */

function startVoiceInput() {
    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        showToast(
            "⚠️",
            "Trình duyệt không hỗ trợ nhận giọng nói. Hãy dùng Chrome hoặc Edge."
        );
        return;
    }

    const micButton = $("micButton");
    const aiInput = $("aiInput");

    if (!micButton || !aiInput) {
        showToast(
            "❌",
            "Không tìm thấy nút microphone hoặc ô nhập."
        );
        return;
    }

    const recognition =
        new SpeechRecognition();

    recognition.lang = "vi-VN";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    let finalText = "";

    micButton.classList.add("recording");
    micButton.innerHTML = "🔴";
    micButton.disabled = true;

    showToast(
        "🎤",
        "Đang nghe... Hãy nói câu hỏi Sinh học."
    );

    recognition.onstart = () => {
        console.log(
            "🎤 Speech recognition started"
        );
    };

    recognition.onresult = event => {
        let transcript = "";

        for (
            let i = event.resultIndex;
            i < event.results.length;
            i++
        ) {
            transcript +=
                event.results[i][0].transcript;
        }

        transcript = transcript.trim();

        if (transcript) {
            aiInput.value = transcript;
        }

        const lastResult =
            event.results[event.results.length - 1];

        if (lastResult &&
            lastResult.isFinal) {
            finalText = transcript;
        }
    };

    recognition.onerror = event => {
        console.error(
            "Speech Recognition Error:",
            event.error
        );

        if (event.error === "not-allowed" ||
            event.error === "permission-denied") {

            showToast(
                "🔒",
                "Micro bị chặn. Hãy cho phép microphone cho website."
            );

        } else if (event.error === "no-speech") {

            showToast(
                "🔇",
                "Mình chưa nghe thấy bạn. Hãy thử nói lại."
            );

        } else if (event.error === "audio-capture") {

            showToast(
                "🎙️",
                "Không tìm thấy microphone trên máy."
            );

        } else if (event.error === "network") {

            showToast(
                "🌐",
                "Nhận giọng nói cần Internet."
            );

        } else {

            showToast(
                "❌",
                "Micro gặp lỗi: " + event.error
            );
        }
    };

    recognition.onend = () => {
        micButton.classList.remove(
            "recording"
        );

        micButton.innerHTML = "🎤";
        micButton.disabled = false;

        if (finalText) {
            aiInput.value = finalText;

            showToast(
                "✅",
                "Đã nhận giọng nói!"
            );
        }
    };

    try {
        recognition.start();
    } catch (error) {
        console.error(error);

        micButton.classList.remove(
            "recording"
        );

        micButton.innerHTML = "🎤";
        micButton.disabled = false;

        showToast(
            "❌",
            "Không thể bật microphone. Hãy thử lại."
        );
    }
}


/* =========================
   ĐỌC CÂU TRẢ LỜI
========================= */

function speak(html) {
    if (!("speechSynthesis" in window)) {
        showToast(
            "⚠️",
            "Trình duyệt không hỗ trợ đọc văn bản."
        );
        return;
    }

    const temporary =
        document.createElement("div");

    temporary.innerHTML = html;

    const text =
        temporary.textContent ||
        temporary.innerText ||
        "";

    if (!text.trim()) return;

    window.speechSynthesis.cancel();

    const utterance =
        new SpeechSynthesisUtterance(text);

    utterance.lang = "vi-VN";
    utterance.rate = 0.95;
    utterance.pitch = 1;

    window.speechSynthesis.speak(
        utterance
    );

    showToast(
        "🔊",
        "Đang đọc câu trả lời..."
    );
}

function speakLastAnswer() {
    if (!lastAIAnswer) {
        showToast(
            "💬",
            "Hãy hỏi trợ lý trước nhé!"
        );
        return;
    }

    speak(lastAIAnswer);
}


/* =========================
   GIẢI THÍCH BẰNG 3D
========================= */

function open3DFromAI() {
    const q =
        lastAIQuestion.toLowerCase();

    let type = "dna";

    if (
        q.includes("tim") ||
        q.includes("tuần hoàn")
    ) {
        type = "heart";
    }

    if (
        q.includes("tế bào") ||
        q.includes("cell")
    ) {
        type = "cell";
    }

    changeModel(type);

    const lab =
        document.getElementById("lab3d");

    if (lab) {
        lab.scrollIntoView({
            behavior: "smooth"
        });
    } else {
        showToast(
            "🧬",
            "Đã chọn mô hình 3D!"
        );
    }
}


/* =========================
   ENTER ĐỂ GỬI AI
========================= */

function setupAIInput() {
    const input = $("aiInput");

    if (!input) return;

    input.addEventListener(
        "keydown",
        event => {
            if (
                event.key === "Enter" &&
                !event.shiftKey
            ) {
                event.preventDefault();
                askAI();
            }
        }
    );
}


/* =========================
   CHIA SẺ QUIZ
========================= */

async function shareQuiz() {
    const url =
        window.location.href;

    const text =
        "🧬 Mình đang học Sinh học bằng Bio Quiz! " +
        "Bạn thử làm quiz nhé: " +
        url;

    if (navigator.share) {
        try {
            await navigator.share({
                title: "Bio Quiz Sinh học",
                text: text,
                url: url
            });

            return;

        } catch (error) {
            console.log(
                "Share cancelled:",
                error
            );
        }
    }

    try {
        if (
            navigator.clipboard &&
            window.isSecureContext
        ) {
            await navigator.clipboard.writeText(
                url
            );

            showToast(
                "🔗",
                "Đã sao chép link website!"
            );

            return;
        }
    } catch (error) {
        console.log(error);
    }

    try {
        const textarea =
            document.createElement("textarea");

        textarea.value = url;

        textarea.style.position =
            "fixed";

        textarea.style.left =
            "-9999px";

        document.body.appendChild(
            textarea
        );

        textarea.select();

        document.execCommand(
            "copy"
        );

        textarea.remove();

        showToast(
            "🔗",
            "Đã sao chép link website!"
        );

    } catch (error) {
        showToast(
            "🔗",
            "Hãy sao chép link trên thanh địa chỉ nhé!"
        );
    }
}


/* =========================
   TOAST
========================= */

function showToast(icon, message) {
    const toast = $("toast");

    if (!toast) return;

    if ($("toastIcon")) {
        $("toastIcon").textContent =
            icon;
    }

    if ($("toastText")) {
        $("toastText").textContent =
            message;
    }

    toast.classList.add("show");

    clearTimeout(
        window.bioToastTimeout
    );

    window.bioToastTimeout =
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
}


/* =========================
   ESCAPE HTML
========================= */

function escapeHTML(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================
   KHỞI ĐỘNG WEBSITE
========================= */

function initBioQuiz() {
    updateDashboard();
    updateAchievements();
    setupAIInput();

    const today =
        getLocalDateString();

    /*
       Nếu đã bỏ học nhiều ngày,
       không tăng streak tự động.
    */
    if (
        lastStudyDate &&
        lastStudyDate !== today &&
        lastStudyDate !== getYesterdayString()
    ) {
        streak = 0;

        localStorage.setItem(
            "bioStreak",
            "0"
        );

        updateDashboard();
    }

    console.log(
        "🧬 Bio Quiz đã sẵn sàng!"
    );
}


/* =========================
   DOM READY
========================= */

if (
    document.readyState === "loading"
) {
    document.addEventListener(
        "DOMContentLoaded",
        initBioQuiz
    );
} else {
    initBioQuiz();
}
