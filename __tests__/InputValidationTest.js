import { Console } from '@woowacourse/mission-utils';
import VALIDATION from '../src/Controller/Validation';
import INPUT_VIEW from '../src/View/inputView';

const mockfn = (input) => {
  Console.readLineAsync = jest.fn();
  Console.readLineAsync.mockImplementation(() => Promise.resolve(input));
};

describe('Input Validation Test', () => {
  test('빈 값 입력 테스트', async () => {
    const input = '';
    expect(VALIDATION.priceValidation(input)).rejects.toThrow('[ERROR]');
  });

  test('숫자가 아닌 값 입력 테스트', async () => {
    const input = 'A';
    expect(VALIDATION.priceValidation(input)).rejects.toThrow('[ERROR]');
  });

  test('1,000 단위 입력 테스트', async () => {
    const input = '1';
    expect(VALIDATION.priceValidation(input)).rejects.toThrow('[ERROR]');
  });

  test('PRICE return 테스트', async () => {
    const input = '1000';
    mockfn(input);
    const result = await INPUT_VIEW.inputPrice(input);
    expect(result).toEqual(input);
  });
});
