import ERROR_CODE from '../error/errorCode';

export default function checkHasDuplicate(numbers) {
  const LottoSet = new Set(numbers);

  const isNotValid = LottoSet.size !== numbers.length;

  if (isNotValid) {
    throw new Error(`${ERROR_CODE.isDuplicated}`);
  }
}
