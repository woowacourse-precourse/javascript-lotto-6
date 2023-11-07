//로또 번호와 당첨 번호 비교하는 함수
export const findMatchingNums = (lottos, lottoResults) => {
  return lottos.map((lotto) => {
    const count = lotto.filter((num) => lottoResults.includes(num)).length;
    // return count;
    console.log(count);
  });
};
export const calculateProfit = (money) => {
  const total = money.reduce((acc, cur) => (acc += cur.money * cur.count), 0);

  return Math.round((total / money) * 100 * 10) / 10;
};
