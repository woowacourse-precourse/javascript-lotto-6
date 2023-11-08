
  countPrizes(lottos) {
    const givenPrizes = lottos.map((lotto) => this.findPrize(lotto));

    const receivedPrizes = this.#PRIZES.map((prize) => {
      const totalCnt = givenPrizes.reduce(
        (cnt, givenPrize) => (givenPrize === prize ? cnt + 1 : cnt),
        0
      );
      return { prize, cnt: totalCnt };
    });

    return receivedPrizes;
  }