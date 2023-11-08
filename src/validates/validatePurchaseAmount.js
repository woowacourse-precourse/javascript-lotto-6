export default function validatePurchaseAmount(purchaseAmount) {
  if (!/^\d+$/.test(purchaseAmount)) {
    throw new Error("[ERROR] 금액을 입력해주세요. 숫자만 입력 가능합니다.");
  }
  
  if (purchaseAmount === 0 || purchaseAmount % 1000 !== 0) {
    throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
  }

  return purchaseAmount;
}