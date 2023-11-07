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

describe('확률값 계산', () => {
  test('확률값이 올바르게 계산된다.', () => {
    // given
    const TOTAL = 55000;
    const PRICE = 5000;
    const OUTPUT = 1100;

    // when
    const percent = rateModel.getPercent(TOTAL, PRICE);

    // then
    expect(percent).toBe(OUTPUT);
  });
});

describe('소수점 둘째자리에서 반올림', () => {
  test.each([
    [6.875, '6.9'],
    [100.03, '100.0'],
  ])(
    '소수점 둘째자리에서 반올림하여 첫째자리까지 문자열로 나타낸다.',
    (input, output) => {
      // when
      const roundedValue = rateModel.getRoundedValue(input);

      // then
      expect(roundedValue).toBe(output);
    },
  );
});

describe('화폐 단위로 변환', () => {
  test.each([
    ['100000.0', '100,000.0'],
    ['2500000.2', '2,500,000.2'],
  ])('숫자로 이루어진 문자열이 화폐 단위로 반환 된다.', (input, output) => {
    // when
    const monetaryValue = rateModel.getMonetaryValue(input);

    // then
    expect(monetaryValue).toBe(output);
  });
});

describe('수익률 계산', () => {
  test('소수점 둘째 자리에서 반올림한 확률 값을 문자열로 반환한다.', () => {
    // given
    const TOTAL = 5000;
    const PRICE = 9000;
    const OUTPUT = '55.6';

    // when
    const result = rateModel.getRate(TOTAL, PRICE);

    // then
    expect(result).toBe(OUTPUT);
  });

  test('소수점이 없으면 .0이 있는 상태의 확률 값이 문자열로 반환된다.', () => {
    // given
    const TOTAL = 5000;
    const PRICE = 10000;
    const OUTPUT = '50.0';

    // when
    const result = rateModel.getRate(TOTAL, PRICE);

    // then
    expect(result).toBe(OUTPUT);
  });

  test('확률 값이 화폐 단위의 문자열로 반환된다.', () => {
    // given
    const TOTAL = 1500000;
    const PRICE = 5000;
    const OUTPUT = '30,000.0';

    // when
    const result = rateModel.getRate(TOTAL, PRICE);

    // then
    expect(result).toBe(OUTPUT);
  });
});
