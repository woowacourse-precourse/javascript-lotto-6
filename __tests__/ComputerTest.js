import Computer from '../src/model/Computer.js';

describe('Computer 클래스 테스트', () => {
  test('일치하는 로또 수가 6개라면 rank1의 count는 1이다.', () => {
    const computer = new Computer();
    computer.updateState(6, false);
    expect(computer.state.rank1.count).toBe(1);
    expect(computer.state.rank2.count).toBe(0);
    expect(computer.state.rank3.count).toBe(0);
    expect(computer.state.rank4.count).toBe(0);
    expect(computer.state.rank5.count).toBe(0);
  });
  test('일치하는 로또 수가 5개이고 보너스 true라면 rank2의 count는 1이다.', () => {
    const computer = new Computer();
    computer.updateState(5, true);
    expect(computer.state.rank1.count).toBe(0);
    expect(computer.state.rank2.count).toBe(1);
    expect(computer.state.rank3.count).toBe(0);
    expect(computer.state.rank4.count).toBe(0);
    expect(computer.state.rank5.count).toBe(0);
  });
  test('1,000,000원을 내고 4개 일치하는 로또가 2개 있다면 수익률은 10.0%이다.', () => {
    const computer = new Computer();
    computer.updateState(4, false);
    computer.updateState(4, false);
    expect(computer.earningRate(1000000, computer.state)).toBe('10.0');
  });
});
