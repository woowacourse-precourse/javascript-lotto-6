import { Random } from '@woowacourse/mission-utils';
import Money from '../../src/model/Money.js';
import ValidationError from '../../src/error/ValidationError.js';
import { PURCHASE_AMOUNT_ERROR } from '../../src/constants/error.js';
import { MATCH } from '../../src/constants/constant.js';

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

describe('Money class 기능 테스트', () => {
  // given
  test.each(['999', '', '-1000', 'aw', '##ㅁㄴ'])('입력된 금액이 숫자 혹은 1000원 이상인지 확인', (input) => {
    const error = new ValidationError(PURCHASE_AMOUNT_ERROR.NUMBER);

    // when then
    expect(() => {
      new Money(input);
    }).toThrow(error.message);
  });

  // given
  test.each(['1014', '100002', '1000.43'])('입력된 금액이 1000의 배수인지 확인', (input) => {
    const error = new ValidationError(PURCHASE_AMOUNT_ERROR.NUMBER);

    // when then
    expect(() => {
      new Money(input);
    }).toThrow(error.message);
  });

  test('입력된 문자 금액을 숫자로 정상적으로 생성하는지 확인', () => {
    // given
    const input = '2000';

    // when
    const money = new Money(input);

    // then
    expect(money.getMoney()).toBe(2000);
  });

  test('Money 인스턴스가 생성될시 match 객체가 정상적으로 생성되는지 확인', () => {
    // given
    const input = '2000';
    const result = { ...MATCH };

    // when
    const money = new Money(input);

    // then
    expect(money.getMatch()).toEqual(result);
  });

  test('구입 금액에 따라서 로또 리스트를 오름차순으로 생성하는지 테스트', () => {
    // given
    const input = '2000';
    const randomNumber = [
      [3, 7, 40, 32, 45, 1],
      [2, 25, 15, 11, 7, 10],
    ];

    mockRandoms(randomNumber);
    // when
    const money = new Money(input);

    // then
    expect(money.getLottoList()).toEqual([
      [1, 3, 7, 32, 40, 45],
      [2, 7, 10, 11, 15, 25],
    ]);
  });
});
