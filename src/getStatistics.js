import calculateRank from "./calculateRank";

const getStatistics = (lottoList, lottoResult, winningNumbers, bonusNumber) => {
  lottoList.forEach((lotto) => {
    const [result, bonusResult] = lotto.compareNumbers(
      winningNumbers,
      bonusNumber
    );
    calculateRank(lottoResult, result, bonusResult);
  });
};

export default getStatistics;
