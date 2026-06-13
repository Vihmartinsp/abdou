const yesButton = document.querySelector("#yesButton");
const noButton = document.querySelector("#noButton");
const questionArea = document.querySelector("#questionArea");
const surprise = document.querySelector("#surprise");
const hint = document.querySelector("#hint");

const noMessages = [
  "Are you sure?",
  "Think with love",
  "I know you want to",
  "Last chance",
  "Now it is yes"
];

let noClicks = 0;

function showSurprise() {
  document.body.classList.add("celebrating");
  questionArea.style.display = "none";
  surprise.classList.add("is-visible");
  surprise.scrollIntoView({ behavior: "smooth", block: "center" });
}

function moveNoButton() {
  const area = questionArea.getBoundingClientRect();
  const button = noButton.getBoundingClientRect();
  const maxX = Math.max(0, area.width - button.width);
  const maxY = Math.max(0, 112 - button.height);
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noButton.classList.add("is-running");
  noButton.style.left = `${x}px`;
  noButton.style.top = `${58 + y}px`;
}

yesButton.addEventListener("click", showSurprise);

noButton.addEventListener("mouseenter", () => {
  if (noClicks < 4) {
    moveNoButton();
  }
});

noButton.addEventListener("click", () => {
  noClicks += 1;
  noButton.textContent = noMessages[Math.min(noClicks - 1, noMessages.length - 1)];

  if (noClicks < 5) {
    hint.textContent = "This button is trying to resist, but it knows the truth.";
    moveNoButton();
    return;
  }

  hint.textContent = "There we go, it gave up. Now comes the beautiful part.";
  noButton.textContent = "Yes";
  noButton.classList.remove("is-running");
  noButton.style.left = "";
  noButton.style.top = "";
  setTimeout(showSurprise, 450);
});
