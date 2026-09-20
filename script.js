"use strict";

/* =====================================================
   BIO QUIZ
   ===================================================== */


/* =====================================================
   HELPER
   ===================================================== */

function $(id) {
    return document.getElementById(id);
}

function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}


/* =====================================================
   QUIZ DATA
   ===================================================== */

const quizData = {

    7: [

        {
            icon: "🔬",
            title: "Tế bào",
            description: "Đơn vị cơ bản của cơ thể sống.",

            questions: [

                {
                    q: "Tế bào được xem là gì của cơ thể sống?",
                    answers: [
                        "Đơn vị cấu tạo và chức năng cơ bản",
                        "Một cơ quan",
                        "Một hệ cơ quan",
                        "Một mô"
                    ],
                    correct: 0
                },

                {
                    q: "Bộ phận nào điều khiển hoạt động của tế bào nhân thực?",
                    answers: [
                        "Màng tế bào",
                        "Nhân",
                        "Tế bào chất",
                        "Không bào"
                    ],
                    correct: 1
                },

                {
                    q: "Bộ phận nào bao bọc tế bào?",
                    answers: [
                        "Nhân",
                        "Màng tế bào",
                        "Ribosome",
                        "Nhiễm sắc thể"
                    ],
                    correct: 1
                },

                {
                    q: "Tế bào thực vật có bào quan nào thực hiện quang hợp?",
                    answers: [
                        "Ti thể",
                        "Nhân",
                        "Lục lạp",
                        "Không bào"
                    ],
                    correct: 2
                },

                {
                    q: "Tế bào nào sau đây là tế bào nhân thực?",
                    answers: [
                        "Tế bào vi khuẩn",
                        "Tế bào người",
                        "Virus",
                        "Không có tế bào"
                    ],
                    correct: 1
                }

            ]
        },


        {
            icon: "🌱",
            title: "Quang hợp",
            description: "Thực vật tạo chất hữu cơ nhờ ánh sáng.",

            questions: [

                {
                    q: "Quang hợp chủ yếu diễn ra ở đâu?",
                    answers: [
                        "Ti thể",
                        "Lục lạp",
                        "Nhân",
                        "Không bào"
                    ],
                    correct: 1
                },

                {
                    q: "Quang hợp cần năng lượng từ đâu?",
                    answers: [
                        "Ánh sáng",
                        "Âm thanh",
                        "Gió",
                        "Nhiệt độ cơ thể"
                    ],
                    correct: 0
                },

                {
                    q: "Nguyên liệu quan trọng của quang hợp là gì?",
                    answers: [
                        "Oxygen và glucose",
                        "Carbon dioxide và nước",
                        "Protein và lipid",
                        "Nitrogen và oxygen"
                    ],
                    correct: 1
                },

                {
                    q: "Sản phẩm khí được giải phóng trong quang hợp là?",
                    answers: [
                        "Carbon dioxide",
                        "Nitrogen",
                        "Oxygen",
                        "Hydrogen"
                    ],
                    correct: 2
                },

                {
                    q: "Sắc tố quang hợp quan trọng ở cây xanh là?",
                    answers: [
                        "Hemoglobin",
                        "Chlorophyll",
                        "Keratin",
                        "Insulin"
                    ],
                    correct: 1
                }

            ]
        },


        {
            icon: "🌎",
            title: "Sinh thái",
            description: "Quần thể, quần xã và chuỗi thức ăn.",

            questions: [

                {
                    q: "Tập hợp các cá thể cùng loài sống trong một khu vực là?",
                    answers: [
                        "Quần thể",
                        "Quần xã",
                        "Hệ sinh thái",
                        "Sinh quyển"
                    ],
                    correct: 0
                },

                {
                    q: "Trong chuỗi thức ăn, thực vật thường là?",
                    answers: [
                        "Sinh vật tiêu thụ",
                        "Sinh vật sản xuất",
                        "Sinh vật phân giải",
                        "Động vật ăn thịt"
                    ],
                    correct: 1
                },

                {
                    q: "Sinh vật phân giải có vai trò gì?",
                    answers: [
                        "Tạo ánh sáng",
                        "Phân giải chất hữu cơ",
                        "Ăn tất cả động vật",
                        "Tạo oxygen"
                    ],
                    correct: 1
                },

                {
                    q: "Ví dụ nào là một quần thể?",
                    answers: [
                        "Tất cả sinh vật trong rừng",
                        "Một đàn cá cùng loài trong hồ",
                        "Rừng và đất",
                        "Toàn bộ Trái Đất"
                    ],
                    correct: 1
                },

                {
                    q: "Chuỗi thức ăn thể hiện chủ yếu điều gì?",
                    answers: [
                        "Quan hệ dinh dưỡng",
                        "Màu sắc sinh vật",
                        "Kích thước cơ thể",
                        "Tuổi thọ"
                    ],
                    correct: 0
                }

            ]
        }

    ],


    8: [

        {
            icon: "🦴",
            title: "Hệ vận động",
            description: "Xương, cơ và sự vận động của cơ thể.",

            questions: [

                {
                    q: "Hệ vận động gồm những thành phần chính nào?",
                    answers: [
                        "Xương và cơ",
                        "Tim và phổi",
                        "Não và tủy sống",
                        "Thận và gan"
                    ],
                    correct: 0
                },

                {
                    q: "Cơ bám vào xương nhờ?",
                    answers: [
                        "Gân",
                        "Mạch máu",
                        "Thần kinh",
                        "Da"
                    ],
                    correct: 0
                },

                {
                    q: "Xương có vai trò nào?",
                    answers: [
                        "Nâng đỡ cơ thể",
                        "Tiêu hóa thức ăn",
                        "Trao đổi khí",
                        "Tạo âm thanh"
                    ],
                    correct: 0
                },

                {
                    q: "Khi cơ co, cơ thường?",
                    answers: [
                        "Ngắn lại",
                        "Dài ra",
                        "Biến mất",
                        "Không thay đổi"
                    ],
                    correct: 0
                },

                {
                    q: "Cơ và xương phối hợp giúp cơ thể?",
                    answers: [
                        "Vận động",
                        "Tiêu hóa",
                        "Lọc máu",
                        "Trao đổi khí"
                    ],
                    correct: 0
                }

            ]
        },


        {
            icon: "❤️",
            title: "Tuần hoàn",
            description: "Tim, máu và hệ mạch.",

            questions: [

                {
                    q: "Cơ quan trung tâm của hệ tuần hoàn là?",
                    answers: [
                        "Phổi",
                        "Tim",
                        "Gan",
                        "Thận"
                    ],
                    correct: 1
                },

                {
                    q: "Máu có chức năng nào?",
                    answers: [
                        "Vận chuyển các chất",
                        "Nghiền thức ăn",
                        "Tạo xương",
                        "Lọc nước tiểu"
                    ],
                    correct: 0
                },

                {
                    q: "Tim co bóp giúp?",
                    answers: [
                        "Đẩy máu đi",
                        "Tạo oxygen",
                        "Tiêu hóa thức ăn",
                        "Tạo xương"
                    ],
                    correct: 0
                },

                {
                    q: "Mạch máu đưa máu từ tim đi là?",
                    answers: [
                        "Động mạch",
                        "Tĩnh mạch",
                        "Mao mạch",
                        "Phế quản"
                    ],
                    correct: 0
                },

                {
                    q: "Trao đổi chất giữa máu và tế bào chủ yếu qua?",
                    answers: [
                        "Động mạch",
                        "Tĩnh mạch",
                        "Mao mạch",
                        "Tim"
                    ],
                    correct: 2
                }

            ]
        },


        {
            icon: "🫁",
            title: "Hô hấp",
            description: "Trao đổi oxygen và carbon dioxide.",

            questions: [

                {
                    q: "Cơ quan chính của hệ hô hấp là?",
                    answers: [
                        "Phổi",
                        "Tim",
                        "Gan",
                        "Dạ dày"
                    ],
                    correct: 0
                },

                {
                    q: "Trao đổi khí chủ yếu xảy ra tại?",
                    answers: [
                        "Khí quản",
                        "Phế nang",
                        "Thanh quản",
                        "Mũi"
                    ],
                    correct: 1
                },

                {
                    q: "Khi hít vào, cơ thể nhận chủ yếu khí?",
                    answers: [
                        "Oxygen",
                        "Carbon dioxide",
                        "Nitrogen tinh khiết",
                        "Hydrogen"
                    ],
                    correct: 0
                },

                {
                    q: "Khi thở ra, cơ thể thải nhiều hơn khí?",
                    answers: [
                        "Oxygen",
                        "Carbon dioxide",
                        "Hydrogen",
                        "Helium"
                    ],
                    correct: 1
                },

                {
                    q: "Phổi nằm trong?",
                    answers: [
                        "Khoang ngực",
                        "Khoang bụng",
                        "Hộp sọ",
                        "Xương chậu"
                    ],
                    correct: 0
                }

            ]
        }

    ],


    9: [

        {
            icon: "🧬",
            title: "ADN",
            description: "Cấu trúc và nguyên tắc di truyền.",

            questions: [

                {
                    q: "ADN là viết tắt của?",
                    answers: [
                        "Axit deoxyribonucleic",
                        "Axit ribonucleic",
                        "Protein",
                        "Lipid"
                    ],
                    correct: 0
                },

                {
                    q: "ADN có những loại base nào?",
                    answers: [
                        "A, T, G, X",
                        "A, U, G, X",
                        "A, C, U, G",
                        "T, U, G, X"
                    ],
                    correct: 0
                },

                {
                    q: "Trong ADN, A liên kết bổ sung với?",
                    answers: [
                        "G",
                        "X",
                        "T",
                        "U"
                    ],
                    correct: 2
                },

                {
                    q: "Trong ADN, G liên kết bổ sung với?",
                    answers: [
                        "A",
                        "T",
                        "X",
                        "U"
                    ],
                    correct: 2
                },

                {
                    q: "ADN có vai trò chủ yếu là?",
                    answers: [
                        "Lưu giữ thông tin di truyền",
                        "Tiêu hóa thức ăn",
                        "Vận chuyển oxygen",
                        "Co cơ"
                    ],
                    correct: 0
                }

            ]
        },


        {
            icon: "🧬",
            title: "ARN",
            description: "Các loại ARN và chức năng.",

            questions: [

                {
                    q: "ARN thường có mấy mạch?",
                    answers: [
                        "Một mạch",
                        "Hai mạch",
                        "Ba mạch",
                        "Không có mạch"
                    ],
                    correct: 0
                },

                {
                    q: "Trong ARN, base nào thay cho T?",
                    answers: [
                        "A",
                        "U",
                        "G",
                        "X"
                    ],
                    correct: 1
                },

                {
                    q: "mRNA có chức năng?",
                    answers: [
                        "Mang thông tin di truyền đến ribosome",
                        "Tạo xương",
                        "Vận chuyển oxygen",
                        "Tiêu hóa"
                    ],
                    correct: 0
                },

                {
                    q: "tRNA có vai trò?",
                    answers: [
                        "Mang amino acid",
                        "Tạo DNA",
                        "Tạo oxygen",
                        "Tạo lipid"
                    ],
                    correct: 0
                },

                {
                    q: "ARN tham gia trực tiếp vào quá trình?",
                    answers: [
                        "Tổng hợp protein",
                        "Tạo xương",
                        "Tuần hoàn",
                        "Hô hấp ngoài"
                    ],
                    correct: 0
                }

            ]
        },


        {
            icon: "🧫",
            title: "Nguyên phân",
            description: "Sự phân chia của tế bào.",

            questions: [

                {
                    q: "Một tế bào mẹ nguyên phân thường tạo ra?",
                    answers: [
                        "2 tế bào con",
                        "3 tế bào con",
                        "4 tế bào con",
                        "8 tế bào con"
                    ],
                    correct: 0
                },

                {
                    q: "Nguyên phân giúp cơ thể?",
                    answers: [
                        "Sinh trưởng và sửa chữa mô",
                        "Tạo ánh sáng",
                        "Tiêu hóa",
                        "Trao đổi khí"
                    ],
                    correct: 0
                },

                {
                    q: "Sau nguyên phân, số lượng NST của tế bào con thường?",
                    answers: [
                        "Giống tế bào mẹ",
                        "Gấp đôi",
                        "Giảm một nửa",
                        "Bằng 0"
                    ],
                    correct: 0
                },

                {
                    q: "Nguyên phân xảy ra ở?",
                    answers: [
                        "Tế bào sinh dưỡng",
                        "Chỉ giao tử",
                        "Chỉ virus",
                        "Chỉ vi khuẩn"
                    ],
                    correct: 0
                },

                {
                    q: "Kết quả của nguyên phân là các tế bào con?",
                    answers: [
                        "Gần như giống nhau về bộ NST",
                        "Luôn khác nhau hoàn toàn",
                        "Không có NST",
                        "Luôn là giao tử"
                    ],
                    correct: 0
                }

            ]
        }

    ]

};


/* =====================================================
   STATE
   ===================================================== */

let currentClass = 7;
let currentTopic = 0;
let currentQuestion = 0;

let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

let selectedAnswer = false;

let timeLeft = 30;
let timerInterval = null;

let correctStreak = 0;

let quizEarnedXP = 0;

let streak = Number(localStorage.getItem("bioStreak")) || 0;
let xp = Number(localStorage.getItem("bioXP")) || 0;

let lastStudyDate =
    localStorage.getItem("bioLastStudyDate") || "";

let achievements =
    JSON.parse(localStorage.getItem("bioAchievements") || "[]");

let lastAIQuestion = "";
let lastAIAnswer = "";


/* =====================================================
   SCREENS
   ===================================================== */

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


/* =====================================================
   HOME / CLASS
   ===================================================== */

function showClasses() {
    showScreen("homeScreen");

    const section =
        document.querySelector(".class-grid");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}


function selectClass(classNumber) {

    currentClass = classNumber;

    const titles = {
        7: "🌱 Sinh học 7",
        8: "🫀 Sinh học 8",
        9: "🧬 Sinh học 9"
    };

    $("selectedClassTitle").textContent =
        titles[classNumber];

    renderTopics();

    showScreen("classScreen");
}


/* =====================================================
   TOPICS
   ===================================================== */

function renderTopics() {

    const grid = $("topicGrid");

    if (!grid) return;

    grid.innerHTML = "";

    quizData[currentClass].forEach((topic, index) => {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "topic-card";

        button.innerHTML = `
            <div class="topic-icon">${topic.icon}</div>

            <h3>${escapeHTML(topic.title)}</h3>

            <p>${escapeHTML(topic.description)}</p>

            <span class="question-count">
                📝 ${topic.questions.length} câu · Làm ngay →
            </span>
        `;

        button.addEventListener("click", () => {
            startQuiz(index);
        });

        grid.appendChild(button);
    });
}


/* =====================================================
   START QUIZ
   ===================================================== */

function startQuiz(topicIndex) {

    currentTopic = topicIndex;

    currentQuestion = 0;

    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;

    correctStreak = 0;

    quizEarnedXP = 0;

    selectedAnswer = false;

    const topic =
        quizData[currentClass][currentTopic];

    $("quizTopic").textContent =
        `${topic.icon} ${topic.title}`;

    $("nextButton").style.display = "none";

    showScreen("quizScreen");

    loadQuestion();
}


/* =====================================================
   LOAD QUESTION
   ===================================================== */

function loadQuestion() {

    stopTimer();

    selectedAnswer = false;

    const topic =
        quizData[currentClass][currentTopic];

    const question =
        topic.questions[currentQuestion];

    if (!question) return;

    $("questionNumber").textContent =
        `Câu ${currentQuestion + 1}/${topic.questions.length}`;

    $("questionCategory").textContent =
        `${topic.icon} ${topic.title}`;

    $("questionText").textContent =
        question.q;

    $("scoreDisplay").textContent =
        `Điểm: ${score}`;

    const answers = $("answers");

    answers.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className = "answer-btn";

        button.innerHTML =
            `<b>${String.fromCharCode(65 + index)}.</b>
             ${escapeHTML(answer)}`;

        button.addEventListener("click", () => {
            checkAnswer(index, button);
        });

        answers.appendChild(button);
    });

    $("nextButton").style.display = "none";

    updateQuizProgress();

    startTimer();
}


/* =====================================================
   QUIZ PROGRESS
   ===================================================== */

function updateQuizProgress() {

    const topic =
        quizData[currentClass][currentTopic];

    const percent =
        ((currentQuestion + 1) / topic.questions.length) * 100;

    $("quizProgress").style.width =
        percent + "%";
}


/* =====================================================
   TIMER
   ===================================================== */

function startTimer() {

    stopTimer();

    timeLeft = 30;

    updateTimer();

    timerInterval = setInterval(() => {

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {

            stopTimer();

            timeOut();
        }

    }, 1000);
}


function stopTimer() {

    if (timerInterval) {

        clearInterval(timerInterval);

        timerInterval = null;
    }
}


function updateTimer() {

    const timer = $("timer");

    timer.textContent =
        `⏱️ ${timeLeft}s`;

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


function timeOut() {

    if (selectedAnswer) return;

    selectedAnswer = true;

    wrongAnswers++;

    correctStreak = 0;

    document.querySelectorAll(".answer-btn")
        .forEach(button => {
            button.disabled = true;
        });

    showToast("⏰", "Hết giờ!");

    $("nextButton").style.display =
        "block";
}


/* =====================================================
   CHECK ANSWER
   ===================================================== */

function checkAnswer(index, clickedButton) {

    if (selectedAnswer) return;

    selectedAnswer = true;

    stopTimer();

    const topic =
        quizData[currentClass][currentTopic];

    const question =
        topic.questions[currentQuestion];

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

        unlockAchievement("first");

        showToast(
            "🎉",
            "Chính xác! +20 XP"
        );


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
            "Chưa đúng! Hãy xem lại nhé."
        );
    }


    $("scoreDisplay").textContent =
        `Điểm: ${score}`;

    $("nextButton").style.display =
        "block";
}


/* =====================================================
   NEXT
   ===================================================== */

function nextQuestion() {

    const topic =
        quizData[currentClass][currentTopic];

    if (
        currentQuestion <
        topic.questions.length - 1
    ) {

        currentQuestion++;

        loadQuestion();

    } else {

        finishQuiz();
    }
}


/* =====================================================
   FINISH
   ===================================================== */

function finishQuiz() {

    stopTimer();

    const topic =
        quizData[currentClass][currentTopic];

    const total =
        topic.questions.length;

    updateStreak();


    if (correctAnswers === total) {

        addXP(30);

        quizEarnedXP += 30;

        unlockAchievement("perfect");
    }


    if (
        currentClass === 9 &&
        currentTopic === 0 &&
        correctAnswers >= 2
    ) {

        unlockAchievement("dna");
    }


    $("finalScore").textContent =
        `${correctAnswers}/${total}`;

    $("correctCount").textContent =
        correctAnswers;

    $("wrongCount").textContent =
        wrongAnswers;

    $("earnedXP").textContent =
        `+${quizEarnedXP} XP`;


    const percent =
        Math.round(
            correctAnswers / total * 100
        );


    let message;

    if (percent === 100) {

        message =
            "🏆 Xuất sắc! Bạn trả lời đúng tất cả!";

    } else if (percent >= 80) {

        message =
            "🌟 Rất tốt! Tiếp tục phát huy nhé!";

    } else if (percent >= 50) {

        message =
            "💪 Khá tốt! Ôn thêm một chút nữa nhé!";

    } else {

        message =
            "📚 Đừng nản! Học lại rồi thử lại nhé!";
    }


    $("resultMessage").textContent =
        message;

    updateDashboard();

    updateAchievements();

    showScreen("resultScreen");
}


/* =====================================================
   RESTART / QUIT
   ===================================================== */

function restartQuiz() {

    startQuiz(currentTopic);
}


function quitQuiz() {

    stopTimer();

    showScreen("classScreen");
}


/* =====================================================
   DATE
   ===================================================== */

function getToday() {

    const d = new Date();

    return [
        d.getFullYear(),
        String(d.getMonth() + 1).padStart(2, "0"),
        String(d.getDate()).padStart(2, "0")
    ].join("-");
}


function getYesterday() {

    const d = new Date();

    d.setDate(d.getDate() - 1);

    return [
        d.getFullYear(),
        String(d.getMonth() + 1).padStart(2, "0"),
        String(d.getDate()).padStart(2, "0")
    ].join("-");
}


/* =====================================================
   STREAK
   ===================================================== */

function updateStreak() {

    const today = getToday();

    if (!lastStudyDate) {

        streak = 1;

    } else if (lastStudyDate === today) {

        return;

    } else if (lastStudyDate === getYesterday()) {

        streak++;

    } else {

        streak = 1;
    }


    lastStudyDate = today;

    localStorage.setItem(
        "bioStreak",
        String(streak)
    );

    localStorage.setItem(
        "bioLastStudyDate",
        lastStudyDate
    );


    if (streak === 3) {

        addXP(50);

        quizEarnedXP += 50;

        unlockAchievement("streak");

        showToast(
            "🔥",
            "3 ngày liên tiếp! +50 XP"
        );
    }


    updateDashboard();
}


/* =====================================================
   XP
   ===================================================== */

function addXP(amount) {

    xp += amount;

    localStorage.setItem(
        "bioXP",
        String(xp)
    );

    updateDashboard();
}


/* =====================================================
   LEVEL
   ===================================================== */

function getLevel() {

    if (xp < 100) {

        return {
            level: 1,
            name: "Mầm non Sinh học",
            min: 0,
            max: 100
        };

    } else if (xp < 300) {

        return {
            level: 2,
            name: "Nhà khám phá",
            min: 100,
            max: 300
        };

    } else if (xp < 700) {

        return {
            level: 3,
            name: "Học sinh Sinh học",
            min: 300,
            max: 700
        };

    } else if (xp < 1200) {

        return {
            level: 4,
            name: "Nhà nghiên cứu trẻ",
            min: 700,
            max: 1200
        };

    } else if (xp < 2500) {

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


/* =====================================================
   DASHBOARD
   ===================================================== */

function updateDashboard() {

    const level = getLevel();

    let progress = 100;

    if (level.max !== level.min) {

        progress =
            ((xp - level.min) /
                (level.max - level.min)) * 100;
    }


    $("headerStreak").textContent =
        streak;

    $("headerXP").textContent =
        `${xp} XP`;

    $("streakNumber").textContent =
        streak;

    $("streakText").textContent =
        streak > 0
            ? `Bạn đã học ${streak} ngày liên tiếp`
            : "Bắt đầu học hôm nay!";

    $("xpNumber").textContent =
        xp;

    $("levelText").textContent =
        `Level ${level.level}`;

    $("levelName").textContent =
        level.name;

    $("levelXP").textContent =
        level.max === level.min
            ? `${xp} XP`
            : `${xp} / ${level.max} XP`;

    $("levelProgress").style.width =
        Math.min(
            100,
            Math.max(0, progress)
        ) + "%";

    $("achievementNumber").textContent =
        achievements.length;
}


/* =====================================================
   ACHIEVEMENTS
   ===================================================== */

const achievementData = {

    first: {
        icon: "🚀",
        title: "Khởi động"
    },

    streak: {
        icon: "🔥",
        title: "Không ngừng học"
    },

    dna: {
        icon: "🧬",
        title: "Di truyền học"
    },

    memory: {
        icon: "🧠",
        title: "Siêu trí nhớ"
    },

    perfect: {
        icon: "🏆",
        title: "Hoàn hảo"
    }

};


function unlockAchievement(id) {

    if (achievements.includes(id)) {
        return;
    }

    if (!achievementData[id]) {
        return;
    }

    achievements.push(id);

    localStorage.setItem(
        "bioAchievements",
        JSON.stringify(achievements)
    );

    showToast(
        achievementData[id].icon,
        "Mở khóa: " +
        achievementData[id].title
    );

    updateAchievements();
}


function updateAchievements() {

    Object.keys(achievementData)
        .forEach(id => {

            const element =
                $("achievement-" + id);

            if (!element) return;

            if (achievements.includes(id)) {

                element.classList.add("unlocked");

            } else {

                element.classList.remove("unlocked");
            }

        });

    $("achievementNumber").textContent =
        achievements.length;
}


/* =====================================================
   ================= 3D LAB =============================
   ===================================================== */

let scene;
let camera;
let renderer;

let bioObject = null;

let rotationX = 0.25;
let rotationY = 0.5;

let zoom = 1;

let dragging = false;

let lastPointerX = 0;
let lastPointerY = 0;

let currentModel = "microscope";


/* ---------- MATERIALS ---------- */

function material(color, metalness = 0.2, roughness = 0.45) {

    return new THREE.MeshStandardMaterial({

        color: color,

        metalness: metalness,

        roughness: roughness
    });
}


/* ---------- BOX ---------- */

function makeBox(
    x,
    y,
    z,
    color,
    scaleX,
    scaleY,
    scaleZ
) {

    const geometry =
        new THREE.BoxGeometry(
            scaleX,
            scaleY,
            scaleZ
        );

    const mesh =
        new THREE.Mesh(
            geometry,
            material(color)
        );

    mesh.position.set(x, y, z);

    return mesh;
}


/* ---------- CYLINDER ---------- */

function makeCylinder(
    radius,
    height,
    color,
    x,
    y,
    z
) {

    const geometry =
        new THREE.CylinderGeometry(
            radius,
            radius,
            height,
            32
        );

    const mesh =
        new THREE.Mesh(
            geometry,
            material(color, .5, .3)
        );

    mesh.position.set(x, y, z);

    return mesh;
}


/* =====================================================
   MICROSCOPE
   ===================================================== */

function createMicroscope() {

    const group =
        new THREE.Group();


    /* BASE */

    const base =
        makeBox(
            0,
            -2.3,
            0,
            0x27332d,
            5,
            .7,
            3.3
        );

    group.add(base);


    /* BASE TOP */

    const baseTop =
        makeBox(
            0,
            -1.9,
            0,
            0x53665b,
            4.2,
            .25,
            2.6
        );

    group.add(baseTop);


    /* ARM */

    const arm =
        makeBox(
            -1.5,
            .3,
            0,
            0x36483e,
            .65,
            4.4,
            1.25
        );

    group.add(arm);


    /* ARM TOP */

    const topArm =
        makeBox(
            -.7,
            2.1,
            0,
            0x36483e,
            2.3,
            .65,
            1.25
        );

    topArm.rotation.z =
        THREE.MathUtils.degToRad(-15);

    group.add(topArm);


    /* STAGE */

    const stage =
        makeBox(
            .25,
            -.8,
            0,
            0x1e2823,
            2.7,
            .3,
            2
        );

    group.add(stage);


    /* SLIDE */

    const slide =
        makeBox(
            .25,
            -.6,
            0,
            0xd9e8df,
            1.3,
            .08,
            .7
        );

    group.add(slide);


    /* OBJECTIVES */

    const objective1 =
        makeCylinder(
            .18,
            1.2,
            0x9ca3a0,
            .45,
            .05,
            0
        );

    objective1.rotation.z =
        THREE.MathUtils.degToRad(90);

    group.add(objective1);


    const objective2 =
        makeCylinder(
            .15,
            1,
            0xb6beb9,
            .9,
            .15,
            0
        );

    objective2.rotation.z =
        THREE.MathUtils.degToRad(80);

    group.add(objective2);


    /* EYEPIECE */

    const eyepiece =
        makeCylinder(
            .35,
            1.5,
            0x202b25,
            -.25,
            2.65,
            0
        );

    eyepiece.rotation.z =
        THREE.MathUtils.degToRad(70);

    group.add(eyepiece);


    /* FOCUS KNOBS */

    const knob1 =
        makeCylinder(
            .45,
            .35,
            0x111714,
            -1.15,
            .65,
            .75
        );

    knob1.rotation.x =
        Math.PI / 2;

    group.add(knob1);


    const knob2 =
        makeCylinder(
            .28,
            .4,
            0x68766f,
            -1.15,
            .65,
            -.75
        );

    knob2.rotation.x =
        Math.PI / 2;

    group.add(knob2);


    /* LIGHT */

    const light =
        makeCylinder(
            .55,
            .15,
            0xe8fff0,
            .25,
            -1.65,
            0
        );

    group.add(light);


    group.scale.setScalar(1.1);

    return group;
}


/* =====================================================
   CELL
   ===================================================== */

function createCell() {

    const group =
        new THREE.Group();


    /* CYTOPLASM */

    const cytoplasm =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                2.5,
                64,
                64
            ),

            new THREE.MeshPhysicalMaterial({

                color: 0x79d99b,

                transparent: true,

                opacity: .35,

                roughness: .15,

                transmission: .1

            })
        );

    group.add(cytoplasm);


    /* MEMBRANE */

    const membrane =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                2.55,
                64,
                64
            ),

            new THREE.MeshPhysicalMaterial({

                color: 0xb9ffd0,

                transparent: true,

                opacity: .22,

                wireframe: false,

                side: THREE.DoubleSide

            })
        );

    group.add(membrane);


    /* NUCLEUS */

    const nucleus =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                .85,
                48,
                48
            ),

            material(
                0x8b5cf6,
                .2,
                .25
            )
        );

    nucleus.position.set(
        -.2,
        .2,
        .2
    );

    group.add(nucleus);


    /* NUCLEOLUS */

    const nucleolus =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                .25,
                32,
                32
            ),

            material(0x4c1d95)
        )
    ;

    nucleolus.position.set(
        -.35,
        .45,
        .8
    );

    group.add(nucleolus);


    /* MITOCHONDRIA */

    for (let i = 0; i < 7; i++) {

        const mitochondria =
            new THREE.Mesh(

                new THREE.TorusGeometry(
                    .35,
                    .12,
                    16,
                    32
                ),

                material(
                    0xf97316,
                    .1,
                    .35
                )
            );


        const angle =
            (i / 7) * Math.PI * 2;

        mitochondria.position.set(

            Math.cos(angle) * 1.45,

            Math.sin(angle * 1.7) * .9,

            Math.sin(angle) * 1.35

        );


        mitochondria.rotation.set(
            angle,
            angle * .7,
            angle * .4
        );


        group.add(mitochondria);
    }


    /* SMALL VACUOLES */

    for (let i = 0; i < 5; i++) {

        const vacuole =
            new THREE.Mesh(

                new THREE.SphereGeometry(
                    .2 + Math.random() * .15,
                    24,
                    24
                ),

                new THREE.MeshStandardMaterial({

                    color: 0xdbeafe,

                    transparent: true,

                    opacity: .55
                })
            );


        vacuole.position.set(

            (Math.random() - .5) * 3,

            (Math.random() - .5) * 2.5,

            (Math.random() - .5) * 3

        );


        group.add(vacuole);
    }


    return group;
}


/* =====================================================
   DNA
   ===================================================== */

function createDNA() {

    const group =
        new THREE.Group();


    const radius = 1.5;

    const height = 5;

    const steps = 30;


    for (let i = 0; i < steps; i++) {

        const t = i / (steps - 1);

        const y =
            -height / 2 + t * height;

        const angle =
            t * Math.PI * 4;


        const x1 =
            Math.cos(angle) * radius;

        const z1 =
            Math.sin(angle) * radius;


        const x2 =
            -x1;

        const z2 =
            -z1;


        const sphere1 =
            new THREE.Mesh(

                new THREE.SphereGeometry(
                    .14,
                    20,
                    20
                ),

                material(0x60a5fa)
            );


        sphere1.position.set(
            x1,
            y,
            z1
        );


        group.add(sphere1);


        const sphere2 =
            new THREE.Mesh(

                new THREE.SphereGeometry(
                    .14,
                    20,
                    20
                ),

                material(0xf472b6)
            );


        sphere2.position.set(
            x2,
            y,
            z2
        );


        group.add(sphere2);


        if (i % 2 === 0) {

            const middle =
                new THREE.Mesh(

                    new THREE.CylinderGeometry(
                        .055,
                        .055,
                        3,
                        12
                    ),

                    material(0xe5e7eb)
                );


            middle.position.set(
                0,
                y,
                0
            );


            middle.rotation.z =
                Math.PI / 2;


            middle.rotation.y =
                -angle;


            group.add(middle);
        }
    }


    return group;
}


/* =====================================================
   3D SETUP
   ===================================================== */

function init3D() {

    const canvas =
        $("bio3dCanvas");

    if (!canvas) return;


    scene =
        new THREE.Scene();


    camera =
        new THREE.PerspectiveCamera(
            45,
            canvas.clientWidth /
                canvas.clientHeight,
            .1,
            100
        );


    camera.position.set(
        7,
        4,
        8
    );


    renderer =
        new THREE.WebGLRenderer({

            canvas: canvas,

            antialias: true,

            alpha: true

        });


    renderer.setPixelRatio(
        Math.min(
            window.devicePixelRatio,
            2
        )
    );


    renderer.setSize(
        canvas.clientWidth,
        canvas.clientHeight,
        false
    );


    /* LIGHT */

    const ambient =
        new THREE.AmbientLight(
            0xffffff,
            2
        );

    scene.add(ambient);


    const keyLight =
        new THREE.DirectionalLight(
            0xffffff,
            4
        );

    keyLight.position.set(
        5,
        8,
        6
    );

    scene.add(keyLight);


    const greenLight =
        new THREE.PointLight(
            0x4ade80,
            25,
            20
        );

    greenLight.position.set(
        -5,
        3,
        5
    );

    scene.add(greenLight);


    load3DModel("microscope");


    setup3DControls();


    window.addEventListener(
        "resize",
        resize3D
    );


    animate3D();
}


/* =====================================================
   CHANGE 3D MODEL
   ===================================================== */

function load3DModel(type) {

    currentModel = type;


    if (bioObject) {

        scene.remove(bioObject);

        bioObject = null;
    }


    if (type === "microscope") {

        bioObject =
            createMicroscope();

        $("modelEmoji").textContent =
            "🔬";

        $("modelTitle").textContent =
            "Kính hiển vi 3D";

        $("modelDescription").textContent =
            "Mô hình kính hiển vi. Kéo chuột hoặc chạm để xoay.";

    }


    if (type === "cell") {

        bioObject =
            createCell();

        $("modelEmoji").textContent =
            "🧫";

        $("modelTitle").textContent =
            "Tế bào 3D";

        $("modelDescription").textContent =
            "Khám phá màng tế bào, nhân và các bào quan.";

    }


    if (type === "dna") {

        bioObject =
            createDNA();

        $("modelEmoji").textContent =
            "🧬";

        $("modelTitle").textContent =
            "ADN 3D";

        $("modelDescription").textContent =
            "Xoay mô hình ADN để quan sát cấu trúc xoắn.";

    }


    scene.add(bioObject);


    rotationX = .2;

    rotationY = .5;

    zoom = 1;


    updateModelButtons();
}


function changeModel(type) {

    load3DModel(type);

    showToast(
        "🔬",
        "Đã đổi mô hình 3D!"
    );
}


/* =====================================================
   3D BUTTONS
   ===================================================== */

function updateModelButtons() {

    $("microscopeBtn")
        .classList.toggle(
            "active",
            currentModel === "microscope"
        );

    $("cellBtn")
        .classList.toggle(
            "active",
            currentModel === "cell"
        );

    $("dnaBtn")
        .classList.toggle(
            "active",
            currentModel === "dna"
        );
}


/* =====================================================
   3D CONTROLS
   ===================================================== */

function setup3DControls() {

    const canvas =
        $("bio3dCanvas");


    canvas.addEventListener(
        "pointerdown",
        event => {

            dragging = true;

            lastPointerX =
                event.clientX;

            lastPointerY =
                event.clientY;

            canvas.setPointerCapture(
                event.pointerId
            );
        }
    );


    canvas.addEventListener(
        "pointermove",
        event => {

            if (!dragging) return;


            const dx =
                event.clientX -
                lastPointerX;

            const dy =
                event.clientY -
                lastPointerY;


            rotationY += dx * .01;

            rotationX += dy * .01;


            rotationX =
                Math.max(
                    -1.5,
                    Math.min(
                        1.5,
                        rotationX
                    )
                );


            lastPointerX =
                event.clientX;

            lastPointerY =
                event.clientY;
        }
    );


    canvas.addEventListener(
        "pointerup",
        () => {
            dragging = false;
        }
    );


    canvas.addEventListener(
        "pointercancel",
        () => {
            dragging = false;
        }
    );


    canvas.addEventListener(
        "wheel",
        event => {

            event.preventDefault();

            zoom +=
                event.deltaY * -.001;

            zoom =
                Math.max(
                    .65,
                    Math.min(
                        1.7,
                        zoom
                    )
                );

        },
        { passive: false }
    );
}


/* =====================================================
   3D ANIMATION
   ===================================================== */

function animate3D() {

    requestAnimationFrame(
        animate3D
    );


    if (!bioObject) return;


    bioObject.rotation.x =
        rotationX;

    bioObject.rotation.y =
        rotationY;


    bioObject.scale.setScalar(
        zoom
    );


    renderer.render(
        scene,
        camera
    );
}


/* =====================================================
   3D RESIZE
   ===================================================== */

function resize3D() {

    const canvas =
        $("bio3dCanvas");

    if (!canvas || !renderer) return;


    const width =
        canvas.clientWidth;

    const height =
        canvas.clientHeight;


    camera.aspect =
        width / height;

    camera.updateProjectionMatrix();


    renderer.setSize(
        width,
        height,
        false
    );
}


/* =====================================================
   AI
   ===================================================== */

function askAI() {

    const input =
        $("aiInput");

    const question =
        input.value.trim();


    if (!question) {

        showToast(
            "💬",
            "Hãy nhập câu hỏi trước!"
        );

        return;
    }


    lastAIQuestion =
        question;


    addUserMessage(
        question
    );


    const answer =
        generateAIAnswer(
            question
        );


    lastAIAnswer =
        answer;


    addAIMessage(
        answer
    );


    input.value = "";
}


function generateAIAnswer(question) {

    const q =
        question.toLowerCase();


    if (
        q.includes("adn") ||
        q.includes("dna")
    ) {

        return `
            <b>🧬 ADN là gì?</b>

            <p>
            ADN là vật chất di truyền chứa
            thông tin di truyền của sinh vật.
            </p>

            <p>
            ADN có 4 loại nucleotide:
            <b>A, T, G, X</b>.
            </p>

            <p>
            Quy tắc bổ sung:
            <b>A - T</b> và <b>G - X</b>.
            </p>
        `;
    }


    if (
        q.includes("arn") ||
        q.includes("rna")
    ) {

        return `
            <b>🧬 ARN là gì?</b>

            <p>
            ARN là axit ribonucleic.
            ARN thường có một mạch.
            </p>

            <p>
            ARN có các bazơ:
            <b>A, U, G, X</b>.
            </p>

            <p>
            Trong ARN, <b>U</b> thay cho
            <b>T</b> của ADN.
            </p>
        `;
    }


    if (
        q.includes("tim") ||
        q.includes("tuần hoàn")
    ) {

        return `
            <b>❤️ Tim hoạt động thế nào?</b>

            <p>
            Tim là cơ quan trung tâm của
            hệ tuần hoàn.
            </p>

            <p>
            Tim co bóp để đẩy máu đi
            khắp cơ thể.
            </p>
        `;
    }


    if (
        q.includes("phổi") ||
        q.includes("hô hấp") ||
        q.includes("thở")
    ) {

        return `
            <b>🫁 Hô hấp là gì?</b>

            <p>
            Hệ hô hấp giúp cơ thể lấy
            <b>oxygen</b> và thải
            <b>carbon dioxide</b>.
            </p>

            <p>
            Trao đổi khí chủ yếu diễn ra
            tại <b>phế nang</b>.
            </p>
        `;
    }


    if (
        q.includes("quang hợp")
    ) {

        return `
            <b>🌱 Quang hợp</b>

            <p>
            Quang hợp là quá trình thực vật
            sử dụng năng lượng ánh sáng để
            tổng hợp chất hữu cơ.
            </p>

            <p>
            Quá trình diễn ra chủ yếu ở
            <b>lục lạp</b>.
            </p>
        `;
    }


    if (
        q.includes("tế bào") ||
        q.includes("cell")
    ) {

        return `
            <b>🔬 Tế bào</b>

            <p>
            Tế bào là đơn vị cấu tạo và
            chức năng cơ bản của cơ thể sống.
            </p>

            <p>
            Tế bào nhân thực thường có
            màng tế bào, tế bào chất và nhân.
            </p>
        `;
    }


    if (
        q.includes("nguyên phân")
    ) {

        return `
            <b>🧫 Nguyên phân</b>

            <p>
            Nguyên phân là quá trình một
            tế bào mẹ phân chia tạo thành
            <b>2 tế bào con</b>.
            </p>

            <p>
            Các tế bào con thường có số
            lượng nhiễm sắc thể giống tế bào mẹ.
            </p>
        `;
    }


    if (
        q.includes("xương") ||
        q.includes("cơ") ||
        q.includes("vận động")
    ) {

        return `
            <b>🦴 Hệ vận động</b>

            <p>
            Hệ vận động gồm hệ xương
            và hệ cơ.
            </p>

            <p>
            Sự phối hợp giữa xương và cơ
            giúp cơ thể thực hiện vận động.
            </p>
        `;
    }


    return `
        <b>🤖 Trợ lý Sinh học</b>

        <p>
        Mình chưa có câu trả lời phù hợp
        trong dữ liệu hiện tại.
        </p>

        <p>Bạn thử hỏi:</p>

        <ul>
            <li>ADN là gì?</li>
            <li>ARN là gì?</li>
            <li>Tế bào là gì?</li>
            <li>Quang hợp là gì?</li>
            <li>Tim hoạt động thế nào?</li>
            <li>Nguyên phân là gì?</li>
        </ul>
    `;
}


/* =====================================================
   CHAT
   ===================================================== */

function addUserMessage(text) {

    const box =
        $("aiMessages");

    const message =
        document.createElement("div");


    message.className =
        "ai-message user-message";


    message.innerHTML =
        escapeHTML(text);


    box.appendChild(message);

    box.scrollTop =
        box.scrollHeight;
}


function addAIMessage(html) {

    const box =
        $("aiMessages");

    const message =
        document.createElement("div");


    message.className =
        "ai-message assistant-message";


    message.innerHTML = `
        <div class="message-avatar">🤖</div>

        <div>
            ${html}
        </div>
    `;


    box.appendChild(message);

    box.scrollTop =
        box.scrollHeight;
}


/* =====================================================
   MICROPHONE
   ===================================================== */

function startVoiceInput() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        showToast(
            "⚠️",
            "Trình duyệt không hỗ trợ nhận giọng nói."
        );

        return;
    }


    const button =
        $("micButton");

    const input =
        $("aiInput");


    const recognition =
        new SpeechRecognition();


    recognition.lang =
        "vi-VN";

    recognition.continuous =
        false;

    recognition.interimResults =
        true;

    recognition.maxAlternatives =
        1;


    button.classList.add(
        "recording"
    );

    button.textContent =
        "🔴";


    showToast(
        "🎤",
        "Đang nghe... hãy nói!"
    );


    recognition.onresult =
        event => {

            let transcript = "";


            for (
                let i = event.resultIndex;
                i < event.results.length;
                i++
            ) {

                transcript +=
                    event.results[i][0]
                        .transcript;
            }


            input.value =
                transcript.trim();
        };


    recognition.onerror =
        event => {

            console.log(
                "Speech error:",
                event.error
            );


            if (
                event.error ===
                "not-allowed"
            ) {

                showToast(
                    "🔒",
                    "Hãy cho phép microphone."
                );

            } else if (
                event.error ===
                "no-speech"
            ) {

                showToast(
                    "🔇",
                    "Không nghe thấy giọng nói."
                );

            } else {

                showToast(
                    "❌",
                    "Microphone gặp lỗi."
                );
            }
        };


    recognition.onend =
        () => {

            button.classList.remove(
                "recording"
            );

            button.textContent =
                "🎤";

            showToast(
                "✅",
                "Đã nhận giọng nói!"
            );
        };


    try {

        recognition.start();

    } catch (error) {

        console.log(error);

        button.classList.remove(
            "recording"
        );

        button.textContent =
            "🎤";
    }
}


/* =====================================================
   SPEECH
   ===================================================== */

function speak(html) {

    if (
        !("speechSynthesis" in window)
    ) {

        showToast(
            "⚠️",
            "Trình duyệt không hỗ trợ đọc."
        );

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
        .95;

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
            "Hãy hỏi trợ lý trước nhé!"
        );

        return;
    }


    speak(
        lastAIAnswer
    );
}


/* =====================================================
   AI → 3D
   ===================================================== */

function open3DFromAI() {

    const q =
        lastAIQuestion.toLowerCase();


    if (
        q.includes("adn") ||
        q.includes("dna") ||
        q.includes("arn")
    ) {

        changeModel("dna");

    } else if (
        q.includes("tế bào") ||
        q.includes("cell")
    ) {

        changeModel("cell");

    } else {

        changeModel("microscope");
    }


    $("lab3d").scrollIntoView({
        behavior: "smooth"
    });
}


/* =====================================================
   SHARE
   ===================================================== */

async function shareQuiz() {

    const url =
        window.location.href;


    if (navigator.share) {

        try {

            await navigator.share({

                title:
                    "Bio Quiz Sinh học",

                text:
                    "🧬 Thử Bio Quiz Sinh học nhé!",

                url:
                    url
            });

            return;

        } catch (error) {

            console.log(error);
        }
    }


    try {

        await navigator.clipboard.writeText(
            url
        );

        showToast(
            "🔗",
            "Đã sao chép link!"
        );

    } catch (error) {

        showToast(
            "🔗",
            "Hãy sao chép link trên thanh địa chỉ."
        );
    }
}


/* =====================================================
   TOAST
   ===================================================== */

function showToast(icon, message) {

    const toast =
        $("toast");

    if (!toast) return;


    $("toastIcon").textContent =
        icon;

    $("toastText").textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        window.bioToastTimer
    );


    window.bioToastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 3000);
}


/* =====================================================
   EVENT LISTENERS
   ===================================================== */

function setupEvents() {

    $("startLearningBtn")
        .addEventListener(
            "click",
            showClasses
        );


    $("grade7Btn")
        .addEventListener(
            "click",
            () => selectClass(7)
        );


    $("grade8Btn")
        .addEventListener(
            "click",
            () => selectClass(8)
        );


    $("grade9Btn")
        .addEventListener(
            "click",
            () => selectClass(9)
        );


    $("backHomeBtn")
        .addEventListener(
            "click",
            () => showScreen("homeScreen")
        );


    $("quitQuizBtn")
        .addEventListener(
            "click",
            quitQuiz
        );


    $("nextButton")
        .addEventListener(
            "click",
            nextQuestion
        );


    $("restartBtn")
        .addEventListener(
            "click",
            restartQuiz
        );


    $("resultHomeBtn")
        .addEventListener(
            "click",
            () => showScreen("homeScreen")
        );


    $("shareBtn")
        .addEventListener(
            "click",
            shareQuiz
        );


    $("sendAIButton")
        .addEventListener(
            "click",
            askAI
        );


    $("micButton")
        .addEventListener(
            "click",
            startVoiceInput
        );


    $("readAnswerBtn")
        .addEventListener(
            "click",
            speakLastAnswer
        );


    $("explain3DBtn")
        .addEventListener(
            "click",
            open3DFromAI
        );


    $("microscopeBtn")
        .addEventListener(
            "click",
            () => changeModel("microscope")
        );


    $("cellBtn")
        .addEventListener(
            "click",
            () => changeModel("cell")
        );


    $("dnaBtn")
        .addEventListener(
            "click",
            () => changeModel("dna")
        );


    $("rotateLeftBtn")
        .addEventListener(
            "click",
            () => {
                rotationY -= .4;
            }
        );


    $("rotateRightBtn")
        .addEventListener(
            "click",
            () => {
                rotationY += .4;
            }
        );


    $("reset3DBtn")
        .addEventListener(
            "click",
            () => {

                rotationX = .2;

                rotationY = .5;

                zoom = 1;
            }
        );


    $("aiInput")
        .addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {

                    event.preventDefault();

                    askAI();
                }
            }
        );
}


/* =====================================================
   INIT
   ===================================================== */

function init() {

    if (
        lastStudyDate &&
        lastStudyDate !== getToday() &&
        lastStudyDate !== getYesterday()
    ) {

        streak = 0;

        localStorage.setItem(
            "bioStreak",
            "0"
        );
    }


    updateDashboard();

    updateAchievements();

    setupEvents();

    init3D();


    console.log(
        "🧬 Bio Quiz loaded successfully!"
    );
}


/* =====================================================
   START
   ===================================================== */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        init
    );

} else {

    init();
}
