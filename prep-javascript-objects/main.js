const person = {
  firstName: 'David',
  lastName: 'Kyong',
  hobby: 'sleeping',
};
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);
person.job = 'Coder';
console.log("The person's job is:", person.job);
person['previousJob'] = 'KBBQ Waiter';
console.log("The person's previous job is:", person['previousJob']);
console.log('The complete person:', person);
