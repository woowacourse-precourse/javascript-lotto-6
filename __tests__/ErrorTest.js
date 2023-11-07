import * as ErrorCheck from '../src/model/ErrorCheck';

describe("에러 테스트", () => {
    test("error money", () => {
        expect(() => {ErrorCheck.checkMoney(8000);}).not.toThrow();
        expect(() => {ErrorCheck.checkMoney(8001);}).toThrow('[ERROR] 구입 금액이 1000의 배수가 아닙니다');
        expect(() => {ErrorCheck.checkMoney('1000j');}).toThrow('[ERROR] 숫자가 아닌 값이 존재합니다.');
        expect(() => {ErrorCheck.checkMoney('');}).toThrow('[ERROR] 아무것도 입력하지 않았습니다');
    });
});

