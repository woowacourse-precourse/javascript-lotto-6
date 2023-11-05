import LottoDrawChecker from '../../src/domains/LottoDrawChecker';

describe('LottoDrawChecker.matchingNumberCount test', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;
  const lottoDrawChecker = new LottoDrawChecker(winningNumbers, bonusNumber);

  test('일치하는 숫자 3개가 주어졌을때 3을 반환해야 한다.', () => {
    // given
    const lotto = [1, 2, 3, 43, 44, 45];

    // when
    const matchingNumberCount = lottoDrawChecker.matchingNumberCount(lotto);

    //then
    expect(matchingNumberCount).toBe(3);
  });
});
