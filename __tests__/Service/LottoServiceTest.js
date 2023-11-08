import LottoService from '../../src/services/LottoService';
import ERROR from '../../src/constants/error';
import LOTTO from '../../src/constants/lotto';

describe('LottoService 테스트', () => {
  let lottoServiceInstance;

  beforeEach(() => {
    lottoServiceInstance = new LottoService();
  });

  describe('sellLotto 메서드는 구매 금액에 맞는 로또를 반환한다.', () => {
    const cases = [
      { input: 1000, expected: 1 },
      { input: 5000, expected: 5 },
      { input: 10000, expected: 10 },
      { input: 50000, expected: 50 },
      { input: 100000, expected: 100 },
    ];

    describe('로또 구매 테스트', () => {
      test.each(cases)(
        '$input원을 입력받으면 $expected개의 로또를 반환한다.',
        ({ input, expected }) => {
          // when
          const result = lottoServiceInstance.sellLotto(input);

          // then
          expect(result.length).toBe(expected);
        },
      );

      describe('예외 테스트', () => {
        const errorCases = [
          {
            input: 1001,
            describe: '1000원으로 나누어 떨어지지 않기 때문에',
          },
          {
            input: 1000.5,
            describe: '1000원으로 나누어 떨어지지 않기 때문에',
          },
          {
            input: 500,
            describe: '1000원으로 나누어 떨어지지 않기 때문에',
          },
          { input: -1000, describe: '음수이기 때문에' },
          { input: 0, describe: '0이기 때문에' },
        ];

        test.each(errorCases)(
          '$input원을 입력받으면 $describe, 예외처리 한다. ',
          ({ input }) => {
            // when
            const sellLotto = () => lottoServiceInstance.sellLotto(input);

            // then
            expect(sellLotto).toThrow(ERROR.message.lotto.invalidUnit);
          },
        );
      });
    });

    describe('로또 번호 생성 테스트', () => {
      let lottos;
      beforeEach(() => {
        // given
        const input = 10000;

        // when
        lottos = lottoServiceInstance.sellLotto(input);
      });

      test('발급된 로또 번호는 여섯자리 수이다.', () => {
        // then
        lottos.forEach((lotto) => {
          const lottoNumbers = lotto.getNumbers();

          expect(lottoNumbers).toHaveLength(LOTTO.length);
        });
      });

      test('로또 번호는 1부터 45까지의 수이다.(jest 메서드를 이용한 검증)', () => {
        // then
        lottos.forEach((lotto) => {
          const lottoNumbers = lotto.getNumbers();

          lottoNumbers.forEach((number) => {
            expect(number).toBeGreaterThanOrEqual(LOTTO.minNumber);
            expect(number).toBeLessThanOrEqual(LOTTO.maxNumber);
          });
        });
      });

      test('로또 번호는 1부터 45까지의 수이다.(isLottoNumber 메서드를 이용한 검증)', () => {
        // then
        lottos.forEach((lotto) => {
          const lottoNumbers = lotto.getNumbers();

          lottoNumbers.forEach((number) => {
            expect(lotto.isLottoNumber(number)).toBeTruthy();
          });
        });
      });

      test('로또 번호는 중복되지 않는다.', () => {
        // then
        lottos.forEach((lotto) => {
          expect(new Set(lotto.getNumbers()).size).toBe(6);
        });
      });
    });
  });
});
