// 기능3 보너스 번호의 예외조건
export function checkbonus(numbers) {
  if (numbers < 1 || numbers > 45 || isNaN(numbers)) {
    throw new Error('[ERROR] 로또 번호는 1~45사이 정수여야 합니다.');
  }
}
