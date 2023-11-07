import { checkbonus } from '../src/Exception/CheckBonus.js';
import { checkbuy } from '../src/Exception/CheckBuy.js';
import { checkduplication } from '../src/Exception/Checkduplication.js';

describe('에러 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      checkbonus('60');
    }).toThrow('[ERROR]');
  });

  test('금액은 1000원 단위의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      checkbuy('1001');
    }).toThrow('[ERROR]');
  });

  // prettier-ignore
  test('당첨 번호와 보너스 번호가 일치하면 예외가 발생한다.', () => {
    expect(() => {
      checkduplication({ 'numbers': [1, 2, 3, 4, 5, 6]},5);
    }).toThrow('[ERROR]');
  });
});
