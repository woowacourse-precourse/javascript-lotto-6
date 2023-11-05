import { Console } from '@woowacourse/mission-utils';

export const Inputs = {
  async getAmount(message) {
    const userInput = await Console.readLineAsync(`${message}\n`);

    Console.print('');

    // 차후 검증 코드 추가.
    return Number(userInput);
  },

  async getWinningNumber(message) {
    const userInput = await Console.readLineAsync(`${message}\n`);
    const userInputList = userInput
      .split(',')
      .map((element) => parseInt(element, 10));
    // 차후 검증 코드 추가.

    // 중복 검사
    const isDuplicated = new Set(userInputList).size !== userInputList.length;

    if (isDuplicated) {
      throw new Error('[ERROR] 중복 값이 존재합니다.');
    }

    // // 6자리 검사
    // if (userInputList.length !== 6) {
    //   Console.print('[ERROR] 당첨 번호가 6자리가 아닙니다.');
    // }

    Console.print('');
    return userInputList;
  },

  async getBonusNumber(message, winningNumber) {
    const userInput = parseInt(await Console.readLineAsync(`${message}\n`), 10);
    // 당첨번호와 중복된 번호 있는지 검사.
    winningNumber.map((item, idx) => {
      if (item === userInput) {
        throw new Error('[ERROR] 당첨 번호 중 중복된 번호가 있습니다.');
      }
    });
    Console.print('');
    return userInput;
  },
};
