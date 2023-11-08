const calculateRank = (lottoResult, result, bonusResult) => {
  const key = result + bonusResult;
  switch (result) {
    case "3":
      lottoResult["3"] += 1;
      break;
    case "4":
      lottoResult["4"] += 1;
      break;
    case "6":
      lottoResult["6"] += 1;
      break;
  }
  switch (key) {
    case "5bonusTrue":
      lottoResult["5bonus"] += 1;
      break;
    case "5bonusFalse":
      lottoResult["5"] += 1;
      break;
  }
};

export default calculateRank;
