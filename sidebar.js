document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".sidebar a");
  const container = document.querySelector(".container");

  menuItems.forEach(item => {
      item.addEventListener("click", function(e) {
          e.preventDefault();
          const feature = this.textContent.trim();
          loadFeature(feature);
      });
  });

  function loadFeature(feature) {
      container.innerHTML = ""; // 기존 내용 초기화
      switch(feature) {
          case "홈":
              container.innerHTML = "<h1>홈 화면</h1><p>질문 플랫폼 메인 페이지입니다.</p>";
              break;
          case "내 질문":
              container.innerHTML = "<h1>내 질문</h1><p>내가 작성한 질문 목록입니다.</p>";
              break;
          case "답변한 질문":
              container.innerHTML = "<h1>답변한 질문</h1><p>내가 답변한 질문 목록입니다.</p>";
              break;
          case "카테고리":
              container.innerHTML = "<h1>카테고리</h1><p>주제별 질문을 찾아보세요.</p>";
              break;
          case "설정":
              container.innerHTML = "<h1>설정</h1><p>계정 및 플랫폼 설정 화면입니다.</p>";
              break;
          default:
              container.innerHTML = "<h1>기능 없음</h1>";
      }
  }
});
