import LottoResultCalculator from '../../src/models/LottoResultCalculator';
import LottoService from '../../src/models/LottoService';
import Lotto from '../../src/Lotto';

describe('LottoService - LottoResultCalculator 통합 테스트', () => {
  let lottoService;
  let resultCalculator;

  beforeEach(() => {
    resultCalculator = new LottoResultCalculator();
    lottoService = new LottoService(resultCalculator);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('로또 당첨 결과 계산', () => {
    // 미리 정해진 로또 번호와 당첨 번호
    const mockLottoNumbers = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ];
    const winningNumbers = [3, 5, 11, 16, 32, 38];
    const bonusNumber = 7;

    const mockLottoTickets = mockLottoNumbers.map(numbers => ({
      getNumbers: jest.fn().mockReturnValue(numbers),
    }));

    lottoService.setLottoTickets(mockLottoTickets);

    lottoService.setWinningNumbers(winningNumbers);
    lottoService.setBonusNumber(bonusNumber);

    const results = lottoService.calculateResults();

    expect(results).toEqual({
      first: 1,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    });
  });

  it('로또 수익률 계산', () => {
    const mockLottos = [
      new Lotto([3, 5, 11, 16, 32, 38]), // 1등
      new Lotto([3, 7, 11, 16, 32, 38]), // 보너스 번호 포함 2등
    ];
    const winningNumbers = [3, 5, 11, 16, 32, 38];
    const bonusNumber = 7;

    lottoService.setLottoTickets(mockLottos);
    lottoService.setWinningNumbers(winningNumbers);
    lottoService.setBonusNumber(bonusNumber);

    lottoService.calculateResults();

    const moneyAmount = 2000;

    const profitRate = resultCalculator.calculateProfitRate(moneyAmount);

    const expectedTotalPrizes = 2030000000;
    const expectedProfitRate = (expectedTotalPrizes / moneyAmount) * 100;

    expect(profitRate).toBe(expectedProfitRate);
  });
});
