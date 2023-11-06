import { Console } from '@woowacourse/mission-utils';
import LOTTO from '../../src/constants/lotto.js';
import LottoChecker from '../../src/Domain/LottoChecker.js';
import { MessageFormat } from '../../src/utils/messageFormat.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
  },
}));

jest.mock('../../src/constants/lotto.js', () => ({
  number: {
    winningMin: 3,
    bonus: {
      count: 5,
      key: '5_bonus',
    },
  },
  lottoPrizesMap: new Map([
    ['3', 0],
    ['4', 0],
    ['5', 0],
    ['5_bonus', 0],
    ['6', 0],
  ]),
}));

jest.mock('../../src/utils/messageFormat.js', () => ({
  MessageFormat: {
    resultRow: jest.fn(),
  },
}));

describe('LottoChecker', () => {
  let lottoChecker;

  beforeEach(() => {
    lottoChecker = new LottoChecker({ numbers: [1, 2, 3, 4, 5, 6] });
  });

  test('compareWinningAndLotto', () => {
    const bonusNumber = '7';
    const lottoList = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 8, 9, 10],
      [11, 12, 13, 14, 15, 16],
    ];
    const expected = {
      3: 1,
      4: 0,
      5: 1,
      '5_bonus': 1,
      6: 1,
    };

    const keys = Array.from(LOTTO.lottoPrizesMap.keys());

    lottoChecker.printTotalResult(expected);

    keys.forEach((key, index) => {
      expect(Console.print.mock.calls[index][0]).toBe(MessageFormat.resultRow(key, expected[key]));
    });
  });
});
