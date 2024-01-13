const trainingPlan = {
    Beginner: 
    [
    { exercise: 'Liegestütze', 
    sets: 3, 
    reps: userReps },
    { exercise: 'Crunches', 
    sets: 5, 
    reps: userReps },
    { exercise: 'Klimmzüge', 
    sets: 7, 
    reps: userReps },
    { exercise: 'Kniebeugen', 
    sets: 10, 
    reps: userReps }
    ],
    Beginner_Plus: 
    [
    { exercise: 'Liegestütze', 
    sets: 3, 
    reps: userReps },
    { exercise: 'Crunches', 
    sets: 5, 
    reps: userReps },
    { exercise: 'Klimmzüge', 
    sets: 7, 
    reps: userReps },
    { exercise: 'Kniebeugen', 
    sets: 10, 
    reps: userReps }
    ],
    Fortgeschritten: 
    [
    { exercise: 'Liegestütze', 
    sets: 3, 
    reps: userReps },
    { exercise: 'Crunches', 
    sets: 5, 
    reps: userReps },
    { exercise: 'Klimmzüge', 
    sets: 7, 
    reps: userReps },
    { exercise: 'Kniebeugen', 
    sets: 10, 
    reps: userReps }
    ],
    Fortgeschritten_Plus:
    [
    { exercise: 'Liegestütze', 
    sets: 3, 
    reps: userReps },
    { exercise: 'Crunches', 
    sets: 5, 
    reps: userReps },
    { exercise: 'Klimmzüge', 
    sets: 7, 
    reps: userReps },
    { exercise: 'Kniebeugen', 
    sets: 10, 
    reps: userReps }
    ],
    Profi:
    [
    { exercise: 'Liegestütze', 
    sets: 3, 
    reps: userReps },
    { exercise: 'Crunches', 
    sets: 5, 
    reps: userReps },
    { exercise: 'Klimmzüge', 
    sets: 7, 
    reps: userReps },
    { exercise: 'Kniebeugen', 
    sets: 10, 
    reps: userReps }
    ]
   };

   function updateTrainingPlan(trainingPlan, newReps) {
    // Erstellen Sie eine Kopie des Trainingplans, um den Originalplan unverändert zu lassen
    let updatedTrainingPlan = JSON.parse(JSON.stringify(trainingPlan));
   
    // Aktualisieren Sie die Reps in jedem Übungsschema
    updatedTrainingPlan.forEach(exercise => {
      exercise.reps = newReps;
    });
   
    return updatedTrainingPlan;
   }
   

//    function determineTrainingPlan(trainingLevel) {
//     return trainingPlans[trainingLevel];
//    }
   

// const userTrainingLevel = 'beginner';
// const trainingPlans = determineTrainingPlan(userTrainingLevel);
// console.log(`The user's training plan is: ${trainingPlan.exercise}, ${trainingPlan.sets} sets of ${trainingPlan.reps} reps.`);
