//setTimeout : n밀리초 뒤에 함수실행
//setInterval : n밀리초마다 함수실행

const getRandomNum = () => Math.floor(Math.random() * 45) + 1;

const recommend = () => {
  // 1~45사이의 겹치지 않는 랜덤 숫자 6개
  const numberList = [];
  let randomNum;

  for (let i = 0; i < 6; i++) {
    // random 0 ~ 0.9999999... 사이의 숫자가 나오므로 마지막에 +1
    randomNum = getRandomNum();

    //랜덤생성된 숫자가 배열에 있으면 다시 생성
    //includes() 배열에 특정 요소가 있다면 true
    while (numberList.includes(randomNum)) {
      randomNum = getRandomNum();
    }

    numberList.push(randomNum);
  }

  const $lottoNumberList = document.querySelectorAll(".lotto-number");

  //오름차순 정렬
  numberList.sort((a, b) => a - b);

  for (let i = 0; i < $lottoNumberList.length; i++) {
    $lottoNumberList[i].innerText = numberList[i];

    let color = null;
    //테두리에 10 단위로 구분하여 색 넣기
    switch (Math.floor(numberList[i] / 10)) {
      case 1:
        color = "blue";
        break;
      case 2:
        color = "coral";
        break;
      case 3:
        color = "gray";
        break;
      case 4:
        color = "green";
        break;
      default:
        color = "yellow";
        break;
    }
    $lottoNumberList[i].classList = "lotto-number";
    $lottoNumberList[i].classList.add(color);
  }

  const listNode = document.createElement("li");
  //listNode.innerText = numberList;
  document.querySelector("#listContainer").append(listNode);
};

document.querySelector(".resetButton").addEventListener("click", recommend);

//처음 열었을 때나 새로고침(F5)했을 때 바로 실행하고 싶을때
recommend();
