module.exports = function getZerosCount(number, base) {
  // your implementation
  let factPower = [0, 0, 0, 0];
  let nod = [0, 0, 0, 0];
  let pow = [0, 0, 0, 0];
  let zerosCount = 0;
  let basen = base;
  let k = -1;
  let basePower = 1;
  let pNum = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251]
  for (var i = 53; i >= 0; i--) {
    if (basen % pNum[i] == 0) {
      k++;
      nod[k] = pNum[i]; 
      while (basen % pNum[i] == 0) {
        pow[k]++;
        basen = basen / pNum[i];
        }
    }
  }
  for (k = 0; k < 4; k++) {
  for (var j = 0; j <= 26; j++) {
    factPower[k]  = factPower[k] + Math.floor(number / nod[k] ** (j+1));
  }
}
  k = 0;
  if (Math.floor(factPower[k]/pow[k]) < Math.floor(factPower[k+1]/pow[k+1])) {
    zerosCount = Math.floor(factPower[k]/pow[k]); }
    else {
      zerosCount = Math.floor(factPower[k+1]/pow[k+1]);
    }
    return(zerosCount);
}

