module.exports = function check(str, bracketsConfig) {
  // your solution
  const configObj = Object.fromEntries(bracketsConfig);

  const temp = [];

  for (let bracket of str) {
    console.log(temp);
  
    if (Object.values(configObj).indexOf(bracket) > -1) {
      if (bracket !== configObj[temp[temp.length - 1]]) {
        if (configObj[bracket] === bracket) {
          temp.push(bracket);
        }
        else {
          console.log(false, 'condition');
          return false;
        }
      }
      else {
        temp.pop();
       } 
    }
    else {
      temp.push(bracket);
    }
  }

  return temp.length === 0;
};