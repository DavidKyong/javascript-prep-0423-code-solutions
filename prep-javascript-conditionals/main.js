var age = 26;
function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}
console.log(isAdult(age));

var student1Score = 67;
function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
}
console.log(didStudentPass(student1Score));

var student2Score = 99;
function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else {
    return 'A++';
  }
}
console.log(gradeCalculator(student2Score));

var season = 'fall';
function seasonMessenger(season) {
  if (season === 'summer') {
    return "it's hot today";
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'fall') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return "it's cold today";
  } else {
    return 'please enter a valid season';
  }
}
console.log(seasonMessenger(season));

var dayOfTheWeek = 'Friday';
function dayDetector(dayOfTheWeek) {
  if (
    dayOfTheWeek === 'Monday' ||
    dayOfTheWeek === 'Tuesday' ||
    dayOfTheWeek === 'Wednesday' ||
    dayOfTheWeek === 'Thursday' ||
    dayOfTheWeek === 'Friday'
  ) {
    return "It's a weekday!";
  } else if (dayOfTheWeek === 'Saturday' || dayOfTheWeek === 'Sunday') {
    return 'Have a good weekend!';
  } else {
    return 'Not valid';
  }
}
console.log(dayDetector(dayOfTheWeek));
