/* eslint-disable default-case */
// @ts-check
import readlineSync from 'readline-sync';
import half from './src/half.js';

const randomDesition = (min, max) => Math.floor(Math.random() * (max - min) + min);

const playRockPaperScisors = () => {
  // greetings
  console.log('Добро пожаловать в игру "Камень, Ножницы, Бумага"!');

  // game
  let playCheck = true;
  while (playCheck === true) {
    // start of the game
    console.log(`
Выберете вашу фигуру:
\x1b[31m1.\x1b[0m Камень
\x1b[31m2.\x1b[0m Ножницы
\x1b[31m3.\x1b[0m Бумага
    `);
    // user choice
    let userAnswer = readlineSync.question('Ваш выбор: ');
    let resultUserVerb = '';
    switch (userAnswer) {
      case '1':
        userAnswer = 'Камень';
        resultUserVerb = 'ломает';
        break;
      case '2':
        userAnswer = 'Ножницы';
        resultUserVerb = 'режут';
        break;
      case '3':
        userAnswer = 'Бумага';
        resultUserVerb = 'кроет';
    }

    console.log(`Вы выбрали: ${userAnswer}
    `);

    // computer choice
    let computerAnswer = String(randomDesition(1, 3));
    let resultComputerVerb = '';
    switch (computerAnswer) {
      case '1':
        computerAnswer = 'Камень';
        resultComputerVerb = 'ломает';
        break;
      case '2':
        computerAnswer = 'Ножницы';
        resultComputerVerb = 'режут';
        break;
      case '3':
        computerAnswer = 'Бумага';
        resultComputerVerb = 'кроет';
    }

    console.log(`Компьютер выбирает: ${computerAnswer}
    `);

    // result
    if (userAnswer === computerAnswer) {
      console.log(`Результат: Ничья!
      `);
    } else if (
      (userAnswer === 'Камень' && computerAnswer === 'Ножницы')
        || (userAnswer === 'Ножницы' && computerAnswer === 'Бумага')
        || (userAnswer === 'Бумага' && computerAnswer === 'Камень')
    ) {
      console.log(`Результат: Вы победили! ${userAnswer} ${resultUserVerb} ${computerAnswer}.
      `);
    } else {
      console.log(`Результат: Вы проиграли! ${computerAnswer} ${resultComputerVerb} ${userAnswer}.
      `);
    }

    // ask for play again

    const askReplay = readlineSync.question('Хотите сыграть ещё раз? (да/нет): ');

    if (askReplay !== 'да') {
      playCheck = false;
      console.log(`
Спасибо за игру! До встречи!`);
    }
  }
};

playRockPaperScisors();
export default half;
