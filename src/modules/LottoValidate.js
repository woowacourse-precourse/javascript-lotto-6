class LottoValidate {
  userCostValidate(money) {
    if (isNaN(money)) throw new Error("[ERROR] 올바른 숫자를 입력해야 합니다.");
    if (money % 1000 !== 0 || money === 0)
      throw new Error("[ERROR] 1,000원 단위로 구매해야 합니다.");
  }

  winnerValidate(number) {
    if (number < 1 || number > 45)
      throw new Error("[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.");
  }

  bonusValidate(bonusNumber, winningNumber) {
    if (bonusNumber < 1 || bonusNumber > 45)
      throw new Error("[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.");

    if (isNaN(bonusNumber))
      throw new Error("[ERROR] 입력 형식이 올바르지 않습니다.");

    if (winningNumber.includes(bonusNumber))
      throw new Error("[ERROR] 보너스 번호가 당첨 번호에 있습니다.");
  }
}

export default LottoValidate;
