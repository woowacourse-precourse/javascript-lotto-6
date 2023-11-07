const LOTTO_DATA = new Map([
  [0, 2000000000],
  [1, 30000000],
  [2, 1500000],
  [3, 50000],
  [4, 5000],
]);

export default function getRateOfReturn(resultMap, purchaseAmount) {
  let profits = 0;
  const keys = [...resultMap.keys()];
  const values = [...resultMap.values()];

  values.forEach((elements, index) => {
    if (elements !== 0) profits += LOTTO_DATA.get(keys[index]) * elements;
  });

  const rateOfReturn = (profits / purchaseAmount) * 100;

  const result = rateOfReturn.toFixed(1);
  return result;
}
