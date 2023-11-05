import { Bonus } from '../src/Bonus';
import { Message } from '../src/Message.js';

describe('Bonus 테스트', () => {
  it('정상적은 보너스 번호로 Bonus 생성', () => {
    const validBonusNumber = '3';
    const winningNumbers = [1, 12, 25, 29, 36, 45];
    const bonus = new Bonus(validBonusNumber, winningNumbers);
    expect(bonus.number).toBe(3);
  });

  it('보너스번호가 숫자가 아닐때', () => {
    const invalidBonusNumber = 'one';
    const winningNumbers = [1, 12, 25, 29, 36, 45];
    expect(() => new Bonus(invalidBonusNumber, winningNumbers)).toThrowError(
      new Error(Message.error.NOT_NUMBER)
    );
  });

  it('보너스번호가 1~45범위가 아닐때', () => {
    const outOfRangeBonusNumber = '46';
    const winningNumbers = [1, 12, 25, 29, 36, 45];
    expect(() => new Bonus(outOfRangeBonusNumber, winningNumbers)).toThrowError(
      new Error(Message.error.NOT_RANGE)
    );
  });

  it('로또 리스트에 이미 존재하는 값일때', () => {
    const duplicateBonusNumber = '12';
    const winningNumbers = [1, 12, 25, 29, 36, 45];
    expect(() => new Bonus(duplicateBonusNumber, winningNumbers)).toThrowError(
      new Error(Message.error.NOT_UNIQUE)
    );
  });
});
