import InputFactory from '../../src/Input';

const mockInput = (inputs) => {
  const Input = InputFactory.initialize('win');
  Input.request = jest.fn();
  Input.request.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('당첨 번호 입력이', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  const Input = InputFactory.initialize('win');
  test('쉼표로 구분되지 않으면 예외가 발생하는가?', () => {
    const inputs = ['12 34 43 0 12 6', '123456'];

    mockInput(inputs);
    
    expect(() => Input.request()).rejects.toThrow('[ERROR]');
  });
  
  test('쉼표를 제외하고 6글자가 아닌 경우 예외가 발생하는가?', () => {
    const inputs = '12,34,43,0,12';
    
    mockInput(inputs);
    
    expect(() => Input.request()).rejects.toThrow('[ERROR]');
  });
  
  test('당첨 번호들이 1~45 범위 내에 포함되지 않을 경우 예외가 발생하는가?', () => {
    const inputs = ['0,1,2,3,4,6', '43,1,2,3,4,46'];
    
    mockInput(inputs);
    
    expect(() => Input.request()).rejects.toThrow('[ERROR]');
  });
});
