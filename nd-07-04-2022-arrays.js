//1.Sukurti masyą, kurio ilgis 20, o reikšmės –skaičiai, nuo 1 iki 20.
let pirmasMasyvas = [];
for (let i = 1; i <= 20; i++) {
    pirmasMasyvas.push(i);
}console.log(pirmasMasyvas);
//2.Sukurti atsitiktinio ilgio masyvą, nuo 40 iki 60, kurio reikšmės būtų skaičiai nuo 1 iki masyvo ilgio.
const ilgis = 40 + Math.floor(Math.random() * (60 - 40 + 1));
console.log('Masyvo ilgis:', ilgis);
let antrasMasyvas = [];
for (let i = 1; i <= ilgis; i++) {
    antrasMasyvas.push(i);
}console.log('Masyvas: ', antrasMasyvas);
//3.Sukurti atsitiktinio ilgio masyva, kurio ilgisnuo 10iki 15, o reikšmės –atsitiktiniai skaičiai nuo 5 iki 47.Surasti didžiausia skaičių masyve, nenaudojant sort ir Math.max funkcijų.
const ilgis2 = 10 + Math.floor(Math.random() * (15 - 10 + 1));
console.log('Masyvo ilgis:', ilgis2);
let treciaConsta = 0;
let treciasMasyvas = [];
for (let i = 0; i < ilgis2; i++) {
    treciaConsta = 5 + Math.floor(Math.random() * (47 - 5 + 1))
    treciasMasyvas.push(treciaConsta);
    
}
let maxSkaicius = -Infinity;
for (let i = 0; i < treciasMasyvas.length; i++) {
    const skaicius = treciasMasyvas[i];
    if (skaicius > maxSkaicius)
    maxSkaicius = skaicius;
}
console.log(treciasMasyvas);
console.log( 'Didziausias skaicius:', maxSkaicius);

////4.Sukurti masyvą, kurio ilgis 100, o reikšmės –raidės D, E, F, G, H.
let condikas = []
let reikmes = 'DEFGH'.split('');
for (let i = 0; i < 20; i++) {
    condikas.push(...reikmes);
}console.log(condikas);
console.log(condikas.length);

//5. Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės M,N,O,P. Suskaičiuoti, kurios raidės buvo daugiausia.
let bankas = [];
let raidziuMasyvoReiksmes = 'MNOO'.split('');
for (let i = 0; i < 25; i++) {
    bankas.push(...raidziuMasyvoReiksmes);    
}console.log(bankas);
console.log(bankas.length);

//6. Sugeneruoti masyvą, kurio ilgis 20, o reikšmės masyve turi būti nuo 10 iki 50. Reikšmės masyve turi būti unikalios, tai yra – nesikartoti.
let bankas1 = [];
for (let i = 0; i < 20; i++) {
    let skaitmuos = 10 + Math.floor(Math.random() * (50 - 10 + 1));
    if (bankas1.indexOf(skaitmuos) === - 1) {
        bankas1.push(skaitmuos);
    }
}
console.log(bankas1);
console.log(bankas1.length);


