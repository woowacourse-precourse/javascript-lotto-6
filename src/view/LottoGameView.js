class LottoGameView {
  async inputPurchaseAmount() {
    // TEST:
    return '50000';

    // TODO: Message 추가
    return await Console.readLineAsync();
  }
}

export default LottoGameView;
