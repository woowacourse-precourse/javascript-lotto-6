import { MissionUtils } from '@woowacourse/mission-utils';
import LottoResult from '../src/domains/LottoResult';
import { LOTTO_RANKS } from '../src/constants/lotto';
import LottoStore from '../src/domains/LottoStore';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

describe('LottoResult 클래스 테스트', () => {
  let lottoResult;
  let lottos;

  beforeEach(() => {
    lottoResult = new LottoResult();
    const lottoStore = new LottoStore();
    lottos = lottoStore.generateLottos(5000);

    mockRandoms([
      [1, 11, 29, 35, 38, 41],
      [3, 12, 17, 25, 28, 32],
      [9, 13, 23, 27, 28, 34],
      [3, 27, 30, 32, 41, 44],
      [3, 15, 26, 32, 36, 42],
    ]);
  });

  test('로또 등수 정보의 초기 상태는 모두 0이다.', () => {
    // given
    const EXPECTED_VALUES = [0, 0, 0, 0, 0];
    const winningResult = lottoResult.getWinningResult();
    const initialRanks = Object.values(winningResult);

    // then
    expect(initialRanks).toEqual(EXPECTED_VALUES);
  });

  test('로또 등수 정보 불변성 유지 테스트', () => {
    // given
    const intialWinningResult = lottoResult.getWinningResult();

    // when
    intialWinningResult[LOTTO_RANKS.first] = 1;
    intialWinningResult[LOTTO_RANKS.second] = 4;
    intialWinningResult[LOTTO_RANKS.third] = 3;
    intialWinningResult[LOTTO_RANKS.fourth] = 7;
    intialWinningResult[LOTTO_RANKS.fifth] = 1;

    const winningResult = lottoResult.getWinningResult();

    // then
    expect(winningResult).not.toEqual(intialWinningResult);
    expect(JSON.stringify(winningResult)).not.toEqual(JSON.stringify(intialWinningResult));
  });

  test('로또 등수 정보 업데이트 테스트', () => {
    // given
    const WINNING_ANSWER = [3, 9, 28, 30, 32, 41];
    const BONUS_NUMBER = 11;
    const EXPECTED_WINNING_RESULT = [0, 0, 0, 1, 1];

    // when
    lottoResult.judgeLottosRank(lottos, WINNING_ANSWER, BONUS_NUMBER);
    const winningResult = Object.values(lottoResult.getWinningResult());

    // then
    expect(winningResult).toEqual(EXPECTED_WINNING_RESULT);
  });

  test('로또 수익률 계산 테스트', () => {
    // given
    const WINNING_ANSWER = [3, 9, 28, 30, 32, 41];
    const BONUS_NUMBER = 11;
    const EXPECTED_RETURN_RATE = '1100.0';

    // when
    lottoResult.judgeLottosRank(lottos, WINNING_ANSWER, BONUS_NUMBER);
    const returnRate = lottoResult.calculateReturnRate(5);
    // then
    expect(returnRate).toBe(EXPECTED_RETURN_RATE);
  });
});
