let str = "Success is not the key of Happiness Happiness is the key of success";
let ans = str.toLowerCase().split(' ');
let map = {};

for(let i=0; i < ans.length; i++) {
  let currentWord = ans[i];
  if(map[currentWord] === undefined) {
     map[currentWord] = 1;
  } else {
    map[currentWord] += 1;
  }
}

for(ch in map){
  console.log(ch+" "+map[ch]);
}
