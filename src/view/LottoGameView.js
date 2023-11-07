class LottoGameView {
  async inputPurchaseAmount() {
    // TEST:
    return '5000';

    // TODO: Message 추가
    return await Console.readLineAsync();
  }
}

export default LottoGameView;
