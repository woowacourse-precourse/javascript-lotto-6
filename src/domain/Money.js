export class Money {
    /**
     * @type {number}
     */
    #money;

    constructor(money) {
        this.#validate(money);
        this.#money = money;
    }

    #validate(money) {
        //1000원으로 나누어떨어지지 않을 경우
        if (money % 1000 !== 0) {
            throw new Error("[ERROR] 구매 금액은 1000원 단위로 입력되어야합니다.");
        }
    }

    /**
     * @description - 구매 금액을 받아 몇장의 로또를 살건지 계산해주는 로직
     * @return {number}
     */
    moneyToAmount(money) {
        return (money / 1000);
    }
}