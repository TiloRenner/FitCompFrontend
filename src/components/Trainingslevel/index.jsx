let liegestütze = userAnswers;
let kniebeuge = userAnswers;
let crunches = userAnswers;
let klimmzüge = userAnswers;


function determineTrainingLevelPushUps (liegestütze) {
if (liegestütze <= 5) {
  return 'Beginner';
} else if (liegestütze > 5 && liegestütze <= 10){
  return 'Beginner Plus'
} else if (liegestütze > 10 && liegestütze <= 15){
  return 'Fortgeschritten'
} else if (liegestütze > 15 && liegestütze <= 20){
  return 'Fortgeschritten Plus'
} else if (liegestütze > 20){
  return 'Profi'
} 
}

function determineTrainingLevelKnieBeuge (kniebeuge) {
  if (kniebeuge <= 5) {
    return 'Beginner';
  } else if (kniebeuge > 5 && kniebeuge <= 10){
    return 'Beginner Plus'
  } else if (kniebeuge > 10 && kniebeuge <= 15){
    return 'Fortgeschritten'
  } else if (kniebeuge > 15 && kniebeuge <= 20){
    return 'Fortgeschritten Plus'
  } else if (kniebeuge > 20){
    return 'Profi'
  } 
  }

  function determineTrainingLevelKnieBeuge (crunches) {
    if (crunches <= 5) {
      return 'Beginner';
    } else if (crunches > 5 && crunches <= 10){
      return 'Beginner Plus'
    } else if (crunches > 10 && crunches <= 15){
      return 'Fortgeschritten'
    } else if (crunches > 15 && crunches <= 20){
      return 'Fortgeschritten Plus'
    } else if (crunches > 20){
      return 'Profi'
    } 
    }

    function determineTrainingLevelKnieBeuge (klimmzüge) {
      if (klimmzüge <= 2) {
        return 'Beginner';
      } else if (klimmzüge > 2 && klimmzüge <= 5){
        return 'Beginner Plus'
      } else if (klimmzüge > 5 && klimmzüge <= 8){
        return 'Fortgeschritten'
      } else if (klimmzüge > 8 && klimmzüge <= 15){
        return 'Fortgeschritten Plus'
      } else if (klimmzüge > 15){
        return 'Profi'
      } 
      }



// }

// function determineTrainingLevel(answers) {
//     if (answers.liegestütze >= levelScale.beginner.liegestütze &&
//         answers.crunches >= levelScale.beginner.crunches &&
//         answers.klimmzüge >= levelScale.beginner.klimmzüge &&
//         answers.kniebeugen >= levelScale.beginner.kniebeugen) {
//       return 'Beginner';
//     } else if (answers.liegestütze >= levelScale.intermediate.liegestütze &&
//                answers.crunches >= levelScale.intermediate.crunches &&
//                answers.klimmzüge >= levelScale.intermediate.klimmzüge &&
//                answers.kniebeugen >= levelScale.intermediate.kniebeugen) {
//       return 'Intermediate';
//     } else if (answers.liegestütze >= levelScale.advanced.liegestütze &&
//                answers.crunches >= levelScale.advanced.crunches &&
//                answers.klimmzüge >= levelScale.advanced.klimmzüge &&
//                answers.kniebeugen >= levelScale.advanced.kniebeugen) {
//       return 'Advanced';
//     } else {
//       return 'Pro';
//     }
//    }

   
const userAnswers = { liegestütze: 10, crunches: 10, klimmzüge: 10, kniebeugen: 10 };
const trainingLevel = determineTrainingLevel(userAnswers);
console.log(`The user's training level is ${trainingLevel}`);
