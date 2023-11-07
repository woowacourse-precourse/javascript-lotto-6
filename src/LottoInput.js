class LottoInput {
  async racingCarInput() {
    const price = await Console.readLineAsync("구입금액을 입력해 주세요.");
    this.checkValidPrice(Number(price));
    return Number(price);
  }

  checkValidPrice(price) {
    if (price % 1000 !== 0)
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.");
  }
}

export default LottoInput;
