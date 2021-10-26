function area(base: number, altura: number): number {
  let area: number = (base * altura) / 2;
  return area;
}
//una forma de resolverlo
/*console.log(area(1, 2));
console.log(area(2, 4));
console.log(area(3, 6));
console.log(area(4, 8));
console.log(area(5, 10));
console.log(area(6, 12));
console.log(area(7, 14));*/

//otra forma de resolverlo
for (let i: number = 1; i <= 7; i++) {
  console.log(area(i, i * 2));
}
