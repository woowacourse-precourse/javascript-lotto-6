import Lotto from '../../src/Lotto';
import { LOTTO_ERROR_CODE, PURCHASE_ERROR_CODE } from '../../src/util/error/errorCode';
import ascendingSortList from '../../src/util/parse/ascendingSortList';
import parseToNumberArray from '../../src/util/parse/parseToNumberArray';
import splitInput from '../../src/util/parse/splitInput';

describe('당첨 번호 담당 service 통합 테스트', () => {
  test('입력값을 배열로 반환', () => {
    // given
    const validInput = '1,2,3,4,5,6';

    // when
    const result = splitInput(validInput);
    const expectedResult = ['1', '2', '3', '4', '5', '6'];

    // then
    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });

  test('배열로 변환된 값의 element를 number로 변환된 배열로 변환', () => {
    // given
    const isolatedInput = ['1', '2', '3', '4', '5', '6'];

    // when
    const result = parseToNumberArray(isolatedInput);
    const expectedResult = [1, 2, 3, 4, 5, 6];

    // then
    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });

  test('element가 number로 변환된 배열을 오름 차순으로 정렬된 배열로 변환하여 반환', () => {
    // given
    const parsedLotto = [45, 44, 1, 2, 30, 22];

    // when
    const result = ascendingSortList(parsedLotto);
    const expectedResult = [1, 2, 22, 30, 44, 45];

    // then
    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });

  test('변환된 배열의 길이가 6이 아닐 경우 new Lotto를 생성 했을때 해당 에러를 발생', () => {
    // given
    const shortArray = [1, 2, 3, 4];

    // then
    try {
      const inValidLotto = new Lotto(shortArray);
    } catch (error) {
      expect(error.message).toBe(`[ERROR] 로또 번호는 6개여야 합니다.`);
    }
  });

  test('변환된 배열에 NaN이 존재할 경우 new Lotto를 생성 했을때 해당 에러를 발생', () => {
    // given
    const isNaNArray = [NaN, 2, 3, 4, 5, 6];

    // then
    try {
      const inValidLotto = new Lotto(isNaNArray);
    } catch (error) {
      expect(error.message).toBe(`${PURCHASE_ERROR_CODE.valueIsNaN}`);
    }
  });

  test('변환된 배열이 빈값이거나 0일 경우 new Lotto를 생성 했을때 해당 에러를 발생', () => {
    // given
    const isEmptyInArray = ['', 2, 3, 4, 5, 6];
    const isZeroInArray = [1, 2, 3, 0, 5, 6];

    // then
    try {
      const inValidLotto = new Lotto(isEmptyInArray);
    } catch (error) {
      console.log(error.message);
      expect(error.message).toBe(`${LOTTO_ERROR_CODE.valueIsEmptyOrZero}`);
    }

    try {
      const inValidLotto = new Lotto(isZeroInArray);
    } catch (error) {
      expect(error.message).toBe(`${LOTTO_ERROR_CODE.valueIsEmptyOrZero}`);
    }
  });

  test('변횐된 배열의 값이 1 ~ 45 사이의 값이 아닌 경우 해당 에러를 발생', () => {
    // given
    const outOfRangeArray = [1, 2, 3, 4, 5, 46];
    const tooSmallInArray = [-1, 2, 3, 4, 5, 6];

    // then
    try {
      const inValidLotto = new Lotto(outOfRangeArray);
    } catch (error) {
      console.log(error.message);
      expect(error.message).toBe(`${LOTTO_ERROR_CODE.valueIsOutOfRange}`);
    }

    try {
      const inValidLotto = new Lotto(tooSmallInArray);
    } catch (error) {
      expect(error.message).toBe(`${LOTTO_ERROR_CODE.valueIsOutOfRange}`);
    }
  });

  test('변횐된 배열의 값이 정수가 나일 경우 해당 에러를 발생', () => {
    // given
    const decimalArray = [1.5, 2.9, 3, 4, 5, 6];

    // then
    try {
      const inValidLotto = new Lotto(decimalArray);
    } catch (error) {
      expect(error.message).toBe(`${LOTTO_ERROR_CODE.valueIsNotInteger}`);
    }
  });

  test('변환된 배열의 값이 unique하지 않을 경우 해당 에러를 발생', () => {
    // given
    const duplicatedElementArray = [1, 1, 2, 3, 4, 5];

    // then
    try {
      const inValidLotto = new Lotto(duplicatedElementArray);
    } catch (error) {
      expect(error.message).toBe(`${PURCHASE_ERROR_CODE.isDuplicated}`);
    }
  });

  test('입력값이 유효성 검사를 통과했을 경우 유효한 당첨 번호를 반환', () => {
    // given
    const validInput = [23, 25, 26, 27, 30, 45];
    const expectedResult = [23, 25, 26, 27, 30, 45];

    // when
    const lotto = new Lotto(validInput);
    const result = lotto.getNumbers();

    // then
    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });
});
