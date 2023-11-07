describe("로또 티켓 클래스에 대한 단위 테스트", () => {
	test("티켓이 구매 가능한 갯수 만큼 로또 줄이 작성되는가?", async () => {
		await ticketMachine.buyTicket();
		expect(ticket.length).toBe(expectedAnswer[i]);
	});

	test("티켓의 각 줄은 Lotto 클래스로 구성이 되어 있는가?", async () => {
		await ticketMachine.buyTicket();
		const { ticket } = lottoTicket;

		ticket.forEach((lotto) => {
			expect(lotto instanceof Lotto).toBeTruthy();
		});
	});

	test("티켓의 각 줄의 로또 숫자가 중복되지 않는 고유한 숫자인가?", async () => {
		await ticketMachine.buyTicket();
		const { ticket } = lottoTicket;

		for (let i = 0; i < ticket.length; i += 1) {
			for (let j = i + 1; j < ticket.length; j += 1) {
				expect(
					JSON.stringify(ticket[i].numbers) ===
						JSON.stringify(ticket[j].numbers)
				).toBeFalsy();
			}
		}
	});
});
