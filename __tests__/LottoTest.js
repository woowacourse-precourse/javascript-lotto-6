import Lotto from '../src/Lotto.js';
import COMMON_VALUE from '../src/constants/\bcommonValue.js';

const MOCK = Object.freeze({
  PURCHASED_LOTTOS: [
    [1, 3, 5, 7, 9, 10, 15],
    [3, 5, 11, 16, 32, 38],
    [9, 10, 15, 17, 19, 22],
  ],
  WINNING_NUMBERS: [1, 5, 9, 15, 17, 19],
  BONUS_NUMBER: 20,
  CHECK_BONUS_NUMBER: COMMON_VALUE.FAIL,
  WINNING_STSATUS: [0, 2, 0, 0, 0],
  REWARD: 100000,
  RATE_OF_RETURN: 3333.3,
  RANK: [4, COMMON_VALUE.FAIL, 4],
});

describe('로또 클래스 테스트', () => {
  test('현재 당첨된 통계를 올바르게 반환하는가 (calculateWinningStatus)', () => {
    //given
    const mockLotto = new Lotto(MOCK.PURCHASED_LOTTOS);

    //when
    const result = mockLotto.calculateWinningStatus(
      MOCK.WINNING_NUMBERS,
      MOCK.BONUS_NUMBER
    );

    //then
    expect(result).toEqual(MOCK.WINNING_STSATUS);
  });

  test('수익률을 올바르게 반환하는가 (calculateRateOfReturn)', () => {
    //given
    const mockLotto = new Lotto(MOCK.PURCHASED_LOTTOS);

    //when
    const result = mockLotto.calculateRateOfReturn(MOCK.WINNING_STSATUS);

    //then
    expect(result).toEqual(MOCK.RATE_OF_RETURN);
  });

  test('각 등수의 상금을 올바르게 반환하는가 (calculateReward)', () => {
    //given
    const mockLotto = new Lotto(MOCK.PURCHASED_LOTTOS);

    //when
    const result = mockLotto.calculateReward(MOCK.WINNING_STSATUS);

    //then
    expect(result).toEqual(MOCK.REWARD);
  });

  test('로또의 등수를 올바르게 반환하는가 (calculateLottoRank)', () => {
    //given
    const mockLotto = new Lotto(MOCK.PURCHASED_LOTTOS);
    const rankResult = [];

    //when
    MOCK.PURCHASED_LOTTOS.forEach((numbers) => {
      const rank = mockLotto.calculateLottoRank(
        numbers,
        MOCK.WINNING_NUMBERS,
        MOCK.BONUS_NUMBER
      );
      rankResult.push(rank);
    });

    //then
    expect(rankResult).toEqual(MOCK.RANK);
  });

  test('당첨번호와 보너스 번호의 매칭 정보를 바탕으로 로또의 등수를 올바르게 반환하는가 (checkLottoRank)', () => {
    //given
    const mockLotto = new Lotto(MOCK.PURCHASED_LOTTOS);
    const mockNumberOfMatching = [6, 5, 4, 3, 2, 1];
    const mockCheckBonusMatching = true;
    const mockRank = [1, 2, 4, 5, COMMON_VALUE.FAIL, COMMON_VALUE.FAIL];

    mockNumberOfMatching.forEach((numberOfMatching, idx) => {
      //when
      const rank = mockLotto.checkLottoRank(
        numberOfMatching,
        mockCheckBonusMatching
      );

      //then
      expect(rank).toEqual(mockRank[idx]);
    });
  });

  test('두 당첨번호가 몇개 일치하는지 올바르게 반환하는가 (countOfMatchingNumbers)', () => {
    //given
    const mockLotto = new Lotto(MOCK.PURCHASED_LOTTOS);
    const lotto1 = [1, 3, 5, 6, 9, 10];
    const lotto2 = [1, 3, 5, 7, 8, 11];
    const answer = 3;

    //when
    const result = mockLotto.countOfMatchingNumbers(lotto1, lotto2);

    //then
    expect(result).toEqual(answer);
  });

  test('당첨번호에 보너스 번호가 일치했는지 유무를 올바르게 반환하는가 (checkMatchingBonus)', () => {
    //given
    const mockLotto = new Lotto(MOCK.PURCHASED_LOTTOS);

    //when
    const result = mockLotto.checkMatchingBonus(
      MOCK.WINNING_NUMBERS,
      MOCK.BONUS_NUMBER
    );

    //then
    expect(result).toEqual(MOCK.CHECK_BONUS_NUMBER);
  });

  test('구매한 로또들의 당첨 결과와 수익률을 올바르게 반환하는가 (result)', () => {
    //given
    const mockLotto = new Lotto(MOCK.PURCHASED_LOTTOS);

    //when
    const result = mockLotto.result(MOCK.WINNING_NUMBERS, MOCK.BONUS_NUMBER);

    //then
    expect(result).toEqual([MOCK.WINNING_STSATUS, MOCK.RATE_OF_RETURN]);
  });
});
