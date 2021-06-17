// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write your code here
const increaseWidth = (event) => {
  let randomSize = Math.floor(Math.random() * 600);

  if (randomSize > 400) {
    itemOne.style.width = `${randomSize}px`;
  }
}

itemOne.addEventListener('mouseover', increaseWidth);

const changeBackground = (event) => {
  let randomColor = Math.floor(Math.random() * 255);

  itemTwo.style.backgroundColor = `rgb(${randomColor}, ${randomColor}, ${randomColor})`;
};

itemTwo.addEventListener('mouseup', changeBackground);

const changeText = (event) => {
  itemThree.innerHTML = `The mouse has left the element`;
}

itemThree.addEventListener('mouseout', changeText);

const showItem = (event) => {
  itemFive.style.display = 'block';
}

itemFour.addEventListener('mousedown', showItem);