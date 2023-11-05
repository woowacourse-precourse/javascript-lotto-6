const Validator = {
  validateAmount(amount) {
    if (amount <= 0 || amount % 1000 !== 0) {
      throw new Error("올바른 구입 금액을 입력하세요");
    }
  },

  validateNumbers(numbers) {
    if (
      numbers.length !== 6 ||
      !numbers.every((number) => !isNaN(number) && number >= 1 && number <= 45)
    ) {
      throw new Error("올바른 로또 번호를 입력하세요.");
    }

    if (new Set(numbers).size !== 6) {
      throw new Error("로또 번호는 중복될 수 없습니다.");
    }
  },

  validateBonusNumber(bonusNumber, lottoNumbersArray) {
    if (
      isNaN(bonusNumber) ||
      bonusNumber < 1 ||
      bonusNumber > 45 ||
      lottoNumbersArray.includes(bonusNumber)
    ) {
      throw new Error("올바른 보너스 번호를 입력하세요.");
    }
  },
};

export default Validator;
