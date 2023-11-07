import { MissionUtils } from "@woowacourse/mission-utils";

export function tooLongErrorMessage(){
    throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
}

export function notNumberErrorMessage(){
    throw new Error("[ERROR] 숫자가 아닌 값이 존재합니다.");
}

export function duplicateErrorMessage(){
    throw new Error("[ERROR] 중복된 값이 존재합니다");
}

export function notInRangeMessage(){
    throw new Error("[ERROR] 당첨 번호의 범위는 1~45 입니다.");
}

export function notDivisionMessage(){
    throw new Error("[ERROR] 구입 금액이 1000의 배수가 아닙니다"); 
}

export function nullErrorMessage(){
    throw new Error("[ERROR] 아무것도 입력하지 않았습니다");
}

export function moneyErrorPrint(){
    MissionUtils.Console.print("[ERROR] 구입 금액이 이상합니다");
}

export function bonusErrorPrint(){
    MissionUtils.Console.print("[ERROR] 보너스 숫자가 이상합니다");
}

export function winningErrorPrint(){
    MissionUtils.Console.print("[ERROR] 당첨 숫자가 이상합니다");
}