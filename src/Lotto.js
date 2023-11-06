import { Random, Console } from '@woowacourse/mission-utils';
import { NUMBER, TEXT } from './component/data.js';
import LottoValidator from './component/LottoValidator.js';
import PrizeValidator from './component/PrizeValidator.js';

function matchingLotto(inputNumberList, inputBounsNumber, lottoNumber) {
  const matchingNumber = Array(lottoNumber.length).fill(NUMBER.INIT_VALUE);
  const matchingBonus = Array(lottoNumber.length).fill(NUMBER.INIT_VALUE);
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

export async function lottoAmountGet() {
  const inputAmount = await Console.readLineAsync(TEXT.INPUT_AMOUNT);
  if (inputAmount % NUMBER.INITIAL_AMOUNT !== NUMBER.INIT_VALUE)
    throw new Error(TEXT.AMOUNT_ERROR);
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
