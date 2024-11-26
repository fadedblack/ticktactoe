const WIDTH = 145;
const HEIGHT = 10;

function repeat(char, times) {
  let string = '';
  for (let time = 0; time < times; time += 1) {
    string += char;
  }

  return string;
}

function screen() {
  let pixels = '';
  for (let i = 0; i < HEIGHT; i += 1) {
    pixels += repeat(' ', WIDTH);
    pixels += '\n';
  }

  return pixels;
}

function slice(string, from, to) {
  let slicedString = '';

  for (let index = from; index < to; index += 1) {
    slicedString += string[index];
  }

  return slicedString;
}

function put(string, char, index) {
  return slice(string, 0, index) + char + slice(string, index + 1, string.length);
}

function getRandomPosition(from, to) {
  return from + Math.ceil(Math.random() * (to - from));
}

function wait(times) {
  for (let time = 0; time < times; time += 1) {
  }
}

function getMessageWithDots(message, noOfDots) {
  return message + repeat('.', noOfDots);
}

function loadScreen() {
  for (let i = 0; i < 10; i += 1) {
    const index = (WIDTH * HEIGHT) / 2 - Math.ceil(WIDTH / 2);

    console.clear();
    console.log(put(screen(), getMessageWithDots("LOADING", i), index));
    wait(900000000);
  }

  console.clear();
  return true;
}

function putStars(screen) {
  let updatedScreen = screen;

  for (let pixel = 0; pixel < WIDTH * HEIGHT; pixel += 1) {
    const charToAdd = Math.random() > 0.35 ? '*' : ' ';
    let pixels = repeat(' ', WIDTH);
    
    pixels = put(pixels, charToAdd, getRandomPosition(0, WIDTH));
    updatedScreen += pixels;
    
    console.log(pixels);
    wait(99999999);
  }
  
  return updatedScreen;
}

function gameLoop() {
  loadScreen();

  let gameScreen = screen();
  gameScreen = putStars(gameScreen);

  return gameScreen;
}

console.log(gameLoop());




