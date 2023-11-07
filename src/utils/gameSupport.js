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

const isWinningLottoWithBonus = (
  winningNumberArray,
  lottoArray,
  bonusNumber
) => {
  if (!hasBonusNumber(lottoArray, bonusNumber)) return false;
  if (
    getWinningLottoResult(winningNumberArray, lottoArray) ===
    WINNING_LOTTO_COUNT.FIVE
  ) {
    return true;
  }
  return false;
};

export const updateWinningResult = (winningResults, winningLottoCount) => {
  switch (winningLottoCount) {
    case WINNING_LOTTO_COUNT.THREE:
      winningResults[WINNING_LOTTO_COUNT.THREE] += 1;
      break;
    case WINNING_LOTTO_COUNT.FOUR:
      winningResults[WINNING_LOTTO_COUNT.FOUR] += 1;
      break;
    case WINNING_LOTTO_COUNT.FIVE:
      winningResults[WINNING_LOTTO_COUNT.FIVE] += 1;
      break;
    case WINNING_LOTTO_COUNT.SIX:
      winningResults[WINNING_LOTTO_COUNT.SIX] += 1;
      break;
  }
};
export const checkLottoNumbers = (
  winningNumberArray,
  totalLottoArray,
  bonusNumber
) => {
  const winningResults = {
    [WINNING_LOTTO_COUNT.THREE]: 0,
    [WINNING_LOTTO_COUNT.FOUR]: 0,
    [WINNING_LOTTO_COUNT.FIVE]: 0,
    winningResultWithBonus: 0,
    [WINNING_LOTTO_COUNT.SIX]: 0,
  };

  for (const lottoArray of totalLottoArray) {
    if (isWinningLottoWithBonus(winningNumberArray, lottoArray, bonusNumber)) {
      winningResults["winningResultWithBonus"] += 1;
      continue;
    }
    const winningLottoCount = getWinningLottoResult(
      winningNumberArray,
      lottoArray
    );
    updateWinningResult(winningResults, winningLottoCount);
  }
  return winningResults;
};

export const totalProfit = (winningResults) => {
  let totalReward = 0;
  const reward = {
    [WINNING_LOTTO_COUNT.THREE]: 5000,
    [WINNING_LOTTO_COUNT.FOUR]: 50000,
    [WINNING_LOTTO_COUNT.FIVE]: 1500000,
    winningResultWithBonus: 30000000,
    [WINNING_LOTTO_COUNT.SIX]: 2000000000,
  };

  for (const NumberOfwinning in winningResults) {
    totalReward += reward[NumberOfwinning] * winningResults[NumberOfwinning];
  }
  return totalReward;
};

export const totalProfitMargin = (buyAmount, winningResults) => {
  const winnings = totalProfit(winningResults);
  return Math.round((winnings / buyAmount) * 1000) / 10;
};
