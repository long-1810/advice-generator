const id = document.getElementById("advice-id")
const advice = document.getElementById("advice-content")
const generateButton = document.getElementById("randomize-button")

function generateAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      id.innerHTML = `ADVICE #${data.slip.id}`;
      advice.innerHTML = `"${data.slip.advice}"`;
    })
    .catch((error) => {
      console.log(error);
    });
}

generateButton.addEventListener("click", generateAdvice)