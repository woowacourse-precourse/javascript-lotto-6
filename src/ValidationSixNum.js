const ValidationSixNum = (sixNum) => {
  const numbers = sixNum.split(",").map(num => parseInt(num.trim()));
  const hasDuplicates = (numbers) => {
    const uniqueNumbers = [...new Set(numbers)];
    return numbers.length !== uniqueNumbers.length;
  };

  numbers.every(num => {
    if(Number.isNaN(num))
      throw new Error("[ERROR] 숫자를 입력해 주세요.");
  });

  if(numbers.length !== 6)
    throw new Error("[ERROR] 숫자를 6개 입력해 주세요.");
  if(hasDuplicates(numbers))
    throw new Error("[ERROR] 서로 다른 숫자를 입력해 주세요.");

  numbers.every(num => {
    if(num <= 0 || num >= 46)
      throw new Error("[ERROR] 1부터 45 사이의 숫자를 입력해 주세요.");
    if(num >= 1 && num <= 45 && Number.isInteger(num))
      return true;
  });
};

export default ValidationSixNum;