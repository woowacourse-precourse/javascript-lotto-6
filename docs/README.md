# 📝 로또

1부터 45 사이의 서로 다른 숫자 6개를 뽑아 3개 이상 당첨 번호와 같으면 당첨되는 게임이다.

## 📌 조건

- 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)
- 사용자가 잘못된 값을 입력할 경우 `throw`문을 사용해 예외를 발생시킨다. 그런 다음, "[ERROR]"로 시작하는 에러 메시지를 출력하고 해당 부분부터 입력을 다시 받는다.

## 🌲 폴더 구조

📦`__tests__`  
┣ 📜ApplicationTest.js  
┣ 📜LottoTest.js  
┣ 📜priceTest.js  
┗ 📜winningBonusTest.js  
📦constants  
┗ 📜constants.js  
📦docs  
┗ 📜README.md  
📦src  
┣ 📜App.js  
┣ 📜index.js  
┣ 📜Lotto.js  
┣ 📜LottoGame.js  
┣ 📜Player.js  
┗ 📜WinningBonus.js

## ✨ 기능 구현 목록

<table>
  <thead>
    <th>객체명</th>
    <th>책임</th>
    <th>기능</th>
    <th>데이터</th>
  </thead>
  <tbody>
    <tr>
      <td><b>Player 객체<b/></td>
      <td>- 로또 구입 금액 입력</td>
      <td>- [x] 로또 구입 금액 입력<br/>- [x] 구입 금액 예외 처리<br/>　- [x] [ERROR] 구입 금액은 숫자로 입력해주세요.<br/>　- [x] [ERROR] 구입 금액은 1000원 단위로 입력해주세요.</td>
      <td>- 구입 금액</td>
    </tr>
    <tr>
      <td><b>Lotto 객체<b/></td>
      <td>- 로또 번호 출력</td>
      <td>- [x] 로또 번호, 당첨 번호 예외 처리<br/>　- [x] [ERROR] 로또 번호는 6개로 입력해주세요.<br/>　- [x] [ERROR] 로또 번호는 숫자로 입력해주세요.<br/>　- [x] [ERROR] 로또 번호는 정수로 입력해주세요.<br/>　- [x] [ERROR] 로또 번호는 1부터 45 사이의 숫자로 입력해주세요.<br/>　- [x] [ERROR] 로또 번호는 중복된 숫자 없이 입력해주세요.<br/>- [x] 로또 번호 오름차순 정렬<br/>- [x] 로또 번호 반환</td>
      <td>- 로또 번호 배열</td>
    </tr>
    <tr>
      <td><b>WinningBonus 객체<b/></td>
      <td>- 당첨 번호 입력<br/>- 보너스 번호 입력</td>
      <td>- [x] 당첨 번호 입력<br/>- [x] 보너스 번호 입력<br/>- [x] 당첨 번호, 보너스 번호 예외 처리<br/>　- [x] [ERROR] 보너스 번호는 숫자로 입력해주세요.<br/>　- [x] [ERROR] 보너스 번호는 정수로 입력해주세요.<br/>　- [x] [ERROR] 보너스 번호는 1부터 45 사이의 숫자로<br/> 입력해주세요.<br/>　- [x] [ERROR] 보너스 번호와 당첨 번호 간 중복된 숫자<br/> 없이 입력해주세요.</td>
      <td>- 당첨 번호 배열<br/>- 보너스 번호</td>
    </tr>
    <tr>
      <td><b>LottoGame 객체<b/></td>
      <td>- 당첨 통계 출력<br/>- 로또 게임 컨트롤러</td>
      <td>- [x] 로또 생성 후 로또 배열에 추가<br/>- [x] 무작위 로또 번호 생성<br/>- [x] 당첨 통계 계산 후 출력<br/>- [x] 총 수익률 계산 후 출력</td>
      <td>- 로또 배열<br/>- 당첨 통계 배열</td>
    </tr>
    <tr>
      <td><b>App 객체<b/></td>
      <td>- 로또 게임 실행</td>
      <td>- [x] 로또 게임 실행<br/> - [x] 에러 메시지 출력</td>
      <td></td>
    </tr>
  </tbody>
</table>
