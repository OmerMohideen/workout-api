type WorkoutType = "Chest and Triceps" | "Back and Biceps" | "Legs" | "Shoulders" | "Core";
type WorkoutMap = Record<WorkoutType, string[]>;

export const workoutsMap: WorkoutMap = {
  "Chest and Triceps": [
    "Push ups",
    "Push ups wide",
    "Push ups diamond",
    "Push ups narrow",
    "Dips",
    "Triceps dips",
    "Plyometric push ups",
    "Decline push ups",
  ],
  "Back and Biceps": [
    "Pull ups",
    "Pull ups wide",
    "Pull ups close grip",
    "Chin-ups",
    "Inverted rows",
    "Australian pull ups",
    "L-sit pull ups",
    "Commando pull ups",
  ],
  "Legs": [
    "Squats",
    "Squats jump",
    "Squats pistol",
    "Lunges",
    "Lunges jump",
    "Lunges side",
    "Calf raises",
    "Donkey kicks",
    "Wall sits",
    "Box jumps",
  ],
  "Shoulders": [
    "Handstand push ups",
    "Pike push ups",
    "Wall walks",
    "Scapular push ups",
    "Shoulder taps",
    "Arm circles",
  ],
  "Core": [
    "Planks",
    "Planks side",
    "Planks reverse",
    "Planks elevated",
    "Sit-ups",
    "Russian twists",
    "Bicycle crunches",
    "Leg raises",
    "Mountain climbers",
  ],
};

export default function selectWorkouts(numWorkouts: number): string[] {
  const selectedWorkouts: string[] = [];

  const categories: (keyof typeof workoutsMap)[] = Object.keys(workoutsMap) as (keyof typeof workoutsMap)[];

 let remainingNumWorkouts = numWorkouts;
  const numWorkoutsByCategory: Record<string, number> = {};
  categories.forEach((category, index) => {
    const maxNumWorkouts = Math.min(remainingNumWorkouts - (categories.length - (index + 1)), 3);
    const numWorkouts = Math.floor(Math.random() * (maxNumWorkouts - 1) + 1);
    numWorkoutsByCategory[category] = numWorkouts;
    remainingNumWorkouts -= numWorkouts;
  });

  categories.forEach(category => {
    const numWorkouts = numWorkoutsByCategory[category];
    const selectedCategoryWorkouts = selectNonSimilarWorkouts(workoutsMap, category, numWorkouts);
    selectedWorkouts.push(...selectedCategoryWorkouts);
  });

  while (selectedWorkouts.length > numWorkouts) {
    selectedWorkouts.pop();
  }

  while (selectedWorkouts.length < numWorkouts) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const selectedCategoryWorkouts = selectNonSimilarWorkouts(workoutsMap, category, 1);
    const uniqueWorkouts = selectedCategoryWorkouts.filter(workout => !selectedWorkouts.includes(workout));
    selectedWorkouts.push(...uniqueWorkouts);
  }

  return selectedWorkouts;
}


function selectNonSimilarWorkouts(workoutsMap: WorkoutMap, category: WorkoutType, numSelections: number): string[] {
  let workouts: string[] = workoutsMap[category];
  let selectedWorkouts: string[] = [];

  while (selectedWorkouts.length < numSelections) {
    let workout: string = workouts[Math.floor(Math.random() * workouts.length)];
    if (!selectedWorkouts.includes(workout) &&
        !selectedWorkouts.some(selectedWorkout => selectedWorkout.split(' ').some(word => workout.includes(word))) &&
        !selectedWorkouts.some(selectedWorkout => workout.split(' ').some(word => selectedWorkout.includes(word)))) {
      selectedWorkouts.push(workout);
    }
  }

  return selectedWorkouts;
}