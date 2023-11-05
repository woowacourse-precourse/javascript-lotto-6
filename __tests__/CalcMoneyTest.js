import CalcMoney from "../src/Model/CalcMoney.js"
import { MONEY } from "../constants/index.js";
describe("CalcMoney 클래스 테스트", () => {
    let calcMoney;
    beforeEach(() => {
        calcMoney = new CalcMoney();
    })
    
    test("수익금 테스트", () => {
        const matches = {
            three: 1, 
            four: 1, 
            five: 0, 
            bonus: 1, 
            six: 1
        }
        const returnMoney = calcMoney.calcReturnMoney(matches);
        expect(returnMoney).toBe(MONEY.THREE + MONEY.FOUR + MONEY.BONUS + MONEY.SIX); 
    });

    test("수익률 테스트", () => {
        const returnMoney = 50000;
        const payMoney = 5000;
        const returnRate = calcMoney.calcReturnRate(returnMoney,payMoney);
        expect(returnRate).toBe(1000.0);
    })
});
