// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('success', temp);
// }, function(err) {
//   console.log('error', err);
// });

// Challenge Area
 function addPromise(a,b) {
   return new Promise(function(resolve, reject) {
     if (typeof a === 'number' && typeof b === 'number') {
       resolve(a + b)
     } else {
       reject('Invalid numbers!')
     }
   });
 }

 addPromise(10,8).then(function(result) {
   console.log(result);
 }, function(err) {
   console.log(err);
 });
