/* eslint-disable max-lines-per-function */
import Computer from '../src/Domain/Computer.js';

describe('Computer 테스트', () => {
  test('입력된 수 만큼 6자리 배열 반복 생성', () => {
    const computer = new Computer();
    const result = computer.getLotteryNumbers(6);

    expect(result).toHaveLength(6);
  });

  test('숫자 오름차순 정렬 테스트', () => {
    const computer = new Computer();
    const result = computer.getLotteryNumbers(3);

    result.forEach((arr) => {
      const testArr = [...arr].sort((a, b) => a - b);

      expect(arr).toEqual(testArr);
    });
  });
});
