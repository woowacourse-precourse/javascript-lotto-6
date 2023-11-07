class GetWinningNumber {
  #winningNumbers;

  constructor(winningNumbers) {
    this.#winningNumberValidateForm(winningNumbers);
    this.#winningNumberValidateDuplicate(winningNumbers);
    this.#winningNumbers = winningNumbers;
  }

  #winningNumberValidateForm(winningNumbers) {
    const regexNumber = /^\d+$/;
    winningNumbers.split(",").forEach((winningNumber) => {
      if (!regexNumber.test(winningNumber)) {
        throw new Error(
          "[ERROR] 쉼표(,)로 구분된 숫자 형식의 입력만 가능합니다.",
        );
      }
    });
  }

  #winningNumberValidateDuplicate(winningNumbers) {
    const regexDuplicatedInLottoRange =
      /^(?!.*(\d+)(?=.*\b\1\b))(?:(?:[1-9]|[1-3]\d|4[0-5])(?:,|$)){6}$/;
    if (!regexDuplicatedInLottoRange.test(winningNumbers)) {
      throw new Error(
        "[ERROR] 1~45 사이의 중복되지 않는 6개의 숫자를 입력해주세요.",
      );
    }
  }

  getWinningNumber() {
    return this.#winningNumbers;
  }
}

export default GetWinningNumber;
