import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../src/Lotto.js';
import Validations from '../src/Validations.js';

const mockRandoms = numbers => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능
  test.each([[['1000s', '2s000', 's30000', '']], [['s', 1, 30]]])(
    '숫자가 맞는지',
    winningNumbers => {
      expect(() => {
        // eslint-disable-next-line no-new
        new Lotto(winningNumbers);
      }).toThrow('[ERROR] 숫자만 입력해 주세요.');
    },
  );

  test.each([[[1, 2, 3, 4, 5, 6, 56]], [[60, 59, 58, 57]], [[0, 3, 5]]])(
    '1~45 사이의 숫자가 맞는지',
    winningNumbers => {
      mockRandoms(winningNumbers);

      expect(() => {
        // eslint-disable-next-line no-new
        new Lotto(winningNumbers);
      }).toThrow('[ERROR] 1~45 사이의 숫자만 입력해주세요.');
    },
  );

  test.each([[[1, 2, 3, 4, 5, 6, 7.5]], [[44, 43, 42, 37.4]], [[2, 3, 20.1]]])(
    '소수점이 없는지',
    winningNumbers => {
      mockRandoms(winningNumbers);

      expect(() => {
        // eslint-disable-next-line no-new
        new Lotto(winningNumbers);
      }).toThrow('[ERROR] 정수만 입력해주세요.');
    },
  );

  test.each([[[1, 2, 3, 4, 5, 5]], [[44, 43, 42, 42]], [[2, 20, 20]]])(
    '중복된 숫자가 없는지',
    winningNumbers => {
      mockRandoms(winningNumbers);

      expect(() => {
        // eslint-disable-next-line no-new
        new Lotto(winningNumbers);
      }).toThrow('[ERROR] 중복된 숫자가 없이 입력해주세요.');
    },
  );

  test.each([[[1, 2, 3, 4, 5, 7, 8]], [[42, 43, 41, 4]], [[3, 33, 2, 35]]])(
    '6개인지',
    winningNumbers => {
      mockRandoms(winningNumbers);

      expect(() => {
        // eslint-disable-next-line no-new
        new Lotto(winningNumbers);
      }).toThrow('[ERROR] 길이가 6이어야 합니다.');
    },
  );
});
