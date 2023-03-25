//!-------------------COPY BELOW TO CONSOLE-------------------
//after running this script in console on allen test solution website,click each question, then copy console(or save it) and then remove all "VM..." type extra stuff
var $0 = document.querySelector(".questioninr");
var inh = $0.innerHTML;
var timerINH = setInterval(() => {
  if ($0.innerHTML == inh) {
    return;
  }
  //if essay type question
  if (document.querySelector("[ng-bind-html='essayText']")) {
    $0.querySelector("[ng-bind-html='questionText']").innerHtml =
      document.querySelector("[ng-bind-html='essayText']").innerHTML +
      "<br>" +
      $0.querySelector("[ng-bind-html='questionText']").innerHtml;
  }
  console.log($0.innerHTML);

  inh = $0.innerHTML;
}, 10); //check every 10ms

//! ------------------------BELOW TO BE USED ON HTML SAVED FROM ABOVE------------------
//Copy below code then call printQuesAns();

var questions = document.querySelectorAll("[ng-bind-html='questionText']");
var options = document.querySelectorAll(".optncntnt");

function printQuesAns() {
  var obj = {};
  for (var i = 0; i < questions.length; i++) {
    obj[i + 1] = {
      q: questions[i].innerHTML,
      o1: options[4 * i]?.innerHTML || "",
      o2: options[4 * i + 1]?.innerHTML || "",
      o3: options[4 * i + 2]?.innerHTML || "",
      o4: options[4 * i + 3]?.innerHTML || "",
      ans: "",
    };
  }
  console.log(obj);
}
