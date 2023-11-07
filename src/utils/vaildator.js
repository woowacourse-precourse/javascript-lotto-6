// 1,000원으로 나누어 떨어지는지
export function isValidAmount(amount){
  if (Number.isNaN(amount)) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  if (amount <= 0) {
    throw new Error("[ERROR] 구입 금액이 음수입니다.");
  }
  
  if(Number(amount) % 1000 !== 0) { 
    throw new Error("[ERROR] 구입 금액이 1,000원으로 나누어 떨어지지 않습니다.");
  }
};

// 숫자 중복 체크
export function isDuplicate(nums){
  if(new Set(nums).size !== nums.length){
    throw new Error("[ERROR] 로또 번호가 중복됩니다.")
  }
};

// 숫자 범위 체크
export function isNumberInRange(nums){
  if(nums.every(num => num < 1 && num > 45)){
    throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.")
  }
};

export function isSixLength(nums){
  if(nums.length !== 6){
    throw new Error("[ERROR] 로또 번호는 6개의 숫자여야 합니다.")
  }
};