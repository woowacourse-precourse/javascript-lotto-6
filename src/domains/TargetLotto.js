class TargetLottie {
  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validate(numbers, bonusNumber);
    this.#numbers = numbers;
    this.#bonusNumber = bonusNumber;
  }

  #validate(numbers, bonusNumber) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 당첨 로또 번호는 중복되지 않아야 합니다.");
    }

    if (numbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호에 포함될 수 없습니다.");
    }
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
