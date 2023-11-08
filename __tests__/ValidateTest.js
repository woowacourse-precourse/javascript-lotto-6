import { ERROR_MESSAGE } from '../src/Utils/constants';
import InputValidator from '../src/Validator/inputValidator';
import lottoValidator from '../src/Validator/lottoValidator';

describe('InputValidateTest', () => {
  describe('구매 금액 입력 테스트', () => {
    test.each([['1000', '30000', '0', '-2000']])(
      '로또 구매 금액 입력이 %s 일때, 숫자 값이므로 검증 결과는 정상 처리',
      input => {
        expect(() => {
          InputValidator.purchaseInput(input);
        }).not.toThrow();
      },
    );

    describe('구매 금액 입력 예외 테스트', () => {
      test.each([['1000원', '삼만원', '0원', '-2000원', '4천원']])(
        '로또 구매 금액 입력이 %s 일때, 숫자 값이 아니므로 검증 결과는 예외 처리',
        input => {
          expect(() => {
            InputValidator.purchaseInput(input);
          }).toThrow(ERROR_MESSAGE.TYPE_ERROR);
        },
      );
    });

    describe('로또 번호 - 기본 번호 입력 테스트', () => {
      test.each([
        [
          '1,2,3,4,5,6',
          '46,47,48,49,50',
          '1,2,3,4,5,6,7',
          '-1,-2,-3,-4,-5,-6',
          '0,0,0,0,0,0',
          '1,2,3,4,5,6,7,8',
          '1,2,3,4',
        ],
      ])(
        '로또 번호 입력이 %s 일때, 숫자 값이므로 검증 결과는 정상 처리',
        input => {
          expect(() => {
            InputValidator.winningNumbers(input);
          }).not.toThrow();
        },
      );
    });
    describe('로또 번호 - 기본 번호 입력 예외 테스트', () => {
      test.each([['1,2,3,사,5,6,7', '46,47,48, ,테스트,51', '5,6,칠,8']])(
        '로또 번호 입력이 %s 일때, 숫자 값이 아니므로 검증 결과는 예외 처리',
        input => {
          expect(() => {
            InputValidator.winningNumbers(input);
          }).toThrow(ERROR_MESSAGE.TYPE_ERROR);
        },
      );
    });

    describe('로또 번호 - 보너스 번호 입력 테스트', () => {
      test.each([['1', '46', '1', '-1', '0', '1', '1']])(
        '로또 번호 입력이 %s 일때, 숫자 값이므로 검증 결과는 정상 처리',
        input => {
          expect(() => {
            InputValidator.bonusNumber(input);
          }).not.toThrow();
        },
      );
    });

    describe('로또 번호 - 보너스 번호 입력 예외 테스트', () => {
      test.each([['사', '타입 테스트', '칠']])(
        '로또 번호 입력이 %s 일때, 숫자 값이 아니므로 검증 결과는 예외 처리',
        input => {
          expect(() => {
            InputValidator.bonusNumber(input);
          }).toThrow(ERROR_MESSAGE.TYPE_ERROR);
        },
      );
    });
  });
});

const pickRandomInRanage = (min, max) =>
  parseInt(Math.random() * (max - min)) + min;

describe('OutputValidateTest', () => {
  describe('lottoValidator내 purchaseAmount 출력 테스트 ', () => {
    test.each([
      ...Array.from(
        { length: 100 },
        () => pickRandomInRanage(1, 800000) * 1000,
      ),
      ('구입 금액이 %s와 같을 때, 결과는 정상처리',
      input => {
        expect(() => {
          lottoValidator.validatePurchaseAmount(input);
        }).not.toThrow('[ERROR]');
      }),
    ]);
  });

  describe('lottoValidator내 winningNumbers 출력 테스트 ', () => {
    test.each([
      [[1, 2, 3, 4, 5, 6]],
      [[41, 42, 43, 44, 45, 40]],
      [[14, 3, 2, 6, 43, 9]],
    ])('당첨 번호가 %s와 같을 때, 결과는 정상처리', input => {
      expect(() => {
        lottoValidator.validateWinningNumbers(input);
      }).not.toThrow('[ERROR]');
    });
  });

  describe('lottoValidator내 bonusNumber 출력 테스트 ', () => {
    test.each([
      [[1, 2, 3, 4, 5, 6], 7],
      [[1, 2, 3, 4, 5, 6], 45],
    ])('보너스 번호가 %s와 같을 때, 결과는 정상처리', input => {
      expect(() => {
        lottoValidator.validateBonusNumber(input);
      }).not.toThrow('[ERROR]');
    });
  });

  describe('lottoValidator내 winningNumbers 출력 예외 테스트 ', () => {
    test.each([
      [[1, 2, 3, 4, 5]], // 로또 번호 개수 예외 (미만)
      [[41, 42, 43, 44, 45, 40, 39]], // 로또 번호 개수 예외 (초과)
      [[3, 3, 2, 6, 43, 9]], // 로또 번호 중복 예외 (미만)
      [[1, 2, 3, 4, 5, 46]], // 로또 번호 범위 예외 (초과)
      [[1, 2, 3, 4, 5, 0]], // 로또 번호 비정상 예외 (0)
      [[1, 2, 3, 4, 5, -1]], // 로또 번호 비정상 예외 (음수)
    ])('당첨 번호가 %s와 같을 때, 결과는 예외처리', input => {
      expect(() => {
        lottoValidator.validateWinningNumbers(input);
      }).toThrow('[ERROR]');
    });
  });

  describe('lottoValidator내 bonusNumber 출력 예외 테스트 ', () => {
    test.each([
      [[1, 2, 3, 4, 5, 6], 1], // 당첨 번호 중복 예외
      [[1, 2, 3, 4, 5, 6], 46], // 보너스 번호 범위 예외
      [[1, 2, 3, 4, 5, 6], 0], // 보너스 번호 비정상 예외 (0)
      [[1, 2, 3, 4, 5, 6], -1], // 보너스 번호 비정상 예외 (음수)
    ])(
      '일반 당첨 번호 %s가 있고, 보너스 번호가 %s와 같을 때, 결과는 예외처리',
      (winningNumbers, bonus) => {
        expect(() => {
          lottoValidator.validateBonusNumber(winningNumbers, bonus);
        }).toThrow('[ERROR]');
      },
    );
  });
});
