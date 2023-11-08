import LottoResult from '../src/LottoResult.js';
import Lotto from '../src/Lotto.js';
import { Console } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils');

describe('LottoResult 클래스 테스트', () => {
  let lottoResult;

  beforeEach(() => {
    lottoResult = new LottoResult();
    Console.print.mockClear();
  });

  test('당첨 결과 확인 및 출력 테스트', () => {
    const lottoTickets = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
    ];
    const winningNumbers = '1,2,3,4,5,7';
    const bonusNumber = 6;

    lottoResult.checkWinningNumbers(lottoTickets, winningNumbers, bonusNumber);
    lottoResult.displayPrizes();

    expect(Console.print).toHaveBeenCalled();
  });
});
