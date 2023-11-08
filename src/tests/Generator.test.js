import Generator from '../model/Generator.js';

describe('로또 번호 랜덤 생성기 테스트', () => {
  test('구입 금액으로 구매 개수를 계산한다.', () => {
    const generator = new Generator('5000');
    const result = generator.calculateLottoTicketsCount();

    expect(result).toBe(5);
  });

  test('구매 개수만큼 로또 번호를 랜덤으로 생성한다.', () => {
    const generator = new Generator('20000');
    const result = generator.generateLottoNumbers();

    expect(result.length).toBe(20);
  });
});
