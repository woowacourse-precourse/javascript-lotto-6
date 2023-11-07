class App {
  async play() {
    const amount = await userLottoInputAmount();
    const purchasedLottoCounts = getPurchasedLottoCounts(amount);
    printMessage(`${purchasedLottoCounts}${PURCHASE_AMOUNT_GUIDE_MESSAGE}`);

    const lottoArray = getPurchasedLottoArray(purchasedLottoCounts);
    printPurchasedLottoNumbers(lottoArray);
    const winningNumberArray = await userLottoInputSixNumbers();
    const bonusNumber = await userLottoInputBonusNumber(winningNumberArray);

    printMessage(WINNING_STATISTICS_GUIDE_MESSAGE);
    printMessage(SEPERATOR);
    const winningResults = checkLottoNumbers(
      winningNumberArray,
      lottoArray,
      bonusNumber
    );

    printMessage(
      `${THREE_MATCHES_MESSAGE}${
        winningResults[WINNING_LOTTO_COUNT.THREE]
      }${UNIT_MESSAGE}`
    );
    printMessage(
      `${FOUR_MATCHES_MESSAGE}${
        winningResults[WINNING_LOTTO_COUNT.FOUR]
      }${UNIT_MESSAGE}`
    );
    printMessage(
      `${FIVE_MATCHES_MESSAGE}${
        winningResults[WINNING_LOTTO_COUNT.FIVE]
      }${UNIT_MESSAGE}`
    );
    printMessage(
      `${FIVE_AND_BONUS_MATCHES_MESSAGE}${winningResults["winningResultWithBonus"]}${UNIT_MESSAGE}`
    );
    printMessage(
      `${SIX_MATCHES_MESSAGE}${
        winningResults[WINNING_LOTTO_COUNT.SIX]
      }${UNIT_MESSAGE}`
    );
    printMessage(
      `${TOTAL_RETURN_MESSAGE}${totalProfitMargin(
        amount,
        winningResults
      )}${TOTAL_RETURN_GUIDE_MESSAGE}`
    );
  }
}

export default App;
