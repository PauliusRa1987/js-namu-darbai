let aSuma = 0;
for (let i = 0; i <= 0; i++) {
    aSuma +=i;
}
console.log('a.)', aSuma);

let bSuma = 0;
for (let i = 0; i <= 4; i++) {
    bSuma +=i;
}
console.log('b.)', bSuma);

let cSuma = 0;
for (let i = 0; i <= 100; i++) {
    cSuma +=i;
}
console.log('c.)', cSuma);

let dbSuma = 0;
for (let i = 574; i <= 815; i++) {
    dbSuma +=i;
}
console.log('d.)', dbSuma);

let ebSuma = 0;
for (let i = -50; i <= 50; i++) {
    ebSuma +=i;
}
console.log('e.)', ebSuma);

let fSuma = 0;
for (let i = -70; i <= 30; i++) {
    fSuma +=i;
}
console.log('f.)', fSuma);
//   2.
const text1 = 'Lietuva';
let atgalinis = '';
for (let i = 0; i < text1.length; i++) {
    const raides = text1[i];
    atgalinis = raides + atgalinis;
    console.log(atgalinis);
}
console.log(atgalinis);
/// 3m uzdavinys
const trys = 3;
const penki = 5;
const septyni = 7;
const int1 = 0;
const int2 = 11;

let skaiciuKonteineris = 0;
for (let i = int1; i <= int2; i++) {
    if ([i]%trys === 0) {
        skaiciuKonteineris++;
}
}
console.log(`Skaičių intervale tarp ${int1} ir ${int2}, besidalijančių be liekanos iš ${trys} yra ${skaiciuKonteineris} vienetai.`);
let skaiciuKonteineris1 = 0;
for (let i = int1; i <= int2; i++) {
    if ([i]%penki === 0) {
        skaiciuKonteineris1++;
}
}
console.log(`Skaičių intervale tarp ${int1} ir ${int2}, besidalijančių be liekanos iš ${penki} yra ${skaiciuKonteineris1} vienetai.`);

console.log(`Skaičių intervale tarp ${int1} ir ${int2}, besidalijančių be liekanos iš ${trys} yra ${skaiciuKonteineris} vienetai.`);
let skaiciuKonteineris2 = 0;
for (let i = int1; i <= int2; i++) {
    if ([i]%septyni === 0) {
        skaiciuKonteineris2++;
}
}
console.log(`Skaičių intervale tarp ${int1} ir ${int2}, besidalijančių be liekanos iš ${septyni} yra ${skaiciuKonteineris2} vienetai.`);