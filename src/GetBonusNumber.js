class GetBonusNumber {
  #bonusNumber;

  constructor(winningNumber, bonusNumber) {
    this.#bonusNumberValidateForm(bonusNumber);
    this.#bonusNumberValidateDuplicate(winningNumber, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #bonusNumberValidateForm(bonusNumber) {
    const regexNumber = /^(?:[1-9]|[1-3]\d|4[0-5])$/;
    if (!regexNumber.test(bonusNumber)) {
      throw new Error("[ERROR] 1~45 사이의 숫자 형식의 입력만 가능합니다.");
    }
  }

  #bonusNumberValidateDuplicate(winningNumber, bonusNumber) {
    if (winningNumber.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 같을 수 없습니다.");
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default GetBonusNumber;
