import Input from '../../src/utils/Input';

describe('Input', () => {
  describe('getCost', () => {
    test('구입금액을 입력해 주세요. 라는 문구를 출력한다.', async () => {
      Input.getCost = jest.fn();

      await Input.getCost();
      expect(Input.getCost).toBeCalled();
    });
  });
});
