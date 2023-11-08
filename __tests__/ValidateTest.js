import { ERROR_MESSAGE } from '../src/Utils/constants';
import InputValidator from '../src/Validator/inputValidator';

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
