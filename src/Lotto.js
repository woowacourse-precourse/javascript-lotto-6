class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateForm(numbers);
    this.#validateDuplication(numbers);
    this.#numbers = numbers;
  }

  #validateForm(numbers) {
    const regexNumber = /^\d+$/;

    if (Array.isArray(numbers)) {
      if (numbers.length !== 6) {
        throw new Error(
          "[ERROR] 로또 번호는 쉼표(,)로 구분된 6자리여야 합니다.",
        );
      }

      this.isValid(regexNumber, numbers);
    } else if (numbers.split(",").length !== 6) {
      throw new Error("[ERROR] 로또 번호는 쉼표(,)로 구분된 6자리여야 합니다.");
    }

    this.isValid(regexNumber, numbers);
  }

  #validateDuplication(numbers) {
    const regexDuplicatedInLottoRange =
      /^(?!.*(\d+)(?=.*\b\1\b))(?:(?:[1-9]|[1-3]\d|4[0-5])(?:,|$)){6}$/;
    if (!regexDuplicatedInLottoRange.test(numbers)) {
      throw new Error(
        "[ERROR] 1~45 사이의 중복되지 않는 6개의 숫자를 입력해주세요.",
      );
    }
  }

  isValid(regexNumber, numbers) {
    if (Array.isArray(numbers)) {
      numbers.forEach((number) => {
        if (!regexNumber.test(number)) {
          throw new Error(
            "[ERROR] 쉼표(,)로 구분된 숫자 형식의 입력만 가능합니다.",
          );
        }
      });

      return;
    }

    numbers.split(",").forEach((number) => {
      if (!regexNumber.test(number)) {
        throw new Error(
          "[ERROR] 쉼표(,)로 구분된 숫자 형식의 입력만 가능합니다.",
        );
      }
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
