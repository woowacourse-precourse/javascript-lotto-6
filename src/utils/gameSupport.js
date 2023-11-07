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
