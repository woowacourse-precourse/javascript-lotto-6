import User from "../src/User.js";

describe("유저 클래스 테스트", () => {
    test("유저가 가지고 있는 돈이 천의 단위가 아니면 에러가 발생한다.", () => {
        const user = new User();
        expect(() => user.setUserMoney(7200)).toThrow("[ERROR]");
    })

    test("유저가 가지고 있는 돈이 천의 단위라면 에러가 발생하지 않는다..", () => {
        const user = new User();
        user.setUserMoney(7000);
    })

    test("유저가 가지고 있는 돈만큼 정확한 시도 횟수를 발급받을 수 있다.",()=>{
        const user = new User();
        user.setUserMoney(7000);
        expect(user.getCount()).toBe(7);
    })
})
;
