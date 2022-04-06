//1. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol skaičių suma bus mažesnė už 100.
let skaiciusIsOro = 0;
let skaiciuSuma = 0;
while (skaiciuSuma < 100) {
    skaiciusIsOro = Math.floor(Math.random()*(10 - 1)+1);
    skaiciuSuma += skaiciusIsOro;   
}console.log(skaiciuSuma);


//2. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol sugeneruotų skaičių suma bus dali iš 7.
let IsOro = 0;
let sugeneruotaSuma = 0;
while (sugeneruotaSuma % 7 !== 0) {
    IsOro = Math.floor(Math.random()*(10 - 1)+1);
    sugeneruotaSuma += IsOro;
    console.log(sugeneruotaSuma);
}
console.log('-------------------------');

//3. Tadas mėgsta skaityti knygas, tačiau jam labai sunku pradėti skaityti. Knygoje yra m skyrių. Pirmą dieną Tadas perskaitė 1 skyrių, antrą – 2, trečią – 3 ir t.t. Kiekvieną kitą dieną jis perskaito vienu skyriumi daugiau, negu prieš tai buvusią dieną. Programa turi apskaičiuoti, per kelias dienas d Tadas perskaitys visą knygą ir kelis skyrius s vidutiniškai per dieną perskaito Tadas. Paskutinei dienai gali likti mažiau skyrių.
function tadas(m) {
    const skyriuSkaicius = m;
    let dienos = 0;
    let perskaityta = 0;
    while (skyriuSkaicius > perskaityta) {
        dienos++;
        perskaityta += dienos;  
    } 
    return `Tadas visą knygą perskaitys per ${dienos} dienas ir vidutiniškai per dieną perskaitė ${skyriuSkaicius / dienos} skyrius`;
} 
console.log(tadas(8));
console.log(tadas(17));

//4. Naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5.

let skaiciusGen = 0;
while (skaiciusGen !== 5) { 
    skaiciusGen = Math.floor(Math.random()*(10 - 1)+1);
    console.log(skaiciusGen);  
}
console.log('-------------------');
//5. naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko.
let loops = 0;
let penktaUzdav = 0;
while (penktaUzdav !== 5 && penktaUzdav !==7 ) { 
    penktaUzdav = Math.floor(Math.random()*(10 - 1)+1);
    loops++
    console.log(penktaUzdav);  
}console.log(`Prasisuko ${loops} ciklai`);