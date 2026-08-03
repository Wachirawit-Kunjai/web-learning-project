const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const question = document.getElementById("question");
const gif = document.getElementById("gif");
const btnGroup = document.querySelector(".btn-group");

const page1 = document.getElementById("page1");

const noTexts = [
    "Are you sure?",
    "Think it over again",
    "Think about it again",
    "Don't do this 🥺",
    "That's so mean!",
    "I'm sulking at you, Fatty! 😠",
    "I'm sulking, so don't touch me! 😤"
];

let noCount = 0;
let yesFontSize = 1;
// Moves "No" button randomly

function moveButton() {
    const padding = 20;
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = window.innerWidth - btnRect.width - padding;
    const maxY = window.innerHeight - btnRect.height - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.position = "fixed";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.zIndex = "999";
}

