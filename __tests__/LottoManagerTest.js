import LottoManager from "../src/LottoManager.js";
import {MissionUtils} from "@woowacourse/mission-utils";
import {MESSAGE} from "../src/constants/messages.js";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();

        return Promise.resolve(input);
    });
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe("LottoManager 클래스 테스트", () => {
    test("LuckyNumber와 BonusNumber를 정확하게 입력을 받을 수 있는지 검사합니다. (보너스 번호와 중복이 될 경우)", () => {
        expect(() => {
            new LottoManager([1, 2, 3, 4, 5, 6, 7], 3);
        }).toThrow("[ERROR]");
    });
    test("LuckyNumber를 정확하게 입력을 받을 수 있는지 검사합니다. (범위를 벗어난 값이 있을 경우)", async () => {
        const logSpy = getLogSpy();

        const DUPLICATE_NUMBER = "1,2,3,4,5,5";
        const INPUT_NUMBERS = "1,2,3,4,5,6";

        mockQuestions([DUPLICATE_NUMBER, INPUT_NUMBERS]);
        const logs = [MESSAGE.ERROR.duplicate]
        await LottoManager.readSetLuckyNumber();

        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });
    test("LuckyNumber와 BonusNumber를 정확하게 입력을 받을 수 있는지 검사합니다. (문자열을 입력을 받았을 경우)", async () => {
        const logSpy = getLogSpy();

        mockQuestions(["1,2,_3,4,5,6","1,2,3,4,5,6"]);
        const log = MESSAGE.ERROR.number
        await LottoManager.readSetLuckyNumber();

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
    test("LuckyNumber와 BonusNumber를 정확하게 입력을 받을 수 있는지 검사합니다. (정확한 경우)", () => {
        new LottoManager([10, 12, 13, 14, 15, 16]);
    });
});
