import Computer from '../src/Computer.js';

describe('컴퓨터 클래스 테스트', () => {
  test('금액에 맞게 로또 개수를 계산하는 테스트 -> 3000 입력시', () => {
    const computer = new Computer();
    expect(computer.calculateQuantity('3000')).toBe(3);
  });

  test('금액에 맞게 로또 개수를 계산하는 테스트 -> 12000 입력시', () => {
    const computer = new Computer();
    expect(computer.calculateQuantity('12000')).toBe(12);
  });
});
