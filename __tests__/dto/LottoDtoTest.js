import Lotto from '../../src/domain/Lotto.js';

describe('로또 Dto 클래스가 잘 포장되어 반환하는지 테스트', () => {
  const lottoInput = [1, 2, 3 ,4 ,5 ,6]
  const lotto = new Lotto(lottoInput);

  test('불필요한 메서드에 접근하지 않게 되었는지 테스트', () => {
    // 이땐 get을 사용하지 않았으므로 오류가 발생하지 않는다.
    const bonusNumber = lotto.createBonusNumber(7); 

    // createBonusNumber에 접근할 수 없어야함.
    expect(() => lotto.get().createBonusNumber()).toThrow('createBonusNumber'); 
  });

  test('dto로 반환된 값이 잘 배열로 나오는지 테스트', () => {
    expect(lotto.get()).toEqual(lottoInput);
  });
});
