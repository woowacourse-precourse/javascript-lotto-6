import ValidatorFactory from '../../src/Validator';

describe('당첨 번호 입력이', () => {
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
