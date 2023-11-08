export const earningRate = (sum, price) =>
  +((sum / price) * 100).toFixed(1).toLocaleString("ko-KR");
