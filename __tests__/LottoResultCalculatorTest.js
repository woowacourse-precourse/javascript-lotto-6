import LottoResultCalculator from '../src/LottoResultCalculator.js';

describe('LottoResultCalculator 클래스 테스트', () => {
  it('사용자의 로또 번호가 유효하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new LottoResultCalculator({
        userLottos: ['1, 2, 3, 4, 5, 6'],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
      });
    }).toThrow('[ERROR]');
  });

  it('당첨 번호가 유효하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new LottoResultCalculator({
        userLottos: [[1, 2, 3, 4, 5, 6]],
        winningNumbers: '1, 2, 3, 4, 5, 6',
        bonusNumber: 7,
      });
    }).toThrow('[ERROR]');
  });

  it('보너스 번호가 유효하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new LottoResultCalculator({
        userLottos: [[1, 2, 3, 4, 5, 6]],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: '7',
      });
    }).toThrow('[ERROR]');
  });

  it('사용자의 로또 번호, 당첨 번호, 보너스 번호를 기반으로 로또 결과를 올바르게 계산한다.', () => {
    const userLottos = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottoResultCalculator = new LottoResultCalculator({
      userLottos,
      winningNumbers,
      bonusNumber,
    });

    const expectedResults = { 3: 0, 4: 0, 5: 0, '5+': 0, 6: 1 };
    expect(lottoResultCalculator.results).toEqual(expectedResults);
  });
});
