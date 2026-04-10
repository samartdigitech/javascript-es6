let height = undefined;
let result = height ?? "Height is not defined";

function isUndefined(height) {
  return height ?? "Height is not defined";
}

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
console.log(isUndefined(height)); //  Result ควรจะได้ออกมาเป็น “Height is not defined”  