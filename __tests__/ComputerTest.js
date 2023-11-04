import Computer from '../src/Computer.js';

describe('컴퓨터 클래스 테스트', () => {
  test('금액에 맞게 로또 개수를 계산하는 테스트 -> 3000 입력시', () => {
    const generator = () => [1, 2, 3, 4, 5, 6];

    const computer = new Computer(generator);
    const lottos = Array.from({ length: 3 }, () => [1, 2, 3, 4, 5, 6]);
    expect(computer.generateLotto('3000')).toEqual({ lottos, quantity: 3 });
  });

  test('금액에 맞게 로또 개수를 계산하는 테스트 -> 12000 입력시', () => {
    const generator = () => [1, 2, 3, 4, 5, 6];

    const computer = new Computer(generator);
    const lottos = Array.from({ length: 12 }, () => [1, 2, 3, 4, 5, 6]);
    expect(computer.generateLotto('12000')).toEqual({ lottos, quantity: 12 });
  });

  test('로또 개수와 번호가 올바르게 나오는지 테스트 2000 입력시', () => {
    const generator = () => [10, 11, 12, 15, 19, 20];

    const computer = new Computer(generator);

    expect(computer.generateLotto('2000')).toEqual({
      lottos: [
        [10, 11, 12, 15, 19, 20],
        [10, 11, 12, 15, 19, 20],
      ],
      quantity: 2,
    });
  });
});
