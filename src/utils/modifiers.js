const composeAscending = (numbers) => numbers.sort((a, b) => a - b);

// 받은 input값 배열로 만들기
const composeLists = (line) => line.replaceAll(' ', '').split(',');

const duplicates = (lottos, winningLotto) =>
  lottos.filter((number) => winningLotto.includes(number));
const isDuplicate = (lottos, bonus) => lottos.includes(bonus);

const modifiers = {
  composeAscending,
  composeLists,
  duplicates,
  isDuplicate,
};

export default modifiers;

// console.log(isDuplicate(['3', '12', '14', '21', '39', '7'], '7'));
