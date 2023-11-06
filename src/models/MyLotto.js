import Lotto from './Lotto';

class MyLotto {
  #purchaseAmount;

  #lottoNumbersList = [];

  constructor(purchaseLottoAmount, lottoCount) {
    this.#purchaseAmount = purchaseLottoAmount;
    this.#createLottoNumbersList(lottoCount);
  }

  #createLottoNumbersList(lottoCount) {
    Array.from({ length: lottoCount }).forEach(() => {
      this.#lottoNumbersList.push(new Lotto());
    });
  }

  showMyLottoNumbers() {
    this.#lottoNumbersList.forEach(lottoNumbers => lottoNumbers.printLottoNumbers());
  }

  findMatching(winningNumbers, bonusNumber) {
    const matchingResult = [];

    this.#lottoNumbersList.forEach(numbers => {
      const count = numbers
        .getLottoNumbers()
        .filter(num => winningNumbers.getLottoNumbers().includes(num)).length;
      const bonus = numbers.getLottoNumbers().includes(bonusNumber);
      matchingResult.push({ count, bonus });
    });

    return matchingResult;
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }
}

export default MyLotto;
