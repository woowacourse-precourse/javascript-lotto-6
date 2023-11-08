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
        '$input원을 입력받는 경우, $expected개의 로또를 반환한다.',
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
          '$input원을 입력받는 경우, $describe 예외처리 한다. ',
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

  describe('generateWinningLotto 메서드는 당첨 번호와 보너스 번호를 입력받아 당첨 로또(WinningLotto)를 반환한다.', () => {
    const cases = [
      {
        numbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
      },
      {
        numbers: [10, 20, 30, 40, 41, 42],
        bonusNumber: 43,
      },
      {
        numbers: [6, 7, 8, 9, 10, 11],
        bonusNumber: 12,
      },
    ];

    const errorCases = [
      {
        numbers: [10, 10, 30, 40, 41, 42],
        bonusNumber: 1,
        expectedError: ERROR.message.lotto.notUnique,
        describe: '로또 번호가 중복될 경우 예외처리 한다.',
      },
      {
        numbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 1,
        expectedError: ERROR.message.lotto.notUnique,
        describe: '보너스 번호가 로또 번호와 중복될 경우 예외처리 한다.',
      },
      {
        numbers: [1, 2, 3, 4, 5],
        bonusNumber: 6,
        expectedError: ERROR.message.lotto.length,
        describe: '로또 번호가 6개보다 적을 경우 예외처리 한다.',
      },
      {
        numbers: [1, 2, 3, 4, 5, 6, 7],
        bonusNumber: 8,
        expectedError: ERROR.message.lotto.length,
        describe: '로또 번호가 6개보다 많을 경우 예외처리 한다.',
      },
      {
        numbers: [1, 2, 3, 4, 5, 100],
        bonusNumber: 6,
        expectedError: ERROR.message.lotto.notInRange,
        describe: '로또 번호가 범위를 넘어갈 경우 예외처리 한다.',
      },
      {
        numbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 100,
        expectedError: ERROR.message.lotto.notInRange,
        describe: '보너스 번호가 범위를 넘어갈 경우 예외처리 한다.',
      },
    ];

    test.each(cases)(
      'WinningLotto는 입력받은 당첨번호를 가지고있다.',
      ({ numbers, bonusNumber }) => {
        // when
        const winningLotto = lottoServiceInstance.generateWinningLotto({
          numbers,
          bonusNumber,
        });

        // then
        expect(winningLotto.getNumbers()).toEqual(numbers);
      },
    );

    test.each(cases)(
      'WinningLotto는 입력받은 보너스 번호를 가지고있다.',
      ({ numbers, bonusNumber }) => {
        // when
        const winningLotto = lottoServiceInstance.generateWinningLotto({
          numbers,
          bonusNumber,
        });

        // then
        expect(winningLotto.getBonusNumber()).toEqual(bonusNumber);
      },
    );

    describe('예외 테스트', () => {
      test.each(errorCases)(
        '$describe',
        ({ numbers, bonusNumber, expectedError }) => {
          // when
          const generateWinningLotto = () =>
            lottoServiceInstance.generateWinningLotto({
              numbers,
              bonusNumber,
            });

          // then
          expect(generateWinningLotto).toThrow(expectedError);
        },
      );
    });
  });
});
