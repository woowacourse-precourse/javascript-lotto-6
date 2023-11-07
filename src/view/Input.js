import { MissionUtils } from "@woowacourse/mission-utils";

// 로또 구입 금액 입력
export async function inputAmount(){
  const amount = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
  return Number(amount);
}

// 당첨 번호 입력
export async function inputWinningNum(){
  const winningNums = [];
  const nums = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
  
  nums.split(',').map(num => {
    winningNums.push(num);
  })

  return winningNums;
}

// 보너스 번호 입력
export async function inputBonnusNum(){
  const bonus = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
  return bonus;
}