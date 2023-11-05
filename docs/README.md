함수형

구현해야할 기능
- [x] 구입 금액 입력
  - [x] 양의 정수 확인
  - [x] 1000단위 숫자인지 확인
  - [x] 잘못된 입력 시 다시 입력 받기

- [x] 구매한 만큼 랜덤으로 로또 번호 생성
- [x] 생성한 번호 출력

- [x] 당첨번호 입력
  - [x] ,로 구분되는 문자열이 6개인지 확인
  - [x] ,로 구분된 문자열이 양의 정수인지 확인
  - [x] 구분된 숫자가 1에서 45사이의 값인지 확인
  - [x] 구분된 숫자 안에 중복 숫자가 있는지 확인
  - [x] 잘못된 입력 시 다시 입력 받기
- [x] 보너스 번호 입력
  - [x] 양의 정수 확인
  - [x] 당첨번호와 중복되었는지 확인
  - [x] 보너스 번호가 1에서 45사이의 값인지 확인
  - [x] 잘못된 입력 시 다시 입력 받기

- [x] 당첨 여부 확인
- [x] 당첨 출력

- [x] 수익률 계산

- [x] 수익률 출력

---

mvc 패턴(예외사항은 함수형과 같게 처리했으므로, 구현 기능에 포함 X)

- [x] model
  - [x] 수에 맞게 purchasedLottoArray 랜덤으로 채워넣기
  - [x] 입력한 값에 맞게 lottoBoard 만들기
  - [x] purchasedLottoArray와 lottoBoard에 맞는 lottoResult 값 생성 
- [x] view
  - [x] input
    - [x] 로또 구입 금액 입력
    - [x] 당첨번호 입력
    - [x] 보너스 번호 입력
  - [x] output
    - [x] 발행한 로또 수량 및 번호 출력
    - [x] 당첨통계 출력
    - [x] 수익률 출력
    - [x] 예외상황 출력
- [x] controller
  - [x] input view로부터 구매번호 입력 받아오기
    - [x] 구매 금액이 예외 상황이면 다시 받기
  - [x] 구입 금액에 맞춰 model의 purchasedLottoArray 업데이트
  - [x] 업데이트 한 purchasedLottoArray를 output view로 출력 지시
  
  - [x] model의 lottoBoard 업데이트
    - [x] input view로부터 당첨번호 입력 받아오기
      - [x] 당첨 번호 예외 상황이면 에러 출력 후 다시 받기
    - [x] input view로부터 보너스 번호 입력 받아오기
      - [x] 보너스 번호 예외 상황이면 에러 출력 후 다시 받기
  
  - [x] model의 lottoResult로 당첨통계 output view로 출력 지시

  - [x] model의 lottoResult로 수익률 만들기
  - [x] 만든 수익률로 output view로 출력 지시