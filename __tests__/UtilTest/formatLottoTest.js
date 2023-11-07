import { formatLottoNumber } from "../../src/utils/formatLottoNumber";

describe("로또 번호 포맷팅 테스트", () => {
    test("포맷팅 기능 테스트", async () => {
        const input = [25, 42, 1, 13, 22, 19];
        const expectedResult = [1, 13, 19, 22, 25, 42];
        const result = formatLottoNumber(input);
        expect(result).toStrictEqual(expectedResult);
    }
)});
