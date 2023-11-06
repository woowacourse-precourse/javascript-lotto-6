import { Console } from "@woowacourse/mission-utils";
import { Computer } from "../src/Computer.js";

let computer;
const getLogSpy = () => {
    const spy = jest.spyOn(Console, "print");
    spy.mockClear();
    return spy
}

describe("컴퓨터 클래스 테스트", ()=>{
    test("구매 금액 만큼 로또 발행", ()=>{
        const money = 5000;
        const count = money / 1000
        computer = new Computer(count);

        computer.makeLottos();

        expect(computer.getLottos().length).toBe(count)
    })



    test("발행한 로또 수량 및 로또 번호 오름차순 출력",()=>{
        const logSpy = getLogSpy();
        const money = 3000;
        const count = money / 1000;
        computer = new Computer(count);

        const getRandomNumbersSpy = jest.spyOn(computer, "getRandomNumbers")

        getRandomNumbersSpy
        .mockReturnValueOnce([6,5,4,3,2,1])
        .mockReturnValueOnce([45,30,1,2,4,20])
        .mockReturnValueOnce([4,3,45,2,10,1])

        computer.makeLottos();
        computer.printLottos();

        const logs = [`${count}개를 구매했습니다.`,"[1, 2, 3, 4, 5, 6]","[1, 2, 4, 20, 30, 45]", "[1, 2, 3, 4, 10, 45]" ]


        logs.forEach(log=> {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log))
        })
    })
})