import { MissionUtils } from "@woowacourse/mission-utils";
import Winning from "../src/Winning.js";

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

describe("setWinning", () => {
    test("당첨 로또 객체 저장", async () => {
        mockQuestions(["1,2,3,4,5,6"]);

        const winning = new Winning();
        await winning.setWinning();

        expect(winning.getWinning().getNum()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("잘못된 로또 번호이면 에러, 이후 반복", async () => {
        const logSpy = getLogSpy();
        mockQuestions([
            "1,2,3,4,5",
            "1,2,3,4,5,46",
            "1,2,3,4,5,5",
            "1,2,3,4,5,6",
        ]);

        const winning = new Winning();
        await winning.setWinning();

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });
});

describe("setBonus", () => {
    test("보너스 번호 저장", async () => {
        mockQuestions(["1,2,3,4,5,6", "7"]);

        const winning = new Winning();
        await winning.setWinning();
        await winning.setBonus();

        expect(winning.getBonus()).toBe(7);
    });

    test("잘못된 보너스 번호이면 에러, 이후 반복", async () => {
        const logSpy = getLogSpy();

        mockQuestions(["1,2,3,4,5,6", "6", "46", "7"]);

        const winning = new Winning();
        await winning.setWinning();
        await winning.setBonus();

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });
});
