# 로또 미션

## 기능 구현 예정 목록

1. View에서 돈 입력 받기
- 마지막 세숫자가 000이 아닌지 valide
- 입력값의 길이가 4이상인지 valide
- 입력값이 인티저 인지 valide
- 입력값이 음수가 아닌지 valide

2. 입력값 Model에 저장 
- View에서 입력 받은 돈을 Money Model에 저장 -> Controller
- 로또 갯수를 MyLotto Model에 slice하여 마지막 000 지운 후 형변환 해서 저장 -> Service

3. util에서 Random 모듈을 통한 랜덤 로또 생성 후 MyLotto Model에 저장

4. 출력 #1
- 구매한 로또 갯수 출력
- 랜덤로또 출력

5. 당첨번호 및 보너스 번호 입력 받기
- 번호 하나가 1-45 사이의 숫자인지!! (CommonLottoNum)
- 일반 번호: CommonLottoNum을 사용해 foreach로 valide
- 보너스 번호: CommonLottoNum 그대로 사용하여 valide

6. 입력값 Model에 저장
- 당첨번호 WinNumber Model에 저장 (Controller)

7. util에서 비교할 두개의 Number를 받아와서 
몇개 일치하는지 myLotto Model에 저장

8. Constant: {당첨 갯수, 당첨 금액} 

9. Money Model에서 Constant 가져와서
당첨 금액 확인(당첨금액 선정 util 함수)

10. Money Model에서 수익률 계산

11. 전부 출력 #2
