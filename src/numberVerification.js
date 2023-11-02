const numberVerification = (number) => {
  const array = number.split(",");
  const arrayNumber = array.map((item) => Number(item));
  for (let i = 0; i < arrayNumber.length; i++) {
    if (
      arrayNumber.some((num) => isNaN(num) || num <= 0 || num > 45) ||
      arrayNumber.length !== 6
    ) {
      throw new Error("[ERROR] : 숫자가 잘못된 형식입니다.");
    }
  }
  return arrayNumber;
};
export default numberVerification;
