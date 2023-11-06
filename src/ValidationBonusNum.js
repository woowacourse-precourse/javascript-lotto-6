const ValidationBonusNum = (bonusNum, sixNum) => {
  const numbers = bonusNum.split(",").map(num => parseInt(num.trim()));

  numbers.every(num => {
    if(Number.isNaN(num))
      throw new Error("[ERROR] 숫자를 입력해 주세요.");
  });

  if(numbers.length !== 1)
    throw new Error("[ERROR] 숫자를 1개만 입력해 주세요.");
  if(numbers[0] <= 0 || numbers[0] >= 46)
    throw new Error("[ERROR] 1부터 45 사이의 숫자를 입력해 주세요.");
  if(sixNum.includes(numbers[0]))
    throw new Error("[ERROR] 6개의 당첨 번호 이외의 숫자를 입력해 주세요.");
  if(numbers[0] >= 1 && numbers[0] <= 45 && Number.isInteger(numbers[0]))
    return true;
};

export default ValidationBonusNum;