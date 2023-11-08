import sortNumberArray from '../src/domain/utils/sortNumberArray';

class MockWinnerSelector {
  #lottoNumbers;
  #bonusNumber;
  #issuedLottos;
  #winningCount;

  constructor({ lottoNumbers, bonusNumber, issuedLottos }) {
    this.#lottoNumbers = lottoNumbers.map(Number);
    this.#bonusNumber = bonusNumber;
    this.#issuedLottos = issuedLottos;
    this.#winningCount = [0, 0, 0, 0, 0];
  }

  getLottoCount(issuedLotto) {
    return issuedLotto.filter(lottoNumber =>
      this.#lottoNumbers.includes(lottoNumber),
    ).length;
  }

  isBonusMatched(issuedLotto) {
    return issuedLotto.includes(this.#bonusNumber);
  }
}

// const lottoCount = this.#getLottoCount(issuedLotto);
// const isBonus = this.#isBonusMatched(issuedLotto);

describe('Matching Test', () => {
  const mockIssuedLottos = [
    [1, 2, 3, 4, 5, 6],
    [5, 10, 15, 20, 25, 30],
  ];
  const mockLottoNumbers = [1, 2, 3, 4, 5, 6];
  const mockBonusNumber = 30;
  const mockWinnerSelector = new MockWinnerSelector({
    lottoNumbers: mockLottoNumbers,
    bonusNumber: mockBonusNumber,
    issuedLottos: mockIssuedLottos,
  });

  test('로또 개수 비교 테스트', () => {
    expect(mockWinnerSelector.getLottoCount([1, 2, 3, 4, 5, 6])).toEqual(6);
  });

  test('보너스 확인 테스트', () => {
    expect(mockWinnerSelector.isBonusMatched([1, 2, 3, 4, 5, 30])).toEqual(
      true,
    );
  });
});
