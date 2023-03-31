//!-------------------COPY BELOW TO CONSOLE AND THEN MOVE TO REQUIRED QUESTIONS ONE BY ONE, THEN CALL printQuesAns()-------------------
//after running this script in console on allen test solution website,click each question, then copy console(or save it) and then remove all "VM..." type extra stuff
var $0 = document.querySelector(".questioninr");
var quesNo = document.querySelector("[ng-bind='currentSerailNo']");
var inh = $0.innerHTML;
var tmpContainer = document.createElement("div");
var getOptions = (opts) => {
  var str = "";
  for (var opt of opts) {
    str += `<div class="optncntnt">
    ${opt.innerHTML}
  </div>`;
  }
  return str;
};
var timerINH = setInterval(() => {
  if ($0.innerHTML == inh) {
    return;
  }
  //if essay type question
  if (document.querySelector("[ng-bind-html='essayText']").innerHTML.trim()) {
    tmpContainer.innerHTML += `<div ng-bind-html='questionText'>${
      document.querySelector("[ng-bind-html='essayText']").innerHTML
    }<br><hr>${$0.querySelector("[ng-bind-html='questionText']").innerHTML} <br>
     </div>

    ${
      $0.querySelector(".optncntnt")
        ? getOptions($0.querySelectorAll(".optncntnt"))
        : ""
    }
      `;
    console.log("saved ques. no", quesNo.innerHTML);
  } else {
    tmpContainer.innerHTML += $0.innerHTML;
    console.log("saved ques. no", quesNo.innerHTML);
  }

  inh = $0.innerHTML;
}, 10); //check every 10ms

//!
//Copy below code then call printQuesAns();

function printQuesAns() {
  tmpContainer.style.display = "none";
  document.body.appendChild(tmpContainer);
  var questions = tmpContainer.querySelectorAll(
    "[ng-bind-html='questionText']"
  );
  var options = tmpContainer.querySelectorAll(".optncntnt");
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

//! ------------------------USE BELOW TO CONCATENATE IN PREVIOUSLY STORED OBJECT------------------

// @ PARAMS: test1 = obj1, test2=obj2
function concat(test1, test2) {
  //? WHY AM I NOT USING A SIMPLE ARRAY FOR STORING QUESTIONS?
  var numQuesTest1 = Object.keys(test1).length;
  for (var quesNo of Object.keys(test2)) {
    quesNo = parseInt(quesNo);
    test1[numQuesTest1 + quesNo] = test2[quesNo];
  }
  console.log(test1);
}
