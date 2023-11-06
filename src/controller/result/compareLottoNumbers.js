const compareLottoNumbers = (purchase, winning, bonus) => {
  let result = [0, 0, 0, 0, 0];

  const duplicateCount = purchase.filter((num) => !winning.includes(num));
  const count = duplicateCount.length;

  if (count === 0) result[4]++;
  if (count === 1 && duplicateCount[0] === bonus[0]) result[3]++;
  if (count === 1 && duplicateCount[0] !== bonus[0]) result[2]++;
  if (count === 2) result[1]++;
  if (count === 3) result[0]++;
  return result;
};

export default compareLottoNumbers;
