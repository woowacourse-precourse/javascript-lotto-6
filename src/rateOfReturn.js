export default function rateOfReturn(price, result) {
  let value = 0;
  for (let key in result) {
    if (key === '3개 일치 (5,000원)') value += result[key] * 5000;
    if (key === '4개 일치 (50,000원)') value += result[key] * 50000;
    if (key === '5개 일치 (1,500,000원)') value += result[key] * 1500000;
    if (key === '5개 일치, 보너스 볼 일치 (30,000,000원)')
      value += result[key] * 30000000;
    if (key === '6개 일치 (2,000,000,000원)') value += result[key] * 2000000000;
  }
  const rate = (value / price) * 100;

  return rate.toFixed(1);
}
