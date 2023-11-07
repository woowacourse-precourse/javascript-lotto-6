import { Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../src/constants/messages';
import LottoMaker from '../src/utils/LottoMaker';

const mockRandoms = numbers => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

describe('로또 메이커 테스트 - 구입 금액 검증', () => {
  const lottoMaker = new LottoMaker();
  test('올바른 구입 금액이 입력되면 예외가 발생하지 않는다', () => {
    expect(lottoMaker.calcLottoPublishCount(2000)).toBe(2);
  });

  test.each([
    {
      input: 'str',
      case: '구입 금액이 숫자가 아니라면 예외가 발생한다.',
      message: ERROR_MESSAGE.isNaN,
    },
    {
      input: 1001,
      case: '구입 금액이 로또 금액으로 나누어 떨어지지 않으면 예외가 발생한다.',
      message: ERROR_MESSAGE.notDividedPrice,
    },
    {
      input: -1000,
      case: '구입 금액이 음수라면 예외가 발생한다.',
      message: ERROR_MESSAGE.negativePrice,
    },
  ])('$case', ({ input, message }) => {
    expect(() =>
      lottoMaker.validateLottoPublishCount(
        lottoMaker.calcLottoPublishCount(input),
      ),
    ).toThrow(message);
  });
});

describe('로또 메이커 테스트 - 발행된 랜덤 로또 번호 정렬', () => {
  const lottoMaker = new LottoMaker();
  test('정렬된 로또 번호가 반환된다.', () => {
    const RANDOM_NUMBERS_TO_END = [6, 5, 4, 3, 2, 1];

    mockRandoms([RANDOM_NUMBERS_TO_END]);

    expect(lottoMaker.getSortedNumbers()).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('로또 메이커 테스트 - 보너스 번호 검증', () => {
  const lottoMaker = new LottoMaker();
  lottoMaker.winningLotto = [1, 2, 3, 4, 5, 6];
  test.each([
    {
      input: 46,
      case: '보너스 번호에 1~45가 아닌 다른 수가 입력되면 예외가 발생한다.',
      message: ERROR_MESSAGE.invalidNumber,
    },
    {
      input: 1,
      case: '보너스 번호가 이미 로또 번호에 있으면 예외가 발생한다.',
      message: ERROR_MESSAGE.duplicateBonusNumber,
    },
  ])('$case', ({ input, message }) => {
    expect(() => lottoMaker.validateBonusNumber(input)).toThrow(message);
  });
});

describe('로또 메이커 테스트 - 통계 계산', () => {
  const lottoMaker = new LottoMaker();
  lottoMaker.winningLotto = [1, 2, 3, 4, 5, 6];
  lottoMaker.bonusNumber = 7;

  mockRandoms([
    [1, 2, 3, 4, 5, 6],
    [6, 5, 4, 3, 2, 7],
  ]);

  lottoMaker.publishLottos(2);

  test('1등부터 5등까지 당첨 횟수가 담긴 score 객체를 리턴한다.', () => {
    const score = {
      '1ST': 1,
      '2ND': 1,
      '3RD': 0,
      '4TH': 0,
      '5TH': 0,
    };

    expect(lottoMaker.calcScore()).toStrictEqual(score);
  });

  test('당첨 금액을 리턴한다.', () => {
    const score = {
      '1ST': 1,
      '2ND': 1,
      '3RD': 0,
      '4TH': 0,
      '5TH': 0,
    };
    expect(lottoMaker.getPrizePrice(score)).toBe(2030000000);
  });
});
