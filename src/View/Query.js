class Query {
  static async getPurchaseAmount() {
    try {
      const purchaseAmount = await Console.readLineAsync(
        '구입금액을 입력해 주세요.\n'
      );
    } catch (error) {
      throw new Error('ERROR')
    }
  }
}
export default Query