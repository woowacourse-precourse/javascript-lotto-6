import Game from '../src/Game.js';

describe('당첨 번호 유효성 테스트', () => {
  test('당첨 번호가 쉼표로 구분되지 않을 때, 예외가 발생한다.', () => {
    const input = '123456';
    expect(() => new Game().setWinningNumbers(input)).toThrow(
      '[ERROR] 입력이 쉼표로 구분되지 않습니다.'
    );
  });

  test('당첨 번호가 6개가 아닐 때, 예외가 발생한다.', () => {
    const input = '1,2,3,4,5';
    expect(() => new Game().setWinningNumbers(input)).toThrow('[ERROR] 입력이 6개가 아닙니다.');
  });

  test('당첨 번호에 중복이 있을 때, 예외가 발생한다.', () => {
    const input = '1,1,2,3,4,5';
    expect(() => new Game().setWinningNumbers(input)).toThrow(
      '[ERROR] 입력에 중복된 값이 있습니다.'
    );
  });

  test('당첨 번호에 숫자가 아닌 값이 있을 때, 예외가 발생한다.', () => {
    const input = 'ㄱ,1,2,3,4,5';
    expect(() => new Game().setWinningNumbers(input)).toThrow('[ERROR] 입력이 숫자가 아닙니다.');
  });

  test('당첨 번호에 1 ~ 45 사이가 아닌 값이 있을 때, 예외가 발생한다.', () => {
    const input = '46,1,2,3,4,5';
    expect(() => new Game().setWinningNumbers(input)).toThrow(
      '[ERROR] 입력이 1 ~ 45 사이가 아닙니다'
    );
  });
});

describe('보너스 번호 유효성 테스트', () => {
  test('보너스 번호가 숫자가 아닐 때, 예외가 발생한다.', () => {
    const input = 'ㄱ';
    expect(() => new Game().setBonusNumber(Number(input))).toThrow(
      '[ERROR] 입력이 숫자가 아닙니다.'
    );
  });

  test('보너스 번호가 1 ~ 45 사이가 아닐 때, 예외가 발생한다.', () => {
    const input = '46';
    expect(() => new Game().setBonusNumber(Number(input))).toThrow(
      '[ERROR] 입력이 1 ~ 45 사이가 아닙니다'
    );
  });

  test('보너스 번호가 당첨 번호와 중복일 때, 예외가 발생한다.', () => {
    const input = '1';

    const game = new Game();
    game.setWinningNumbers('1,2,3,4,5,6');

    expect(() => game.setBonusNumber(Number(input))).toThrow(
      '[ERROR] 입력이 당첨 번호와 중복되는 값입니다.'
    );
  });
});
