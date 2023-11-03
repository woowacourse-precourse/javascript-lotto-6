import Lotto from '../../src/Lotto';
import ERROR_CODE from '../../src/util/error/errorCode';
import { checkHasDuplicate } from '../../src/util/validate/checkHasDuplicate';
import checkHasNoRemainder from '../../src/util/validate/checkHasNoRemainder';
import checkIsEmpty from '../../src/util/validate/checkIsEmpty';
import { checkIsNaN } from '../../src/util/validate/checkIsNaN';
import checkIsTooSmall from '../../src/util/validate/checkIsTooSmall';

describe('[Lotto] 유효성 검사 테스트', () => {
  test('로또 번호에 중복된 숫자가 존재할 경우 에러를 발생시킨다', () => {
    expect(() => {
      new Lotto([1, 1, 1, 1, 1, 1]);
    }).toThrow(`${ERROR_CODE.isDuplicated}`);
  });

  test('로또 번호에 유효하지 않은 값이 존재할 경우 에러를 발생시킨다.', () => {
    expect(() => {
      new Lotto([1, '2', 'q', 'zx', '-', '*']);
    }).toThrow(`${ERROR_CODE.valueIsNaN}`);
  });
});

describe('[function] 유효성 검사 테스트 ', () => {
  test('입력값에 중복값이 존재할 경우 에러를 발생 시킨다', () => {
    // given
    const testValue = [1, 2, 2, 3, 4, 5];

    // when
    expect(() => {
      checkHasDuplicate(testValue);
    }).toThrow(`${ERROR_CODE.isDuplicated}`);
  });

  test('구입 금액이 1000으로 나누어 떨어지지 않는 경우 에러를 발생시킨다', () => {
    // give
    const input = 9999999;

    // when

    // then
    expect(() => {
      checkHasNoRemainder(input);
    }).toThrow(`${ERROR_CODE.hasRemainder}`);
  });

  test('입력값이 숫자 이외의 값이 경우 에러를 발생시킨다', () => {
    // given
    const firstTestInput = 'a';
    const secondTestInput = ';';

    // then
    expect(() => {
      checkIsNaN(firstTestInput);
    }).toThrow(`${ERROR_CODE.valueIsNaN}`);

    expect(() => {
      checkIsNaN(secondTestInput);
    }).toThrow(`${ERROR_CODE.valueIsNaN}`);
  });

  test('입력값이 빈값일 경우 에러를 발생시킨다', () => {
    // given
    const testInputValue = '';

    // then
    expect(() => {
      checkIsEmpty(testInputValue);
    }).toThrow(`${ERROR_CODE.valueIsEmpty}`);
  });

  test('입력값이 1000 이하일 경우 에러를 밸생 시킨다', () => {
    // given
    const testInputValue = '0';

    // then
    expect(() => checkIsTooSmall(testInputValue)).toThrow(`${ERROR_CODE.valueIsTooSmall}`);
  });
});
