const moment = require('moment');

// var date = moment().locale('ca');
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('D MMM YYYY'));

var date = moment();
console.log(date.format('h:mm a'));