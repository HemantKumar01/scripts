// Shows responses marked from JEE 2023 Mock test
var fs = require("fs");
var testObj = require("./JA mock Test check submitted responses.js");
subjectOrder = ["Physics", "Chemistry", "Maths"];

function getOptions(optObj) {
  var options = [];
  for (option of optObj) {
    options.push(option.optLangBean[0].optText);
  }
  return options;
}

var questions = [];
var mockVarQuestionsObj = JSON.parse(testObj.mockVar);

function turnIntoHTML() {
  var htmlTxt = "";
  for (var index = 0; index < mockVarQuestionsObj.length; index++) {
    qObj = mockVarQuestionsObj[index];
    console.log(
      subjectOrder[Math.floor(index / 3)],
      ": section ",
      (index % 3) + 1
    );
    for (var i = 0; i < qObj.questions.length; i++) {
      question = qObj.questions[i];
      questions.push({
        questionType: question.quesType,
        question: question.quesLangBeans[0].quesText,
        options: getOptions(question.options),
        selected: question.quesParam.selectedOptId.trim()
          ? question.quesParam.selectedOptId.trim()
          : question.quesParam.answer,
        status: question.quesParam.status,
        isMarked: question.quesParam.isMarked,
        timeSpent: question.timespent,
      });

      var q = questions[questions.length - 1];

      htmlTxt += `<div class="quesContainer ${q.status} isMarked-${q.isMarked}">`;

      htmlTxt += q.question.replaceAll(
        "class='ans'",
        `class='ques' data-time="${(q.timeSpent / 60).toFixed(2)}"`
      );
      if (q.questionType != "MCQ" && q.questionType != "MSQ") {
        htmlTxt += `<span class="ans selected">${q.selected}</span>`;
        htmlTxt += "</div>";
        continue;
      }
      var selectedOptions = q.selected.split(",");
      for (var option of selectedOptions) {
        option = parseInt(option.trim());
        if (!isNaN(option)) {
          q.options[option - 1] = q.options[option - 1].replaceAll(
            "class='ans'",
            "class='ans selected'"
          );
        }
      }
      htmlTxt += q.options.join(" ");
      htmlTxt += "</div>";
    }

    htmlTxt += `<h1>Section Finished</h1><hr>`;
  }
  return htmlTxt;
}

var htmlTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Responses</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="main">
        ${turnIntoHTML()}
    </div>
  </body>
</html>
`;

fs.writeFileSync("response.html", htmlTemplate);
