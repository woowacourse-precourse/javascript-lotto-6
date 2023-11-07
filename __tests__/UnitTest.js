import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import { validateAmount } from '../src/utils/validate.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('로또 구입 금액 테스트', () => {
  test('로또 구입 금액이 숫자 형식이 아니면 예외가 발생한다.', () => {
    const amount = 'abc&';
    expect(() => validateAmount(amount)).toThrow('[ERROR]');
  });

  test('로또 구입 금액이 1000보다 작으면 예외가 발생한다.', () => {
    const amount = '600';
    expect(() => validateAmount(amount)).toThrow('[ERROR]');
  });

  test('로또 구입 금액이 1000 단위가 아니면 예외가 발생한다.', () => {
    const amount = '13300';
    expect(() => validateAmount(amount)).toThrow('[ERROR]');
  });

  test('구입 금액에 따른 로또 발행 ', () => {
    const app = new App();
    app.amount = 3000;
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 11, 22, 33, 44],
      [10, 17, 20, 24, 38, 41],
    ]);

    app.getLottos();
    const lottos = app.lottos;
    expect(lottos[0].numbers).toEqual([1, 2, 3, 4, 5, 6]);
    expect(lottos[1].numbers).toEqual([1, 2, 11, 22, 33, 44]);
    expect(lottos[2].numbers).toEqual([10, 17, 20, 24, 38, 41]);
  });
});
