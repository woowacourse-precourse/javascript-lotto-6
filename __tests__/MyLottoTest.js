import Lotto from '../src/Lotto.js';

describe('Lotto', () => {
  it('당첨숫자와 로또 번호 6개가 모두 맞았을 때 ', () => {
    const winningNumbers = new Lotto([1, 2, 3, 4, 5, 6]);
    const userLottoNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const result = winningNumbers.compare(userLottoNumbers, bonusNumber);

    expect(result).toBe('6개 일치 (2,000,000,000원)');
  });

  it('당첨번호와 로또 번호가 5개 맞았을 때', () => {
    const winningNumbers = new Lotto([1, 2, 3, 4, 5, 6]);
    const userLottoNubers = [1, 2, 3, 4, 5, 7];
    const bonusNumber = 7;

    const result = winningNumbers.compare(userLottoNubers, bonusNumber);

    expect(result).toBe('5개 일치 (1,500,000원)');
  });

  it('여러 개의 로또 번호와 비교했을 때', () => {
    const winningNumbers = new Lotto([1, 2, 3, 4, 5, 6]);
    const userLottoNumbers1 = [1, 2, 3, 4, 5, 7];
    const userLottoNumbers2 = [1, 2, 3, 4, 5, 6];

    const bonusNumber = 7;

    const result1 = winningNumbers.compare(userLottoNumbers1, bonusNumber);
    const result2 = winningNumbers.compare(userLottoNumbers2, bonusNumber);

    expect(result1).toBe('5개 일치 (1,500,000원)');
    expect(result2).toBe('6개 일치 (2,000,000,000원)');
  });

  it('보너스 번호가 맞았을 때 ', () => {
    const winningNumbers = new Lotto([1, 2, 3, 4, 5, 7]);
    const userLottoNumbers1 = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const result1 = winningNumbers.compare(userLottoNumbers1, bonusNumber);

    expect(result1).toBe('5개 일치, 보너스 볼 일치 (30,000,000원)');
  });
});
