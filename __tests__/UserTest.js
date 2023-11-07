import User from '../src/User';
import { mockQuestions } from '../testUtils';

describe('User 클래스 테스트', () => {
  test('사용자기 입력한 금액을 숫자 형태로 읽어옮', () => {
    const INPUT_VALUE_ARRAY = ['1000', ' 1000 ', '1000원', '$1000', '천원'];
    const OUTPUT_ARRAY = [1000, 1000, NaN, NaN, NaN];

    INPUT_VALUE_ARRAY.forEach(async (v, i) => {
      mockQuestions([v]);

      const user = new User();
      const money = await user.pay();

      expect(money).toEqual(OUTPUT_ARRAY[i]);
    });
  });
});
