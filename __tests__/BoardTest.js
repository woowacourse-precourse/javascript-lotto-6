import {MissionUtils} from "@woowacourse/mission-utils";
import Board from "../src/Board.js";

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe("출력문 테스트", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    })

    test("결과를 똑바로 출력하는지 확인합니다. (1)", async () => {
        // given
        const logSpy = getLogSpy();

        const resultBoard = new Board()
        // when
        resultBoard.printResult([1,3,4,5,3,4,6,7])
        resultBoard.printRevenue([1,3,4,5,3,4,6,7])

        // then
        const logs = [
            "당첨 통계",
            "---",
            "6개 일치 (2,000,000,000원) - 1개",
            "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
            "5개 일치 (1,500,000원) - 2개",
            "4개 일치 (50,000원) - 2개",
            "3개 일치 (5,000원) - 1개",
            "총 수익률은 25038812.5%입니다."
        ];

        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });

    test("결과를 똑바로 출력하는지 확인합니다. (2)", async () => {
        // given
        const logSpy = getLogSpy();

        // when

        const resultBoard = new Board()

        resultBoard.printResult([5,5,4,3,5,6,6,7])
        resultBoard.printRevenue([5,5,4,3,5,6,6,7])

        // then
        const logs = [
            "당첨 통계",
            "---",
            "6개 일치 (2,000,000,000원) - 0개",
            "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
            "5개 일치 (1,500,000원) - 1개",
            "4개 일치 (50,000원) - 1개",
            "3개 일치 (5,000원) - 3개",
            "총 수익률은 19562.5%입니다."
        ];

        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });
})