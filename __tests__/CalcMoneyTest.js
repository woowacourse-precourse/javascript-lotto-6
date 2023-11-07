import CalcMoney from "../src/Model/CalcMoney.js"
import { MONEY } from "../constants/index.js";
describe("CalcMoney 클래스 테스트", () => {
    let calcMoney;
    beforeEach(() => {
        calcMoney = new CalcMoney();
    })
    
    test("수익금 테스트", () => {
        const matches = {
            "3": 1, 
            "4": 1, 
            "5": 0, 
            "5b": 1, 
            "6": 1
        }
        const returnMoney = calcMoney.calcReturnMoney(matches);
        expect(returnMoney).toBe(MONEY["3"] + MONEY["4"] + MONEY["5b"] + MONEY["6"]); 
    });

    test("수익률 테스트", () => {
        const returnMoney = 50000;
        const payMoney = 5000;
        const returnRate = calcMoney.calcReturnRate(returnMoney,payMoney);
        expect(returnRate).toBe(1000.0);
    })
});
