export const calculateStatistical = (result, lottoAmount) => {
  let winMoney = 0;

  result.forEach((el) => {
    winMoney += el.winMoney;
  });

  const resultValue = (winMoney / lottoAmount) * 100;

  return resultValue.toFixed(1);
};
