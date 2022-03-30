const balai = [10, 8, 6, 10, 9];
const dydziai = [42, 43, 46 , 47, 48];
const taskai = [25, 18, 16, 22, 4];

//------Veiksmai su kintamaisiais
console.log('3)');
const baluSuma = balai[0] - balai[1] + balai[2] - balai[3] + balai[4];
console.log('Balu suma: ', baluSuma);
const dydziuSuma = dydziai[0] - dydziai[1] + dydziai[2] - dydziai[3] + dydziai[4];
console.log('Dydziu suma: ', dydziuSuma);
const taskuSuma = taskai[0] - taskai[1] + taskai[2] - taskai[3] + taskai[4];
console.log('Tasku suma: ', taskuSuma);

const asmuoPirmas = ['Maryte', 'Melnikaite', 'moteris', 'Vilnius', 'Lietuva'];
const asmuoAntras = ['Jonas', 'Povas', 'vyras', 'Kaunas', 'Lietuva'];
const asmuoTrecias = ['Rich', 'Grey', 'man', 'Paris', 'France'];
console.log('4)');
const pirmasAsmuo = `${asmuoPirmas[4]}, ${asmuoPirmas[3]}, ${asmuoPirmas[2]}, ${asmuoPirmas[1]}, ${asmuoPirmas[0]}`;
console.log(pirmasAsmuo);
const antrasAsmuo = `${asmuoAntras[4]}, ${asmuoAntras[3]}, ${asmuoAntras[2]}, ${asmuoAntras[1]}, ${asmuoAntras[0]}`;
console.log(antrasAsmuo);
const treciasAsmuo = `${asmuoTrecias[4]}, ${asmuoTrecias[3]}, ${asmuoTrecias[2]}, ${asmuoTrecias[1]}, ${asmuoTrecias[0]}`;
console.log(treciasAsmuo);
console.log('-------------------');
//-------Kintamuju palyginimas
// 1.
const a = 7;
const b = 3;
if (a < b) {
    console.log('1. a) Pomidoras');
}else {
    console.log('1. a) Bandyk kita karta.');
}
if (a > b) {
    console.log('1. b) Pomidoras');
}else {
    console.log('1. b) Bandyk kita karta.');
}
if (a === b) {
    console.log('1. c) Pomidoras');
}else {
    console.log('1. c) Bandyk kita karta.');
}
if (a !== b) {
    console.log('1. d) Pomidoras');
}else {
    console.log('1. d) Bandyk kita karta.');
}
if (a >= b) {
    console.log('1. e) Pomidoras');
}else {
    console.log('1. e) Bandyk kita karta.');
}
if (a <= b) {
    console.log('1. f) Pomidoras');
}else {
    console.log('1. f) Bandyk kita karta.');
}
console.log('-------------------');
// 2.
const vardas = 'Paulius';
const pavarde = 'Rasamavicius';
const lytis = 'Vyras';

console.log(`2. Zodis 'Paulius' yra sudarytas is ${vardas.length} raidziu`);
console.log(`2. Zodis 'Rasamavicius' yra sudarytas is ${pavarde.length} raidziu`);
console.log(`2. Zodis 'Vyras' yra sudarytas is ${lytis.length} raidziu`);
console.log('-------------------');
//3.
if (vardas.length > pavarde.length) {
    console.log('3. a) Pomidoras');
}else {
    console.log('3. a) Bandyk kita karta.');
}
if (vardas.length < pavarde.length) {
    console.log('3. b) Pomidoras');
}else {
    console.log('3. b) Bandyk kita karta.');
}
if (vardas.length === pavarde.length) {
    console.log('3. c) Pomidoras');
}else {
    console.log('3. c) Bandyk kita karta.');
}
if (vardas.length !== pavarde.length) {
    console.log('3. d) Pomidoras');
}else {
    console.log('3. d) Bandyk kita karta.');
}
if (vardas.length >= pavarde.length) {
    console.log('3. e) Pomidoras');
}else {
    console.log('3. e) Bandyk kita karta.');
}
if (vardas.length <= pavarde.length) {
    console.log('3. f) Pomidoras');
}else {
    console.log('3. f) Bandyk kita karta.');
}
console.log('-------------------');
//4.
console.log('4. ', asmuoPirmas.length);
console.log('4. ', asmuoAntras.length);
console.log('4. ', asmuoTrecias.length);
console.log('-------------------');
//5.
if (asmuoAntras.length > asmuoPirmas.length) {
    console.log('5. a) Pomidoras');
}else {
    console.log('5. a) Bandyk kita karta.');
}
if (asmuoAntras.length < asmuoPirmas.length) {
    console.log('5. b) Pomidoras');
}else {
    console.log('5. b) Bandyk kita karta.');
}
if (asmuoAntras.length === asmuoPirmas.length) {
    console.log('5. c) Pomidoras');
}else {
    console.log('5. c) Bandyk kita karta.');
}
if (asmuoAntras.length !== asmuoPirmas.length) {
    console.log('5. d) Pomidoras');
}else {
    console.log('5. d) Bandyk kita karta.');
}
if (asmuoAntras.length >= asmuoPirmas.length) {
    console.log('5. e) Pomidoras');
}else {
    console.log('5. e) Bandyk kita karta.');
}
if (asmuoAntras.length <= asmuoPirmas.length) {
    console.log('5. f) Pomidoras');
}else {
    console.log('5. f) Bandyk kita karta.');
} 