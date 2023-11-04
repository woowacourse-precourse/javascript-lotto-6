import lottoMachine from '../src/lottoMachine.js';

describe('lottoMachine 테스트', () => {
  test('입력받은 숫자만큼 로또를 만드는 기능 확인', () => {
    const lottoCount = 8;

    const result = lottoMachine.make(lottoCount);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(lottoCount);
  });
});
