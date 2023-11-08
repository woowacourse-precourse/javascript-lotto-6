const validatePrice = (price) => {
  const containsNonNumeric = (str) => {
    const nonNumericPattern = /[^0-9]/;
    return nonNumericPattern.test(str);
  };

  if(containsNonNumeric(price))
    throw new Error("[ERROR] 숫자를 입력해 주세요.");
  const priceToNumber = parseInt(price);
  if(priceToNumber <= 0)
    throw new Error("[ERROR] 0보다 큰 숫자를 입력해 주세요.");
  if(priceToNumber % 1000 != 0)
    throw new Error("[ERROR] 1000원 단위로 나누어 떨어지는 숫자를 입력해 주세요.");
  
  return priceToNumber;
};

export default validatePrice;
