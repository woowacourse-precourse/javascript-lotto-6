import { Console } from "@woowacourse/mission-utils"

export default class View {
    //input 데이터가 number이여야 하기 때문에 함수 이름에 Number로 명시
    async inputNumber(inputGuide) {
        const inputData = await Console.readLineAsync(inputGuide);
        return Number(inputData)
    }
    print(message) {
        Console.print(message)
    }
}