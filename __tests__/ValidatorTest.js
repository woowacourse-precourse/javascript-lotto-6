import ValidatorFactory from '../src/Validator';

describe('보너스 검증자에 대한 테스트', () => {
  const validator = ValidatorFactory.initialize('bonus');

  test('1~45 범위 이외의 숫자를 입력시 예외가 발생 하는가?', () => {
    const winningNum = [1, 2, 3, 4, 5, 6];
    const inputs = ['0', '46'];

    inputs.forEach((input) => {
      expect(() => validator.evaluate(input, winningNum)).toThrow('[ERROR]');
    });
  });

  test('1글자를 초과하거나 미만일 경우 예외가 발생 하는가?', () => {
    const winningNum = [1, 2, 3, 4, 5, 6];
    const inputs = ['2,3', ' ', '  '];

    inputs.forEach((input) => {
      expect(() => validator.evaluate(input, winningNum)).toThrow('[ERROR]');
    });
  });

  test('당첨 번호에 포함된 보너스 문자가 입력될 경우 예외가 발생 하는가?', () => {
    const winningNum = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]];
    const inputs = ['3', '10'];

    winningNum.forEach((num, i) => {
      expect(() => validator.evaluate(inputs[i], num)).toThrow('[ERROR]');
    });
  });
});

describe('구입 금액 검증자에 대한 테스트', () => {
  const validator = ValidatorFactory.initialize('payment');

  test('1000으로 나뉘어지지 않을 경우 예외가 발생하는가?', () => {
    const input = '10003';

    expect(() => validator.evaluate(input)).toThrow('[ERROR]');
  });

  test('숫자가 아닐 경우 예외가 발생하는가?', () => {
    const input = 'a30';

    expect(() => validator.evaluate(input)).toThrow('[ERROR]');
  });

  test('값이 입력되지 않은 경우 예외가 발생하는가?', () => {
    const inputs = [' ', '', '   '];

    inputs.forEach((input) => {
      expect(() => validator.evaluate(input)).toThrow('[ERROR]');
    });
  });
});

describe('당첨 번호 검증자에 대한 테스트', () => {
  const valiator = ValidatorFactory.initialize('win');
  test('쉼표로 구분되지 않으면 예외가 발생하는가?', () => {
    const inputs = ['12 34 43 0 12 6', '123456'];

    inputs.forEach((input) => {
      expect(() => valiator.evaluate(input)).toThrow('[ERROR]');
    });
  });

  test('쉼표를 제외하고 6글자가 아닌 경우 예외가 발생하는가?', () => {
    const input = '12,34,43,0,12';

    expect(() => valiator.evaluate(input)).toThrow('[ERROR]');
  });

  test('당첨 번호들이 1~45 범위 내에 포함되지 않을 경우 예외가 발생하는가?', () => {
    const inputs = ['0,1,2,3,4,6', '43,1,2,3,4,46'];

    inputs.forEach((input) => {
      expect(() => valiator.evaluate(input)).toThrow('[ERROR]');
    });
  });
});
