const composeAscending = (numbers) => numbers.sort((a, b) => a - b);

// 받은 input값 배열로 만들기
const composeLists = (line) => line.replaceAll(' ', '').split(',');

const getDuplicates = (lottos, winningLotto) =>
  lottos.filter((number) => winningLotto.includes(number));

const isDuplicate = (lottos, bonus) => lottos.includes(bonus);

const composeRounds = (number) => number.toFixed(1);

const getEarnRate = (revenue, price) => composeRounds(revenue / price);

const modifiers = {
  composeAscending,
  composeLists,
  getDuplicates,
  isDuplicate,
  getEarnRate,
};

export default modifiers;

// console.log(isDuplicate(['3', '12', '14', '21', '39', '7'], '7'));
