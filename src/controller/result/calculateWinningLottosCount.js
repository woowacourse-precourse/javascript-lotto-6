import compareLottoNumbers from "./compareLottoNumbers.js";

const calculateWinningLottosCount = (purchase, winning, bonus) => {
  const purchasedLotto = purchase.map((str) => JSON.parse(str));
  const combinedResults = purchasedLotto.reduce(
    (acc, lotto) => {
      const result = compareLottoNumbers(lotto, winning, bonus);
      return acc.map((value, index) => value + result[index]);
    },
    [0, 0, 0, 0, 0]
  );
  return combinedResults;
};

export default calculateWinningLottosCount;
