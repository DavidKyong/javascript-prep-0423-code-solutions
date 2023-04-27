// create your loops here.
function whileLoop1() {
  const array = [];
  let a = 0;
  while (a < 10) {
    array.push(a);
    a++;
  }
  return array;
}
console.log(whileLoop1());

function whileLoop2() {
  const array = [];
  let a = 0;
  while (a < 10) {
    array.push(a * 2);
    a++;
  }
  return array;
}
console.log(whileLoop2());

function forLoop1() {
  const array = [];
  for (let a = 0; a < 10; a++) {
    array.push(a);
  }
  return array;
}
console.log(forLoop1());

function forLoop2() {
  for (let a = 100; a >= 0; a--) {
    console.log('Time for explosion: ' + a + '!');
  }
}
forLoop2();

function forInLoop1(object) {
  const array = [];
  for (const x in object) {
    array.push(x);
  }
  return array;
}
const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
console.log('for in loop 1 output', forInLoop1(object));

function forInLoop2(object) {
  const array = [];
  for (const x in object) {
    array.push(object[x]);
  }
  return array;
}
console.log('for in loop 2 output', forInLoop2(object));
