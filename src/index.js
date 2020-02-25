module.exports = function reverse (n) {
  let arr = n.toString().split('');
  let arrRes = [];
  
  if (arr[0] === "-" ) {
      arr.shift(arr[0]);
  }
  
    for (let key of arr) {
      arrRes.unshift(key);
  }

  return arrRes.join('');
}
