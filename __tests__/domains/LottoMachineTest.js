import { LOTTO } from '../../src/constants/lotto';
import LottoMachine from '../../src/domains/LottoMachine';
import RandomNumberGenerator from '../../src/utils/RandomNumberGenerator';
import Lotto from '../../src/Lotto';

expect.extend({
  toBeInstancesOf(received, expectedInstance) {
    const pass = received.every(
      (element) => element instanceof expectedInstance,
    );
    if (pass) {
      return {
        message: () =>
          `모든 elements는 ${expectedInstance.name}의 인스턴스입니다.`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `모든 elements가 ${expectedInstance.name} 인스턴스는 아닙니다.`,
        pass: false,
      };
    }
  },
});

describe('LottoMachine constructor validation', () => {
  const randomNumberGenerator = new RandomNumberGenerator();

  test.each(['1000', NaN, 'plzWooteco'])(
    '생성자로 받는 sellingPrise에 number타입 외의 값이 들어왔을때 예외가 발생해야 한다.',
    (invalidValue) => {
      // given
      // when
      // then
      expect(() => {
        new LottoMachine(invalidValue, randomNumberGenerator);
      }).toThrow();
    },
  );
});

describe('LottoMachine.purchase', () => {
  const randomNumberGenerator = new RandomNumberGenerator();
  const lottoMachine = new LottoMachine(
    LOTTO.SELLING_PRICE,
    randomNumberGenerator,
  );

  test('(n * 1000)원을 넣었을때 n개의 로또를 반환해야 한다.', () => {
    // given
    const money = 10000;
    const expectedLottoCount = money / LOTTO.SELLING_PRICE;

    // when
    const lottoList = lottoMachine.purchase(money);

    // then
    expect(lottoList).toHaveLength(expectedLottoCount);
  });

  test('1000원 단위로 구매하지 않았을때 예외가 발생해야 한다', () => {
    // given
    const money = 10990;

    // when
    // then
    expect(() => {
      lottoMachine.purchase(money);
    }).toThrow();
  });

  test.each([-10000, 500])(
    '최소금액액보다 적은 돈이 들어왔을때 예외가 발생해야 한다',
    (testMoney) => {
      // given
      const money = testMoney;

      // when
      // then
      expect(() => {
        lottoMachine.purchase(money);
      }).toThrow();
    },
  );

  test('로또를 구매했을때 반환되는 배열의 element는 모두 Lotto의 인스턴스여야 한다.', () => {
    // given
    const money = 10000;

    // when
    const lottoList = lottoMachine.purchase(money);

    // then
    expect(lottoList).toBeInstancesOf(Lotto);
  });
});
