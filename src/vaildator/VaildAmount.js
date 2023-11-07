// 예외: 1,000원으로 나누어 떨어지는지
export function validAmount(amount){
  if(amount % 1000 === 0) { 
    return;
  }
  throw new Error("[ERROR] 1,000원으로 나누어 떨어지지 않습니다");
}