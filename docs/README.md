# 로또

## 구현할 기능 목록

- 구매한 로또의 갯수와 로또 번호를 저장하고 처리하는 LottoData 클래스
  - [x]inputPurchaseAmount : 구입 금액 입력
    - [ ]예외처리
  - [x]pickRandomLotto : 무작위로 로또 번호 뽑기
  - [x]getLottoData : 로또 배열 반환
  - [x]getLottoCount : 로또 횟수 반환
  - [x]printLottoData : 로또 배열 출력
  - [x]printLottoCount : 로또 횟수 출력
- 당첨 번호와 보너스 번호를 입력받고 저장하는 WinNumber 클래스
  - [x]inputWinNumber : 당첨 번호 입력
    - [ ]예외처리
  - [x]inputBonusNumber : 보너스 번호 입력
    - [ ]예외처리
  - [x]getWinNumber : 당첨 번호 반환
  - [x]getBonusNumber : 보너스 번호 반환
- 상수들을 저장하는 Constant 클래스
  - [x]INPUT : 입력 메시지
  - [x]OUTPUT : 출력 메시지
  - [x]OPTION : 로또 번호의 범위, 개수 등
  - [ ]ERROR : 에러 메시지
  - [x]MATCH : 맞춘 로또 번호
- 로또 번호를 비교하는 Lotto 클래스
  - [x]checkLottoNumbers
- 결과를 저장하고 출력하는 Result 클래스
  - [x]printStaticsMessage
  - [x]countMatchingNumbers
  - [x]printResult
  - [x]getWinningAmount
  - [x]printRateOfReturn
- 로또를 실행하는 App 클래스

## 추가로 고려할 사항

- [x]클래스(객체)를 분리하는 연습
- [ ]도메인 로직에 대한 단위테스트 작성하는 연습
- [x]값을 하드코딩 하지 않고 상수 쓰기
- [x]변수, 함수명 명확하게
- [ ]for 대신 forEach 사용하기
- [x]README.md 상세히 작성
- [ ]구현해야 할 기능과 예외적인 상황 기능 목록에 정리하고 기능 목록 업데이트하기
- [ ]구현 순서 신경쓰기
- [ ]한 함수가 한가지 기능만 담당하도록
- [ ]객체를 만드는 다양한 방법 이해하고 사용하기
- [ ]테스트를 작성하는 이유에 대해 경험을 토대로 정리
- [ ]테스트는 작은 단위부터

## 2주차 코드리뷰에서 받은 피드백

- [x]상수의 객체명을 파스칼케이스로, key명을 소문자 스네이크케이스로
- [x]상수를 각각 export
- [ ]고차함수 사용
- [ ]인덱스로 참조하지 않고 각자 멤버변수로 관리하거나 key를 통해 참조
- [ ]주석달기
- [ ]예외처리 더 생각해보기 (입력값이 소수인 경우 등등..)
