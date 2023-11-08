import { Console, Random } from "@woowacourse/mission-utils";
import { Lottos } from "../src/Lottos.js";
import { generateRandomNumbers } from "../src/utils/generateRandomNumbers.js";

jest.mock("../src/utils/generateRandomNumbers",()=>({
    generateRandomNumbers : jest.fn()
}));

let lottos;
let count;
let money;

const mockGenerateRandomNumbers = (randomNumbers)=>{
    randomNumbers.forEach((numbers)=>generateRandomNumbers.mockReturnValueOnce(numbers))
}

const initializeLottosInstances = ()=>{
    money = 5000;
    count = money / 1000;
        
    mockGenerateRandomNumbers([
        [6,5,4,3,2,1],
        [45,30,1,2,4,20],
        [4,3,45,2,10,1],
        [6,7,4,25,1,2],
        [41,42,1,8,9,32]
    ])

    lottos = new Lottos(count);

    generateRandomNumbers.mockClear();
}

beforeEach(()=>{
    initializeLottosInstances();
})

const getLogSpy = () => {
    const spy = jest.spyOn(Console, "print");
    spy.mockClear();
    return spy
}

describe("n 개의 로또 클래스 테스트", ()=>{
    test("구매 금액 만큼 로또 발행", ()=>{
        expect(lottos.get().length).toBe(count);
    })

    test("발행한 로또 수량 및 로또 번호 오름차순 출력",()=>{
        const logSpy = getLogSpy();
        
        lottos.print();

        const logs = [
            `${count}개를 구매했습니다.`,
            "[1, 2, 3, 4, 5, 6]",
            "[1, 2, 4, 20, 30, 45]", 
            "[1, 2, 3, 4, 10, 45]",
            "[1, 2, 4, 6, 7, 25]",
            "[1, 8, 9, 32, 41, 42]"
        ]

        logs.forEach(log=> {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log))
        })
    })
})