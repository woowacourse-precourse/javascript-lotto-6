import LottoValidator from "../LottoValidator.js";

class TargetLottie {
  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validate(numbers, bonusNumber);
    this.#numbers = numbers;
    this.#bonusNumber = bonusNumber;
  }

  #validate(numbers, bonusNumber) {
    LottoValidator.validateTargetLottoDomain(numbers, bonusNumber);
  }

  calLottoResult(lottto) {
    const lottoNumbers = lottto.getNumbers();

    const answerCount = lottoNumbers.filter((number) =>
      this.#numbers.includes(number)
    ).length;

    if (answerCount === 6) {
      return 1;
    }
    if (answerCount === 5 && lottoNumbers.includes(this.#bonusNumber)) {
      return 2;
    }
    if (answerCount === 5) {
      return 3;
    }
    if (answerCount === 4) {
      return 4;
    }
    if (answerCount === 3) {
      return 5;
    }

    return 0;
  }
}

export default TargetLottie;
