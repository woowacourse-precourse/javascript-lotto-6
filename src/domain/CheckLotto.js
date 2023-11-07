export default function isWinningLotto(win, bonus, lotto) {
  const winningCase = [0, 0, 0, 0, 0];
  lotto.map((lotto) => {
    let count = 0;
    for (let i = 0; i < 6; i++) {
      if (win.includes(lotto[i])) {
        count += 1;
      }
    }
    if (count === 6) {
      winningCase[4] += 1;
    }
    if (count === 5 && lotto.includes(bonus)) {
      winningCase[3] += 1;
    }
    if (count === 5 && !lotto.includes(bonus)) {
      winningCase[2] += 1;
    }
    if (count === 4) {
      winningCase[1] += 1;
    }
    if (count === 3) {
      winningCase[0] += 1;
    }
  });
  return winningCase;
}
