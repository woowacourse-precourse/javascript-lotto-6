const Validator = {
  numberType(input) {
    const isNotNumber = /[^0-9]/;
    if (isNotNumber.test(input)) throw ('[ERROR] 숫자를 입력해야 합니다.')
  },

  buyLottoMinimumOrder(amount) {
    if (amount < 1000) throw ('[ERROR] 로또 구입 금액은 최소 1,000원 입니다.');
  },

  buyLottoUnit(amount) {
    if (amount % 1000) throw ('[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.');
  },

  winningNumbersType(numbers) {
    if (numbers.indexOf(',') === - 1 || numbers.indexOf(',') === numbers.length - 1) {
      throw ('[ERROR] 당첨번호는 쉼표(,)로 구분하여 입력하여야 합니다.');
    }
  }
}

export default Validator;
