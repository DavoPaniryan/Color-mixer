const redChanger = document.getElementById('red')
const greenChanger = document.getElementById('green')
const blueChanger = document.getElementById('blue')
const redNumber = document.getElementById('red-number')
const greenNumber = document.getElementById('green-number')
const blueNumber = document.getElementById('blue-number')

const color = document.getElementById('color')
const colorText = document.getElementById('result')

redChanger.oninput = () => {
    color.style.background = `rgb(${redChanger.value}, ${greenChanger.value}, ${blueChanger.value})`;
  redNumber.textContent  = redChanger.value
  colorText.textContent = `rgb(${redChanger.value}, ${greenChanger.value}, ${blueChanger.value})`
  };
  
  greenChanger.oninput = () => {
    color.style.background = `rgb(${redChanger.value}, ${greenChanger.value}, ${blueChanger.value})`;
    greenNumber.textContent = greenChanger.value
      colorText.textContent = `rgb(${redChanger.value}, ${greenChanger.value}, ${blueChanger.value})`
  };

  blueChanger.oninput = () => {
    color.style.background = `rgb(${redChanger.value}, ${greenChanger.value}, ${blueChanger.value})`;
    blueNumber.textContent = blueChanger.value
      colorText.textContent = `rgb(${redChanger.value}, ${greenChanger.value}, ${blueChanger.value})`
  };