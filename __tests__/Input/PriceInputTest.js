import InputFactory from '../../src/Input';

const mockInput = (inputs) => {
  const Input = InputFactory.initialize('price');
  Input.request = jest.fn();
  Input.request.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('구입 금액 입력이', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const Input = InputFactory.initialize('price');
  test('1000으로 나뉘어지지 않을 경우 예외가 발생하는가?', () => {
    const input = 10003;

    mockInput(input);

    expect(() => Input.request()).rejects.toThrow('[ERROR]');
  });

  test('숫자가 아닐 경우 예외가 발생하는가?', () => {
    const input = 'a30';

    mockInput(input);

    expect(() => Input.request()).rejects.toThrow('[ERROR]');
  });

  test('입력되지 않은 경우 예외가 발생하는가?', () => {
    const inputs = [' ', '', '   ', 0];

    mockInput(inputs);

    expect(() => Input.request()).rejects.toThrow('[ERROR]');
  });
});
