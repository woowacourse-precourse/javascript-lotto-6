import numberVerification from '../src/NumberVerification';

describe('입력 숫자에 대한 유효성 검사 테스트', () => {
  it('입력한 숫자가 6자리가 아닐시', () => {
    const result = '1,2,3,4,5';
    expect(() => {
      numberVerification(result);
    }).toThrow('[ERROR] : 숫자가 잘못된 형식입니다.');
  });
  it('입력한 숫자가 숫자가 아닐시', () => {
    const result = '1,2,3,4,5,-';
    expect(() => {
      numberVerification(result);
    }).toThrow('[ERROR] : 숫자가 잘못된 형식입니다.');
  });
  it('입력한 숫자가 45를 초과할 시', () => {
    const result = '1,2,3,4,5,46';
    expect(() => {
      numberVerification(result);
    }).toThrow('[ERROR] : 숫자가 잘못된 형식입니다.');
  });
  it('입력한 숫자가 1를 미만할 시', () => {
    const result = '0,2,3,4,5,6';
    expect(() => {
      numberVerification(result);
    }).toThrow('[ERROR] : 숫자가 잘못된 형식입니다.');
  });
  it('입력한 숫자가 1000???', () => {
    const result = '1000j';
    expect(() => {
      numberVerification(result);
    }).toThrow('[ERROR] : 숫자가 잘못된 형식입니다.');
  });
});
