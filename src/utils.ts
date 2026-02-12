export function deleteFromArray(key:any,array:any[]):void{
var index = array.indexOf(key, 0);

if (index > -1) {
  array.splice(index, 1);
}
}