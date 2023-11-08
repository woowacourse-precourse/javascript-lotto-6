export default function CheckWinning(win, bonus, lotto) {
  const winningList = [0, 0, 0, 0, 0];

  lotto.map((tickets) => {
    let match = 0;
    for (let i = 0; i < 6; i++) {
      if (tickets.includes(win[i])) {
        match += 1;
      }
    }
    if (match === 6) {
      winningList[4] += 1;
    } else if (match === 5 && tickets.includes(bonus)) {
      winningList[3] += 1;
    } else if (match >= 3 && match <= 5) {
      winningList[match % 3] += 1;
    }
  });
  return winningList;
}
