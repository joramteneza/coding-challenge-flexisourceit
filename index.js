function scheduleActivities(numTestCases, testCases) {
  const results = [];

  for (let t = 0; t < numTestCases; t++) {
    // Map activities with their start time, end time, and original index
    const activities = testCases[t].map((activity, index) => ({
      startTime: activity[0],
      endTime: activity[1],
      originalIndex: index,
    }));

    // Sort activities by start time to handle them chronologically
    activities.sort((a, b) => a.startTime - b.startTime);

    let loraineEndTime = 0; // Track Loraine's latest end time
    let charlesEndTime = 0; // Track Charles's latest end time
    const assignment = new Array(activities.length); // Store final assignments

    for (const activity of activities) {
      const { startTime, endTime, originalIndex } = activity;

      if (startTime >= loraineEndTime) {
        // Assign to Loraine (C) if her schedule allows
        assignment[originalIndex] = "C";
        loraineEndTime = endTime;
      } else if (startTime >= charlesEndTime) {
        // Assign to Charles (J) if his schedule allows
        assignment[originalIndex] = "J";
        charlesEndTime = endTime;
      } else {
        // If neither can accommodate the activity, mark as impossible
        results.push(`Case #${t + 1}: IMPOSSIBLE`);
        break;
      }
    }

    // If a valid assignment is found, add it to the results
    if (results.length === t) {
      results.push(`Case #${t + 1}: ${assignment.join("")}`);
    }
  }

  return results;
}

// Test cases
const numTestCases = 4;
const testCases = [
  [
    [360, 480], // 6:00 AM - 8:00 AM
    [420, 540], // 7:00 AM - 9:00 AM (overlaps with previous)
    [600, 660], // 10:00 AM - 11:00 AM (no overlap)
  ], // Case 1: Assignable without conflict

  [
    [0, 1440], // 12:00 AM - 12:00 AM next day (full day)
    [1, 3], // 12:01 AM - 12:03 AM (overlaps with full day activity)
    [2, 4], // 12:02 AM - 12:04 AM (overlaps with both)
  ], // Case 2: Impossible to assign without conflict

  [
    [99, 150], // 1:39 AM - 2:30 AM
    [1, 100], // 12:01 AM - 1:40 AM (slight overlap)
    [100, 301], // 1:40 AM - 5:01 AM (overlaps with previous)
    [2, 5], // 12:02 AM - 12:05 AM (no overlap)
    [150, 250], // 2:30 AM - 4:10 AM (overlaps with Activity 3)
  ], // Case 3: Assignable without conflict

  [
    [0, 720], // 12:00 AM - 12:00 PM (morning)
    [720, 1440], // 12:00 PM - 12:00 AM next day (afternoon to midnight)
  ], // Case 4: Assignable without conflict
];

// Execute and print results
const output = scheduleActivities(numTestCases, testCases);
output.forEach((result) => console.log(result));
