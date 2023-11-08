import addMoneyDelimiter from '../../src/utils/addMoneyDelimiter.js';

describe('숫자 자료형의 돈이 구분자로 구분된 문자열로 출력되는지 테스트', () => {
  test('100원 단위로 구분자가 추가되지 않는 상황 테스트', () => {
    const money = 100;

    expect(addMoneyDelimiter(money)).toEqual('100'); 
  });

  test('1000원 단위', () => {
    const money = 1000;

    expect(addMoneyDelimiter(money)).toEqual('1,000'); 
  });

  test('10000원 단위', () => {
    const money = 10000;

    expect(addMoneyDelimiter(money)).toEqual('10,000'); 
  });


  test('100000원 단위', () => {
    const money = 100000;

    expect(addMoneyDelimiter(money)).toEqual('100,000'); 
  });
});
