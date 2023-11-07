const getRateOfReturn = (purchaseAmount, returns) => {
  const finalValue =
    Number(purchaseAmount) + returns.reduce((acc, currentReturn) => acc + currentReturn);
  const rateOfReturn = (((finalValue - purchaseAmount) / purchaseAmount) * 100).toFixed(1);

  return rateOfReturn + '%';
};

export default getRateOfReturn;
