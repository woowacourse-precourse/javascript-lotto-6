import { Console, MissionUtils } from "@woowacourse/mission-utils"

const MAX_LOTTO_NUMBER_LENGTH = 6;

export default class View {
    constructor() {
        this.lottoNumbers = new Array();
    }

    //input 데이터가 number이여야 하기 때문에 함수 이름에 Number로 명시
    async inputNumber(inputGuide) {
        const inputData = await Console.readLineAsync(inputGuide);
        return Number(inputData);
    }

    async inputWinningNumber(inputGuide) {
        let inputData = await Console.readLineAsync(inputGuide);
        inputData = inputData.split(",");
        inputData.forEach((element, index) => {
            inputData[index] = Number(element);
        });
        return inputData;
    }

    print(message) {
        Console.print(message);
    }
    // 로또 번호 중복검사
    isDuplicationNumber(number) {
        return this.lottoNumbers.includes(number);
    }

    sortLottoNumber() {
        this.lottoNumbers.sort((a, b) => a - b);
    }

    makeLottoNumber() {
        this.lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, MAX_LOTTO_NUMBER_LENGTH);
        this.sortLottoNumber();
        return this.lottoNumbers;
    }

}