/* eslint-disable max-lines-per-function */
import User from '../src/Domain/User.js';
import { ERROR_REGEX } from '../src/Utils/Regex.js';

describe('User 테스트', () => {
  describe('getLotteryNumber 테스트', () => {
    test('6자리 입력 시 각 숫자타입으로 변환된 배열 반환', async () => {
      const user = new User();
      const result = await user.getLotteryNumber('1,11,31,24,33,41');

      expect(result).toEqual(expect.arrayContaining([1, 11, 31, 24, 33, 41]));
    });

    test('6자리 이상 입력할 경우 예외처리', async () => {
      const user = new User();
      const result = () => user.getLotteryNumber('1, 11, 22, 33, 41, 15, 7');

      await expect(result).toThrow(ERROR_REGEX);
    });

    test('6자리 미만 입력할 경우 예외처리', () => {
      const user = new User();
      const result = () => user.getLotteryNumber('1, 11, 22, 33, 7');

      expect(result).toThrow(ERROR_REGEX);
    });

    test('최소값 0 미만 숫자를 입력할 경우 예외처리', () => {
      const user = new User();
      const result = () => user.getLotteryNumber('-3,-7,0,-22,-15,-19');

      expect(result).toThrow(ERROR_REGEX);
    });

    test('최대값 45 이상 숫자를 입력할 경우 예외처리', () => {
      const user = new User();
      const result = () => user.getLotteryNumber('48, 51, 555, 122, 321, 145');

      expect(result).toThrow(ERROR_REGEX);
    });

    test('숫자 이외의 값 입력할 경우 예외처리', () => {
      const user = new User();
      const result = () => user.getLotteryNumber('a,bb,c,d,e,r');

      expect(result).toThrow(ERROR_REGEX);
    });
  });

  describe('getNumberofPurchase 테스트', () => {
    test('1000으로 나누어 떨어질 경우', () => {
      const user = new User(3000);
      const result = user.getNumberofPurchase();

      expect(result).toEqual(3);
    });

    test('1000으로 나누어 떨어지지 않을 경우 예외처리', () => {
      expect(() => new User(3123)).toThrow(ERROR_REGEX);
    });
  });
});
