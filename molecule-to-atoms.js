function parseMolecule(formula) {

  let atoms = {};
  let arr = formula.split('');

  let openedBrackets = ['{', '[', '('];
  let closedBrackets = ['}', ']', ')'];

  let findClosedBracketsIndex = (s, beginIndex) => arr.indexOf(closedBrackets[openedBrackets.indexOf(s)], beginIndex);
  let isNumber = n => +n ? true:false;

  let curMultiple = 1;

  for(let i=0,len=arr.length; i<len; i++) {

    if(isNumber(arr[i])) continue;

    if(/[a-z]/.test(arr[i])) continue;

    if(~openedBrackets.indexOf(arr[i])) {
      let closedBracketsIndex = findClosedBracketsIndex(arr[i], i);
      let nextItem = arr[closedBracketsIndex + 1];
      if(isNumber(nextItem)) curMultiple *= parseInt(nextItem);
      continue;
    }

    if(~closedBrackets.indexOf(arr[i])) {
      let nextItem = arr[i + 1];
      if(isNumber(nextItem)) curMultiple /= parseInt(nextItem);
      continue;
    }

    let name = arr[i];

    if(arr[i+1] && /[a-z]/.test(arr[i+1])) name += arr[i+1];

    if(!atoms[name]) atoms[name] = 0;

    let count = 1;

    if(/\d{1,}/.test(arr[i+1])) {
      count = parseInt(formula.substr(i+1).match(/\d{1,}/)[0]);
    }else if(/[a-z]/.test(arr[i+1]) && /\d{1,}/.test(arr[i+2])){
      count = parseInt(formula.substr(i+2).match(/\d{1,}/)[0]);
    }

    atoms[name] = atoms[name] + (count * curMultiple);
  }

  return atoms;
}

console.log('{[Co(NH3)4(OH)2]3Co}(SO4)3');
console.log('{Co: 4, N: 12, H: 42, O: 18, S: 3}');
console.log(parseMolecule('{[Co(NH3)4(OH)2]3Co}(SO4)3'));

console.log('H2O');
console.log('{H: 2, O: 1}');
console.log(parseMolecule('H2O'));

console.log('C6H12O6');
console.log('{C: 6, H: 12, O: 6}');
console.log(parseMolecule('C6H12O6'));
