const numberVerification = (number) => {
  const array = number.split(",");
  const arrayNumber = array.map((item) => Number(item));
  for (let i = 0; i < arrayNumber.length; i++) {
    if (1 >= array[i] <= 45 || arrayNumber.length !== 6 || isNaN(array[i])) {
      throw new Error("[ERROR] : 숫자가 잘못된 형식입니다.");
    }
  }
  return arrayNumber;
};
export default numberVerification;
