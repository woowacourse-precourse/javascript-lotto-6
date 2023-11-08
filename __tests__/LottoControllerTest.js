import LottoController from '../src/LottoController.js';
import { MissionUtils } from "@woowacourse/mission-utils";

describe('LottoController', () => {
    let lottoController;
    let mockConsoleReadLineAsync;
    let mockConsolePrint;

    beforeEach(() => {
        mockConsoleReadLineAsync = jest.spyOn(MissionUtils.Console, 'readLineAsync');
        mockConsolePrint = jest.spyOn(MissionUtils.Console, 'print').mockImplementation();
        lottoController = new LottoController();
    });

    afterEach(() => {
        mockConsoleReadLineAsync.mockRestore();
        mockConsolePrint.mockRestore();
    });

    describe('buyLottoTickets', () => {
        it('입력이 유효한 경우 구매 금액을 반환해야 합니다.', async () => {
            mockConsoleReadLineAsync.mockResolvedValue('5000');

            const purchaseAmount = await lottoController.buyLottoTickets();

            expect(purchaseAmount).toBe(5000);
            expect(mockConsolePrint).not.toHaveBeenCalledWith(expect.stringContaining('ERROR'));
        });

        it('잘못된 입력을 예외 처리하고 오류 메시지를 출력해야 합니다.', async () => {
            mockConsoleReadLineAsync.mockResolvedValue('invalid_input');

            const purchaseAmount = await lottoController.buyLottoTickets();

            expect(purchaseAmount).toBeUndefined();
            expect(mockConsolePrint).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
        });
    });

    describe('inputWinningNumbers', () => {
        it('입력이 유효한 경우 winningNumbers를 반환해야 합니다.', async () => {
            mockConsoleReadLineAsync.mockResolvedValue('1,2,3,4,5,6');

            const winningNumbers = await lottoController.inputWinningNumbers();

            expect(winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
            expect(mockConsolePrint).not.toHaveBeenCalledWith(expect.stringContaining('ERROR'));
        });

        it('잘못된 입력을 예외 처리하고 오류 메시지를 출력해야 합니다.', async () => {
            mockConsoleReadLineAsync.mockResolvedValue('invalid_input');

            const winningNumbers = await lottoController.inputWinningNumbers();

            expect(winningNumbers).toBeUndefined();
            expect(mockConsolePrint).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
        });
    });

    describe('inputBonusNumber', () => {
        it('입력이 유효한 경우 bonusNumber를 반환해야 합니다.', async () => {
            mockConsoleReadLineAsync.mockResolvedValue('7');

            const bonusNumber = await lottoController.inputBonusNumber();

            expect(bonusNumber).toBe(7);
            expect(mockConsolePrint).not.toHaveBeenCalledWith(expect.stringContaining('ERROR'));
        });

        it('잘못된 입력을 예외 처리하고 오류 메시지를 출력해야 합니다.', async () => {
            mockConsoleReadLineAsync.mockResolvedValue('invalid_input');

            const bonusNumber = await lottoController.inputBonusNumber();

            expect(bonusNumber).toBeUndefined();
            expect(mockConsolePrint).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
        });
    });
});
