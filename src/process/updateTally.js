function updateTally(tally, match, bonusMatch) {
  if (match === 6) {
    tally.match6 += 1;
  } else if (match === 5 && bonusMatch === 1) {
    tally.match5PlusBonus += 1;
  } else if (match === 5) {
    tally.match5 += 1;
  } else if (match === 4) {
    tally.match4 += 1;
  } else if (match === 3) {
    tally.match3 += 1;
  }

  return tally;
}

export default updateTally;
