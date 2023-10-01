function calculateCaloriesBurned(weightKg, heightCm, age, isMale) {
    const genderFactor = isMale ? 5 : -161;
    const bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + genderFactor;
    // Convert BMR to calories burned per minute
    const caloriesPerMinute = bmr / 1440; // 1440 minutes in a day
    return caloriesPerMinute;
  }
  
  // Example usage for a 140-pound (63.5 kg) person
  let weightKg = 63.5; // Convert pounds to kilograms
  const heightCm = 175; // Height in centimeters
  const age = 30;
  const isMale = true; // Change to false for female
  
  const caloriesPerMinute = calculateCaloriesBurned(weightKg, heightCm, age, isMale);
  console.log(`Calories burned per minute: ${caloriesPerMinute.toFixed(2)}`);
  

  function calculateCaloriesBurned(weightKg, metValue) {
    const caloriesPerMinute = (metValue * weightKg * 3.5) / 200;
    return caloriesPerMinute;
  }
  
  // Example usage for a 140-pound (63.5 kg) person
 
  const activities = [
    { name: "Walking", metValue: 3.9 },
    { name: "Running", metValue: 8.0 },
    { name: "Exercise", metValue: 5.0 },
    { name: "Swimming", metValue: 7.0 },
    { name: "Yoga", metValue: 2.5 }
  ];
  
  for (const activity of activities) {
    const caloriesPerMinute = calculateCaloriesBurned(weightKg, activity.metValue);
    console.log(`Calories burned per minute for ${activity.name}: ${caloriesPerMinute.toFixed(2)}`);
  }
  
  const caloriesByActivity = {}; 
  function calculateCalories() {
    const activitySelect = document.getElementById("activity");
    const weightInput = document.getElementById("weight");
    const durationInput = document.getElementById("duration");
    const result = document.getElementById("result");
    const caloriesList = document.getElementById("caloriesList");
            const totalCalories = document.getElementById("totalCalories");

    const activity = activitySelect.value;
    const weight = parseFloat(weightInput.value);
    const duration = parseFloat(durationInput.value);

    const metValues = {
        walking: 3.9,
        running: 8.0,
        yoga: 2.5,
        swimming: 7.0,
        exercise: 5.0
    };


    // if (!isNaN(weight) && !isNaN(duration) && metValues.hasOwnProperty(activity)) {
    //     const metValue = metValues[activity];
    //     const caloriesBurned = (metValue * weight * 3.5 * duration) / 200;
    //     result.textContent = `You burned approximately ${caloriesBurned.toFixed(2)} calories.`;
    // } else {
    //     result.textContent = "Please enter valid input.";
    // }


    if (!isNaN(weight) && !isNaN(duration) && metValues.hasOwnProperty(activity)) {
        const metValue = metValues[activity];
        const caloriesBurned = (metValue * weight * 3.5 * duration) / 200;

        // Store calories burned for this activity
        caloriesByActivity[activity] = caloriesBurned;

        // Display calories burned for this activity
        const listItem = document.createElement("li");
        listItem.textContent = `Calories burned for ${activity}: ${caloriesBurned.toFixed(2)} calories`;
        caloriesList.appendChild(listItem);

        // Calculate and display total calories burned
        const total = Object.values(caloriesByActivity).reduce((acc, curr) => acc + curr, 0);
        totalCalories.textContent = `Total Calories Burned: ${total.toFixed(2)} calories`;
    } else {
        alert("Please enter valid input.");
    }
}