import {isPurchaseTicketsValid, generateLottoNumbers, printLottoTickets} from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

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

describe("로또 발행 테스트", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    })

    test("구입 금액이 정수가 아니면 예외가 발생한다.", () => {
        const logSpy = getLogSpy();

        const purchaseTickets = "1000d";
        isPurchaseTicketsValid(purchaseTickets);
    
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });

    test("구입 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
        const logSpy = getLogSpy();

        const purchaseTickets = 1500;
        isPurchaseTicketsValid(purchaseTickets);
    
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });

    test("구입 금액에 따라 로또 발행 장수를 출력한다.", () => {
        const logSpy = getLogSpy();

        const purchaseTickets = 8000;
        printLottoTickets(purchaseTickets);
    
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("8개를 구매했습니다."));
    });
    
    test("로또 장수에 따라 6개의 로또 번호들을 출력한다.", () => {
        const logSpy = getLogSpy();

        mockRandoms([
            [8, 21, 23, 41, 42, 43],
            [3, 5, 11, 16, 32, 38],
            [7, 11, 16, 35, 36, 44],
            [1, 8, 11, 31, 41, 42],
            [13, 14, 16, 38, 42, 45],
            [7, 11, 30, 40, 42, 43],
            [2, 13, 22, 32, 38, 45],
            [1, 3, 5, 14, 22, 45],
        ]);

        const logs = [
            "[8, 21, 23, 41, 42, 43]",
            "[3, 5, 11, 16, 32, 38]",
            "[7, 11, 16, 35, 36, 44]",
            "[1, 8, 11, 31, 41, 42]",
            "[13, 14, 16, 38, 42, 45]",
            "[7, 11, 30, 40, 42, 43]",
            "[2, 13, 22, 32, 38, 45]",
            "[1, 3, 5, 14, 22, 45]",
        ];

        const numberOfTickets = 8;
        generateLottoNumbers(numberOfTickets);

        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });
});