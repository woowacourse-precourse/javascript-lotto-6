import { Console } from '@woowacourse/mission-utils';

const Inputs = {
  async getAmount(message) {
    const userInput = await Console.readLineAsync(message);
    if (userInput % 1000 !== 0) {
      throw new Error('[ERROR] 구매 단위가 1000원으로 떨어져야 합니다.');
    }
    // 차후 검증 코드 추가.
    console.log(userInput);
    return userInput;
  },

  async getWinningNumber(message) {
    const userInput = await Console.readLineAsync(message);
    const userInputList = userInput
      .split(',')
      .map((element) => parseInt(element, 10));
    console.log(userInputList);
    // 차후 검증 코드 추가.

    // 중복 검사
    const isDuplicated = new Set(userInputList).size !== userInputList.length;

    if (isDuplicated) {
      throw new Error('[ERROR] 중복 값이 존재합니다.');
    }

    // 6자리 검사
    if (userInputList.length !== 6) {
      throw new Error('[ERROR] 당첨 번호가 6자리가 아닙니다.');
    }
    return userInputList;
  },

  async getBonusNumber(message, winningNumber) {
    const userInput = parseInt(await Console.readLineAsync(message), 10);
    // 당첨번호와 중복된 번호 있는지 검사.
    winningNumber.map((item, idx) => {
      if (item === userInput) {
        throw new Error('[ERROR] 당첨 번호 중 중복된 번호가 있습니다.');
      }
    });
    console.log(userInput);
    return userInput;
  },
};
