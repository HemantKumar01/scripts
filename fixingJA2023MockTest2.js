function showPhysics() {
  var elm = document.querySelector(
    "#quesAnsContent span:nth-child(3) > span > a > img"
  );
  try {
    console.log(elm.src);
    elm.src = elm.src.replace("_CH_Sec", "_PH_Sec");
    console.log(elm.src);
  } catch (err) {
    console.log(err);
  }
}
setInterval(() => {
  if (parseInt(iOAP.curSection) < 3) {
    showPhysics();
  }
}, 1000);
