class App {
  async play() {
    const amount = await userLottoInputAmount();
    const purchasedLottoCounts = getPurchasedLottoCounts(amount);
    printMessage(`${purchasedLottoCounts}${PURCHASE_AMOUNT_GUIDE_MESSAGE}`);

    const lottoArray = getPurchasedLottoArray(purchasedLottoCounts);
    printPurchasedLottoNumbers(lottoArray);
    const winningNumberArray = await userLottoInputSixNumbers();
    const bonusNumber = await userLottoInputBonusNumber(winningNumberArray);

}

export default App;
