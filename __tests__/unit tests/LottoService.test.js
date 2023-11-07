import LottoResultCalculator from '../../src/models/LottoResultCalculator';
import LottoService from '../../src/models/LottoService';

describe('LottoService 클래스', () => {
  let lottoService;

  beforeEach(() => {
    // LottoResultCalculator는 실제로 작동한다고 가정하고 LottoService를 생성합니다.
    lottoService = new LottoService(new LottoResultCalculator());
  });

  describe('setWinningNumbers 메서드', () => {
    it('유효한 당첨 번호를 설정할 수 있어야 한다', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      expect(() => {
        lottoService.setWinningNumbers(winningNumbers);
      }).not.toThrow();
    });

    it('유효하지 않은 당첨 번호를 설정하려고 하면 에러를 발생시켜야 한다', () => {
      const invalidWinningNumbers = [1, 2, 3, 4, 68, 1024];
      expect(() => {
        lottoService.setWinningNumbers(invalidWinningNumbers);
      }).toThrow();
    });
  });

  describe('setBonusNumber 메서드', () => {
    it('보너스 번호를 올바르게 설정할 수 있어야 한다', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      lottoService.setWinningNumbers(winningNumbers);

      expect(() => {
        lottoService.setBonusNumber(bonusNumber);
      }).not.toThrow();
    });

    it('유효하지 않은 보너스 번호를 설정하려고 하면 에러를 발생시켜야 한다', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const invalidBonusNumber = 6;
      lottoService.setWinningNumbers(winningNumbers);
      expect(() => {
        lottoService.setBonusNumber(invalidBonusNumber);
      }).toThrow();
    });
  });
});
