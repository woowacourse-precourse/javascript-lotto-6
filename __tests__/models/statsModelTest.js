import statsModel from '../../src/models/statsModel.js';

describe('로또 하나 당 수익 금액 계산', () => {
  const numbers = [13, 14, 17, 38, 42, 45];
  let BONUS = 1;

  test('3개 일치는 5000 이다.', () => {
    // given
    const COUNT = 3;

    // when
    const result = statsModel.getRevenue(numbers, BONUS, COUNT);

    // then
    expect(result).toBe(5000);
  });

  test('4개 일치는 50000 이다.', () => {
    // given
    const COUNT = 4;

    // when
    const result = statsModel.getRevenue(numbers, BONUS, COUNT);

    // then
    expect(result).toBe(50000);
  });

  test('5개 일치는 1500000 이다.', () => {
    // given
    const COUNT = 5;

    // when
    const result = statsModel.getRevenue(numbers, BONUS, COUNT);

    // then
    expect(result).toBe(1500000);
  });

  test('5개 일치, 보너스 일치는 30000000 이다.', () => {
    // given
    const COUNT = 5;
    BONUS = 17;

    // when
    const result = statsModel.getRevenue(numbers, BONUS, COUNT);

    // then
    expect(result).toBe(30000000);
  });

  test('6개 일치는 2000000000 이다.', () => {
    // given
    const COUNT = 6;

    // when
    const result = statsModel.getRevenue(numbers, BONUS, COUNT);

    // then
    expect(result).toBe(2000000000);
  });
});

describe('0 이상인 수익 금액들만 모으기', () => {
  test('발행된 로또 정보들을 가지고 0 이상인 수익 금액들만 반환한다.', () => {
    // given
    const random = [
      [7, 11, 14, 35, 38, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 29, 40, 42, 43],
      [4, 13, 22, 35, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const lotto = [7, 11, 14, 35, 38, 45];
    const BONUS = 42;
    const output = [30000000, 5000, 5000];

    // when
    const result = statsModel.getRevenues(random, lotto, BONUS);

    // then
    expect(result).toEqual(output);
  });
});

describe('일치된 개수 계산', () => {
  test('3개 일치, 4개 일치, 5개 일치, 5개 + 보너스 일치, 6개 일치가 각각 몇 개인지 보여준다.', () => {
    // given
    const revenues = [2000000000, 5000, 5000, 1500000];
    const output = [2, 0, 1, 0, 1];

    // when
    const result = statsModel.getMatchCounts(revenues);

    // then
    expect(result).toEqual(output);
  });
});

describe('문자열로 이루어진 당첨 통계 배열', () => {
  test('당첨 통계를 문자열로 각각 배열 안에 나타낸다.', () => {
    // given
    const matchCounts = [3, 1, 0, 2, 1];
    const output = [
      '3개 일치 (5,000원) - 3개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 2개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    // when
    const result = statsModel.getStats(matchCounts);

    // then
    expect(result).toEqual(output);
  });
});
