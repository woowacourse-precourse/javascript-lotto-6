import {MissionUtils} from "@woowacourse/mission-utils";
import CheckManager from "../src/CheckManager.js";

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe("CheckManager 테스트", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    })

    test("임의의 값들을 정상적으로 발행하는지 테스트 합니다.", async () => {
        // given
        const logSpy = getLogSpy();

        mockRandoms([
            [1, 2, 3, 4, 5, 6],
            [3, 4, 5, 6, 7, 8],
            [9, 10, 11, 12, 13, 14],
        ]);

        const LUCKY_NUMBER = [1, 2, 3, 4, 5, 6]
        const BONUS_NUMBER = 7
        const TRY_COUNT = 3
        // when
        new CheckManager(LUCKY_NUMBER, BONUS_NUMBER, TRY_COUNT)

        // then
        const logs = [
            "[1, 2, 3, 4, 5, 6]",
            "[3, 4, 5, 6, 7, 8]",
            "[9, 10, 11, 12, 13, 14]",
        ];

        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });

    test("등수를 똑바로 체크하는지 테스트합니다.", async () => {
        // given
        mockRandoms([
            [1, 2, 3, 4, 5, 6],
            [3, 4, 5, 6, 7, 8],
            [9, 10, 11, 12, 13, 14],
        ]);

        const LUCKY_NUMBER = [1, 2, 3, 4, 5, 6]
        const BONUS_NUMBER = 7
        const TRY_COUNT = 3
        // when
        const checkManager = new CheckManager(LUCKY_NUMBER, BONUS_NUMBER, TRY_COUNT)
        const ranks = checkManager.getRanks()

        expect(ranks).toStrictEqual([1, 4, 8]);
    });
})