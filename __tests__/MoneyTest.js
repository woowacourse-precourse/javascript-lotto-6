import Money from '../src/Money';
import mockQuestions from './ApplicationTest';

describe('머니 클래스 테스트', () => {
  test('입력값이 없으면 예외가 발생한다.', async () => {
    const NO_INPUT = [''];
    mockQuestions(NO_INPUT);
    try {
      const money = new Money();
    } catch (error) {
      expect(error.message.startsWith('[ERROR]')).toBe(true);
    }
  });

  test('입력값이 숫자가 아니면 예외가 발생한다.', async () => {
    const ISNAN_INPUT = ['a'];
    mockQuestions(ISNAN_INPUT);
    try {
      const money = new Money();
    } catch (error) {
      expect(error.message.startsWith('[ERROR]')).toBe(true);
    }
  });

  test('입력값이 0이면 예외가 발생한다.', async () => {
    const ZERO_INPUT = ['0'];
    mockQuestions(ZERO_INPUT);
    try {
      const money = new Money();
    } catch (error) {
      expect(error.message.startsWith('[ERROR]')).toBe(true);
    }
  });

  test('입력값이 1000단위가 아니면 예외가 발생한다.', async () => {
    const THOUSAND_INPUT = ['50'];
    mockQuestions(THOUSAND_INPUT);
    try {
      const money = new Money();
    } catch (error) {
      expect(error.message.startsWith('[ERROR]')).toBe(true);
    }
  });
});
