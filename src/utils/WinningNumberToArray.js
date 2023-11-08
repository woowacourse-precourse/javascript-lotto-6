function winningNumberToArray(winningNumber) {
    const winningNumberArray = winningNumber.split(/\s*,\s*/).map(Number);
    return winningNumberArray;
}

export default winningNumberToArray;