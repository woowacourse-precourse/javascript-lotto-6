import LottoMerchant from "../src/LottoMerchant.js";
import IOUtils from "../src/IOUtils.js";

describe("로또 상인 클래스 테스트", () => {
    test("로또 구입 금액이 1000원 미만이면 예외가 발생한다.", async () => {
        const mockInput = jest.spyOn(IOUtils, "input");
        mockInput.mockResolvedValueOnce("999");
        const lottoMerchant = new LottoMerchant();

        await expect(lottoMerchant.getLottoPurchaseAmount()).rejects.toThrow("[ERROR]");
    })

    test("로또 구입 금액이 1000원 단위가 아니면 예외가 발생한다.", async () => {
        const mockInput = jest.spyOn(IOUtils, "input");
        mockInput.mockResolvedValueOnce("1001");
        const lottoMerchant = new LottoMerchant();

        await expect(lottoMerchant.getLottoPurchaseAmount()).rejects.toThrow("[ERROR]");
    })

    test("로또 구입 금액이 숫자가 아니면 예외가 발생한다.", async () => {
        const mockInput = jest.spyOn(IOUtils, "input");
        mockInput.mockResolvedValueOnce("abc");
        const lottoMerchant = new LottoMerchant();

        await expect(lottoMerchant.getLottoPurchaseAmount()).rejects.toThrow("[ERROR]");
    })

    test("금액 만큼 로또를 발급한다.", () => {
        const lottoMerchant = new LottoMerchant();
        const lottoTickets = lottoMerchant.issueLottoTickets(10000);
        expect(lottoTickets.length).toBe(10);
    })

    test("금액을 입력 받고, 금액 만큼 로또를 발급한다.", async () => {
        const mockInput = jest.spyOn(IOUtils, "input");
        mockInput.mockResolvedValueOnce("10000");
        const lottoMerchant = new LottoMerchant();
        const purchaseAmount = await lottoMerchant.getLottoPurchaseAmount();
        const lottoTickets = lottoMerchant.issueLottoTickets(purchaseAmount);
        expect(lottoTickets.length).toBe(10);
    })
})