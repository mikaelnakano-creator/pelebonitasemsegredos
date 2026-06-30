const questions = [...document.querySelectorAll(".question")];
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const progressBar = document.getElementById("progressBar");
const quizAlert = document.getElementById("quizAlert");
const quizForm = document.getElementById("skinQuiz");

let currentStep = 0;

function showStep(index) {
  questions.forEach((q, i) => q.classList.toggle("active", i === index));
  prevBtn.disabled = index === 0;
  nextBtn.textContent = index === questions.length - 1 ? "Enviar análise" : "Próxima";
  progressBar.style.width = `${((index + 1) / questions.length) * 100}%`;
  quizAlert.style.display = "none";
}

function selectedValue(question) {
  const checked = question.querySelector("input:checked");
  return checked ? checked.value : null;
}

function getResult() {
  const scores = {
    acne: 0,
    oleosidade: 0,
    manchas: 0,
    sensibilidade: 0,
    linhas: 0,
    cicatrizes: 0
  };

  const formData = new FormData(quizForm);

  for (const value of formData.values()) {
    if (scores.hasOwnProperty(value)) {
      scores[value] += 1;
    }
  }

  const q1 = formData.get("q1");
  if (q1 && scores.hasOwnProperty(q1)) scores[q1] += 1.5;

  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}

function saveAnswers() {
  const answers = {};
  const formData = new FormData(quizForm);
  for (const [key, value] of formData.entries()) answers[key] = value;

  const result = getResult();
  localStorage.setItem("peleBonitaQuizResult", result);
  localStorage.setItem("peleBonitaQuizAnswers", JSON.stringify(answers));

  window.location.href = `/resultado?tipo=${encodeURIComponent(result)}`;
}

nextBtn.addEventListener("click", () => {
  const value = selectedValue(questions[currentStep]);

  if (!value) {
    quizAlert.style.display = "block";
    return;
  }

  if (currentStep < questions.length - 1) {
    currentStep += 1;
    showStep(currentStep);
    quizForm.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  saveAnswers();
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep -= 1;
    showStep(currentStep);
  }
});

showStep(currentStep);
