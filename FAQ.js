document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");
  questions.forEach((question) => {
    const toggleBtn = question.querySelector("#plusMinus");
    const answer = question.nextElementSibling;
    console.log(toggleBtn);
    answer.classList.add("hidden");

    toggleBtn.addEventListener("click", () => {
      answer.classList.toggle("hidden");

      toggleBtn.textContent = toggleBtn.textContent === "+" ? "-" : "+";
    });
  });
});
