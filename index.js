const hourHand = document.querySelector('.hand.hour');
const minuteHand = document.querySelector('.hand.minute');
const secondHand = document.querySelector('.hand.second');

const hours = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
};

for (const [key, value] of Object.entries(hours)) {
  const hourDegrees = (value / 12) * 360;
  const number = document.querySelector(`.${key}`);
  const numberText = document.querySelector(`.number-text-${key}`);
  number.style.transform = `rotate(${hourDegrees}deg)`;
  numberText.style.transform = `rotate(-${hourDegrees}deg)`;
}

// Draw tick marks
const tickMarks = document.querySelector('.tick-marks');
for (let i = 0; i < 60; i++) {
  const minuteDegrees = (i / 60) * 360;
  const isMajorTick = i % 5 === 0;
  let tickMark = document.createElement('div');
  tickMark.classList.add('tick');
  tickMark.classList.add(isMajorTick ? 'major-tick' : 'minor-tick');
  tickMark.style.transform = `rotate(${minuteDegrees}deg)`;
  tickMarks.appendChild(tickMark);
}

function setTime() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  const hourDegrees = (hour / 12) * 360 + 90;
  const minuteDegrees = (minute / 60) * 360 + 90;
  const secondDegrees = (second / 60) * 360 + 90;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(setTime, 1000);
