import Lotto from '../src/Lotto.js';

test('로또 번호 유효성 검사', () => {
  // 개수가 6개보다 많을 때
  expect(() => new Lotto([1, 2, 3, 4, 5, 6, 7])).toThrow('[ERROR]');

  // 중복된 숫자가 있을 때
  expect(() => new Lotto([1, 2, 3, 4, 5, 5])).toThrow('[ERROR]');

  // 1 ~ 45 이외의 숫자가 있을 때
  expect(() => new Lotto([-1, 2, 3, 4, 65, 5])).toThrow('[ERROR]');

  // 문자가 있을 때
  expect(() => new Lotto(['안', 2, 3, 4, 6, 5])).toThrow('[ERROR]');

  // 문자가 숫자에 포함될 때
  expect(() => new Lotto(['이0', 2, 3, 4, 6, 5])).toThrow('[ERROR]');

  // 개수가 6개 미만일 때
  expect(() => new Lotto([2, 3, 4, 6, 5])).toThrow('[ERROR]');

  // 아무 번호도 입력하지 않았을 때
  expect(() => new Lotto([])).toThrow('[ERROR]');
});

describe('로또 기능 테스트', () => {
  test('당첨번호와 일치하는 로또 한장의 당첨 갯수 반환하는 기능 테스트', () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const lotto = [1, 2, 33, 43, 5, 7];

    // when
    const matchNumberCount = Lotto.matchNumberCount(lotto, winningNumbers);

    // then
    expect(matchNumberCount).toBe(3);
  });

  test('로또 상금 계산하는 기능 테스트', () => {
    // given
    const winningRank = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 1,
      fifth: 1,
    };

    // when
    const totalPrize = Lotto.totalPrize(winningRank);

    // then
    expect(totalPrize).toBe(55000);
  });

  test('당첨내역에 대한 수익률 계산하는 기능 테스트', () => {
    const money = 5000;
    const winningRank = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 1,
    };

    const calculateProfit = Lotto.calculateProfit(money, winningRank);
    expect(calculateProfit).toBe('100.0');
  });
});
