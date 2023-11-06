import LottoMachine from '../src/LottoMachine.js';

describe('LottoMachine 클래스 테스트', () => {
  const lottoMachineInstance = new LottoMachine();
  test.each([
    {
      input: 8000,
      expectedResult: 8,
    },
    {
      input: 120000,
      expectedResult: 120,
    },
  ])(
    '로또 반환 갯수 확인 테스트 (입력금액:$input/로또 갯수:$expectedResult개)',
    ({ input, expectedResult }) => {
      expect(lottoMachineInstance.getLotto(input).length).toEqual(
        expectedResult,
      );
    },
  );
});
