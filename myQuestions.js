let myQuestions = []; // 내 질문을 저장할 배열

// 질문 추가 함수
function addQuestion(question, tags) {
    myQuestions.push({ question, tags });
    alert("질문이 저장되었습니다!");
}

// 내 질문 표시 함수
function displayMyQuestions(container) {
    container.innerHTML = "<h1 id='main-title'>내 질문</h1>";
    if (myQuestions.length === 0) {
        container.innerHTML += "<p>아직 질문이 없습니다.</p>";
    } else {
        myQuestions.forEach((q, index) => {
            container.innerHTML += `
                <div class="question-card">
                    <h3>질문 ${index + 1}</h3>
                    <p>${q.question}</p>
                    <small>태그: ${q.tags}</small>
                </div>
            `;
        });
    }
}

export { addQuestion, displayMyQuestions };
