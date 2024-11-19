// 자바스크립트
const textListElement = document.getElementById("textList");

window.onload = function () {
  console.log("이것은?");
  textList.forEach((text) => {
    const li = document.createElement("li");
    li.classList.add("list");

    const p = document.createElement("p");
    p.classList.add("text");
    p.textContent = text;

    li.appendChild(p);
    textListElement.appendChild(li);
  });
};

const textList = [
  "남에게 내 일을 기억하게 하지 말자. 내가 받은 일은 반드시 기록하고, 해결하고, 공유하자.",
  "남에게 내 일을 기억하게 하지 말자. 내가 받은 일은 반드시 기록하고, 해결하고, 공유하자.",
  "남에게 내 일을 기억하게 하지 말자. 내가 받은 일은 반드시 기록하고, 해결하고, 공유하자.",
  "남에게 내 일을 기억하게 하지 말자. 내가 받은 일은 반드시 기록하고, 해결하고, 공유하자.",
];

// 아래 코드를 위에 넣어야 할지.. 위에 것으로 리스트업은 되는 상황

const liAr = [...document.querySelectorAll(".text")];
const text = document.querySelector(".main_text");

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
