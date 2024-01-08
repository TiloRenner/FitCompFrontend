



function determineTrainingLevel(answers) {
    if (answers.liegestütze >= levelScale.beginner.liegestütze &&
        answers.crunches >= levelScale.beginner.crunches &&
        answers.klimmzüge >= levelScale.beginner.klimmzüge &&
        answers.kniebeugen >= levelScale.beginner.kniebeugen) {
      return 'Beginner';
    } else if (answers.liegestütze >= levelScale.intermediate.liegestütze &&
               answers.crunches >= levelScale.intermediate.crunches &&
               answers.klimmzüge >= levelScale.intermediate.klimmzüge &&
               answers.kniebeugen >= levelScale.intermediate.kniebeugen) {
      return 'Intermediate';
    } else if (answers.liegestütze >= levelScale.advanced.liegestütze &&
               answers.crunches >= levelScale.advanced.crunches &&
               answers.klimmzüge >= levelScale.advanced.klimmzüge &&
               answers.kniebeugen >= levelScale.advanced.kniebeugen) {
      return 'Advanced';
    } else {
      return 'Pro';
    }
   }

   
const userAnswers = { liegestütze: 10, crunches: 10, klimmzüge: 10, kniebeugen: 10 };
const trainingLevel = determineTrainingLevel(userAnswers);
console.log(`The user's training level is ${trainingLevel}`);
