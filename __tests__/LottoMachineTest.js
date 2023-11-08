import LottoMachine from '../src/models/LottoMachine.js';

describe('로또생성기 클래스 테스트', () => {
  test('로또생성기가 만든 로또 번호의 개수가 6일것이다.', () => {
    expect(LottoMachine.createLotto()).toHaveLength(6);
  });

  test('로또생성기가 만든 로또 번호가 로또 번호가 나올 수 있는 범위 안에 들어올 것이다.', () => {
    const array = Array.from({ length: 45 }, (v, i) => i + 1);
    expect(array).toContain(...LottoMachine.createLotto());
  });
});
