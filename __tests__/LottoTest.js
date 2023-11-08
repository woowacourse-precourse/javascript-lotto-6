import Lotto from '../src/Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호와 정답 번호를 비교하고 동일한 숫자의 개수를 반환한다.', () => {
    // given
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumbers = [1, 2, 3, 4, 7, 8, 9];
    const answerMachingCount = 4;

    // when
    const matchingCount = lotto.compareWinningNumbers(winningNumbers);

    // then
    expect(matchingCount).toEqual(answerMachingCount);
  });

  test('로또 번호와 보너스 번호를 비교하고 동일하면 true를 반환한다.', () => {
    // given
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bounsNumber = 5;

    // when
    const answer = lotto.compareBounsNumber(bounsNumber);

    // then
    expect(answer).toBeTruthy();
  });

  test('로또 번호를 발행할 때, 6자리의 중복되지 않는 수를 오름차순으로 발행한다.', () => {
    // given
    const RANDOM_NUMBERS = [6, 5, 4, 3, 2, 1];
    const ANSWER = [1, 2, 3, 4, 5, 6];

    mockRandoms([RANDOM_NUMBERS]);

    // when
    const lottoNumbers = Lotto.generateLottoNumbers();

    // then
    expect(lottoNumbers).toEqual(ANSWER);
  });
});
