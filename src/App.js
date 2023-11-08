class App {
  async play() {}
}
    try {
      const numberOfTickets = Math.floor(amount / 1000);
      if (amount < 1000 || amount % 1000 !== 0) {
        throw new Error('[ERROR] 구입 금액은 1,000원 단위로만 입력 가능합니다.');
      }

      const generateLottoNumbers = () => {
        const numbers = Array.from({ length: 45 }, (_, i) => i + 1);
        const lottoNumbers = [];
        for (let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * numbers.length);
          const number = numbers.splice(randomIndex, 1)[0];
          lottoNumbers.push(number);
        }
        return lottoNumbers;
      };

      const userLottoTickets = [];
      for (let i = 0; i < numberOfTickets; i++) {
        userLottoTickets.push(generateLottoNumbers());
      }

      console.log('\nUser Lotto Tickets:');
      userLottoTickets.forEach((ticket, index) => {
        console.log(`Ticket ${index + 1}: ${ticket.join(', ')}`);
      });

      console.log('\nWinning Numbers:', winningNumbers.join(', '));
      console.log('Bonus Number:', bonusNumber);

      const checkLottoResult = (userNumbers, winningNumbers, bonusNumber) => {
        const matchingNumbers = userNumbers.filter(num => winningNumbers.includes(num));
        const bonusMatch = userNumbers.includes(bonusNumber);
       
      let prizeCounts = [0, 0, 0, 0, 0, 0];
      for (const ticket of userLottoTickets) {
        const prize = checkLottoResult(ticket, winningNumbers, bonusNumber);
        prizeCounts[prize]++;
      }

      console.log('\nPrize Distribution:');
      console.log('1st Prize (6 numbers matched):', prizeCounts[1]);
      console.log('2nd Prize (5 numbers + bonus matched):', prizeCounts[2]);
      console.log('3rd Prize (5 numbers matched):', prizeCounts[3]);
      console.log('4th Prize (4 numbers matched):', prizeCounts[4]);
      console.log('5th Prize (3 numbers matched):', prizeCounts[5]);

      const totalPrizeAmount =
        prizeCounts[1] * 2000000000 +
        prizeCounts[2] * 30000000 +
        prizeCounts[3] * 1500000 +
        prizeCounts[4] * 50000 +
        prizeCounts[5] * 5000;
      console.log('\nTotal Prize Amount: KRW', totalPrizeAmount);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default App;
