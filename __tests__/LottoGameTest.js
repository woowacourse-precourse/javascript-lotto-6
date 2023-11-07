import LottoGame from "../src/LottoGame.js";
import IOUtils from "../src/IOUtils.js";

describe("로또 게임 클래스 테스트", () => {
    test("당첨 번호는 6개여야 합니다.", async () => {
        const mockInput = jest.spyOn(IOUtils, "input");
        mockInput.mockResolvedValueOnce("1,2,3,4,5");
        const lottoGame = new LottoGame();
        await expect(lottoGame.inputWinningNumbers()).rejects.toThrow("[ERROR]");
    })

    test("당첨 번호에 중복된 번호가 있으면 에러를 던져야 합니다.", async () => {
        const mockInput = jest.spyOn(IOUtils, "input");
        mockInput.mockResolvedValueOnce("1,2,3,4,5,5");
        const lottoGame = new LottoGame();
        await expect(lottoGame.inputWinningNumbers()).rejects.toThrow("[ERROR]");
    })

    test("당첨 번호는 숫자여야 합니다.", async () => {
        const mockInput = jest.spyOn(IOUtils, "input");
        mockInput.mockResolvedValueOnce("1,2,3,4,5,a");
        const lottoGame = new LottoGame();
        await expect(lottoGame.inputWinningNumbers()).rejects.toThrow("[ERROR]");
    })

    test("당첨 번호는 1과 45 사이여야 합니다.", async () => {
        const mockInput = jest.spyOn(IOUtils, "input");
        mockInput.mockResolvedValueOnce("1,2,3,4,5,46");
        const lottoGame = new LottoGame();
        await expect(lottoGame.inputWinningNumbers()).rejects.toThrow("[ERROR]");
    })

    test("보너스 번호는 숫자여야 합니다.", async () => {
        const mockInput = jest.spyOn(IOUtils, "input");
        mockInput.mockResolvedValueOnce("a");
        const lottoGame = new LottoGame();
        await expect(lottoGame.inputBonusNumber()).rejects.toThrow("[ERROR]");
    })

    test("보너스 번호는 1과 45 사이여야 합니다.", async () => {
        const mockInput = jest.spyOn(IOUtils, "input");
        mockInput.mockResolvedValueOnce("46");
        const lottoGame = new LottoGame();
        await expect(lottoGame.inputBonusNumber()).rejects.toThrow("[ERROR]");
    })

    test("보너스 번호는 당첨 번호와 중복될 수 없습니다.", async () => {
        const mockInput = jest.spyOn(IOUtils, "input");
        mockInput.mockResolvedValueOnce("1,2,3,4,5,6");
        const lottoGame = new LottoGame();
        await lottoGame.inputWinningNumbers();
        mockInput.mockResolvedValueOnce("6");
        await expect(lottoGame.inputBonusNumber()).rejects.toThrow("[ERROR]");
    })


})