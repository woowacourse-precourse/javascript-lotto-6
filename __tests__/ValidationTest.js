import {
    checkBonus,
    checkBonusNumbers,
    checkPurchaseAmount,
    checkWinningNumbers,
} from "../src/utils/Validation";
import Lotto from "../src/Lotto";
import { ERROR } from "../src/utils/Define";
  
describe('유효성 검사 테스트', () => {
    describe('로또 번호 내 보너스 번호 포함 시 테스트', () => {
        test('보너스 번호가 로또 번호에 포함되어 있다면 참을 반환해야 한다.', () => {
            const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
            const bonusNumber = 3;
            expect(checkBonus(lotto, bonusNumber)).toBeTruthy();
        });
        
        test('보너스 번호가 로또 번호에 포함되어 있지 않다면 거짓을 반환해야 한다.', () => {
            const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
            const bonusNumber = 7;
            expect(checkBonus(lotto, bonusNumber)).toBeFalsy();
        });
    });
    
    describe('보너스 번호 유효성 검사 테스트', () => {
        test('보너스 번호가 NaN이면 예외가 발생한다.', () => {
            const bonusNumber = NaN;
            const winningNumbers = [1, 2, 3, 4, 5, 6];
            expect(() => checkBonusNumbers(bonusNumber, winningNumbers)).toThrow(ERROR.INVALID_BONUS_NUMBER_MESSAGE);
        });
        
        test('보너스 번호가 정수가 아닌 숫자라면 예외가 발생한다.', () => {
            const bonusNumber = 1.1;
            const winningNumbers = [1, 2, 3, 4, 5, 6];
            expect(() => checkBonusNumbers(bonusNumber, winningNumbers)).toThrow(ERROR.INVALID_BONUS_NUMBER_MESSAGE);
        });

        test('보너스 번호가 당첨 번호에 포함되어 있으면 예외가 발생한다.', () => {
            const bonusNumber = 1;
            const winningNumbers = [1, 2, 3, 4, 5, 6];
            expect(() => checkBonusNumbers(bonusNumber, winningNumbers)).toThrow(ERROR.INVALID_BONUS_NUMBER_MESSAGE);
        });
        
        test('보너스 번호가 유효한 범위를 벗어나면 예외가 발생한다.', () => {
            const bonusNumber = 46;
            expect(() => checkBonusNumbers(bonusNumber, [])).toThrow(ERROR.INVALID_BONUS_NUMBER_MESSAGE);
        });
    });

    describe('구매 금액 유효성 검사 테스트', () => {
        test('구매 금액이 NaN이면 예외가 발생한다.', () => {
            const amount = NaN;
            expect(() => checkPurchaseAmount(amount)).toThrow(ERROR.INVALID_AMOUNT_MESSAGE);
        });

        test('구매 금액이 0이면 예외가 발생한다.', () => {
            const amount = 0;
            expect(() => checkPurchaseAmount(amount)).toThrow(ERROR.INVALID_AMOUNT_MESSAGE);
        });

        test('구매 금액이 음수일 경우 예외가 발생한다.', () => {
            const amount = -1000;
            expect(() => checkPurchaseAmount(amount)).toThrow(ERROR.INVALID_AMOUNT_MESSAGE);
        });

        test('구매 금액이 정수가 아닐 경우 예외가 발생한다.', () => {
            const amount = 1.1;
            expect(() => checkPurchaseAmount(amount)).toThrow(ERROR.INVALID_AMOUNT_MESSAGE);
        });

        test('구매 금액이 로또 가격의 배수가 아니면 예외가 발생한다.', () => {
            const amount = 900;
            expect(() => checkPurchaseAmount(amount)).toThrow(ERROR.INVALID_AMOUNT_MESSAGE);
        });
    });

    describe('당첨 번호 유효성 검사 테스트', () => {
        test('당첨 번호 중 NaN이 있으면 예외가 발생한다.', () => {
            const numbers = [1, 2, 3, 4, 5, NaN];
            expect(() => checkWinningNumbers(numbers)).toThrow(ERROR.INVALID_WINNING_NUMBERS_MESSAGE);
        });
        
        test('당첨 번호 중 정수가 아닌 숫자가 있으면 예외가 발생한다.', () => {
            const numbers = [1, 2, 3, 4, 5, 5.5];
            expect(() => checkWinningNumbers(numbers)).toThrow(ERROR.INVALID_WINNING_NUMBERS_MESSAGE);
        });

        test('당첨 번호 중 범위를 벗어난 숫자가 있으면 예외가 발생한다.', () => {
            const numbers = [1, 2, 3, 4, 5, -1];
            expect(() => checkWinningNumbers(numbers)).toThrow(ERROR.INVALID_WINNING_NUMBERS_MESSAGE);
            const numbersTwoCase = [1, 2, 3, 4, 5, 77];
            expect(() => checkWinningNumbers(numbersTwoCase)).toThrow(ERROR.INVALID_WINNING_NUMBERS_MESSAGE);
        });

        test('당첨 번호의 갯수가 맞지 않으면 예외가 발생한다.', () => {
            const numbers = [1, 2, 3, 4, 5];
            expect(() => checkWinningNumbers(numbers)).toThrow(ERROR.INVALID_WINNING_NUMBERS_MESSAGE);
        });
        
        test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
            const numbers = [1, 2, 3, 3, 4, 5];
            expect(() => checkWinningNumbers(numbers)).toThrow(ERROR.INVALID_WINNING_NUMBERS_MESSAGE);
        });
    });
});