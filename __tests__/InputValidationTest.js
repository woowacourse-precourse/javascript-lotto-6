import VALIDATION from '../src/Controller/Validation';

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
});
