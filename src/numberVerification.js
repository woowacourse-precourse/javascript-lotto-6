export default function numberVerification(number) {
  console.log(number);
  const array = number.split(',');
  console.log(array);
  console.log(array.length);
  if (array.length !== 6)
    throw new Error('[ERROR] : 숫자가 잘못된 형식입니다.');

  const arrayNumber = array.map((item) => Number(item));

  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber.some((num) => isNaN(num) || num <= 0 || num > 45)) {
      throw new Error('[ERROR] : 숫자가 잘못된 형식입니다.');
    }
  }
  return arrayNumber;
}
