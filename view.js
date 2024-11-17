// const liAr = [...document.querySelectorAll(".text")];

// const viewText = (e) => {
//   console.log(e.target);
// };

// liAr.map((li) => {
//   li.addEventListener("click", viewText);
// });

$(".text").click(function (e) {
  const t = $(e.target).text();

  $(".text_wrap p").text(t);
});
