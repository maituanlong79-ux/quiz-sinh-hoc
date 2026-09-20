"use strict";

/* =========================================================
   BIO QUIZ
   ========================================================= */


/* =========================
   HELPER
   ========================= */

function $(id) {
    return document.getElementById(id);
}

function escapeHTML(text) {
    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


/* =========================================================
   QUIZ DATA
   ========================================================= */

const quizData = {

    7: [

        {
            icon: "🔬",
            title: "Tế bào",
            description:
                "Tìm hiểu đơn vị cấu tạo cơ bản của cơ thể sống.",

            questions: [

                {
                    q: "Tế bào được xem là gì của cơ thể sống?",
                    answers: [
                        "Đơn vị cấu tạo và chức năng cơ bản",
                        "Một loại mô",
                        "Một loại cơ quan",
                        "Một hệ cơ quan"
                    ],
                    correct: 0
                },

                {
                    q: "Bộ phận nào chứa vật chất di truyền ở tế bào nhân thực?",
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
                        "Ribosome",
                        "Màng tế bào",
                        "Ti thể"
                    ],
                    correct: 2
                },

                {
                    q: "Tế bào thực vật có cấu trúc nào mà tế bào động vật không có?",
                    answers: [
                        "Nhân",
                        "Màng tế bào",
                        "Lục lạp",
                        "Tế bào chất"
                    ],
                    correct: 2
                },

                {
                    q: "Nhiều tế bào giống nhau cùng thực hiện một chức năng tạo thành?",
                    answers: [
                        "Mô",
                        "Cơ quan",
                        "Hệ cơ quan",
                        "Cơ thể"
                    ],
                    correct: 0
                }

            ]
        },


        {
            icon: "🌱",
            title: "Quang hợp",
            description:
                "Khám phá cách thực vật tạo chất hữu cơ.",

            questions: [

                {
                    q: "Quang hợp chủ yếu diễn ra ở bào quan nào?",
                    answers: [
                        "Ti thể",
                        "Lục lạp",
                        "Nhân",
                        "Không bào"
                    ],
                    correct: 1
                },

                {
                    q: "Quang hợp cần năng lượng chủ yếu từ đâu?",
                    answers: [
                        "Ánh sáng",
                        "Âm thanh",
                        "Gió",
                        "Nhiệt độ"
                    ],
                    correct: 0
                },

                {
                    q: "Trong quang hợp, cây hấp thụ khí nào?",
                    answers: [
                        "Oxygen",
                        "Nitrogen",
                        "Carbon dioxide",
                        "Hydrogen"
                    ],
                    correct: 2
                },

                {
                    q: "Sản phẩm hữu cơ quan trọng đầu tiên của quang hợp là?",
                    answers: [
                        "Glucose",
                        "Oxygen",
                        "Nitrogen",
                        "Nước"
                    ],
                    correct: 0
                },

                {
                    q: "Chất diệp lục có vai trò gì?",
                    answers: [
                        "Hấp thụ năng lượng ánh sáng",
                        "Tạo nước",
                        "Thải carbon dioxide",
                        "Tạo nitrogen"
                    ],
                    correct: 0
                }

            ]
        },


        {
            icon: "🌍",
            title: "Sinh thái",
            description:
                "Tìm hiểu quần thể, quần xã và chuỗi thức ăn.",

            questions: [

                {
                    q: "Quần thể là tập hợp các cá thể như thế nào?",
                    answers: [
                        "Khác loài, khác nơi sống",
                        "Cùng loài, sống trong một khu vực nhất định",
                        "Bất kỳ sinh vật nào",
                        "Chỉ gồm thực vật"
                    ],
                    correct: 1
                },

                {
                    q: "Sinh vật nào thường là sinh vật sản xuất?",
                    answers: [
                        "Động vật ăn thịt",
                        "Thực vật",
                        "Nấm",
                        "Vi khuẩn gây bệnh"
                    ],
                    correct: 1
                },

                {
                    q: "Chuỗi thức ăn thường bắt đầu bằng?",
                    answers: [
                        "Sinh vật phân giải",
                        "Động vật ăn thịt",
                        "Sinh vật sản xuất",
                        "Con người"
                    ],
                    correct: 2
                },

                {
                    q: "Sinh vật phân giải có vai trò gì?",
                    answers: [
                        "Phân giải chất hữu cơ",
                        "Tạo ánh sáng",
                        "Ăn tất cả động vật",
                        "Tạo oxygen"
                    ],
                    correct: 0
                },

                {
                    q: "Quần xã gồm các quần thể thuộc?",
                    answers: [
                        "Một loài",
                        "Nhiều loài",
                        "Chỉ thực vật",
                        "Chỉ động vật"
                    ],
                    correct: 1
                }

            ]
        }

    ],


    8: [

        {
            icon: "🦴",
            title: "Hệ vận động",
            description:
                "Tìm hiểu xương, cơ và sự vận động.",

            questions: [

                {
                    q: "Hệ vận động gồm những bộ phận chính nào?",
                    answers: [
                        "Xương và cơ",
                        "Tim và phổi",
                        "Não và tim",
                        "Da và tóc"
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
                    q: "Cơ co giúp cơ thể?",
                    answers: [
                        "Vận động",
                        "Tiêu hóa",
                        "Nghe",
                        "Nhìn"
                    ],
                    correct: 0
                },

                {
                    q: "Khớp có vai trò gì?",
                    answers: [
                        "Nối các xương",
                        "Tạo máu duy nhất",
                        "Trao đổi khí",
                        "Tạo hormone"
                    ],
                    correct: 0
                },

                {
                    q: "Cơ bám vào xương nhờ?",
                    answers: [
                        "Gân",
                        "Máu",
                        "Da",
                        "Sụn"
                    ],
                    correct: 0
                }

            ]
        },


        {
            icon: "❤️",
            title: "Tuần hoàn",
            description:
                "Tìm hiểu tim, máu và hệ tuần hoàn.",

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
                    q: "Máu có nhiệm vụ vận chuyển?",
                    answers: [
                        "Oxygen và chất dinh dưỡng",
                        "Chỉ nước",
                        "Chỉ carbon dioxide",
                        "Chỉ hormone"
                    ],
                    correct: 0
                },

                {
                    q: "Động mạch đưa máu?",
                    answers: [
                        "Về tim",
                        "Ra khỏi tim",
                        "Vào phổi בלבד",
                        "Vào dạ dày"
                    ],
                    correct: 1
                },

                {
                    q: "Tế bào máu nào vận chuyển oxygen chủ yếu?",
                    answers: [
                        "Hồng cầu",
                        "Bạch cầu",
                        "Tiểu cầu",
                        "Tế bào thần kinh"
                    ],
                    correct: 0
                },

                {
                    q: "Tim co bóp để?",
                    answers: [
                        "Đẩy máu đi",
                        "Tạo thức ăn",
                        "Lọc nước",
                        "Tạo xương"
                    ],
                    correct: 0
                }

            ]
        },


        {
            icon: "🫁",
            title: "Hô hấp",
            description:
                "Khám phá quá trình trao đổi khí.",

            questions: [

                {
                    q: "Cơ quan chính của hệ hô hấp là?",
                    answers: [
                        "Phổi",
                        "Tim",
                        "Gan",
                        "Thận"
                    ],
                    correct: 0
                },

                {
                    q: "Trao đổi khí chủ yếu diễn ra ở?",
                    answers: [
                        "Phế nang",
                        "Khí quản",
                        "Mũi",
                        "Thanh quản"
                    ],
                    correct: 0
                },

                {
                    q: "Cơ thể hấp thụ khí nào để hô hấp?",
                    answers: [
                        "Oxygen",
                        "Carbon dioxide",
                        "Nitrogen",
                        "Hydrogen"
                    ],
                    correct: 0
                },

                {
                    q: "Hô hấp thải ra khí?",
                    answers: [
                        "Oxygen",
                        "Carbon dioxide",
                        "Hydrogen",
                        "Helium"
                    ],
                    correct: 1
                },

                {
                    q: "Cơ quan giúp dẫn không khí xuống phổi là?",
                    answers: [
                        "Khí quản",
                        "Dạ dày",
                        "Thận",
                        "Ruột"
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
            description:
                "Tìm hiểu vật chất di truyền và cấu trúc ADN.",

            questions: [

                {
                    q: "ADN có mấy loại nucleotide?",
                    answers: [
                        "2",
                        "3",
                        "4",
                        "5"
                    ],
                    correct: 2
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
                    q: "ADN có chức năng quan trọng nào?",
                    answers: [
                        "Lưu giữ thông tin di truyền",
                        "Tiêu hóa thức ăn",
                        "Bơm máu",
                        "Trao đổi khí"
                    ],
                    correct: 0
                },

                {
                    q: "Hai mạch ADN liên kết với nhau chủ yếu nhờ?",
                    answers: [
                        "Liên kết bổ sung giữa các base",
                        "Chất béo",
                        "Protein cơ",
                        "Nước"
                    ],
                    correct: 0
                }

            ]
        },


        {
            icon: "🧬",
            title: "ARN",
            description:
                "Khám phá ARN và vai trò trong tế bào.",

            questions: [

                {
                    q: "ARN có loại base nào thay cho T của ADN?",
                    answers: [
                        "A",
                        "U",
                        "G",
                        "X"
                    ],
                    correct: 1
                },

                {
                    q: "ARN thường có?",
                    answers: [
                        "Một mạch",
                        "Ba mạch",
                        "Bốn mạch",
                        "Không có mạch"
                    ],
                    correct: 0
                },

                {
                    q: "mARN có vai trò gì?",
                    answers: [
                        "Mang thông tin mã hóa protein",
                        "Co cơ",
                        "Vận chuyển oxygen",
                        "Tạo xương"
                    ],
                    correct: 0
                },

                {
                    q: "Quá trình tổng hợp ARN dựa trên khuôn ADN gọi là?",
                    answers: [
                        "Phiên mã",
                        "Dịch mã",
                        "Nguyên phân",
                        "Thụ tinh"
                    ],
                    correct: 0
                },

                {
                    q: "Protein được tổng hợp dựa trên thông tin từ?",
                    answers: [
                        "mARN",
                        "Nước",
                        "Oxygen",
                        "Lipid"
                    ],
                    correct: 0
                }

            ]
        },


        {
            icon: "🧫",
            title: "Nguyên phân",
            description:
                "Tìm hiểu quá trình phân chia tế bào.",

            questions: [

                {
                    q: "Một tế bào mẹ nguyên phân tạo ra?",
                    answers: [
                        "2 tế bào con",
                        "3 tế bào con",
                        "4 tế bào con",
                        "8 tế bào con"
                    ],
                    correct: 0
                },

                {
                    q: "Các tế bào con sau nguyên phân thường có?",
                    answers: [
                        "Bộ NST giống tế bào mẹ",
                        "Một nửa NST",
                        "Gấp đôi NST",
                        "Không có NST"
                    ],
                    correct: 0
                },

                {
                    q: "Nguyên phân có vai trò quan trọng trong?",
                    answers: [
                        "Sinh trưởng và sửa chữa mô",
                        "Tiêu hóa",
                        "Trao đổi khí",
                        "Lọc máu"
                    ],
                    correct: 0
                },

                {
                    q: "Trước khi tế bào phân chia, ADN?",
                    answers: [
                        "Nhân đôi",
                        "Biến mất",
                        "Không thay đổi",
                        "Bị phân hủy hoàn toàn"
                    ],
                    correct: 0
                },

                {
                    q: "Nguyên phân xảy ra chủ yếu ở?",
                    answers: [
                        "Tế bào sinh dưỡng",
                        "Chỉ tinh trùng",
                        "Chỉ trứng",
                        "Chỉ vi khuẩn"
                    ],
                    correct: 0
                }

            ]
        }

    ]

};


/* =========================================================
   GAME STATE
   ========================================================= */

let currentClass = 7;
let currentTopic = 0;
let currentQuestion = 0;

let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

let correctStreak = 0;

let selectedAnswer = false;

let timeLeft = 30;
let timerInterval = null;

let quizEarnedXP = 0;

let lastAIQuestion = "";
let lastAIAnswer = "";


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

let streak =
    Number(localStorage.getItem("bioStreak")) || 0;

let lastStudyDate =
    localStorage.getItem("bioLastStudyDate") || "";

let xp =
    Number(localStorage.getItem("bioXP")) || 0;

let achievements;

try {

    achievements =
        JSON.parse(
            localStorage.getItem("bioAchievements")
        ) || [];

    if (!Array.isArray(achievements)) {
        achievements = [];
    }

} catch {

    achievements = [];
}


/* =========================================================
   SCREEN
   ========================================================= */

function showScreen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });

    const target = $(id);

    if (target) {
        target.classList.add("active");
    }

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

    showScreen("classScreen");

}


/* =========================================================
   SELECT CLASS
   ========================================================= */

function selectClass(classNumber) {

    if (!quizData[classNumber]) {
        return;
    }

    currentClass = classNumber;

    renderTopics();

    showScreen("topicScreen");
}


/* =========================================================
   TOPICS
   ========================================================= */

function renderTopics() {

    const grid = $("topicGrid");

    if (!grid) return;

    grid.innerHTML = "";

    const topics = quizData[currentClass];

    $("selectedClassBadge").textContent =
        `SINH HỌC ${currentClass}`;

    $("topicTitle").textContent =
        `Chủ đề Sinh học ${currentClass}`;


    topics.forEach((topic, index) => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className = "topic-card";

        button.innerHTML = `

            <div class="topic-icon">
                ${topic.icon}
            </div>

            <h3>
                ${escapeHTML(topic.title)}
            </h3>

            <p>
                ${escapeHTML(topic.description)}
            </p>

            <div class="topic-meta">
                📝 ${topic.questions.length} câu
                &nbsp;&nbsp; →
            </div>

        `;

        button.addEventListener(
            "click",
            () => startQuiz(index)
        );

        grid.appendChild(button);

    });

}


/* =========================================================
   START QUIZ
   ========================================================= */

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


/* =========================================================
   LOAD QUESTION
   ========================================================= */

function loadQuestion() {

    stopTimer();

    selectedAnswer = false;

    const topic =
        quizData[currentClass][currentTopic];

    const question =
        topic.questions[currentQuestion];


    if (!question) {
        return;
    }


    $("questionNumber").textContent =
        `Câu ${currentQuestion + 1}/${topic.questions.length}`;

    $("questionCategory").textContent =
        `${topic.icon} ${topic.title}`;

    $("questionText").textContent =
        question.q;

    $("scoreDisplay").textContent =
        `Điểm: ${score}`;


    const answers =
        $("answers");

    answers.innerHTML = "";


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "answer-btn";

            button.innerHTML =
                `${String.fromCharCode(65 + index)}. ${escapeHTML(answer)}`;


            button.addEventListener(
                "click",
                () => checkAnswer(index, button)
            );


            answers.appendChild(button);

        }
    );


    $("nextButton").style.display = "none";

    updateQuizProgress();

    startTimer();
}


/* =========================================================
   PROGRESS
   ========================================================= */

function updateQuizProgress() {

    const topic =
        quizData[currentClass][currentTopic];

    const percent =
        ((currentQuestion + 1) /
            topic.questions.length) * 100;


    $("quizProgress").style.width =
        percent + "%";
}


/* =========================================================
   TIMER
   ========================================================= */

function startTimer() {

    stopTimer();

    timeLeft = 30;

    updateTimer();


    timerInterval =
        setInterval(() => {

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

    if (!timer) return;


    timer.textContent =
        `⏱️ ${timeLeft}s`;


    timer.classList.remove(
        "timer-warning",
        "timer-danger"
    );


    if (timeLeft <= 10) {

        timer.classList.add(
            "timer-warning"
        );

    }


    if (timeLeft <= 5) {

        timer.classList.add(
            "timer-danger"
        );

    }
}


/* =========================================================
   TIME OUT
   ========================================================= */

function timeOut() {

    if (selectedAnswer) {
        return;
    }

    selectedAnswer = true;

    wrongAnswers++;

    correctStreak = 0;


    document
        .querySelectorAll(".answer-btn")
        .forEach(button => {

            button.disabled = true;

        });


    const topic =
        quizData[currentClass][currentTopic];

    const question =
        topic.questions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    if (buttons[question.correct]) {

        buttons[
            question.correct
        ].classList.add("correct");

    }


    showToast(
        "⏰",
        "Hết giờ! Đáp án đúng đã được đánh dấu."
    );


    $("nextButton").style.display =
        "block";
}


/* =========================================================
   CHECK ANSWER
   ========================================================= */

function checkAnswer(
    index,
    clickedButton
) {

    if (selectedAnswer) {
        return;
    }

    selectedAnswer = true;

    stopTimer();


    const topic =
        quizData[currentClass][currentTopic];

    const question =
        topic.questions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    buttons.forEach(button => {

        button.disabled = true;

    });


    if (index === question.correct) {

        clickedButton.classList.add(
            "correct"
        );

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

            unlockAchievement(
                "memory"
            );

        }

    } else {

        clickedButton.classList.add(
            "wrong"
        );


        if (buttons[question.correct]) {

            buttons[
                question.correct
            ].classList.add("correct");

        }


        wrongAnswers++;

        correctStreak = 0;


        showToast(
            "💡",
            "Chưa đúng! Hãy xem đáp án đúng nhé."
        );

    }


    $("scoreDisplay").textContent =
        `Điểm: ${score}`;

    $("nextButton").style.display =
        "block";
}


/* =========================================================
   NEXT QUESTION
   ========================================================= */

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


/* =========================================================
   FINISH QUIZ
   ========================================================= */

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

        unlockAchievement(
            "grade9"
        );

    }


    if (
        currentClass === 9 &&
        currentTopic === 0 &&
        correctAnswers >= 3
    ) {

        unlockAchievement(
            "dna"
        );

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
            correctAnswers /
            total *
            100
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


/* =========================================================
   RESTART / QUIT
   ========================================================= */

function restartQuiz() {

    startQuiz(currentTopic);

}


function quitQuiz() {

    stopTimer();

    renderTopics();

    showScreen("topicScreen");

}


/* =========================================================
   DATE
   ========================================================= */

function getToday() {

    const d = new Date();

    return [
        d.getFullYear(),
        String(
            d.getMonth() + 1
        ).padStart(2, "0"),
        String(
            d.getDate()
        ).padStart(2, "0")
    ].join("-");
}


function getYesterday() {

    const d = new Date();

    d.setDate(
        d.getDate() - 1
    );

    return [
        d.getFullYear(),
        String(
            d.getMonth() + 1
        ).padStart(2, "0"),
        String(
            d.getDate()
        ).padStart(2, "0")
    ].join("-");
}


/* =========================================================
   STREAK
   ========================================================= */

function updateStreak() {

    const today =
        getToday();


    if (!lastStudyDate) {

        streak = 1;

    } else if (
        lastStudyDate === today
    ) {

        return;

    } else if (
        lastStudyDate ===
        getYesterday()
    ) {

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

        unlockAchievement(
            "streak"
        );

        showToast(
            "🔥",
            "3 ngày liên tiếp! +50 XP"
        );

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
        String(xp)
    );

    updateDashboard();
}


/* =========================================================
   LEVEL
   ========================================================= */

function getLevel() {

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


/* =========================================================
   DASHBOARD
   ========================================================= */

function updateDashboard() {

    const level =
        getLevel();


    let progress = 100;


    if (
        level.max !==
        level.min
    ) {

        progress =
            (
                (xp - level.min) /
                (level.max - level.min)
            ) * 100;

    }


    if ($("headerStreak")) {

        $("headerStreak").textContent =
            streak;

    }


    if ($("headerXP")) {

        $("headerXP").textContent =
            `${xp} XP`;

    }


    if ($("streakNumber")) {

        $("streakNumber").textContent =
            streak;

    }


    if ($("streakText")) {

        $("streakText").textContent =
            streak > 0
                ? `Bạn đã học ${streak} ngày liên tiếp`
                : "Bắt đầu học hôm nay!";

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
            level.max === level.min
                ? `${xp} XP`
                : `${xp} / ${level.max} XP`;

    }


    if ($("levelProgress")) {

        $("levelProgress").style.width =
            Math.min(
                100,
                Math.max(
                    0,
                    progress
                )
            ) + "%";

    }


    if ($("achievementNumber")) {

        $("achievementNumber").textContent =
            achievements.length;

    }

}


/* =========================================================
   ACHIEVEMENTS
   ========================================================= */

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

    grade9: {
        icon: "🏆",
        title: "Xuất sắc"
    }

};


function unlockAchievement(id) {

    if (
        achievements.includes(id)
    ) {
        return;
    }


    if (
        !achievementData[id]
    ) {
        return;
    }


    achievements.push(id);


    localStorage.setItem(
        "bioAchievements",
        JSON.stringify(
            achievements
        )
    );


    showToast(
        achievementData[id].icon,
        "Mở khóa: " +
        achievementData[id].title
    );


    updateAchievements();

}


function updateAchievements() {

    Object.keys(
        achievementData
    ).forEach(id => {

        const element =
            $(
                "achievement-" +
                id
            );


        if (!element) {
            return;
        }


        if (
            achievements.includes(id)
        ) {

            element.classList.add(
                "unlocked"
            );

        } else {

            element.classList.remove(
                "unlocked"
            );

        }

    });


    if ($("achievementNumber")) {

        $("achievementNumber").textContent =
            achievements.length;

    }

}


/* =========================================================
   3D ENGINE
   ========================================================= */

let scene;
let camera;
let renderer;

let current3DObject;

let targetRotationX = 0;
let targetRotationY = 0;

let rotationX = 0;
let rotationY = 0;

let cameraDistance = 7;

let isDragging = false;

let previousPointerX = 0;
let previousPointerY = 0;


/* =========================================================
   3D INIT
   ========================================================= */

function init3D() {

    const canvas =
        $("threeCanvas");


    if (!canvas) {
        return;
    }


    if (
        typeof THREE ===
        "undefined"
    ) {

        console.error(
            "Three.js chưa tải được."
        );

        return;

    }


    scene =
        new THREE.Scene();


    scene.background =
        new THREE.Color(
            0x052e16
        );


    camera =
        new THREE.PerspectiveCamera(
            45,
            canvas.clientWidth /
                canvas.clientHeight,
            0.1,
            100
        );


    camera.position.set(
        0,
        1.3,
        cameraDistance
    );


    renderer =
        new THREE.WebGLRenderer({
            canvas,
            antialias: true,
            alpha: false
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


    renderer.shadowMap.enabled =
        true;


    renderer.shadowMap.type =
        THREE.PCFSoftShadowMap;


    /* LIGHT */

    const ambient =
        new THREE.HemisphereLight(
            0xffffff,
            0x14532d,
            2.2
        );

    scene.add(ambient);


    const light =
        new THREE.DirectionalLight(
            0xffffff,
            3
        );

    light.position.set(
        4,
        7,
        5
    );

    light.castShadow = true;

    scene.add(light);


    const fill =
        new THREE.PointLight(
            0x86efac,
            25,
            15
        );

    fill.position.set(
        -4,
        2,
        3
    );

    scene.add(fill);


    createMicroscope();


    setup3DControls();


    window.addEventListener(
        "resize",
        resize3D
    );


    animate3D();

}


/* =========================================================
   CREATE MICROSCOPE
   ========================================================= */

function createMicroscope() {

    clear3DObject();


    current3DObject =
        new THREE.Group();


    /* BASE */

    const base =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                3.8,
                0.45,
                2.5
            ),

            new THREE.MeshStandardMaterial({
                color: 0x263238,
                metalness: 0.8,
                roughness: 0.25
            })
        );


    base.position.y = -1.65;

    base.castShadow = true;

    base.receiveShadow = true;

    current3DObject.add(base);


    /* BASE TOP */

    const baseTop =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                3.2,
                0.2,
                2
            ),

            new THREE.MeshStandardMaterial({
                color: 0x455a64,
                metalness: 0.7,
                roughness: 0.3
            })
        );


    baseTop.position.y =
        -1.38;

    current3DObject.add(baseTop);


    /* STAND */

    const stand =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                0.65,
                4,
                0.65
            ),

            new THREE.MeshStandardMaterial({
                color: 0x37474f,
                metalness: 0.75,
                roughness: 0.3
            })
        );


    stand.position.set(
        -1.2,
        0.2,
        0
    );


    stand.rotation.z =
        -0.18;


    stand.castShadow = true;

    current3DObject.add(stand);


    /* ARM */

    const arm =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                0.65,
                2.7,
                0.65
            ),

            new THREE.MeshStandardMaterial({
                color: 0x546e7a,
                metalness: 0.75,
                roughness: 0.25
            })
        );


    arm.position.set(
        -0.35,
        1.25,
        0
    );


    arm.rotation.z =
        -0.55;


    arm.castShadow = true;

    current3DObject.add(arm);


    /* HEAD */

    const head =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.75,
                0.8,
                1.1,
                32
            ),

            new THREE.MeshStandardMaterial({
                color: 0x607d8b,
                metalness: 0.8,
                roughness: 0.25
            })
        );


    head.position.set(
        0.6,
        2.25,
        0
    );


    head.rotation.z =
        -0.55;


    head.castShadow = true;

    current3DObject.add(head);


    /* EYEPIECE */

    const eyepiece =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.32,
                0.38,
                1.2,
                32
            ),

            new THREE.MeshStandardMaterial({
                color: 0x111827,
                metalness: 0.8,
                roughness: 0.2
            })
        );


    eyepiece.position.set(
        1.1,
        2.9,
        0
    );


    eyepiece.rotation.z =
        -0.55;


    current3DObject.add(
        eyepiece
    );


    /* STAGE */

    const stage =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                2.1,
                0.18,
                1.7
            ),

            new THREE.MeshStandardMaterial({
                color: 0x212121,
                metalness: 0.7,
                roughness: 0.35
            })
        );


    stage.position.set(
        0,
        -0.55,
        0
    );


    stage.castShadow = true;

    current3DObject.add(stage);


    /* STAGE GLASS */

    const glass =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.45,
                0.45,
                0.03,
                32
            ),

            new THREE.MeshStandardMaterial({
                color: 0x93c5fd,
                transparent: true,
                opacity: 0.65,
                roughness: 0.1
            })
        );


    glass.position.set(
        0,
        -0.42,
        0
    );


    current3DObject.add(
        glass
    );


    /* OBJECTIVE HOLDER */

    const holder =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.4,
                0.5,
                0.35,
                32
            ),

            new THREE.MeshStandardMaterial({
                color: 0x263238,
                metalness: 0.8,
                roughness: 0.2
            })
        );


    holder.position.set(
        0,
        -0.1,
        0
    );


    current3DObject.add(
        holder
    );


    /* OBJECTIVES */

    for (
        let i = -1;
        i <= 1;
        i++
    ) {

        const objective =
            new THREE.Mesh(
                new THREE.CylinderGeometry(
                    0.13,
                    0.2,
                    0.8,
                    24
                ),

                new THREE.MeshStandardMaterial({
                    color:
                        i === 0
                            ? 0xef4444
                            : 0xd1d5db,

                    metalness: 0.8,
                    roughness: 0.2
                })
            );


        objective.position.set(
            i * 0.25,
            -0.55,
            0
        );


        current3DObject.add(
            objective
        );

    }


    /* FOCUS KNOBS */

    createKnob(
        -0.7,
        0.3,
        0.5
    );

    createKnob(
        -0.7,
        0.3,
        -0.5
    );


    /* LAMP */

    const lamp =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.45,
                0.55,
                0.25,
                32
            ),

            new THREE.MeshStandardMaterial({
                color: 0xfbbf24,
                emissive: 0xf59e0b,
                emissiveIntensity: 0.8
            })
        );


    lamp.position.set(
        0,
        -1.05,
        0
    );


    current3DObject.add(lamp);


    /* LAMP LIGHT */

    const lampLight =
        new THREE.PointLight(
            0xfbbf24,
            5,
            4
        );


    lampLight.position.set(
        0,
        -0.8,
        0
    );


    current3DObject.add(
        lampLight
    );


    scene.add(
        current3DObject
    );


    reset3D();

}


function createKnob(
    x,
    y,
    z
) {

    const knob =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.38,
                0.38,
                0.18,
                32
            ),

            new THREE.MeshStandardMaterial({
                color: 0x90a4ae,
                metalness: 0.8,
                roughness: 0.25
            })
        );


    knob.position.set(
        x,
        y,
        z
    );


    knob.rotation.x =
        Math.PI / 2;


    current3DObject.add(
        knob
    );

}


/* =========================================================
   CREATE CELL
   ========================================================= */

function createCell() {

    clear3DObject();


    current3DObject =
        new THREE.Group();


    /* CYTOPLASM */

    const cytoplasm =
        new THREE.Mesh(
            new THREE.SphereGeometry(
                2.15,
                64,
                64
            ),

            new THREE.MeshPhysicalMaterial({
                color: 0x86efac,
                transparent: true,
                opacity: 0.38,
                roughness: 0.2,
                transmission: 0.1,
                thickness: 0.5
            })
        );


    cytoplasm.scale.set(
        1.15,
        0.95,
        0.9
    );


    current3DObject.add(
        cytoplasm
    );


    /* CELL MEMBRANE */

    const membrane =
        new THREE.Mesh(
            new THREE.SphereGeometry(
                2.18,
                64,
                64
            ),

            new THREE.MeshPhysicalMaterial({
                color: 0x22c55e,
                transparent: true,
                opacity: 0.2,
                roughness: 0.15,
                metalness: 0.05,
                transmission: 0.2,
                side: THREE.DoubleSide
            })
        );


    membrane.scale.set(
        1.15,
        0.95,
        0.9
    );


    current3DObject.add(
        membrane
    );


    /* NUCLEUS */

    const nucleus =
        new THREE.Mesh(
            new THREE.SphereGeometry(
                0.75,
                48,
                48
            ),

            new THREE.MeshStandardMaterial({
                color: 0x7c3aed,
                roughness: 0.3,
                metalness: 0.15,
                emissive: 0x3b0764,
                emissiveIntensity: 0.25
            })
        );


    nucleus.position.set(
        -0.25,
        0.1,
        0.2
    );


    nucleus.scale.set(
        1.15,
        0.9,
        1
    );


    nucleus.castShadow = true;

    current3DObject.add(
        nucleus
    );


    /* NUCLEOLUS */

    const nucleolus =
        new THREE.Mesh(
            new THREE.SphereGeometry(
                0.23,
                32,
                32
            ),

            new THREE.MeshStandardMaterial({
                color: 0xf0abfc,
                roughness: 0.3
            })
        );


    nucleolus.position.set(
        -0.15,
        0.18,
        0.83
    );


    current3DObject.add(
        nucleolus
    );


    /* MITOCHONDRIA */

    const mitochondriaPositions = [

        [0.9, 0.7, 0.4],
        [0.9, -0.7, 0.2],
        [-0.9, -0.7, 0.5],
        [-1.0, 0.8, -0.4],
        [0.1, 1.0, -0.7],
        [0.2, -1.0, -0.5]

    ];


    mitochondriaPositions.forEach(
        position => {

            const mito =
                new THREE.Mesh(
                    new THREE.TorusGeometry(
                        0.28,
                        0.09,
                        12,
                        32
                    ),

                    new THREE.MeshStandardMaterial({
                        color: 0xf97316,
                        roughness: 0.3,
                        emissive: 0x7c2d12,
                        emissiveIntensity: 0.15
                    })
                );


            mito.position.set(
                position[0],
                position[1],
                position[2]
            );


            mito.rotation.x =
                Math.random() * 2;

            mito.rotation.y =
                Math.random() * 2;


            current3DObject.add(
                mito
            );

        }
    );


    /* SMALL ORGANELLES */

    for (
        let i = 0;
        i < 18;
        i++
    ) {

        const organelle =
            new THREE.Mesh(
                new THREE.SphereGeometry(
                    0.07 +
                    Math.random() * 0.06,
                    16,
                    16
                ),

                new THREE.MeshStandardMaterial({
                    color: 0xfde68a,
                    roughness: 0.4
                })
            );


        organelle.position.set(
            (Math.random() - 0.5) * 2.8,
            (Math.random() - 0.5) * 2.1,
            (Math.random() - 0.5) * 1.7
        );


        current3DObject.add(
            organelle
        );

    }


    scene.add(
        current3DObject
    );


    reset3D();

}


/* =========================================================
   CLEAR 3D
   ========================================================= */

function clear3DObject() {

    if (!current3DObject) {
        return;
    }


    scene.remove(
        current3DObject
    );


    current3DObject.traverse(
        object => {

            if (object.geometry) {

                object.geometry.dispose();

            }


            if (object.material) {

                if (
                    Array.isArray(
                        object.material
                    )
                ) {

                    object.material.forEach(
                        material =>
                            material.dispose()
                    );

                } else {

                    object.material.dispose();

                }

            }

        }
    );


    current3DObject = null;
}


/* =========================================================
   CHANGE MODEL
   ========================================================= */

function changeModel(type) {

    if (!scene) {
        return;
    }


    if (type === "cell") {

        createCell();


        $("modelTitle").textContent =
            "🧫 Tế bào";

        $("modelDescription").textContent =
            "Khám phá màng tế bào, nhân và các bào quan.";

        showToast(
            "🧫",
            "Đã mở mô hình tế bào 3D!"
        );

    } else {

        createMicroscope();


        $("modelTitle").textContent =
            "🔬 Kính hiển vi";

        $("modelDescription").textContent =
            "Kéo chuột hoặc vuốt màn hình để xoay kính hiển vi.";

        showToast(
            "🔬",
            "Đã mở kính hiển vi 3D!"
        );

    }

}


/* =========================================================
   3D CONTROLS
   ========================================================= */

function setup3DControls() {

    const canvas =
        $("threeCanvas");


    if (!canvas) {
        return;
    }


    canvas.addEventListener(
        "pointerdown",
        event => {

            isDragging = true;

            previousPointerX =
                event.clientX;

            previousPointerY =
                event.clientY;

            canvas.setPointerCapture(
                event.pointerId
            );

        }
    );


    canvas.addEventListener(
        "pointermove",
        event => {

            if (!isDragging) {
                return;
            }


            const dx =
                event.clientX -
                previousPointerX;

            const dy =
                event.clientY -
                previousPointerY;


            targetRotationY +=
                dx * 0.008;

            targetRotationX +=
                dy * 0.008;


            targetRotationX =
                Math.max(
                    -1.3,
                    Math.min(
                        1.3,
                        targetRotationX
                    )
                );


            previousPointerX =
                event.clientX;

            previousPointerY =
                event.clientY;

        }
    );


    canvas.addEventListener(
        "pointerup",
        () => {

            isDragging = false;

        }
    );


    canvas.addEventListener(
        "pointercancel",
        () => {

            isDragging = false;

        }
    );


    canvas.addEventListener(
        "wheel",
        event => {

            event.preventDefault();


            cameraDistance +=
                event.deltaY * 0.005;


            cameraDistance =
                Math.max(
                    4,
                    Math.min(
                        11,
                        cameraDistance
                    )
                );

        },
        {
            passive: false
        }
    );

}


function rotate3D(amount) {

    targetRotationY += amount;

}


function reset3D() {

    targetRotationX = 0;

    targetRotationY = 0;

    rotationX = 0;

    rotationY = 0;

    cameraDistance = 7;

}


function resize3D() {

    if (
        !renderer ||
        !camera
    ) {
        return;
    }


    const canvas =
        $("threeCanvas");


    const width =
        canvas.clientWidth;

    const height =
        canvas.clientHeight;


    if (
        width === 0 ||
        height === 0
    ) {
        return;
    }


    camera.aspect =
        width / height;

    camera.updateProjectionMatrix();


    renderer.setSize(
        width,
        height,
        false
    );

}


function animate3D() {

    requestAnimationFrame(
        animate3D
    );


    if (
        current3DObject
    ) {

        rotationX +=
            (
                targetRotationX -
                rotationX
            ) * 0.08;


        rotationY +=
            (
                targetRotationY -
                rotationY
            ) * 0.08;


        current3DObject.rotation.x =
            rotationX;


        current3DObject.rotation.y =
            rotationY;

    }


    if (camera) {

        camera.position.z +=
            (
                cameraDistance -
                camera.position.z
            ) * 0.08;

        camera.lookAt(
            0,
            0,
            0
        );

    }


    if (renderer && scene && camera) {

        renderer.render(
            scene,
            camera
        );

    }

}


/* =========================================================
   AI
   ========================================================= */

function askAI() {

    const input =
        $("aiInput");


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


function generateAIAnswer(
    question
) {

    const q =
        question
            .toLowerCase()
            .normalize("NFD")
            .replace(
                /[\u0300-\u036f]/g,
                ""
            );


    if (
        q.includes("adn") ||
        q.includes("dna")
    ) {

        return `

            <strong>🧬 ADN là gì?</strong>

            <p>
                ADN là vật chất di truyền
                chứa thông tin di truyền của
                sinh vật.
            </p>

            <p>
                ADN có 4 loại nucleotide:
                <strong>A, T, G, X</strong>.
            </p>

            <p>
                Quy tắc bổ sung:
                <strong>A - T</strong> và
                <strong>G - X</strong>.
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
                ARN là axit ribonucleic.
                ARN thường có một mạch.
            </p>

            <p>
                ARN có các base:
                <strong>A, U, G, X</strong>.
            </p>

            <p>
                Trong ARN,
                <strong>U</strong> thay cho
                <strong>T</strong> của ADN.
            </p>

        `;

    }


    if (
        q.includes("tim") ||
        q.includes("tuan hoan")
    ) {

        return `

            <strong>❤️ Tim hoạt động thế nào?</strong>

            <p>
                Tim là cơ quan trung tâm
                của hệ tuần hoàn.
            </p>

            <p>
                Tim co bóp để đẩy máu đi
                khắp cơ thể.
            </p>

        `;

    }


    if (
        q.includes("phoi") ||
        q.includes("ho hap") ||
        q.includes("tho")
    ) {

        return `

            <strong>🫁 Hô hấp là gì?</strong>

            <p>
                Hệ hô hấp giúp cơ thể lấy
                <strong>oxygen</strong> và
                thải <strong>carbon dioxide</strong>.
            </p>

            <p>
                Trao đổi khí chủ yếu diễn ra
                tại <strong>phế nang</strong>.
            </p>

        `;

    }


    if (
        q.includes("quang hop")
    ) {

        return `

            <strong>🌱 Quang hợp</strong>

            <p>
                Quang hợp là quá trình thực vật
                sử dụng năng lượng ánh sáng để
                tổng hợp chất hữu cơ.
            </p>

            <p>
                Quá trình này chủ yếu diễn ra
                ở <strong>lục lạp</strong>.
            </p>

        `;

    }


    if (
        q.includes("te bao") ||
        q.includes("cell")
    ) {

        return `

            <strong>🔬 Tế bào</strong>

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
        q.includes("nguyen phan")
    ) {

        return `

            <strong>🧫 Nguyên phân</strong>

            <p>
                Nguyên phân là quá trình một
                tế bào mẹ phân chia tạo thành
                <strong>2 tế bào con</strong>.
            </p>

            <p>
                Các tế bào con thường có bộ
                nhiễm sắc thể giống tế bào mẹ.
            </p>

        `;

    }


    if (
        q.includes("xuong") ||
        q.includes("co") ||
        q.includes("van dong")
    ) {

        return `

            <strong>🦴 Hệ vận động</strong>

            <p>
                Hệ vận động gồm hệ xương
                và hệ cơ.
            </p>

            <p>
                Sự phối hợp giữa xương và cơ
                giúp cơ thể vận động.
            </p>

        `;

    }


    return `

        <strong>🤖 Trợ lý Sinh học</strong>

        <p>
            Mình chưa tìm thấy câu trả lời
            phù hợp trong dữ liệu hiện tại.
        </p>

        <p>
            Bạn thử hỏi:
        </p>

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


/* =========================================================
   CHAT
   ========================================================= */

function addUserMessage(
    text
) {

    const box =
        $("aiMessages");


    const message =
        document.createElement(
            "div"
        );


    message.className =
        "ai-message user-message";


    message.innerHTML =
        `<div>
            ${escapeHTML(text)}
        </div>`;


    box.appendChild(
        message
    );


    box.scrollTop =
        box.scrollHeight;

}


function addAIMessage(
    html
) {

    const box =
        $("aiMessages");


    const message =
        document.createElement(
            "div"
        );


    message.className =
        "ai-message assistant-message";


    message.innerHTML = `

        <div class="message-avatar">
            🤖
        </div>

        <div>
            ${html}
        </div>

    `;


    box.appendChild(
        message
    );


    box.scrollTop =
        box.scrollHeight;

}


/* =========================================================
   MICROPHONE
   ========================================================= */

function startVoiceInput() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        showToast(
            "⚠️",
            "Chrome của bạn không hỗ trợ microphone."
        );

        return;

    }


    const button =
        $("micButton");

    const input =
        $("aiInput");


    if (!button || !input) {
        return;
    }


    if (
        button.classList.contains(
            "recording"
        )
    ) {

        return;

    }


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


    let finalText = "";


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
                let i =
                    event.resultIndex;

                i <
                event.results.length;

                i++
            ) {

                transcript +=
                    event.results[i][0]
                        .transcript;

            }


            transcript =
                transcript.trim();


            if (transcript) {

                input.value =
                    transcript;

            }


            const last =
                event.results[
                    event.results.length - 1
                ];


            if (
                last &&
                last.isFinal
            ) {

                finalText =
                    transcript;

            }

        };


    recognition.onerror =
        event => {

            console.error(
                "Micro error:",
                event.error
            );


            if (
                event.error ===
                "not-allowed"
            ) {

                showToast(
                    "🔒",
                    "Bạn chưa cho phép microphone."
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
                    "Micro lỗi: " +
                    event.error
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


            if (finalText) {

                input.value =
                    finalText;

                showToast(
                    "✅",
                    "Đã nhận giọng nói!"
                );

            }

        };


    try {

        recognition.start();

    } catch (error) {

        console.error(
            error
        );

        button.classList.remove(
            "recording"
        );

        button.textContent =
            "🎤";

    }

}


/* =========================================================
   SPEECH
   ========================================================= */

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
        document.createElement(
            "div"
        );


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
            "💬",
            "Hãy hỏi trợ lý trước nhé!"
        );

        return;

    }


    speak(
        lastAIAnswer
    );

}


/* =========================================================
   AI → 3D
   ========================================================= */

function open3DFromAI() {

    if (!lastAIQuestion) {

        showToast(
            "💬",
            "Hãy hỏi trợ lý trước nhé!"
        );

        return;

    }


    const q =
        lastAIQuestion
            .toLowerCase()
            .normalize("NFD")
            .replace(
                /[\u0300-\u036f]/g,
                ""
            );


    if (
        q.includes("te bao") ||
        q.includes("cell")
    ) {

        changeModel(
            "cell"
        );

    } else {

        changeModel(
            "microscope"
        );

    }


    $("lab3d")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   ENTER KEY
   ========================================================= */

function setupInput() {

    const input =
        $("aiInput");


    if (!input) {
        return;
    }


    input.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Enter"
            ) {

                event.preventDefault();

                askAI();

            }

        }
    );

}


/* =========================================================
   SHARE
   ========================================================= */

async function shareQuiz() {

    const url =
        window.location.href;


    if (
        navigator.share
    ) {

        try {

            await navigator.share({

                title:
                    "Bio Quiz Sinh học",

                text:
                    "🧬 Thử Bio Quiz Sinh học nhé!",

                url

            });

            return;

        } catch (error) {

            console.log(
                error
            );

        }

    }


    try {

        await navigator.clipboard
            .writeText(url);


        showToast(
            "🔗",
            "Đã sao chép link!"
        );

    } catch {

        showToast(
            "🔗",
            "Hãy sao chép link trên thanh địa chỉ."
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
        $("toast");


    if (!toast) {
        return;
    }


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
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );

}


/* =========================================================
   INIT
   ========================================================= */

function init() {

    /* Reset streak nếu bỏ học quá 1 ngày */

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

    setupInput();

    init3D();


    console.log(
        "🧬 Bio Quiz loaded successfully!"
    );

}


/* =========================================================
   START
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        init
    );

} else {

    init();

}
