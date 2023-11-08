import InputAmount from "../src/InputAmount.js";

describe('함수 기능 테스트', () => {

  test('inputAmount.publishedLotto 오름차순 배열 기능 테스트', () => {
    const inputAmount = new InputAmount();
    inputAmount.publishLotto(1000);
    inputAmount.Pulished.numbers.forEach((numbers) => {
      for (let i = 0; i < numbers.length - 1; i += 1) {
        const result = numbers[i] < numbers[i + 1];
        expect(result).toBeTruthy();
      }
    });
  });
});