function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var getGreetingResult = getGreeting('World');
console.log('getGreeting Exercise:', getGreetingResult);

function addAndMutiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMutiplyBy5Result = addAndMutiplyBy5(10, 5);
console.log('addAndMutiplyBy5 Exercise:', addAndMutiplyBy5Result);

function mutiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var mutiplyAndDivideBy5Result = mutiplyAndDivideBy5(35, 10);
console.log('mutiplyAndDivideBy5 Exercise:', mutiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameResult = getFullName('Juan', 'Ramirez');
console.log('getFullName Exercise:', getFullNameResult);

function cube(number) {
  return number ** 3;
}
var cubeResult = cube(5);
console.log('cube Exercise:', cubeResult);
