import BonusNumError from '../src/utils/error/type/bonus_num_error.js';

describe('보너스 번호 예외 테스트', () => {
  const WINNING_NUM = ['1', '2', '3', '4', '5', '6'];

  test('보너스 번호가 공백이면 예외가 발생한다', () => {
    const BONUS_NUM = '';
    expect(() => {
      new BonusNumError(WINNING_NUM, BONUS_NUM);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 숫자가 아니면 예외가 발생한다', () => {
    const BONUS_NUM = '46';
    expect(() => {
      new BonusNumError(WINNING_NUM, BONUS_NUM);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1~45 사이가 아니면 예외가 발생한다', () => {
    const BONUS_NUM = '46';
    expect(() => {
      new BonusNumError(WINNING_NUM, BONUS_NUM);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 이미 당첨 번호에 존재하면 예외가 발생한다', () => {
    const BONUS_NUM = '1';
    expect(() => {
      new BonusNumError(WINNING_NUM, BONUS_NUM);
    }).toThrow('[ERROR]');
  });
});
