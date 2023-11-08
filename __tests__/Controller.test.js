import Controller from "../src/Controller.js";
import Lotto from "../src/Lotto.js";

describe("compare", () => {
    test("당첨 번호 비교 결과", () => {
        const result = Controller.compare(
            new Lotto([1, 2, 3, 4, 5, 6]),
            new Lotto([1, 2, 3, 7, 8, 9]),
            10
        );
        expect(result).toBe(3);
    });

    test("5개 일치하고 보너스번호 일치하면 'b5'반환", () => {
        const result = Controller.compare(
            new Lotto([1, 2, 3, 4, 5, 6]),
            new Lotto([1, 2, 3, 4, 5, 9]),
            6
        );
        expect(result).toBe("b5");
    });
});
