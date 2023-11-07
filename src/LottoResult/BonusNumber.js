import { MissionUtils } from "@woowacourse/mission-utils";

export class BonusNumber {
    constructor(winNumbers) {
        this.winNumbers = winNumbers;
    }

    async bonusNumber() {
        let bonusInput = '';
        while(true) {
            bonusInput = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
            bonusInput = Number(bonusInput);

            if(bonusInput < 1 || bonusInput > 45){
                MissionUtils.Console.print("[ERROR] 입력 값은 1~45 까지의 숫자입니다");
                continue;
            }
            else if(this.winNumbers.includes(bonusInput)){
                MissionUtils.Console.print("[ERROR] 보너스 번호가 당첨 번호와 중복됩니다.");
                continue;
            }
            break;
        }
        return bonusInput;
    }
}
