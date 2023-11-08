import Lotto from '../src/lotto/Lotto.js';
import LottoCenter from '../src/lotto/LottoCenter.js';

describe('LottoCenter 클래스 테스트', () => {
  let publishedLottoList;
  let lottoCenter;

  beforeEach(() => {
    const lottoCount = 5;
  
    publishedLottoList = Array(lottoCount)
      .fill()
      .map(() => {
        const numbers = [1, 2, 3, 4, 5, 6]; 
        const lotto = new Lotto(numbers); 
        lotto.getRank = jest.fn().mockReturnValue('fifth');
        return lotto;
      });

    lottoCenter = new LottoCenter(publishedLottoList);
  });

  test('tryPrintAllLottoNumbers 메소드가 각 로또의 printNumbers 메소드를 호출하는지 테스트', () => {
    publishedLottoList.forEach((lotto) => {
      lotto.printNumbers = jest.fn();
    });

    lottoCenter.tryPrintAllLottoNumbers();

    publishedLottoList.forEach((lotto) => {
      expect(lotto.printNumbers).toHaveBeenCalled();
    });
  });

  test('inspectLottoWinningStatus 메소드가 각 로또의 getRank 메소드를 호출하는지 테스트', () => {
    const winningNumbers = [1, 10, 20, 30, 40, 42];
    const bonusNumber = 7;

    lottoCenter.inspectLottoWinningStatus(winningNumbers, bonusNumber);

    publishedLottoList.forEach((lotto) => {
      expect(lotto.getRank).toHaveBeenCalledWith(winningNumbers, bonusNumber);
    });
  });

  test('getLottoResultsList 메소드가 올바른 결과를 반환하는지 테스트', () => {
    const winningNumbers = [1, 10, 20, 30, 40, 42];
    const bonusNumber = 7;

    lottoCenter.inspectLottoWinningStatus(winningNumbers, bonusNumber);

    const expectedResultsList = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 5,
    };

    expect(lottoCenter.getLottoResultsList()).toEqual(expectedResultsList);
  });
});
