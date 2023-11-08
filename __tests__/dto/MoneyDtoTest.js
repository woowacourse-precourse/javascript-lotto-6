import Money from '../../src/domain/Money.js';

describe('돈 Dto 클래스가 잘 포장되어 반환하는지 테스트', () => {
  const money = new Money(1000);

  test('불필요한 메서드에 접근하지 않게 되었는지 테스트', () => {
    // 이땐 에러가 발생하지 않는다.
    const decapsulatedMoney = money.get(); 

    // get에 접근할 수 없어야함.
    expect(() => decapsulatedMoney.get()).toThrow('get'); 
  });

  test('dto로 반환된 값이 잘 나오는지 테스트', () => {
    expect(money.get()).toEqual(1000);
  });
});
