import priceCheck from '../src/priceCheck.js';

describe('금액 입력 예외 테스트 ', () => {
  it('금액이 1000단위일시', () => {
    const price = 1000;
    const result = priceCheck(price);

    expect(result).toBe(1000);
  });
  it('금액이 1000단위가 아닐시', () => {
    const price = 500;
    expect(() => {
      priceCheck(price);
    }).toThrow('[ERROR] : 단위는 1000단위로 입력해야합니다.');
  });
  it('문자열이 들어간 경우 테스트', () => {
    expect(() => {
      priceCheck('100j');
    }).toThrowError('[ERROR] : 단위는 1000단위로 입력해야합니다.');
  });
});
