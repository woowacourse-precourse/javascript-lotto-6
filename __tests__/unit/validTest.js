import Lotto from '../../src/Lotto';
import ERROR_CODE from '../../src/util/error/errorCode';
import checkHasDuplicate from '../../src/util/validate/checkHasDuplicate';
import checkHasNoRemainder from '../../src/util/validate/checkHasNoRemainder';

describe('[Lotto] 유효성 검사 테스트', () => {
  test('로또 번호에 중복된 숫자가 존재할 경우 에러를 발생시킨다', () => {
    expect(() => {
      new Lotto([1, 1, 1, 1, 1, 1]);
    }).toThrow(`${ERROR_CODE.isDuplicated}`);
  });
});

describe('[function] 유효성 검사 테스트 ', () => {
  test('구입 금액이 1000으로 나누어 떨어지지 않는 경우 에러를 발생시킨다', () => {
    // given
    const input = 9999999;

    // when

    // then
    expect(() => {
      checkHasNoRemainder(input);
    }).toThrow(`${ERROR_CODE.hasRemainder}`);
  });
});
