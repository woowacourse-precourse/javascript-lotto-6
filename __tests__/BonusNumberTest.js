import { isFromOneToFortyFive, isIncludedLottoNumbers, isNotNumber, isOnlyNumber, isSingleDigit } from "../src/for-test/checkBonusNumberTest";

describe('보너스 숫자 입력 예외 테스트', () => {
    test('보너스 번호가 한 자리 숫자인지 확인', () => {
        expect(() => {
            isSingleDigit('123');
        }).toThrow('[ERROR]');
    });

    test('보너스 번호가 숫자인지 문자인지 확인', () => {
        expect(() => {
            isNotNumber('abc');
        }).toThrow('[ERROR]');
    });

    test('보너스 번호가 숫자만 입력했는지 확인', () => {
        expect(() => {
            isOnlyNumber('1a2b3c');
        }).toThrow('[ERROR]');
    });

    test('보너스 숫자가 1과 45 사이인지 확인', () => {
        expect(() => {
            isFromOneToFortyFive(50);
        }).toThrow('[ERROR]');
    });

    test('당첨 번호와 보너스 번호가 중복인지 확인', () => {
        expect(() => {
            isIncludedLottoNumbers(5, [1, 2, 3, 4, 5]);
        }).toThrow('[ERROR]');
    });
});