import InputFactory from '../../src/Input';

const mockInput = (inputs) => {
  const Input = InputFactory.initialize('bonus');
  Input.request = jest.fn();
  Input.request.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('보너스 숫자 입력이', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const Input = InputFactory.initialize('win');
  test('1~45 범위 이외의 숫자를 입력시 예외가 발생 하는가?', () => {
    const inputs = [0, 46];

    mockInput(inputs);
    
    expect(() => Input.request()).rejects.toThrow('[ERROR]');
  });

  test('1글자를 초과하거나 미만일 경우 예외가 발생 하는가?', () => {
    const inputs = ['2,3', ' ', '  '];

    mockInput(inputs);
    
    expect(() => Input.request()).rejects.toThrow('[ERROR]');
  });
});
