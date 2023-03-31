// Paste the below in the console and the visit all the questions *once*.
var $0 = document.querySelector("[ng-bind='currentSerailNo']");
var timerContainer = document.querySelector(
  "#parentCtrl > div.maincontainer > div:nth-child(3) > div:nth-child(2) > div.inrmain > div.leftmain > div.quehdng > span.quehdngryt > span:nth-child(4) > div > span.ng-binding"
);
var timeElms = timerContainer.querySelectorAll("strong");
console.log(
  (
    parseInt(timeElms[0].innerHTML) +
    parseInt(timeElms[1].innerHTML) / 60
  ).toFixed(2)
);

var quesNo = $0.innerHTML;
var intvl = setInterval(() => {
  if ($0.innerHTML == quesNo) {
    return;
  }
  timeElms = timerContainer.querySelectorAll("strong");
  console.log(
    (
      parseInt(timeElms[0].innerHTML) +
      parseInt(timeElms[1].innerHTML) / 60
    ).toFixed(2)
  );

  quesNo = $0.innerHTML;
}, 10); // check every 10ms
