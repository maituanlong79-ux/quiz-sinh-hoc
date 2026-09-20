"use strict";

/* =====================================================
   BIOMASTER
   Quiz + XP + Streak + Achievement + AI + 3D
===================================================== */


/* =====================================================
   QUIZ DATA
===================================================== */

const quizData = {

    7: [
        {
            title: "🧫 Tế bào",
            description: "Cấu tạo và chức năng của tế bào",
            questions: [
                {
                    q: "Bộ phận nào điều khiển hoạt động của tế bào nhân thực?",
                    a: [
                        "Màng tế bào",
                        "Nhân tế bào",
                        "Tế bào chất",
                        "Không bào"
                    ],
                    correct: 1
                },
                {
                    q: "Đơn vị cấu tạo cơ bản của cơ thể sống là gì?",
                    a: [
                        "Mô",
                        "Cơ quan",
                        "Tế bào",
                        "Hệ cơ quan"
                    ],
                    correct: 2
                },
                {
                    q: "Màng tế bào có chức năng chủ yếu nào?",
                    a: [
                        "Điều khiển trao đổi chất",
                        "Tạo ADN",
                        "Tạo xương",
                        "Bơm máu"
                    ],
                    correct: 0
                }
            ]
        },

        {
            title: "🌱 Quang hợp",
            description: "Cây xanh tạo chất hữu cơ",
            questions: [
                {
                    q: "Quang hợp diễn ra chủ yếu ở bào quan nào?",
                    a: [
                        "Ti thể",
                        "Lục lạp",
                        "Nhân",
                        "Không bào"
                    ],
                    correct: 1
                },
                {
                    q: "Nguyên liệu quan trọng của quang hợp là gì?",
                    a: [
                        "Oxygen và glucose",
                        "Carbon dioxide và nước",
                        "Protein và lipid",
                        "ATP và oxygen"
                    ],
                    correct: 1
                },
                {
                    q: "Khí nào được giải phóng trong quá trình quang hợp?",
                    a: [
                        "CO₂",
                        "N₂",
                        "O₂",
                        "H₂"
                    ],
                    correct: 2
                }
            ]
        },

        {
            title: "🌎 Sinh thái",
            description: "Quần thể, quần xã và chuỗi thức ăn",
            questions: [
                {
                    q: "Tập hợp các cá thể cùng loài sống trong một khu vực là gì?",
                    a: [
                        "Quần thể",
                        "Quần xã",
                        "Hệ sinh thái",
                        "Sinh quyển"
                    ],
                    correct: 0
                },
                {
                    q: "Trong chuỗi thức ăn, sinh vật sản xuất thường là gì?",
                    a: [
                        "Động vật",
                        "Nấm",
                        "Thực vật",
                        "Vi khuẩn gây bệnh"
                    ],
                    correct: 2
                }
            ]
        }
    ],


    8: [
        {
            title: "🦴 Hệ vận động",
            description: "Xương, cơ và vận động",
            questions: [
                {
                    q: "Bộ phận nào tạo nên bộ xương của cơ thể?",
                    a: [
                        "Xương",
                        "Máu",
                        "Phổi",
                        "Da"
                    ],
                    correct: 0
                },
                {
                    q: "Cơ co giúp cơ thể thực hiện điều gì?",
                    a: [
                        "Vận động",
                        "Tiêu hóa",
                        "Trao đổi khí",
                        "Lọc máu"
                    ],
                    correct: 0
                }
            ]
        },

        {
            title: "❤️ Tuần hoàn",
            description: "Tim và hệ mạch",
            questions: [
                {
                    q: "Cơ quan nào bơm máu đi khắp cơ thể?",
                    a: [
                        "Phổi",
                        "Gan",
                        "Tim",
                        "Thận"
                    ],
                    correct: 2
                },
                {
                    q: "Mạch máu đưa máu từ tim đi là gì?",
                    a: [
                        "Động mạch",
                        "Tĩnh mạch",
                        "Mao mạch",
                        "Ống mật"
                    ],
                    correct: 0
                }
            ]
        },

        {
            title: "🫁 Hô hấp",
            description: "Trao đổi khí",
            questions: [
                {
                    q: "Cơ quan chính của hệ hô hấp là gì?",
                    a: [
                        "Tim",
                        "Phổi",
                        "Gan",
                        "Dạ dày"
                    ],
                    correct: 1
                },
                {
                    q: "Khí nào cần thiết cho hô hấp tế bào?",
                    a: [
                        "Oxygen",
                        "Carbon dioxide",
                        "Nitrogen",
                        "Hydrogen"
                    ],
                    correct: 0
                }
            ]
        }
    ],


    9: [
        {
            title: "🧬 ADN",
            description: "Cấu trúc và chức năng của ADN",
            questions: [
                {
                    q: "ADN có cấu trúc gồm mấy mạch polynucleotide?",
                    a: [
                        "Một",
                        "Hai",
                        "Ba",
                        "Bốn"
                    ],
                    correct: 1
                },
                {
                    q: "Trong ADN, A liên kết bổ sung với base nào?",
                    a: [
                        "G",
                        "C",
                        "T",
                        "U"
                    ],
                    correct: 2
                },
                {
                    q: "ADN có vai trò quan trọng nào?",
                    a: [
                        "Lưu trữ thông tin di truyền",
                        "Bơm máu",
                        "Tiêu hóa thức ăn",
                        "Vận chuyển oxygen"
                    ],
                    correct: 0
                }
            ]
        },

        {
            title: "🧬 ARN",
            description: "Cấu tạo và chức năng của ARN",
            questions: [
                {
                    q: "Trong ARN, base nào thay cho T của ADN?",
                    a: [
                        "A",
                        "U",
                        "G",
                        "C"
                    ],
                    correct: 1
                },
                {
                    q: "mRNA có chức năng chủ yếu nào?",
                    a: [
                        "Mang thông tin di truyền đến ribosome",
                        "Tạo xương",
                        "Bơm máu",
                        "Tiêu hóa"
                    ],
                    correct: 0
                }
            ]
        },

        {
            title: "🧫 Nguyên phân",
            description: "Phân chia tế bào",
            questions: [
                {
                    q: "Kết thúc nguyên phân, từ một tế bào mẹ thường tạo ra bao nhiêu tế bào con?",
                    a: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    correct: 1
                },
                {
                    q: "Các tế bào con tạo ra sau nguyên phân thường có bộ NST như thế nào so với tế bào mẹ?",
                    a: [
                        "Giống về số lượng NST",
                        "Gấp đôi",
                        "Giảm một nửa",
                        "Không có NST"
                    ],
                    correct: 0
                }
            ]
        }
    ]
};


/* =====================================================
   GLOBAL STATE
===================================================== */

let currentClass = 7;
let currentTopicIndex = 0;

let currentQuestions = [];
let currentQuestionIndex = 0;

let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

let answered = false;
let timerInterval = null;
let timeLeft = 30;

let quizEarnedXP = 0;

let correctStreak = 0;

let lastAIAnswer = "";
let lastAIQuestion = "";

let autoRotate = false;
let rotateInterval = null;

let modelRotationX = -5;
let modelRotationY = 0;
let modelZoom = 1;

let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;


/* =====================================================
   LOCAL STORAGE
===================================================== */

function getNumber(key, fallback = 0) {

    const value = localStorage.getItem(key);

    if (value === null) {
        return fallback;
    }

    const number = Number(value);

    return Number.isFinite(number)
        ? number
        : fallback;
}


function setNumber(key, value) {

    localStorage.setItem(
        key,
        String(value)
    );
}


/* =====================================================
   HOME / NAVIGATION
===================================================== */

function showScreen(id) {

    document.querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });


    const target = document.getElementById(id);

    if (!target) {
        return;
    }

    target.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function goHome() {

    stopTimer();

    showScreen("homeScreen");

    updateDashboard();
}


function showClasses() {

    stopTimer();

    renderClassScreen();

    showScreen("classScreen");
}


function scrollToSection(id) {

    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    element.scrollIntoView({
        behavior: "smooth"
    });
}


/* =====================================================
   CLASS
===================================================== */

function selectClass(classNumber) {

    if (!quizData[classNumber]) {
        return;
    }

    currentClass = classNumber;

    renderClassScreen();

    showScreen("classScreen");
}


function renderClassScreen() {

    const badge =
        document.getElementById("selectedClassBadge");

    const grid =
        document.getElementById("topicGrid");

    if (!badge || !grid) {
        return;
    }

    badge.textContent =
        `Sinh học lớp ${currentClass}`;

    grid.innerHTML = "";

    quizData[currentClass].forEach(
        (topic, index) => {

            const card =
                document.createElement("div");

            card.className = "topic-card";

            card.innerHTML = `

                <div style="font-size:35px">
                    ${topic.title.substring(0,2)}
                </div>

                <h3>${escapeHTML(topic.title)}</h3>

                <p>
                    ${escapeHTML(topic.description)}
                </p>

                <p style="margin-top:8px">
                    ${topic.questions.length} câu hỏi
                </p>

                <button onclick="startQuiz(${index})">
                    🚀 Bắt đầu
                </button>

            `;

            grid.appendChild(card);

        }
    );
}


/* =====================================================
   QUIZ
===================================================== */

function startQuiz(topicIndex) {

    const topic =
        quizData[currentClass]?.[topicIndex];

    if (!topic) {
        return;
    }

    currentTopicIndex = topicIndex;

    currentQuestions =
        [...topic.questions];

    currentQuestionIndex = 0;

    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;

    correctStreak = 0;

    quizEarnedXP = 0;

    answered = false;

    const quizTopic =
        document.getElementById("quizTopic");

    if (quizTopic) {
        quizTopic.textContent =
            topic.title;
    }

    showScreen("quizScreen");

    loadQuestion();
}


function loadQuestion() {

    stopTimer();

    answered = false;

    const question =
        currentQuestions[currentQuestionIndex];

    if (!question) {
        finishQuiz();
        return;
    }


    const number =
        document.getElementById("questionNumber");

    const text =
        document.getElementById("questionText");

    const answers =
        document.getElementById("answers");

    const progress =
        document.getElementById("quizProgress");

    const next =
        document.getElementById("nextButton");

    const category =
        document.getElementById("questionCategory");

    const scoreDisplay =
        document.getElementById("scoreDisplay");


    if (!text || !answers) {
        return;
    }


    number.textContent =
        `Câu ${currentQuestionIndex + 1}/${currentQuestions.length}`;

    text.textContent =
        question.q;

    category.textContent =
        quizData[currentClass][currentTopicIndex].title;


    scoreDisplay.textContent =
        score;


    const percent =
        ((currentQuestionIndex) /
            currentQuestions.length) * 100;

    progress.style.width =
        `${percent}%`;


    answers.innerHTML = "";

    question.a.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.className =
                "answer-btn";

            button.textContent =
                `${String.fromCharCode(65 + index)}. ${answer}`;

            button.onclick = () =>
                checkAnswer(index, button);

            answers.appendChild(button);

        }
    );


    next.disabled = true;

    next.textContent =
        currentQuestionIndex ===
        currentQuestions.length - 1
            ? "Xem kết quả 🎉"
            : "Câu tiếp theo →";


    timeLeft = 30;

    updateTimerDisplay();

    startTimer();
}


/* =====================================================
   TIMER
===================================================== */

function startTimer() {

    stopTimer();

    timerInterval =
        setInterval(() => {

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

    const timer =
        document.getElementById("timer");

    if (timer) {
        timer.textContent =
            Math.max(0, timeLeft);
    }
}


function autoNextAfterTimeout() {

    if (answered) {
        return;
    }

    answered = true;

    wrongAnswers++;

    correctStreak = 0;

    const buttons =
        document.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
        button.disabled = true;
    });

    const next =
        document.getElementById("nextButton");

    next.disabled = false;

    showToast(
        "⏰",
        "Hết giờ! Hãy xem đáp án và tiếp tục."
    );
}


/* =====================================================
   ANSWER
===================================================== */

function checkAnswer(index, clickedButton) {

    if (answered) {
        return;
    }

    answered = true;

    stopTimer();

    const question =
        currentQuestions[currentQuestionIndex];

    const buttons =
        document.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
        button.disabled = true;
    });


    const correct =
        question.correct;


    if (index === correct) {

        clickedButton.classList.add("correct");

        score++;

        correctAnswers++;

        correctStreak++;

        showToast(
            "✅",
            "Chính xác! +20 XP"
        );

        addQuizXP(20);


        if (correctStreak >= 10) {

            unlockAchievement("memory");

        }

    } else {

        clickedButton.classList.add("wrong");

        if (buttons[correct]) {
            buttons[correct]
                .classList.add("correct");
        }

        wrongAnswers++;

        correctStreak = 0;

        showToast(
            "❌",
            "Chưa đúng. Hãy ghi nhớ đáp án nhé!"
        );
    }


    document.getElementById("scoreDisplay")
        .textContent = score;


    document.getElementById("nextButton")
        .disabled = false;
}


/* =====================================================
   NEXT
===================================================== */

function nextQuestion() {

    if (!answered) {
        return;
    }

    if (
        currentQuestionIndex >=
        currentQuestions.length - 1
    ) {

        finishQuiz();

        return;
    }


    currentQuestionIndex++;

    loadQuestion();
}


/* =====================================================
   FINISH
===================================================== */

function finishQuiz() {

    stopTimer();

    const total =
        currentQuestions.length;

    const finalScore =
        document.getElementById("finalScore");

    const correct =
        document.getElementById("correctCount");

    const wrong =
        document.getElementById("wrongCount");

    const earned =
        document.getElementById("earnedXP");

    const message =
        document.getElementById("resultMessage");


    finalScore.textContent =
        `${score}/${total}`;

    correct.textContent =
        correctAnswers;

    wrong.textContent =
        wrongAnswers;

    earned.textContent =
        quizEarnedXP;


    const percent =
        total === 0
            ? 0
            : (score / total) * 100;


    if (percent === 100) {

        message.textContent =
            "🌟 Hoàn hảo! Bạn đã làm rất tốt!";

    } else if (percent >= 70) {

        message.textContent =
            "👏 Rất tốt! Hãy tiếp tục duy trì!";

    } else if (percent >= 50) {

        message.textContent =
            "💪 Khá tốt! Ôn lại phần sai nhé!";

    } else {

        message.textContent =
            "🌱 Không sao! Làm lại một lần nữa nhé!";

    }


    unlockAchievement("start");


    if (currentClass === 9) {
        unlockAchievement("grade9");
    }


    const topic =
        quizData[currentClass][currentTopicIndex];


    if (
        currentClass === 9 &&
        topic.title.includes("ADN")
    ) {

        unlockAchievement("dna");

    }


    updateStreak();

    showScreen("resultScreen");
}


/* =====================================================
   RESTART / QUIT
===================================================== */

function restartQuiz() {

    startQuiz(currentTopicIndex);
}


function quitQuiz() {

    stopTimer();

    showClasses();
}


/* =====================================================
   XP
===================================================== */

function addQuizXP(amount) {

    quizEarnedXP += amount;

    addXP(amount);
}


function addXP(amount) {

    const current =
        getNumber("bioXP");

    setNumber(
        "bioXP",
        current + amount
    );

    updateDashboard();
}


/* =====================================================
   LEVEL
===================================================== */

function getLevelData(xp) {

    if (xp >= 2500) {
        return {
            level: 6,
            name: "🏆 Bậc thầy Sinh học",
            min: 2500,
            max: 2500
        };
    }

    if (xp >= 1500) {
        return {
            level: 5,
            name: "🧠 Nhà Sinh học trẻ",
            min: 1500,
            max: 2500
        };
    }

    if (xp >= 900) {
        return {
            level: 4,
            name: "🔬 Nhà nghiên cứu",
            min: 900,
            max: 1500
        };
    }

    if (xp >= 500) {
        return {
            level: 3,
            name: "🧬 Nhà di truyền học",
            min: 500,
            max: 900
        };
    }

    if (xp >= 200) {
        return {
            level: 2,
            name: "🌱 Sinh học sinh",
            min: 200,
            max: 500
        };
    }

    return {
        level: 1,
        name: "🌱 Mầm non",
        min: 0,
        max: 200
    };
}


/* =====================================================
   STREAK
===================================================== */

function getLocalDateKey(date = new Date()) {

    const year =
        date.getFullYear();

    const month =
        String(date.getMonth() + 1)
            .padStart(2, "0");

    const day =
        String(date.getDate())
            .padStart(2, "0");

    return `${year}-${month}-${day}`;
}


function updateStreak() {

    const today =
        getLocalDateKey();

    const last =
        localStorage.getItem(
            "bioLastStudyDate"
        );

    let streak =
        getNumber("bioStreak");


    if (!last) {

        streak = 1;

    } else if (last === today) {

        // Đã học hôm nay.
        // Không tăng thêm.

    } else {

        const lastDate =
            new Date(last + "T00:00:00");

        const todayDate =
            new Date(today + "T00:00:00");

        const difference =
            Math.round(
                (todayDate - lastDate)
                / 86400000
            );


        if (difference === 1) {

            streak++;

        } else {

            streak = 1;

        }

    }


    localStorage.setItem(
        "bioLastStudyDate",
        today
    );

    setNumber(
        "bioStreak",
        streak
    );


    if (streak === 3) {

        unlockAchievement("streak");

        addXP(50);

        showToast(
            "🔥",
            "Streak 3 ngày! +50 XP"
        );
    }


    updateDashboard();
}


/* =====================================================
   DASHBOARD
===================================================== */

function updateDashboard() {

    const xp =
        getNumber("bioXP");

    const streak =
        getNumber("bioStreak");

    const achievements =
        getAchievements();


    const level =
        getLevelData(xp);


    const headerXP =
        document.getElementById("headerXP");

    const headerStreak =
        document.getElementById("headerStreak");

    const xpNumber =
        document.getElementById("xpNumber");

    const streakNumber =
        document.getElementById("streakNumber");

    const streakText =
        document.getElementById("streakText");

    const achievementNumber =
        document.getElementById("achievementNumber");

    const levelName =
        document.getElementById("levelName");

    const levelXP =
        document.getElementById("levelXP");

    const levelProgress =
        document.getElementById("levelProgress");


    if (headerXP) {
        headerXP.textContent = xp;
    }

    if (headerStreak) {
        headerStreak.textContent = streak;
    }

    if (xpNumber) {
        xpNumber.textContent =
            `${xp} XP`;
    }

    if (streakNumber) {
        streakNumber.textContent =
            `${streak} ngày`;
    }

    if (streakText) {

        if (streak === 0) {

            streakText.textContent =
                "Hãy học hôm nay!";

        } else {

            streakText.textContent =
                "Tiếp tục duy trì nhé! 🔥";

        }
    }

    if (achievementNumber) {

        achievementNumber.textContent =
            achievements.length;
    }


    if (levelName) {

        levelName.textContent =
            `Lv.${level.level} ${level.name}`;
    }


    if (levelXP) {

        if (level.level >= 6) {

            levelXP.textContent =
                `${xp} XP — MAX`;

        } else {

            levelXP.textContent =
                `${xp} / ${level.max} XP`;

        }
    }


    if (levelProgress) {

        const range =
            level.max - level.min;

        const progress =
            range <= 0
                ? 100
                : ((xp - level.min) / range) * 100;

        levelProgress.style.width =
            `${Math.max(
                0,
                Math.min(100, progress)
            )}%`;
    }


    updateAchievements();
}


/* =====================================================
   ACHIEVEMENTS
===================================================== */

function getAchievements() {

    try {

        const data =
            JSON.parse(
                localStorage.getItem(
                    "bioAchievements"
                ) || "[]"
            );

        return Array.isArray(data)
            ? data
            : [];

    } catch {

        return [];
    }
}


function saveAchievements(data) {

    localStorage.setItem(
        "bioAchievements",
        JSON.stringify(data)
    );
}


function unlockAchievement(id) {

    const achievements =
        getAchievements();

    if (achievements.includes(id)) {
        return;
    }

    achievements.push(id);

    saveAchievements(achievements);

    const names = {

        start: "Khởi đầu 🌱",

        streak: "Kiên trì 🔥",

        dna: "Nhà di truyền học 🧬",

        memory: "Siêu trí nhớ 🧠",

        grade9: "Chinh phục lớp 9 🎓"

    };


    showToast(
        "🏆",
        `Mở khóa: ${names[id] || "Thành tích"}`
    );


    updateAchievements();
}


function updateAchievements() {

    const achievements =
        getAchievements();


    const ids = [
        "start",
        "streak",
        "dna",
        "memory",
        "grade9"
    ];


    ids.forEach(id => {

        const element =
            document.getElementById(
                `achievement-${id}`
            );

        if (!element) {
            return;
        }

        element.classList.toggle(
            "unlocked",
            achievements.includes(id)
        );

    });


    const number =
        document.getElementById(
            "achievementNumber"
        );

    if (number) {
        number.textContent =
            achievements.length;
    }
}


/* =====================================================
   3D LAB
===================================================== */

const modelDescriptions = {

    cell: {
        title: "🧫 Tế bào",
        description:
            "Mô hình tế bào 3D. Quan sát màng tế bào, nhân tế bào và các bào quan."
    },

    dna: {
        title: "🧬 ADN",
        description:
            "Mô hình xoắn kép ADN, phân tử lưu trữ thông tin di truyền của sinh vật."
    },

    heart: {
        title: "❤️ Tim",
        description:
            "Mô hình tim đơn giản giúp hình dung cơ quan bơm máu trong hệ tuần hoàn."
    },

    lung: {
        title: "🫁 Phổi",
        description:
            "Mô hình phổi giúp hình dung cơ quan thực hiện trao đổi khí."
    }

};


function changeModel(type, button = null) {

    const model =
        document.getElementById("model3D");

    const title =
        document.getElementById("modelTitle");

    const description =
        document.getElementById(
            "modelDescription"
        );


    if (!model) {
        return;
    }


    model.className =
        "model-3d";


    if (type === "dna") {

        model.classList.add(
            "dna-model"
        );

    } else if (type === "heart") {

        model.classList.add(
            "heart-model"
        );

    } else if (type === "lung") {

        model.classList.add(
            "lung-model"
        );

    } else {

        model.classList.add(
            "cell-model"
        );

        model.innerHTML = `

            <div class="cell-membrane">

                <div class="cell-nucleus">
                    <span>DNA</span>
                </div>

                <div class="cell-organelle o1"></div>
                <div class="cell-organelle o2"></div>
                <div class="cell-organelle o3"></div>
                <div class="cell-organelle o4"></div>

            </div>
        `;
    }


    if (type !== "cell") {
        model.innerHTML = "";
    }


    if (title) {
        title.textContent =
            modelDescriptions[type].title;
    }

    if (description) {
        description.textContent =
            modelDescriptions[type].description;
    }


    document.querySelectorAll(".model-btn")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    if (button) {
        button.classList.add("active");
    }


    reset3D();
}


function reset3D() {

    modelRotationX = -5;

    modelRotationY = 0;

    modelZoom = 1;

    apply3DTransform();
}


function apply3DTransform() {

    const microscope =
        document.querySelector(".microscope");

    const model =
        document.getElementById("model3D");


    if (microscope) {

        microscope.style.transform =
            `rotateX(${modelRotationX}deg)
             rotateY(${modelRotationY}deg)
             scale(${modelZoom})`;
    }


    if (model) {

        model.style.transform =
            `rotateX(${modelRotationX}deg)
             rotateY(${modelRotationY}deg)`;
    }
}


/* =====================================================
   3D MOUSE DRAG
===================================================== */

function setup3DControls() {

    const microscope =
        document.querySelector(".microscope");

    if (!microscope) {
        return;
    }


    microscope.addEventListener(
        "pointerdown",
        event => {

            isDragging = true;

            dragStartX = event.clientX;
            dragStartY = event.clientY;

            microscope.setPointerCapture(
                event.pointerId
            );

        }
    );


    microscope.addEventListener(
        "pointermove",
        event => {

            if (!isDragging) {
                return;
            }


            const dx =
                event.clientX - dragStartX;

            const dy =
                event.clientY - dragStartY;


            modelRotationY += dx * 0.6;

            modelRotationX -= dy * 0.35;


            modelRotationX =
                Math.max(
                    -70,
                    Math.min(
                        70,
                        modelRotationX
                    )
                );


            dragStartX = event.clientX;
            dragStartY = event.clientY;


            apply3DTransform();

        }
    );


    microscope.addEventListener(
        "pointerup",
        () => {

            isDragging = false;

        }
    );


    microscope.addEventListener(
        "pointercancel",
        () => {

            isDragging = false;

        }
    );


    microscope.addEventListener(
        "wheel",
        event => {

            event.preventDefault();


            if (event.deltaY < 0) {

                modelZoom += .08;

            } else {

                modelZoom -= .08;

            }


            modelZoom =
                Math.max(
                    .7,
                    Math.min(
                        1.6,
                        modelZoom
                    )
                );


            apply3DTransform();

        },
        {
            passive: false
        }
    );

}


function toggleAutoRotate() {

    autoRotate =
        !autoRotate;


    if (autoRotate) {

        showToast(
            "🔄",
            "Đã bật xoay tự động"
        );


        rotateInterval =
            setInterval(() => {

                modelRotationY += 1.2;

                apply3DTransform();

            }, 30);

    } else {

        clearInterval(
            rotateInterval
        );

        rotateInterval = null;

        showToast(
            "⏸️",
            "Đã dừng xoay"
        );
    }
}


/* =====================================================
   AI ASSISTANT
===================================================== */

function handleAIKey(event) {

    if (event.key === "Enter") {
        askAI();
    }
}


function askAI() {

    const input =
        document.getElementById("aiInput");

    if (!input) {
        return;
    }


    const question =
        input.value.trim();


    if (!question) {

        showToast(
            "💬",
            "Hãy nhập câu hỏi trước nhé!"
        );

        return;
    }


    lastAIQuestion =
        question;


    addUserMessage(question);


    const answer =
        generateAIAnswer(question);


    lastAIAnswer =
        answer;


    addAIMessage(answer);


    input.value = "";
}


function generateAIAnswer(question) {

    const q =
        question
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");


    if (
        q.includes("adn") ||
        q.includes("dna")
    ) {

        return `
            <strong>🧬 ADN là gì?</strong>

            <p>
            ADN là phân tử mang và lưu trữ
            thông tin di truyền của sinh vật.
            </p>

            <p>
            ADN thường có cấu trúc xoắn kép
            gồm hai mạch polynucleotide.
            Trong ADN, A liên kết với T,
            còn G liên kết với C.
            </p>
        `;

    }


    if (
        q.includes("arn") ||
        q.includes("rna")
    ) {

        return `
            <strong>🧬 ARN là gì?</strong>

            <p>
            ARN là một loại acid nucleic
            tham gia vào quá trình truyền đạt
            và sử dụng thông tin di truyền.
            </p>

            <p>
            Trong ARN, base U thay cho T
            của ADN.
            </p>
        `;

    }


    if (
        q.includes("te bao") ||
        q.includes("cell")
    ) {

        return `
            <strong>🧫 Tế bào</strong>

            <p>
            Tế bào là đơn vị cấu tạo và chức năng
            cơ bản của cơ thể sống.
            </p>

            <p>
            Tế bào nhân thực thường có màng tế bào,
            tế bào chất và nhân.
            </p>
        `;

    }


    if (
        q.includes("quang hop")
    ) {

        return `
            <strong>🌱 Quang hợp</strong>

            <p>
            Quang hợp là quá trình cây xanh
            sử dụng năng lượng ánh sáng để tổng hợp
            chất hữu cơ từ CO₂ và nước,
            đồng thời giải phóng O₂.
            </p>
        `;

    }


    if (
        q.includes("tim") ||
        q.includes("heart")
    ) {

        return `
            <strong>❤️ Tim</strong>

            <p>
            Tim là cơ quan cơ của hệ tuần hoàn,
            có chức năng co bóp để đẩy máu
            lưu thông trong cơ thể.
            </p>
        `;

    }


    if (
        q.includes("phoi") ||
        q.includes("ho hap") ||
        q.includes("lung")
    ) {

        return `
            <strong>🫁 Hô hấp</strong>

            <p>
            Phổi là cơ quan chính của hệ hô hấp.
            Tại phổi diễn ra quá trình trao đổi
            khí giữa cơ thể và môi trường.
            </p>
        `;

    }


    if (
        q.includes("nguyen phan") ||
        q.includes("mitosis")
    ) {

        return `
            <strong>🧫 Nguyên phân</strong>

            <p>
            Nguyên phân là hình thức phân chia tế bào
            tạo ra hai tế bào con thường có bộ NST
            giống tế bào mẹ về số lượng.
            </p>
        `;

    }


    return `
        <strong>🧬 Mình hiểu câu hỏi của bạn!</strong>

        <p>
        Bạn thử hỏi cụ thể hơn về:
        <b>tế bào, ADN, ARN, quang hợp,
        tim, phổi hoặc nguyên phân</b>.
        </p>

        <p>
        Ví dụ:
        “ADN có cấu tạo như thế nào?”
        </p>
    `;
}


/* =====================================================
   AI CHAT
===================================================== */

function addUserMessage(text) {

    const box =
        document.getElementById(
            "aiMessages"
        );

    if (!box) {
        return;
    }


    const div =
        document.createElement("div");

    div.className =
        "ai-message user";


    div.innerHTML = `

        <div class="ai-avatar">
            👤
        </div>

        <div class="message-content">

            <strong>Bạn</strong>

            <p>
                ${escapeHTML(text)}
            </p>

        </div>

    `;


    box.appendChild(div);

    box.scrollTop =
        box.scrollHeight;
}


function addAIMessage(html) {

    const box =
        document.getElementById(
            "aiMessages"
        );

    if (!box) {
        return;
    }


    const div =
        document.createElement("div");

    div.className =
        "ai-message";


    div.innerHTML = `

        <div class="ai-avatar">
            🧬
        </div>

        <div class="message-content">

            <strong>Bio Assistant</strong>

            ${html}

        </div>

    `;


    box.appendChild(div);

    box.scrollTop =
        box.scrollHeight;
}


/* =====================================================
   VOICE
===================================================== */

function startVoiceInput() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        showToast(
            "⚠️",
            "Trình duyệt này chưa hỗ trợ nhận giọng nói."
        );

        return;
    }


    const recognition =
        new SpeechRecognition();


    recognition.lang =
        "vi-VN";

    recognition.interimResults =
        false;

    recognition.maxAlternatives =
        1;


    const mic =
        document.getElementById(
            "micButton"
        );


    if (mic) {
        mic.textContent =
            "🔴";
    }


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


            if (input) {

                input.value =
                    text;

                input.focus();

            }

            showToast(
                "🎤",
                "Đã nhận giọng nói!"
            );

        };


    recognition.onerror =
        () => {

            showToast(
                "⚠️",
                "Không nhận được giọng nói. Bạn có thể gõ câu hỏi."
            );

        };


    recognition.onend =
        () => {

            if (mic) {
                mic.textContent =
                    "🎤";
            }

        };
}


/* =====================================================
   SPEECH
===================================================== */

function stripHTML(html) {

    const div =
        document.createElement("div");

    div.innerHTML =
        html;

    return div.textContent ||
        div.innerText ||
        "";
}


function speak(text) {

    if (
        !("speechSynthesis" in window)
    ) {

        showToast(
            "⚠️",
            "Trình duyệt chưa hỗ trợ đọc giọng nói."
        );

        return;
    }


    speechSynthesis.cancel();


    const utterance =
        new SpeechSynthesisUtterance(
            stripHTML(text)
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
            "💬",
            "Hãy hỏi Bio Assistant trước nhé!"
        );

        return;
    }


    speak(lastAIAnswer);
}


/* =====================================================
   AI → 3D
===================================================== */

function open3DFromAI() {

    const question =
        lastAIQuestion.toLowerCase();


    let type =
        "cell";


    if (
        question.includes("adn") ||
        question.includes("dna")
    ) {

        type = "dna";

    } else if (
        question.includes("tim") ||
        question.includes("heart")
    ) {

        type = "heart";

    } else if (
        question.includes("phổi") ||
        question.includes("phoi") ||
        question.includes("hô hấp") ||
        question.includes("ho hap")
    ) {

        type = "lung";

    } else {

        type = "cell";

    }


    const button =
        [...document.querySelectorAll(
            ".model-btn"
        )].find(btn =>
            btn.textContent
                .toLowerCase()
                .includes(
                    type === "cell"
                        ? "tế bào"
                        : type
                )
        );


    changeModel(
        type,
        button || null
    );


    scrollToSection(
        "labSection"
    );


    showToast(
        "🔬",
        "Đã mở mô hình 3D!"
    );
}


/* =====================================================
   SHARE
===================================================== */

async function shareQuiz() {

    const url =
        window.location.href;

    const text =
        "Mình đang học Sinh học trên BioMaster 🧬";


    try {

        if (
            navigator.share
        ) {

            await navigator.share({
                title: "BioMaster",
                text: text,
                url: url
            });

            return;
        }


        if (
            navigator.clipboard
        ) {

            await navigator.clipboard.writeText(
                `${text}\n${url}`
            );

            showToast(
                "🔗",
                "Đã sao chép liên kết!"
            );

            return;
        }


        showToast(
            "🔗",
            url
        );

    } catch {

        showToast(
            "ℹ️",
            "Đã hủy chia sẻ."
        );
    }
}


/* =====================================================
   TOAST
===================================================== */

let toastTimeout = null;


function showToast(icon, message) {

    const toast =
        document.getElementById("toast");

    const toastIcon =
        document.getElementById("toastIcon");

    const toastText =
        document.getElementById("toastText");


    if (!toast) {
        return;
    }


    toastIcon.textContent =
        icon;

    toastText.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(
        toastTimeout
    );


    toastTimeout =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2500);
}


/* =====================================================
   SECURITY
===================================================== */

function escapeHTML(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateDashboard();

        renderClassScreen();

        setup3DControls();

        apply3DTransform();

    }
);
