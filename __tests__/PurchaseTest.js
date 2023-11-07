import Purchase from '../src/model/Purchase.js';

describe("로또 발행 클래스 테스트", () => {
    let purchase;

    beforeEach(() => {
        purchase = new Purchase(3000);
    })

    test("로또 번호 오름차순 정렬 테스트", () => {
        const array = [25, 1, 36, 23, 2, 7];
        expect(purchase.onSortNumbers(array)).toBe(array.sort((a, b) => a - b));
    });

    test("구매 금액에 따른 로또 발행 개수 테스트", () => {
        expect(purchase.count).toBe(3);
    });
});