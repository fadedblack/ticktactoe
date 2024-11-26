const WIDTH = 145;
const HEIGHT = 40;

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
  return slice(string, 0, index) + char + slice(string, index + char.length, string.length);
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
  for (let i = 0; i < 5; i += 1) {
    const index = (WIDTH * HEIGHT) / 2 - Math.ceil(WIDTH / 2);

    console.clear();
    console.log(put(screen(), getMessageWithDots("LOADING", i), index));
    wait(90000);
  }

  console.clear();
  return true;
}

// putting stars horizontally
function putStars() {
  let updatedScreen = repeat(' ', WIDTH * HEIGHT);

  for (let pixel = 0; pixel < WIDTH; pixel += 1) {
    const charToAdd = Math.random() > 0.35 ? '.' : ' ';
    let pixels = repeat(' ', WIDTH);

    pixels = put(pixels, '┃', Math.ceil(HEIGHT / 2));
    pixels = put(pixels, repeat('━', 130), Math.ceil(HEIGHT / 2));
    // pixels = put(pixels, charToAdd, getRandomPosition(0, WIDTH));
    updatedScreen += pixels;

    console.log(updatedScreen);
    wait(99999999);
  }

  return updatedScreen;
}

function putStarsHorizontally() {
  let updatedScreen = screen();

  for (let i = 0; i < WIDTH * HEIGHT; i += 1) {
    const charToAdd = Math.random() > 0.15 ? '.' : ' ';
    const position = getRandomPosition(0, WIDTH * HEIGHT);
    updatedScreen = put(updatedScreen, charToAdd, position);

    const index = (WIDTH * HEIGHT) / 2 - Math.ceil(WIDTH / 2) + 15;
    updatedScreen = put(updatedScreen, 'ATUL IS FROM COMPUTER SCIENCE BACKGROUND', index);

    console.log(updatedScreen);
    wait(99999999);
    console.clear();
  }

  return updatedScreen;
}

function gameLoop() {
  // loadScreen();

  let gameScreen = screen();

  // while (1000) {
  gameScreen = putStarsHorizontally(gameScreen);
  // gameScreen = putStars();
  // }

  return gameScreen;
}

console.log(gameLoop());




