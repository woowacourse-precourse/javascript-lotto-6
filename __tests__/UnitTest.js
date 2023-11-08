import * as lottoUtil from '../src/lottoUtil.js';

describe('단위 테스트', () => {
    test('로또 구입 금액이 숫자가 아니라면 예외가 발생한다.', () => {
        expect(() => {
            lottoUtil.validateLottoPay('1000');
        }).toThrow('[ERROR] 숫자만 입력 가능합니다.');
    });

    test('로또 구입 금액이 1000으로 나누어 떨어지지 않는 경우 예외가 발생한다.', () => {
        expect(() => {
            lottoUtil.validateLottoPay(1234);
        }).toThrow('[ERROR] 1000의 배수만 입력 가능합니다.');
    });
});