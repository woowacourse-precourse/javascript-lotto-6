import { MissionUtils } from "@woowacourse/mission-utils";

// 당첨 번호 입력
export async function inputWinningNum(){
  const winningNums = [];
  const nums = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
  
  nums.split(',').map(num => {
    winningNums.push(num);
  })

  return nums;
}

// 보너스 번호 입력
export async function inputBonnusNum(){
  const bonus = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
  return bonus;
}