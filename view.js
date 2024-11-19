// 자바스크립트

const liAr = [...document.querySelectorAll(".text")];
const text = document.querySelector(".text");

const viewText = (e) => {
  text.innerText = e.target.innerText;
  gsap.from(".text_wrap", { opacity: 0, y: 30, duration: 0.5 });
};

liAr.map((li) => {
  li.addEventListener("click", viewText);
});

// 제이쿼리

// $(".text").click(function (e) {
//   const t = $(e.target).text();
//   $(".text_wrap p").text(t);
//   gsap.from(".text_wrap", { opacity: 0, y: 30, duration: 0.5 });
// });
