/* =========================================
   QUIZ SINH HỌC
   ========================================= */


/* =========================
   DỮ LIỆU QUIZ
   ========================= */

const quizData = {

    7: {

        "Tế bào": [
            {
                question: "Đơn vị cấu tạo cơ bản của cơ thể sống là gì?",
                answers: [
                    "Tế bào",
                    "Mô",
                    "Cơ quan",
                    "Hệ cơ quan"
                ],
                correct: 0,
                explanation: "Tế bào là đơn vị cấu tạo và chức năng cơ bản của cơ thể sống."
            },

            {
                question: "Bộ phận nào điều khiển các hoạt động của tế bào nhân thực?",
                answers: [
                    "Màng tế bào",
                    "Nhân",
                    "Ribosome",
                    "Không bào"
                ],
                correct: 1,
                explanation: "Nhân chứa vật chất di truyền và điều khiển nhiều hoạt động của tế bào."
            },

            {
                question: "Tế bào thực vật có bào quan nào mà tế bào động vật thường không có?",
                answers: [
                    "Nhân",
                    "Ti thể",
                    "Lục lạp",
                    "Ribosome"
                ],
                correct: 2,
                explanation: "Lục lạp chứa diệp lục và là nơi diễn ra quá trình quang hợp."
            },

            {
                question: "Màng tế bào có vai trò chính nào?",
                answers: [
                    "Điều khiển trao đổi chất với môi trường",
                    "Tạo ADN",
                    "Tạo xương",
                    "Tiêu hóa thức ăn"
                ],
                correct: 0,
                explanation: "Màng tế bào giúp kiểm soát sự trao đổi chất giữa tế bào và môi trường."
            },

            {
                question: "Nhiều tế bào có cấu tạo và chức năng giống nhau tập hợp thành?",
                answers: [
                    "Cơ quan",
                    "Mô",
                    "Hệ cơ quan",
                    "Cơ thể"
                ],
                correct: 1,
                explanation: "Các tế bào giống nhau về cấu tạo và chức năng thường tạo thành mô."
            }
        ],


        "Thực vật": [
            {
                question: "Cơ quan chủ yếu thực hiện quang hợp ở cây là?",
                answers: [
                    "Rễ",
                    "Thân",
                    "Lá",
                    "Hoa"
                ],
                correct: 2,
                explanation: "Lá chứa nhiều lục lạp nên là cơ quan quang hợp chủ yếu."
            },

            {
                question: "Rễ cây có chức năng chủ yếu nào?",
                answers: [
                    "Hấp thụ nước và muối khoáng",
                    "Tạo hạt",
                    "Quang hợp",
                    "Thụ phấn"
                ],
                correct: 0,
                explanation: "Rễ giúp cây hút nước và muối khoáng từ đất."
            },

            {
                question: "Quang hợp sử dụng khí nào từ môi trường?",
                answers: [
                    "Oxygen",
                    "Nitrogen",
                    "Carbon dioxide",
                    "Hydrogen"
                ],
                correct: 2,
                explanation: "Cây sử dụng carbon dioxide (CO₂), nước và năng lượng ánh sáng để quang hợp."
            },

            {
                question: "Sản phẩm quan trọng của quang hợp là?",
                answers: [
                    "Glucose và oxygen",
                    "Protein và nitrogen",
                    "Nước và nitrogen",
                    "Carbon dioxide"
                ],
                correct: 0,
                explanation: "Quang hợp tạo chất hữu cơ như glucose và giải phóng oxygen."
            },

            {
                question: "Thoát hơi nước ở cây chủ yếu diễn ra qua?",
                answers: [
                    "Rễ",
                    "Khí khổng",
                    "Hạt",
                    "Hoa"
                ],
                correct: 1,
                explanation: "Phần lớn nước thoát ra ngoài qua khí khổng trên lá."
            }
        ]

    },


    8: {

        "Cơ thể người": [
            {
                question: "Bộ phận nào bơm máu đi khắp cơ thể?",
                answers: [
                    "Phổi",
                    "Tim",
                    "Gan",
                    "Thận"
                ],
                correct: 1,
                explanation: "Tim co bóp để đẩy máu lưu thông trong hệ tuần hoàn."
            },

            {
                question: "Cơ quan trao đổi khí chủ yếu ở người là?",
                answers: [
                    "Tim",
                    "Phổi",
                    "Dạ dày",
                    "Gan"
                ],
                correct: 1,
                explanation: "Phổi là cơ quan chính thực hiện trao đổi khí ở người."
            },

            {
                question: "Xương và cơ phối hợp với nhau chủ yếu giúp?",
                answers: [
                    "Vận động",
                    "Tiêu hóa",
                    "Hô hấp tế bào",
                    "Lọc máu"
                ],
                correct: 0,
                explanation: "Hệ vận động gồm xương và cơ, giúp cơ thể thực hiện các hoạt động vận động."
            },

            {
                question: "Máu thuộc loại mô nào?",
                answers: [
                    "Mô biểu bì",
                    "Mô cơ",
                    "Mô liên kết",
                    "Mô thần kinh"
                ],
                correct: 2,
                explanation: "Máu được xếp vào mô liên kết vì các tế bào nằm trong chất nền lỏng là huyết tương."
            },

            {
                question: "Hệ thần kinh có vai trò quan trọng nào?",
                answers: [
                    "Điều khiển và phối hợp hoạt động cơ thể",
                    "Tạo xương",
                    "Tiêu hóa thức ăn",
                    "Hấp thụ nước"
                ],
                correct: 0,
                explanation: "Hệ thần kinh tiếp nhận thông tin và điều khiển, phối hợp nhiều hoạt động của cơ thể."
            }
        ]

    },


    9: {

        "Di truyền": [
            {
                question: "ADN là viết tắt của?",
                answers: [
                    "Axit đêoxiribônuclêic",
                    "Axit amin",
                    "Axit ribônuclêic",
                    "Protein"
                ],
                correct: 0,
                explanation: "ADN là axit đêoxiribônuclêic, phân tử mang thông tin di truyền."
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
                question: "Gen là một đoạn của?",
                answers: [
                    "Protein",
                    "ADN",
                    "Lipid",
                    "Tinh bột"
                ],
                correct: 1,
                explanation: "Gen là một đoạn của phân tử ADN mang thông tin quy định sản phẩm nhất định."
            },

            {
                question: "ARN khác ADN ở loại base nào?",
                answers: [
                    "A",
                    "G",
                    "C",
                    "U"
                ],
                correct: 3,
                explanation: "ARN sử dụng U (uracil) thay cho T (thymine) của ADN."
            },

            {
                question: "Quá trình tạo ARN dựa trên khuôn ADN được gọi là?",
                answers: [
                    "Dịch mã",
                    "Phiên mã",
                    "Nguyên phân",
                    "Thụ tinh"
                ],
                correct: 1,
                explanation: "Phiên mã là quá trình tổng hợp ARN dựa trên một mạch khuôn của ADN."
            }
        ]

    }

};


/* =========================
   BIẾN QUIZ
   ========================= */

let currentClass = null;
let currentTopic = null;

let currentQuestion = 0;
let score = 0;

let quizQuestions = [];

let timerInterval = null;
let timeLeft = 0;


/* =========================
   CHỌN LỚP
   ========================= */

function selectClass(classNumber) {

    currentClass = classNumber;

    document
        .getElementById("classSelection")
        .classList.add("hidden");

    document
        .getElementById("topicSelection")
        .classList.remove("hidden");

    document
        .getElementById("topicTitle")
        .textContent =
        "🔬 Sinh học " + classNumber + " – Chọn chủ đề";

    const grid =
        document.getElementById("topicGrid");

    grid.innerHTML = "";

    const topics =
        quizData[classNumber];

    Object.keys(topics).forEach((topic, index) => {

        const icons = [
            "🧬",
            "🌱",
            "🫀",
            "🔬",
            "🌿",
            "🧠"
        ];

        const button =
            document.createElement("button");

        button.className = "topic-card";

        button.innerHTML = `
            <span class="topic-icon">
                ${icons[index % icons.length]}
            </span>

            <strong>${topic}</strong>

            <small>
                ${topics[topic].length} câu hỏi
            </small>
        `;

        button.onclick = () =>
            startQuiz(topic);

        grid.appendChild(button);

    });

    document
        .getElementById("quizSection")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================
   BẮT ĐẦU QUIZ
   ========================= */

function startQuiz(topic) {

    currentTopic = topic;

    quizQuestions =
        [...quizData[currentClass][topic]];

    currentQuestion = 0;
    score = 0;

    clearInterval(timerInterval);

    timeLeft = quizQuestions.length * 30;

    document
        .getElementById("topicSelection")
        .classList.add("hidden");

    document
        .getElementById("quizArea")
        .classList.remove("hidden");

    document
        .getElementById("resultArea")
        .classList.add("hidden");

    document
        .getElementById("currentTopic")
        .textContent =
        "🧬 " + topic;

    startTimer();

    loadQuestion();
}


/* =========================
   LOAD QUESTION
   ========================= */

function loadQuestion() {

    const q =
        quizQuestions[currentQuestion];

    document
        .getElementById("questionNumber")
        .textContent =
        `Câu ${currentQuestion + 1}/${quizQuestions.length}`;

    document
        .getElementById("questionBadge")
        .textContent =
        `Câu ${currentQuestion + 1}`;

    document
        .getElementById("questionText")
        .textContent =
        q.question;

    document
        .getElementById("scoreText")
        .textContent =
        `Điểm: ${score}`;

    const progress =
        ((currentQuestion) / quizQuestions.length) * 100;

    document
        .getElementById("progress")
        .style.width =
        progress + "%";


    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";


    q.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className = "answer";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${answer}`;

        button.onclick = () =>
            checkAnswer(index, button);

        answers.appendChild(button);

    });


    document
        .getElementById("explanation")
        .classList.add("hidden");

    document
        .getElementById("nextButton")
        .classList.add("hidden");

}


/* =========================
   KIỂM TRA ĐÁP ÁN
   ========================= */

function checkAnswer(index, clickedButton) {

    const q =
        quizQuestions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer");


    buttons.forEach(button => {
        button.disabled = true;
    });


    if (index === q.correct) {

        clickedButton.classList.add("correct");

        score++;

    } else {

        clickedButton.classList.add("wrong");

        buttons[q.correct]
            .classList.add("correct");

    }


    document
        .getElementById("scoreText")
        .textContent =
        `Điểm: ${score}`;


    const explanation =
        document.getElementById("explanation");

    explanation.innerHTML =
        `<strong>💡 Giải thích:</strong><br>${q.explanation}`;

    explanation.classList.remove("hidden");


    document
        .getElementById("nextButton")
        .classList.remove("hidden");

}


/* =========================
   CÂU TIẾP
   ========================= */

function nextQuestion() {

    currentQuestion++;

    if (
        currentQuestion >=
        quizQuestions.length
    ) {

        finishQuiz();

        return;
    }

    loadQuestion();
}


/* =========================
   TIMER
   ========================= */

function startTimer() {

    updateTimer();

    timerInterval =
        setInterval(() => {

            timeLeft--;

            updateTimer();

            if (timeLeft <= 0) {

                clearInterval(timerInterval);

                finishQuiz();

            }

        }, 1000);

}


function updateTimer() {

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;

    document
        .getElementById("timer")
        .textContent =
        `⏱️ ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}


/* =========================
   KẾT QUẢ
   ========================= */

function finishQuiz() {

    clearInterval(timerInterval);

    document
        .getElementById("quizArea")
        .classList.add("hidden");

    document
        .getElementById("resultArea")
        .classList.remove("hidden");


    const total =
        quizQuestions.length;

    document
        .getElementById("resultScore")
        .textContent =
        `${score}/${total}`;


    let message = "";

    const percent =
        score / total;


    if (percent === 1) {

        message =
            "🎉 Xuất sắc! Bạn trả lời đúng tất cả!";

    } else if (percent >= 0.8) {

        message =
            "🌟 Rất tốt! Bạn nắm kiến thức khá chắc.";

    } else if (percent >= 0.5) {

        message =
            "👍 Khá tốt! Hãy luyện thêm một chút nhé.";

    } else {

        message =
            "💪 Đừng nản! Làm lại một lần nữa và bạn sẽ tiến bộ.";

    }


    document
        .getElementById("resultMessage")
        .textContent =
        message;


    document
        .getElementById("resultArea")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   LÀM LẠI
   ========================= */

function restartQuiz() {

    startQuiz(currentTopic);

}


/* =========================
   QUAY LẠI
   ========================= */

function backToClasses() {

    clearInterval(timerInterval);

    document
        .getElementById("quizArea")
        .classList.add("hidden");

    document
        .getElementById("topicSelection")
        .classList.add("hidden");

    document
        .getElementById("resultArea")
        .classList.add("hidden");

    document
        .getElementById("classSelection")
        .classList.remove("hidden");

    document
        .getElementById("quizSection")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function backToTopics() {

    clearInterval(timerInterval);

    document
        .getElementById("quizArea")
        .classList.add("hidden");

    document
        .getElementById("resultArea")
        .classList.add("hidden");

    document
        .getElementById("topicSelection")
        .classList.remove("hidden");

}


/* =========================
   ĐIỀU HƯỚNG
   ========================= */

function scrollToQuiz() {

    document
        .getElementById("quizSection")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function showAI() {

    document
        .getElementById("aiSection")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function showHome() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==================================================
   CHIA SẺ
   ================================================== */

async function shareQuiz() {

    const url =
        window.location.href;

    const text =
        "🧬 Mình vừa làm Quiz Sinh Học! Bạn thử làm xem nhé 🌿";


    /*
       📱 Nếu trình duyệt hỗ trợ Web Share
       thì sử dụng bảng chia sẻ của thiết bị.
    */

    if (navigator.share) {

        try {

            await navigator.share({

                title: "Quiz Sinh Học",

                text: text,

                url: url

            });

            return;

        } catch (error) {

            /*
               Người dùng bấm Hủy thì không cần
               hiện lỗi.
            */

            console.log(
                "Share cancelled:",
                error
            );

        }

    }


    /*
       💻 Edge trên máy tính:
       sao chép link.
    */

    try {

        await navigator.clipboard.writeText(url);

        alert(
            "📋 Đã sao chép link Quiz Sinh Học!\n\n" +
            "Bạn có thể dán link vào Messenger, Zalo, Facebook hoặc gửi cho bạn bè."
        );

    } catch (error) {

        /*
           Cách dự phòng nếu clipboard bị chặn.
        */

        const input =
            document.createElement("input");

        input.value = url;

        document.body.appendChild(input);

        input.select();

        document.execCommand("copy");

        document.body.removeChild(input);

        alert(
            "📋 Đã sao chép link website!"
        );

    }

}


/* ==================================================
   TRỢ LÝ SINH HỌC
   ================================================== */


/* =========================
   VOICE RECOGNITION
   ========================= */

let recognition = null;

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;


if (SpeechRecognition) {

    recognition =
        new SpeechRecognition();

    recognition.lang =
        "vi-VN";

    recognition.continuous =
        false;

    recognition.interimResults =
        false;


    recognition.onstart = function () {

        document
            .getElementById("micButton")
            .classList.add("listening");

        document
            .getElementById("voiceStatus")
            .textContent =
            "🎙️ Đang nghe... Hãy nói câu hỏi của bạn";

    };


    recognition.onresult = function (event) {

        const text =
            event.results[0][0].transcript;

        document
            .getElementById("voiceStatus")
            .textContent =
            "✅ Đã nhận: " + text;

        addUserMessage(text);

        const answer =
            generateAIAnswer(text);

        addAIMessage(answer);

        speak(answer);

    };


    recognition.onerror = function (event) {

        console.log(
            "Speech error:",
            event.error
        );

        document
            .getElementById("voiceStatus")
            .textContent =
            "❌ Không nhận được giọng nói. Bạn thử lại nhé.";

        document
            .getElementById("micButton")
            .classList.remove("listening");

    };


    recognition.onend = function () {

        document
            .getElementById("micButton")
            .classList.remove("listening");

    };

}


/* =========================
   BẮT ĐẦU NGHE
   ========================= */

function startListening() {

    if (!recognition) {

        alert(
            "⚠️ Trình duyệt này chưa hỗ trợ nhận diện giọng nói.\n\n" +
            "Bạn có thể nhập câu hỏi bằng bàn phím."
        );

        return;
    }


    try {

        recognition.start();

    } catch (error) {

        console.log(error);

    }

}


/* =========================
   GỬI TEXT
   ========================= */

function sendText() {

    const input =
        document.getElementById("userInput");

    const text =
        input.value.trim();


    if (!text) return;


    addUserMessage(text);

    const answer =
        generateAIAnswer(text);

    addAIMessage(answer);

    speak(answer);

    input.value = "";

}


function handleEnter(event) {

    if (event.key === "Enter") {

        sendText();

    }

}


/* =========================
   QUICK QUESTION
   ========================= */

function quickAsk(text) {

    document
        .getElementById("userInput")
        .value = text;

    sendText();

}


/* =========================
   CHAT USER
   ========================= */

function addUserMessage(text) {

    const chat =
        document.getElementById("chatBox");


    const message =
        document.createElement("div");

    message.className =
        "chat-message user-message";


    message.innerHTML = `

        <div class="bubble">
            ${escapeHTML(text)}
        </div>

    `;


    chat.appendChild(message);

    chat.scrollTop =
        chat.scrollHeight;

}


/* =========================
   CHAT AI
   ========================= */

function addAIMessage(html) {

    const chat =
        document.getElementById("chatBox");


    const message =
        document.createElement("div");

    message.className =
        "chat-message ai-message";


    message.innerHTML = `

        <div class="message-avatar">
            🤖
        </div>

        <div class="bubble">
            ${html}
        </div>

    `;


    chat.appendChild(message);

    chat.scrollTop =
        chat.scrollHeight;

}


/* =========================
   AI SINH HỌC
   ========================= */

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
            🧬 <b>ADN</b> là phân tử mang thông tin di truyền
            của sinh vật.<br><br>

            ADN gồm các nucleotide với 4 loại base:
            <b>A, T, G, C</b>.<br><br>

            Nguyên tắc bổ sung:
            <b>A liên kết với T</b>,
            <b>G liên kết với C</b>.
        `;

    }


    if (
        q.includes("gen")
    ) {

        return `
            🧬 <b>Gen</b> là một đoạn của ADN
            mang thông tin quy định một sản phẩm
            nhất định.<br><br>

            Có thể hiểu đơn giản:
            <b>ADN là vật chất di truyền,
            còn gen là một đoạn thông tin trên ADN.</b>
        `;

    }


    if (
        q.includes("quang hop")
    ) {

        return `
            🌱 <b>Quang hợp</b> là quá trình cây xanh
            sử dụng năng lượng ánh sáng để tổng hợp
            chất hữu cơ từ CO₂ và nước.<br><br>

            Quá trình này đồng thời giải phóng
            <b>oxygen (O₂)</b>.
        `;

    }


    if (
        q.includes("nguyen phan")
    ) {

        return `
            🔬 <b>Nguyên phân</b> là hình thức phân chia
            tế bào tạo ra các tế bào con có bộ nhiễm sắc thể
            giống tế bào mẹ về cơ bản.<br><br>

            Nguyên phân giúp cơ thể
            <b>sinh trưởng và thay thế tế bào</b>.
        `;

    }


    if (
        q.includes("tuan hoan") ||
        q.includes("tim") ||
        q.includes("mau")
    ) {

        return `
            🫀 <b>Hệ tuần hoàn</b> gồm tim và hệ mạch,
            có vai trò vận chuyển máu và các chất
            cần thiết trong cơ thể.<br><br>

            <b>Tim</b> co bóp để tạo lực đẩy giúp máu
            lưu thông.
        `;

    }


    if (
        q.includes("arn") ||
        q.includes("rna")
    ) {

        return `
            🧬 <b>ARN</b> là axit ribonucleic.
            ARN thường có cấu trúc một mạch.<br><br>

            ARN có các loại base:
            <b>A, U, G, C</b>.<br><br>

            Điểm dễ nhớ:
            <b>ARN dùng U thay cho T của ADN.</b>
        `;

    }


    if (
        q.includes("ti the") ||
        q.includes("mitochondria")
    ) {

        return `
            ⚡ <b>Ti thể</b> là bào quan tham gia
            quá trình hô hấp tế bào và tạo năng lượng
            cho hoạt động của tế bào.
        `;

    }


    if (
        q.includes("te bao")
    ) {

        return `
            🔬 <b>Tế bào</b> là đơn vị cấu tạo và chức năng
            cơ bản của cơ thể sống.<br><br>

            Cơ thể đa bào được tạo thành từ rất nhiều tế bào
            phối hợp với nhau.
        `;

    }


    return `
        🤔 Câu hỏi này hơi ngoài phần kiến thức
        mình đang có trong trợ lý.<br><br>

        Bạn thử hỏi mình về:
        <br>🧬 ADN
        <br>🧬 Gen
        <br>🧬 ARN
        <br>🌱 Quang hợp
        <br>🔬 Nguyên phân
        <br>🫀 Hệ tuần hoàn
        <br>⚡ Ti thể
    `;

}


/* =========================
   ĐỌC CÂU TRẢ LỜI
   ========================= */

function speak(htmlText) {

    if (!("speechSynthesis" in window)) {

        return;
    }


    const temp =
        document.createElement("div");

    temp.innerHTML =
        htmlText;


    const text =
        temp.textContent ||
        temp.innerText ||
        "";


    speechSynthesis.cancel();


    const utterance =
        new SpeechSynthesisUtterance(text);


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


/* =========================
   BẢO VỆ HTML
   ========================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent =
        text;

    return div.innerHTML;

}
