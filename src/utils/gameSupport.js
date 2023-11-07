export const userLottoInputAmount = async () => {
  while (true) {
    try {
      const userInputString = await getUserInput(AMOUNT_GUIDE_MESSAGE);
      const userInputAmountNumber = isNumber(userInputString);
      isAvailableAmountNumber(userInputAmountNumber);
      return userInputAmountNumber;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
};

export const userLottoInputSixNumbers = async () => {
  while (true) {
    try {
      const userInputString = await getUserInput(WINNING_NUMBERS_GUIDE_MESSAGE);
      hasComma(userInputString);
      const winningNumbersStringArray = splitNumbers(userInputString);
      const winningNumbersArray = changeStringToNumbers(
        winningNumbersStringArray
      );
      const lotto = new Lotto(winningNumbersArray.sort((a, b) => a - b));
      return lotto.getLotto();
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
};

export const userLottoInputBonusNumber = async (winningNumberArray) => {
  while (true) {
    try {
      const userInputString = await getUserInput(BONUS_NUMBERS_GUIDE_MESSAGE);
      const bonusNumber = isNumber(userInputString);
      isAvailableNumber(bonusNumber, ONE, FORTYFIVE);
      isAvailableBonusNumber(winningNumberArray, bonusNumber);
      return bonusNumber;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
};

export const getPurchasedLottoCounts = (amount) => {
  return amount / 1000;
};

export const printMessage = (messages) => {
  MissionUtils.Console.print(messages);
};

export const printPurchasedLottoNumbers = (lottoArray) => {
  lottoArray.forEach((lotto) => {
    MissionUtils.Console.print("[" + lotto.join(", ") + "]");
  });
};

export const getPurchasedLottoArray = (lottoCounts) => {
  const purchasedLottoArray = [];
  for (let index = 0; index < lottoCounts; index += 1) {
    try {
      const lotto = new Lotto(createSixNumbers().sort((a, b) => a - b));
      purchasedLottoArray.push(lotto.getLotto());
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
  return purchasedLottoArray;
};

const hasBonusNumber = (lottoArray, bonusNumber) => {
  return lottoArray.some((lottoNumber) => lottoNumber === bonusNumber);
};

const getWinningLottoResult = (winningNumberArray, lottoArray) => {
  return lottoArray.filter((number) => winningNumberArray.includes(number))
    .length;
};

