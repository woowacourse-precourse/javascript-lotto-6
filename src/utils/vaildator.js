import { MissionUtils } from "@woowacourse/mission-utils";

// 1,000원으로 나누어 떨어지는지
export function isValidAmount(amount){
  if(amount % 1000 === 0) { 
    return;
  }
  throw new Error("[ERROR] 1,000원으로 나누어 떨어지지 않습니다");
}

// 숫자 중복 체크
export function isDuplicate(nums){
  MissionUtils.Console.print(nums.length)
  if(new Set(nums).size === nums.length){
    return;
  }
  throw new Error("[ERROR] 로또 번호가 중복됩니다.")
}

// 숫자 범위 체크
export function isNumberInRange(numbers){
  if(numbers.every(num => num >= 1 && num <= 45)){
    return;
  }
  throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.")
}