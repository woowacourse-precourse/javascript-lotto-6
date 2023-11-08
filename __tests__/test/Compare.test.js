import Compare from '../../src/domains/Compare.js';
import Lotto from '../../src/domains/Lotto.js';

const winningNumber = new Lotto([1, 2, 3, 4, 5, 6]);
const bonusNumber = 7;

describe('⭐ Compare 클래스 테스트', () => {
  test('숫자가 일치하지 않을 경우 ', () => {
    const compare = new Compare(winningNumber, bonusNumber);
    const lotto1 = new Lotto([10, 11, 12, 13, 14, 15]);

    const boughtLotto = [lotto1];
    expect(compare.getMathced(boughtLotto)).toEqual({
      THREE: 0,
      FOUR: 0,
      FIVE: 0,
      BONUS: 0,
      SIX: 0,
    });
  });

  test('숫자가 3개 일치할 경우', () => {
    const compare = new Compare(winningNumber, bonusNumber);
    const lotto1 = new Lotto([1, 2, 3, 43, 44, 45]);

    const boughtLotto = [lotto1];
    expect(compare.getMathced(boughtLotto)).toEqual({
      THREE: 1,
      FOUR: 0,
      FIVE: 0,
      BONUS: 0,
      SIX: 0,
    });
  });

  test('숫자가 4개 일치할 경우 ', () => {
    const compare = new Compare(winningNumber, bonusNumber);
    const lotto1 = new Lotto([1, 2, 3, 4, 44, 45]);

    const boughtLotto = [lotto1];
    expect(compare.getMathced(boughtLotto)).toEqual({
      THREE: 0,
      FOUR: 1,
      FIVE: 0,
      BONUS: 0,
      SIX: 0,
    });
  });

  test('숫자가 5개 일치할 경우 ', () => {
    const compare = new Compare(winningNumber, bonusNumber);
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 45]);

    const boughtLotto = [lotto1];
    expect(compare.getMathced(boughtLotto)).toEqual({
      THREE: 0,
      FOUR: 0,
      FIVE: 1,
      BONUS: 0,
      SIX: 0,
    });
  });

  test('숫자가 5개 일치하고, 보너스 경우가 일치할 경우 ', () => {
    const compare = new Compare(winningNumber, bonusNumber);
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 7]);

    const boughtLotto = [lotto1];
    expect(compare.getMathced(boughtLotto)).toEqual({
      THREE: 0,
      FOUR: 0,
      FIVE: 0,
      BONUS: 1,
      SIX: 0,
    });
  });

  test('숫자가 6개 일치할 경우 ', () => {
    const compare = new Compare(winningNumber, bonusNumber);
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6]);

    const boughtLotto = [lotto1];
    expect(compare.getMathced(boughtLotto)).toEqual({
      THREE: 0,
      FOUR: 0,
      FIVE: 0,
      BONUS: 0,
      SIX: 1,
    });
  });

  test('수익률은 둘째자리에서 반올리 되어야 한다. ', () => {
    const compare = new Compare(winningNumber, bonusNumber);
    const matchedResult = [1, 0, 0, 0, 0];
    const profit = compare.getProfit(matchedResult, 1);
    expect(profit).toEqual('500.0');
  });
});
