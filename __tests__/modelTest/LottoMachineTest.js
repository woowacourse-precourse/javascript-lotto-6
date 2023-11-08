import LottoMachine from '../../src/Model/LottoMachine.js';
import CustomError from '../../src/util/CustomError.js';
import ERROR from '../../src/constants/Error.js';

describe('LottoMachine 클래스 테스트', () => {
  describe('결제 금액 유효성 검사 테스트', () => {
    test('결제금액 특이값 예외 테스트', () => {
      expect(() => {
        new LottoMachine('positivetest');
      }).toThrow(new CustomError(ERROR.PAYMENT_NUMBER));
    });

    test('결제금액 천 단위 예외 테스트', () => {
      expect(() => {
        new LottoMachine('12345');
      }).toThrow(new CustomError(ERROR.PAYMENT_THOUSAND));
    });
  });
  describe('로또 반환 갯수 확인 테스트', () => {
    const lottoMachineInstance = (input) => new LottoMachine(input);
    const cases = [
      { input: 8000, expectedResult: 8 },
      { input: 120000, expectedResult: 120 },
    ];

    test.each(cases)(
      '로또 반환 갯수 (입력금액:$input/로또 갯수:$expectedResult개)',
      ({ input, expectedResult }) => {
        expect(lottoMachineInstance(input).getLotto().length).toEqual(
          expectedResult,
        );
      },
    );
  });
});
