class WinningValid {
    winningIsValid(money) {
        if (money < 0 ){
            throw new Error('[ERROR]'); // 임시
        }
        return true;
    }
}

export default WinningValid;