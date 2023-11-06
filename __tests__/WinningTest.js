import { EXCEPTION } from '../src/constants/constants.js';
import Winning from '../src/domains/Winning.js';

describe('당첨 클래스 테스트', () => {
  test('당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Winning([1, 2, 3, 4, 5, 6, 7], 8);
    }).toThrow(EXCEPTION.LOTTO_MUST_SIX_NUMBERS);
  });

  test('당첨 번호가 1부터 45까지의 정수가 아니면 에외 발생', () => {
    expect(() => {
      new Winning([1, 2, 3, 4, 5, 600], 8);
    }).toThrow(EXCEPTION.LOTTO_MUST_IN_RANGE);
  });

  test('당첨 번호가 중복되면 예외 발생', () => {
    expect(() => {
      new Winning([1, 2, 3, 4, 6, 6], 8);
    }).toThrow(EXCEPTION.LOTTO_DUPLICATE);
  });

  test('보너스 번호는 1부터 45까지의 정수', () => {
    expect(() => {
      new Winning([1, 2, 3, 4, 5, 6], 800);
    }).toThrow(EXCEPTION.LOTTO_MUST_IN_RANGE);
  });

  test('보너스 번호가 로또 번호와 중복되면 에러 발생', () => {
    expect(() => {
      new Winning([1, 2, 3, 4, 5, 6], 6);
    }).toThrow(EXCEPTION.BONUS_DUPLICATE);
  });

  test('로또 번호와 비교해서 일치하는 번호 개수 리턴', () => {
    const input = new Winning([1, 2, 3, 4, 5, 6], 7);
    const output = input.compareLotto([1, 2, 3, 4, 12, 23]);
    expect(output).toEqual('4');
  });

  test('로또 번호 5개와 보너스 번호가 일치할때 테스트', () => {
    const input = new Winning([1, 2, 3, 4, 5, 6], 7);
    const output = input.compareLotto([1, 2, 3, 4, 5, 7]);
    expect(output).toEqual('5+1');
  });
});
