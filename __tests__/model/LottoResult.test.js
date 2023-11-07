import Lotto from '../../src/model/Lotto';
import LottoResult from '../../src/model/LottoResult';
import { GAME_SETTINGS } from '../../src/constants/GameSettings';
import { PRIZES } from '../../src/constants/Prizes';

describe('LottoResult 클래스', () => {
  const mockWinningNumbers = [1, 2, 3, 4, 5, 6];
  const mockBonusNumber = 7;
  const mockLottos = [
    new Lotto([1, 2, 3, 4, 5, 6]),
    new Lotto([1, 2, 3, 4, 5, 7]),
    new Lotto([1, 2, 3, 4, 5, 8]),
    new Lotto([1, 2, 3, 4, 9, 10]),
    new Lotto([1, 2, 3, 11, 12, 13]),
  ];

  test('6개 번호가 일치할 때 당첨 내역이 올바르게 반환되어야 한다.', () => {
    const lottoResult = new LottoResult(mockWinningNumbers, mockBonusNumber, [mockLottos[0]]);
    const resultString = lottoResult.getFormattedResultString();
    expect(resultString).toContain(
      `${GAME_SETTINGS.MATCH_TEXTS[6]} (${PRIZES[6].toLocaleString()}원) - 1개`,
    );
  });

  test('5개 번호와 보너스 번호가 일치할 때 당첨 내역이 올바르게 반환되어야 한다.', () => {
    const lottoResult = new LottoResult(mockWinningNumbers, mockBonusNumber, [mockLottos[1]]);
    const resultString = lottoResult.getFormattedResultString();
    expect(resultString).toContain(
      `${GAME_SETTINGS.MATCH_TEXTS['5+1']} (${PRIZES['5+1'].toLocaleString()}원) - 1개`,
    );
  });

  test('5개 번호가 일치하지만 보너스 번호가 일치하지 않을 때 당첨 내역이 올바르게 반환되어야 한다.', () => {
    const lottoResult = new LottoResult(mockWinningNumbers, mockBonusNumber, [mockLottos[2]]);
    const resultString = lottoResult.getFormattedResultString();
    expect(resultString).toContain(
      `${GAME_SETTINGS.MATCH_TEXTS[5]} (${PRIZES[5].toLocaleString()}원) - 1개`,
    );
  });

  test('4개 번호가 일치할 때 당첨 내역이 올바르게 반환되어야 한다.', () => {
    const lottoResult = new LottoResult(mockWinningNumbers, mockBonusNumber, [mockLottos[3]]);
    const resultString = lottoResult.getFormattedResultString();
    expect(resultString).toContain(
      `${GAME_SETTINGS.MATCH_TEXTS[4]} (${PRIZES[4].toLocaleString()}원) - 1개`,
    );
  });

  test('3개 번호가 일치할 때 당첨 내역이 올바르게 반환되어야 한다.', () => {
    const lottoResult = new LottoResult(mockWinningNumbers, mockBonusNumber, [mockLottos[4]]);
    const resultString = lottoResult.getFormattedResultString();
    expect(resultString).toContain(
      `${GAME_SETTINGS.MATCH_TEXTS[3]} (${PRIZES[3].toLocaleString()}원) - 1개`,
    );
  });
});
