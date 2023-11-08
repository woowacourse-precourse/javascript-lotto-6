import Validate from '../src/Validate.js';


describe('예외 처리 테스트', () => {
    const validate = new Validate();
    test('구입 금액 입력 > 1000의 배수를 입력하지 않으면 예외가 발생한다.', () => {
      expect(() => {
        validate.amountInput(10010);
    }).toThrow('[ERROR]');
    });

    test('구입 금액 입력 > 숫자를 입력하지 않으면 예외가 발생한다.', () => {
        expect(() => {
          validate.amountInput('1만원');
      }).toThrow('[ERROR]');
      });

      test('구입 금액 입력 > 아무것도 입력하지 않으면 예외가 발생한다.', () => {
        expect(() => {
          validate.amountInput();
      }).toThrow('[ERROR]');
      });

      test('구입 금액 입력 > 0을 입력하면 예외가 발생한다.', () => {
        expect(() => {
          validate.amountInput(0);
      }).toThrow('[ERROR]');
      });

      const numbers = [1,2,3,4,5,6];

      test('보너스 번호 입력 > 숫자를 입력하지 않으면 예외가 발생한다.', () => {
        expect(() => {
            validate.bonusInput('보너스 달라', numbers);
        }).toThrow('[ERROR]');
      });

      test('보너스 번호 입력 > 1 ~ 45를 벗어나는 수를 입력하면 예외가 발생한다.', () => {
        const exceptions = [0, 50, 1500, -1];
        exceptions.forEach((exception) => {
            expect(() => {
                validate.bonusInput(exception, numbers);
            }).toThrow('[ERROR]');
        })
      });

      test('보너스 번호 입력 > 정수가 아닌 수를 입력하면 예외가 발생한다.', () => {
        const exceptions = [1.5, 30 / 4];
        exceptions.forEach((exception) => {
            expect(() => {
                validate.bonusInput(exception, numbers);
            }).toThrow('[ERROR]');
        })
      });

      test('보너스 번호 입력 > 당첨 번호에 포함되는 수를 입력하면 예외가 발생한다.', () => {
        numbers.forEach((number) => {
            expect(() => {
                validate.bonusInput(number, numbers);
            }).toThrow('[ERROR]');
      });
      });
});