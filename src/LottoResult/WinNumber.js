import { MissionUtils } from "@woowacourse/mission-utils";

export class WinNumber {
    async winnumber() {
        let winnum = [];
        while(winnum.length !== 6) {
            const winnumInput = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해주세요.\n");
            winnum = winnumInput.split(',').map(num => Number(num.trim()));
            if(winnum.some(num => num < 1 || num > 45)){
                MissionUtils.Console.print("[ERROR] 입력 값은 1~45 까지의 숫자입니다");
                winnum = [];
                continue;
            }
            else if(winnum.length !== 6 ){
                MissionUtils.Console.print("[ERROR] 입력 값은 6개의 숫자입니다.");
                winnum = [];
                continue;
            }
            const deferentNum = new Set(winnum);
            if(deferentNum.size !== winnum.length){
                MissionUtils.Console.print("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
                winnum = [];
            }
        }
        return winnum;
    }
}
