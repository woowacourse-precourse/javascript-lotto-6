import rateModel from '../../src/models/rateModel.js';

describe('총 수익 금액 구하기', () => {
  test('합계를 구한다.', () => {
    // given
    const numbers = [1, 2, 3, 4, 5];
    const OUTPUT = 15;

    // when
    const sum = rateModel.getTotal(numbers);

    // then
    expect(sum).toBe(OUTPUT);
  });
});

describe('수익률 계산', () => {
  test('소수점 둘째 자리에서 반올림한 확률 값을 문자열로 반환한다.', () => {
    // given
    const TOTAL = 5000;
    const PRICE = 9000;
    const OUTPUT = '55.56';

    // when
    const result = rateModel.getRate(TOTAL, PRICE);

    // then
    expect(result).toBe(OUTPUT);
  });

  test('소수점이 없으면 없는 상태의 확률 값이 문자열로 반환된다.', () => {
    // given
    const TOTAL = 5000;
    const PRICE = 10000;
    const OUTPUT = '50';

    // when
    const result = rateModel.getRate(TOTAL, PRICE);

    // then
    expect(result).toBe(OUTPUT);
  });

  test('확률 값이 화폐 단위의 문자열로 반환된다.', () => {
    // given
    const TOTAL = 1500000;
    const PRICE = 5000;
    const OUTPUT = '30,000';

    // when
    const result = rateModel.getRate(TOTAL, PRICE);

    // then
    expect(result).toBe(OUTPUT);
  });
});
