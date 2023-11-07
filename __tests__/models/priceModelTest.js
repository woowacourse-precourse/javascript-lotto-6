import priceModel from '../../src/models/priceModel.js';

describe('발행할 로또 개수를 계산', () => {
  test('발행한 로또 개수가 알맞게 계산된다.', () => {
    const inputs = [10000, 5000, 17000, 200000, 7000];
    const outputs = [10, 5, 17, 200, 7];

    outputs.forEach((output, index) => {
      expect(priceModel.calculateNumberOfLotto(inputs[index])).toBe(output);
    });
  });

  test('발행한 로또 개수가 다르게 계산된다.', () => {
    const inputs = [15000, 50000, 170000, 2000, 70000];
    const outputs = [10, 5, 17, 200, 7];

    outputs.forEach((output, index) => {
      expect(priceModel.calculateNumberOfLotto(inputs[index])).not.toBe(output);
    });
  });
});
