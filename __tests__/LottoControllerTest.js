// LottoController 테스트
import LottoController from '../src/Controller/LottoController';
import Lotto from '../src/Model/Lotto';
import OutputView from '../src/View/OutputView';

jest.mock('../src/Model/Lotto');
jest.mock('../src/View/OutputView');

describe('LottoController 테스트', () => {
  let lottoController;
  beforeEach(() => {
    lottoController = new LottoController();
    lottoController.winLottoNumbers = [8, 21, 41, 42, 43];
    lottoController.bonusNumber = 1;
  });
  test('로또 번호 랜덤 생성', () => {
    expect(() => {
      const lottoNumbers = lottoController.generateLottoNumbers();

      expect(lottoNumbers).toHaveLength(6);
      expect(new Set(lottoNumbers).toHaveLength(6));
      expect(lottoNumbers.every(num => num >= 1 && num <= 45).toBe(true));
    });
  });

  test('로또 번호 리스트 추가', () => {
    const amount = 3;
    const mockGenerateLottoNumbers = jest
      .spyOn(lottoController, 'generateLottoNumbers')
      .mockReturnValueOnce([1, 2, 3, 4, 5, 6])
      .mockReturnValueOnce([7, 8, 9, 10, 11, 12])
      .mockReturnValueOnce([13, 14, 15, 16, 17, 18]);

    lottoController.AMOUNT = amount;
    lottoController.createLottoNumberList();

    expect(mockGenerateLottoNumbers).toHaveBeenCalledTimes(amount);
    expect(lottoController.lottoList).toEqual([
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
    ]);
  });

  test('로또 객체 생성', () => {
    const mockWinLottoNumbers = [8, 21, 23, 41, 42, 43];
    lottoController.winLottoNumbers = mockWinLottoNumbers;

    lottoController.createLotto();

    expect(Lotto).toHaveBeenCalledWith(mockWinLottoNumbers);
  });

  test('당첨 통계 계산 _ calculatePrizes()', () => {
    lottoController.lottoList = [
      [1, 2, 3, 4, 5, 6],
      [8, 9, 10, 11, 12, 13],
      [8, 21, 23, 41, 42, 43],
      [8, 21, 23, 41, 42, 30],
    ];

    lottoController.calculatePrizes();

    expect(OutputView.printPrize).toHaveBeenCalledWith({
      3: 0,
      4: 1,
      5: 1,
      5.5: 0,
      6: 0,
    });
  });

  test('당첨 통계 계산 _ countmatchNumbers()', () => {
    const lottoNumbers = [8, 9, 10, 11, 12, 13];

    const count = lottoController.countMatchNumbers(lottoNumbers);

    expect(count).toBe(1);
  });
});
