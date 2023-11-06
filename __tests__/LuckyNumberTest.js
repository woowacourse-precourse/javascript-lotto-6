import LuckyNumber from "../src/LuckyNumber.js";

describe("LuckyNumber 클래스 테스트", () => {
    test("LuckyNumber와 BonusNumber를 정확하게 입력을 받을 수 있는지 검사합니다. (보너스 번호와 중복이 될 경우)", () => {
        expect(() => {
            new LuckyNumber([1, 2, 3, 4, 5, 6, 7], 3);
        }).toThrow("[ERROR]");
    });
    test("LuckyNumber와 BonusNumber를 정확하게 입력을 받을 수 있는지 검사합니다. (범위를 벗어난 값이 있을 경우)", () => {
        expect(() => {
            new LuckyNumber([1, 2, 3, 46, 5, 7], 8);
        }).toThrow("[ERROR]");
    });
    test("LuckyNumber와 BonusNumber를 정확하게 입력을 받을 수 있는지 검사합니다. (문자열을 입력을 받았을 경우)", () => {
        expect(() => {
            new LuckyNumber([1, "_3", 4, 5, 6, 7], 3);
        }).toThrow("[ERROR]");
    });
    test("LuckyNumber와 BonusNumber를 정확하게 입력을 받을 수 있는지 검사합니다. (문자열을 입력을 받았을 경우)", () => {
        expect(() => {
            new LuckyNumber([1, 12, 14, 15, 16, 17], "-");
        }).toThrow("[ERROR]");
    });
    test("LuckyNumber와 BonusNumber를 정확하게 입력을 받을 수 있는지 검사합니다. (정확한 경우)", () => {
        expect(() => {
            new LuckyNumber([10, 12, 13, 14, 15, 16], 3);
        })
    });
});
