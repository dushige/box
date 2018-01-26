function customChristmasTree(chars,n){
  let whole = chars.repeat(n*n);
  let crownCount = 1;
  let cursor = 0;
  let treeCrown = '';
  let treeTrunk = '';

  //tree crown
  while(true){
    if(crownCount > n) break;
    let item = whole.slice(cursor, cursor+crownCount);
    cursor += crownCount;
    let repeatNum = n-crownCount > 0 ? n-crownCount : 0;
    let paddingLeft = ' '.repeat(repeatNum);
    let content = item.split('').join(' ');
    let s = paddingLeft + content + '\n';

    if (item) treeCrown += s;
    crownCount++;
  }

  //tree trunk
  let trunkNum = Math.floor(n/3);
  for(let h=0; h<trunkNum; h++){
    treeTrunk += ' '.repeat(n-1) + '|' + ((h + 1 === trunkNum) ? '' : '\n');
  }

  return treeCrown + treeTrunk;
}

console.log(customChristmasTree('abc', 3));
console.log(customChristmasTree('1234', 6));
console.log(customChristmasTree('w', 14));
