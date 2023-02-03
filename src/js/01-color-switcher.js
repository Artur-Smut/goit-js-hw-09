function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const body = document.querySelector('body')
const startButtonRef = document.querySelector('[data-start]')
const stopButtonRef = document.querySelector('[data-stop]')

startButtonRef.addEventListener('click', () => {
    startButtonRef.disabled = true;
    stopButtonRef.disabled = false;
    switchColors = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000)
});

stopButtonRef.addEventListener('click', () => {
    startButtonRef.disabled = false;
    stopButtonRef.disabled = true;
    clearInterval(switchColors);
});