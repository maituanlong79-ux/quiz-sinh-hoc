const questions = [

    {
        question: "Đơn vị cơ bản của sự sống là gì?",
        answers: ["Mô", "Tế bào", "Cơ quan", "Hệ cơ quan"],
        correct: 1
    },

    {
        question: "ADN có chức năng chủ yếu nào?",
        answers: [
            "Lưu trữ thông tin di truyền",
            "Tiêu hóa thức ăn",
            "Vận chuyển oxygen",
            "Tạo năng lượng"
        ],
        correct: 0
    },

    {
        question: "Cơ quan nào có chức năng bơm máu?",
        answers: [
            "Phổi",
            "Gan",
            "Tim",
            "Dạ dày"
        ],
        correct: 2
    },

    {
        question: "Thực vật tạo chất hữu cơ chủ yếu nhờ quá trình nào?",
        answers: [
            "Hô hấp",
            "Quang hợp",
            "Tiêu hóa",
            "Bài tiết"
        ],
        correct: 1
    },

    {
        question: "Gen nằm trên cấu trúc nào?",
        answers: [
            "Nhiễm sắc thể",
            "Màng tế bào",
            "Ribosome",
            "Không bào"
        ],
        correct: 0
    },

    {
        question: "ADN thường được cấu tạo từ mấy mạch?",
        answers: [
            "1 mạch",
            "2 mạch",
            "3 mạch",
            "4 mạch"
        ],
        correct: 1
    },

    {
        question: "Bazơ nitơ nào có trong ADN?",
        answers: [
            "Uracil",
            "Thymine",
            "Cả hai",
            "Không có bazơ"
        ],
        correct: 1
    },

    {
        question: "ARN sử dụng bazơ nào thay cho Thymine?",
        answers: [
            "Adenine",
            "Guanine",
            "Uracil",
            "Cytosine"
        ],
        correct: 2
    },

    {
        question: "Cơ quan thực hiện trao đổi khí chủ yếu ở người là gì?",
        answers: [
            "Tim",
            "Phổi",
            "Gan",
            "Thận"
        ],
        correct: 1
    },

    {
        question: "Quang hợp cần năng lượng chủ yếu từ đâu?",
        answers: [
            "Ánh sáng",
            "Âm thanh",
            "Gió",
            "Nước"
        ],
        correct: 0
    }

];


let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer;


// BẮT ĐẦU QUIZ
function startQuiz() {

    currentQuestion = 0;
    score = 0;

    document.getElementById("start-button").style.display = "none";
    document.getElementById("result").style.display = "none";

    showQuestion();
}


// HIỂN THỊ CÂU HỎI
function showQuestion() {

    clearInterval(timer);

    timeLeft = 30;

    document.getElementById("timer").textContent = timeLeft;

    const question = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        "Câu " + (currentQuestion + 1) + "/" + questions.length;

    document.getElementById("question").textContent =
        question.question;

    const answers = document.getElementById("answers");

    answers.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.textContent = answer;

        button.classList.add("answer");

        button.onclick = function () {
            selectAnswer(index);
        };

        answers.appendChild(button);
    });


    updateProgress();

    document.getElementById("next-button").style.display = "none";

    startTimer();
}


// KIỂM TRA ĐÁP ÁN
function selectAnswer(index) {

    const buttons =
        document.querySelectorAll(".answer");

    const correct =
        questions[currentQuestion].correct;


    // Không cho chọn lại
    buttons.forEach(button => {
        button.disabled = true;
    });


    if (index === correct) {

        buttons[index].classList.add("correct");

        score++;

    } else {

        buttons[index].classList.add("wrong");

        buttons[correct].classList.add("correct");

    }


    clearInterval(timer);

    document.getElementById("next-button").style.display =
        "inline-block";
}


// ĐẾM THỜI GIAN
function startTimer() {

    timer = setInterval(() => {

        timeLeft--;

        document.getElementById("timer").textContent =
            timeLeft;


        if (timeLeft <= 0) {

            clearInterval(timer);

            timeUp();

        }

    }, 1000);
}


// HẾT GIỜ
function timeUp() {

    const buttons =
        document.querySelectorAll(".answer");

    const correct =
        questions[currentQuestion].correct;


    buttons.forEach(button => {
        button.disabled = true;
    });


    buttons[correct].classList.add("correct");

    document.getElementById("next-button").style.display =
        "inline-block";
}


// CÂU TIẾP THEO
function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        finishQuiz();

    }
}


// KẾT THÚC
function finishQuiz() {

    clearInterval(timer);

    document.getElementById("question").textContent =
        "🎉 Hoàn thành bài!";

    document.getElementById("answers").innerHTML = "";

    document.getElementById("next-button").style.display =
        "none";

    document.getElementById("quiz-box").style.display =
        "none";


    const result =
        document.getElementById("result");

    result.style.display = "block";

    result.innerHTML =
        `
        <h2>🏆 Kết quả</h2>

        <p>Bạn đạt:</p>

        <strong>${score} / ${questions.length}</strong>

        <p>${getMessage()}</p>

        <button onclick="restartQuiz()">
            🔄 Làm lại
        </button>
        `;
}


// NHẬN XÉT
function getMessage() {

    const percent =
        score / questions.length * 100;


    if (percent === 100) {
        return "🌟 Xuất sắc!";
    }

    if (percent >= 80) {
        return "🎉 Rất tốt!";
    }

    if (percent >= 60) {
        return "👍 Khá tốt!";
    }

    if (percent >= 40) {
        return "📚 Hãy ôn tập thêm nhé!";
    }

    return "💪 Cố gắng thêm nhé!";
}


// THANH TIẾN TRÌNH
function updateProgress() {

    const progress =
        (currentQuestion / questions.length) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";
}


// LÀM LẠI
function restartQuiz() {

    document.getElementById("quiz-box").style.display =
        "block";

    document.getElementById("start-button").style.display =
        "none";

    startQuiz();
}