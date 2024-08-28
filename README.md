# Activity Scheduler Challenge

## Introduction

Welcome to the Activity Scheduler Challenge! This challenge involves managing schedules for two individuals, Loraine ("C") and Charles ("J"), to ensure their activities do not overlap. The goal is to allocate activities so that neither person is double-booked.

## Problem Description

You are given a list of activities for each test case, with each activity represented by a start time and an end time (in minutes after midnight). Your task is to assign these activities to Loraine and Charles in a way that:

- No one is assigned overlapping activities.
- An activity that ends at a specific time can be followed by another activity starting at the same time.

## Input Details

- **Number of Test Cases**: An integer (`numTestCases`) indicating how many sets of activities you need to consider.
- **For Each Test Case**: A list of activities, where each activity is represented as a pair `[startTime, endTime]`.

## Expected Output

For each test case, output either a sequence of "C" and "J" indicating who is assigned to each activity or "IMPOSSIBLE" if it's not feasible to schedule all activities without overlaps.

## Example

### Input

```javascript
const numTestCases = 4;
const testCases = [
  [
    [360, 480],  // 6:00 AM - 8:00 AM
    [420, 540],  // 7:00 AM - 9:00 AM (overlaps with previous)
    [600, 660],  // 10:00 AM - 11:00 AM (no overlap)
  ],
  [
    [0, 1440],   // 12:00 AM - 12:00 AM the next day (full day)
    [1, 3],      // 12:01 AM - 12:03 AM (overlaps with full day activity)
    [2, 4],      // 12:02 AM - 12:04 AM (overlaps with both)
  ],
  [
    [99, 150],   // 1:39 AM - 2:30 AM
    [1, 100],    // 12:01 AM - 1:40 AM (slight overlap)
    [100, 301],  // 1:40 AM - 5:01 AM (overlaps with previous)
    [2, 5],      // 12:02 AM - 12:05 AM (no overlap)
    [150, 250],  // 2:30 AM - 4:10 AM (overlaps with Activity 3)
  ],
  [
    [0, 720],    // 12:00 AM - 12:00 PM (morning)
    [720, 1440], // 12:00 PM - 12:00 AM next day (afternoon to midnight)
  ],
];
```


### Output

```bash
Case #1: CJC
Case #2: IMPOSSIBLE
Case #3: CJCCJ
Case #4: CJ
```

## How to Run the Code

1. **Download or Clone the Code:**
```bash
git clone <repository-url>
cd <repository-directory>
```

2. **Run the Script:** Ensure you have Node.js installed, then execute the script:
```bash
node scheduleActivities.js
```

## How the Scheduler Works

1. **Understanding the Activities:**
   - Activities are stored with their start and end times and original positions to maintain the output order.

2. **Sorting the Activities:**
   - Activities are sorted by start time to process them in chronological order.

3. **Assigning Activities:**
   - The script checks each activity sequentially. If Loraine is free, she is assigned the activity; otherwise, Charles is checked. If neither is free, the assignment is deemed "IMPOSSIBLE."

4. **Output:**
   - If all activities are assigned successfully, the output shows who is assigned to which activity. Otherwise, it outputs "IMPOSSIBLE."

### Test Cases and Outcomes

  - **Case 1:** `[360, 480]`, `[420, 540]`, `[600, 660]`

      - Outcome: Assignable without conflicts: `"CJC"`

  - **Case 2:** `[0, 1440]`, `[1, 3]`, `[2, 4]`

      - Outcome: Overlaps too much: `"IMPOSSIBLE"`

  - **Case 3:** `[99, 150]`, `[1, 100]`, `[100, 301]`, `[2, 5]`, `[150, 250]`

      - Outcome: Activities can be assigned without conflicts: `"CJCCJ"`

  - **Case 4:** `[0, 720]`, `[720, 1440]`

      - Outcome: No overlap: `"CJ"`

## Conclusion

The Activity Scheduler Challenge is a fun way to practice scheduling and managing time slots. Try out different scenarios to see how the scheduler handles them!

