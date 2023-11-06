export default function verificationBounsNumber(bonusnumber, numbers) {
  const array = bonusnumber.split(',');
  const arrayNumber = array.map((item) => Number(item));
  if (
    arrayNumber.some((num) => isNaN(num) || num <= 0 || num > 45) ||
    arrayNumber.length !== 1 ||
    numbers.includes(Number(bonusnumber))
  ) {
    throw new Error('[ERROR] : 숫자가 잘못된 형식입니다.');
  }
  return Number(arrayNumber.join(''));
}
