const marvel_heros=["thor","ironman","spiderman","mani"]
const dc_heros=["superman","flashman","batmen"]
// marvel_heros.push(dc_heros)
console.log(marvel_heros);

const all_heros=marvel_heros.concat(dc_heros);
console.log(all_heros);

const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_array=anotherarray.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Mani")) //converts to arrayyyy

console.log(Array.from({name:"mani"}))

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3));
