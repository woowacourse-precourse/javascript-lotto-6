// 1,000원으로 나누어 떨어지는지
export function isValidAmount(amount){
  if(amount % 1000 === 0) { 
    return;
  }
  throw new Error("[ERROR] 1,000원으로 나누어 떨어지지 않습니다");
}

// 숫자 중복 체크
export function isDuplicate(nums){
  if(new Set(nums).size === nums.length){
    return;
  }
  throw new Error("[ERROR] 숫자가 중복됩니다.")
}