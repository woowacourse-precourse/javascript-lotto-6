import { Random, Console } from '@woowacourse/mission-utils';
import { NUMBER, TEXT, OUTPUT_RANK } from './component/data.js';
import LottoValidator from './component/LottoValidator.js';
import PrizeValidator from './component/PrizeValidator.js';

function matchingLotto(inputNumberList, inputBounsNumber, lottoNumber) {
  const matchingNumber = Array(lottoNumber.length).fill(0);
  const matchingBonus = Array(lottoNumber.length).fill(0);
  lottoNumber.forEach((items, index) => {
    items.forEach((item) => {
      if (inputNumberList.includes(item)) {
        matchingNumber[index] += 1;
      }
    });
    if (items.includes(inputBounsNumber)) {
      matchingBonus[index] += 1;
    }
  });
  return [matchingNumber, matchingBonus];
}

function lottoRandomNumer() {
  const randomNumbers = [];
  while (randomNumbers.length < NUMBER.LOTTO_LENGTH) {
    const number = Random.pickNumberInRange(
      NUMBER.MIN_LOTTO_NUMBER,
      NUMBER.MAX_LOTTO_NUMBER,
    );
    if (randomNumbers.indexOf(number) === -1) {
      randomNumbers.push(number);
    }
  }
  randomNumbers.sort((a, b) => a - b);
  return randomNumbers;
}

function outputNumber(inputAmount) {
  const lottoCount = inputAmount / NUMBER.INITIAL_AMOUNT;
  const lottoINITIAL = Array(lottoCount)
    .fill()
    .map((numbers) => {
      numbers = lottoRandomNumer();
      return numbers;
    });
  Console.print(`${lottoCount}${TEXT.OUTPUT_NUMBER}`);
  lottoINITIAL.forEach((numbers) => Console.print(numbers));
  return lottoINITIAL;
}

async function lottoNumberGet() {
  const inputNumber = await Console.readLineAsync(TEXT.INPUT_NUMBER);
  const inputNumberList = inputNumber.split(',').map((number) => +number);
  const inputBounsNumber = Number(
    await Console.readLineAsync(TEXT.INPUT_BONUS),
  );
  const lottoValidator = new LottoValidator(inputNumberList, inputBounsNumber);
  lottoValidator.validate();
  return [inputNumberList, inputBounsNumber];
}
// eslint-disable-next-line max-lines-per-function
function prizeValidator(matchingNumber, matchingBonus, inputAmount) {
  const prize = {
    '1등': 2000000000,
    '2등': 3000000,
    '3등': 1500000,
    '4등': 50000,
    '5등': 5000,
  };
  const rank = {
    '1등': 0,
    '2등': 0,
    '3등': 0,
    '4등': 0,
    '5등': 0,
  };
  let result = 0;
  matchingNumber.forEach((number, index) => {
    if (number === 3) rank['5등'] += 1;
    if (number === 4) rank['4등'] += 1;
    if (number === 5) {
      if (number === 5 && matchingBonus[index] === 1) {
        rank['2등'] += 1;
      } else {
        rank['3등'] += 1;
      }
    }
    if (number === 6) rank['1등'] += 1;
  });
  Console.print(TEXT.OUTPUT_PRIZE);
  Object.values(rank).forEach((value, index) => {
    Console.print(Object.values(OUTPUT_RANK)[index] + value + TEXT.OUTPUT_ITEM);
  });
  Object.values(rank).forEach((value, index) => {
    result += value * Object.values(prize)[index];
  });
  const earnRatio = `${((result / inputAmount) * 100).toFixed(1)}%`;
  console.log(`${TEXT.OUTPUT_RESULT}${earnRatio}입니다.`);
}
export async function lottoAmountGet() {
  const inputAmount = await Console.readLineAsync(TEXT.INPUT_AMOUNT);
  if (inputAmount % 1000 !== 0) throw new Error(TEXT.AMOUNT_ERROR);
  const lottoNumber = outputNumber(inputAmount);
  const [inputNumberList, inputBounsNumber] = await lottoNumberGet();
  const [matchingNumber, matchingBonus] = matchingLotto(
    inputNumberList,
    inputBounsNumber,
    lottoNumber,
  );
  const validator = new PrizeValidator();
  validator.validate(matchingNumber, matchingBonus, inputAmount);
}

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
