class App {
  async play() {
    const amount = await userLottoInputAmount();
    const purchasedLottoCounts = getPurchasedLottoCounts(amount);
    printMessage(`${purchasedLottoCounts}${PURCHASE_AMOUNT_GUIDE_MESSAGE}`);
    printPurchasedLottoNumbers(lottoArray);
}

export default App;
