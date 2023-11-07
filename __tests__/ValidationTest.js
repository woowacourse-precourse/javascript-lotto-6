import { Console } from '@woowacourse/mission-utils';
import Input from '../src/Input.js';
import User from '../src/User.js';
import Game from '../src/Game.js';

const mockQuestions = (input) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe('입력 유효성 테스트', () => {
  test('입력된 값이 없을 때, 예외가 발생한다.', () => {
    const input = '';
    mockQuestions(input);
    expect(() => new Input().read()).rejects.toThrow(
      '[ERROR] 입력이 없습니다.'
    );
  });
});

describe('구입 금액 유효성 테스트', () => {
  test('구입 금액이 숫자가 아닐 때, 예외가 발생한다.', () => {
    const input = '가나다';
    expect(() => new User().setMoney(Number(input))).toThrow(
      '[ERROR] 입력이 숫자가 아닙니다.'
    );
  });

  test('구입 금액이 0일 때, 예외가 발생한다.', () => {
    const input = '0';
    expect(() => new User().setMoney(Number(input))).toThrow(
      '[ERROR] 입력이 0 이하입니다'
    );
  });

  test('구입 금액이 음수일 때, 예외가 발생한다.', () => {
    const input = '-1000';
    expect(() => new User().setMoney(Number(input))).toThrow(
      '[ERROR] 입력이 0 이하입니다'
    );
  });

  test('구입 금액이 1,000원 단위가 아닐 때, 예외가 발생한다.', () => {
    const input = '1234';
    expect(() => new User().setMoney(Number(input))).toThrow(
      '[ERROR] 입력이 1,000원 단위가 아닙니다.'
    );
  });
});

describe('당첨 번호 유효성 테스트', () => {
  test('당첨 번호가 쉼표로 구분되지 않을 때, 예외가 발생한다.', () => {
    const input = '123456';
    expect(() => new Game().setWinningNumbers(input)).toThrow(
      '[ERROR] 입력이 쉼표로 구분되지 않습니다.'
    );
  });

  test('당첨 번호가 6개가 아닐 때, 예외가 발생한다.', () => {
    const input = '1,2,3,4,5';
    expect(() => new Game().setWinningNumbers(input)).toThrow(
      '[ERROR] 입력이 6개가 아닙니다.'
    );
  });

  test('당첨 번호에 중복이 있을 때, 예외가 발생한다.', () => {
    const input = '1,1,2,3,4,5';
    expect(() => new Game().setWinningNumbers(input)).toThrow(
      '[ERROR] 입력에 중복된 값이 있습니다.'
    );
  });

  test('당첨 번호에 숫자가 아닌 값이 있을 때, 예외가 발생한다.', () => {
    const input = 'ㄱ,1,2,3,4,5';
    expect(() => new Game().setWinningNumbers(input)).toThrow(
      '[ERROR] 입력이 숫자가 아닙니다.'
    );
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
