import { buyLottoBuyValueCheck, isNotNumber, underThousandValue } from "../src/for-test/checkBuyAmountTest";

describe('로또 구매 예외 테스트', () => {
    test('1000원 단위인지 확인', () => {
        expect(() => {
            buyLottoBuyValueCheck('1500');
        }).toThrow('[ERROR]');
    });

    test('보너스 번호가 숫자인지 문자인지 확인', () => {
        expect(() => {
            isNotNumber('abc');
        }).toThrow('[ERROR]');
    });

    test('1000원 미만인지 확인', () => {
        expect(() => {
            underThousandValue('500');
        }).toThrow('[ERROR]');
    });
});