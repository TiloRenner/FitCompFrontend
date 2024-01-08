const trainingPlans = {
    beginner: { exercise: 'Liegestütze', sets: 3, reps: 10 },
    intermediate: { exercise: 'Crunches', sets: 5, reps: 15 },
    advanced: { exercise: 'Klimmzüge', sets: 7, reps: 20 },
    pro: { exercise: 'Kniebeugen', sets: 10, reps: 25 }
   };
   

   function determineTrainingPlan(trainingLevel) {
    return trainingPlans[trainingLevel];
   }
   

const userTrainingLevel = 'beginner';
const trainingPlan = determineTrainingPlan(userTrainingLevel);
console.log(`The user's training plan is: ${trainingPlan.exercise}, ${trainingPlan.sets} sets of ${trainingPlan.reps} reps.`);
