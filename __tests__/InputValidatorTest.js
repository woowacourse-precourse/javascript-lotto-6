import { Validator } from '../src/utils/Validator.js';

describe('로또 게임 입력 테스트', () => {
  test('로또 당첨 번호가 6개가 아닌 경우 false를 반환한다.', () => {
    const numbers = [1, 2, 3, 4, 5]
    expect(Validator.checkSixNumber(numbers)).toEqual(false);
  });

  test('보너스 번호가 1 ~ 45사이의 숫자 1개가 아닌 경우 false를 반환한다.', () => {
    expect(Validator.checkIsNumber('j')).toEqual(false);
    expect(Validator.checkIsNumber(70)).toEqual(false);
  })
});