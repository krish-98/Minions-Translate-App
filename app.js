const inputTxt = document.querySelector("#input-txt")
const btn = document.querySelector("#btn-translate")
const outputTxt = document.querySelector("#output-txt")

const serverURL = "https://api.funtranslations.com/translate/minion.json"

const constructURL = text => serverURL + "?text=" + text

const eventHandler = () => {
  const userInput = inputTxt.value

  fetch(constructURL(userInput))
  .then(res => res.json())
  .then(data => outputTxt.innerText = data.contents.translated)
}

btn.addEventListener("click", eventHandler)
