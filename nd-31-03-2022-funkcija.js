//1. Parašyti funkciją, kuri priima du skaičius. Grąžina tų skaičių sumą.
const a = -8;
const b = 19;
function skaiciuSuma (pirmas, antras) {
    const trecias = pirmas + antras;
    return `${pirmas} + ${antras} = ${trecias}`;
}
const rezultatas = skaiciuSuma(a, b);
console.log(`1.)`, rezultatas);

//2. Parašyti funkciją, kuri priima du kintamuosius. Palygina tuos du skaičius ir grąžina rezultatą ar pirmas skaičius yra didesnis, ar antras, ar jie yra lygūs.
function palyginimas (s1, s2){
    if (s1 < s2) {
        return `antras skaicius didesnis`;
    } else if (s1 > s2){
        return `Pirmas skaicius didesnis`;
    }else{
    return `Skaiciai yra lygus;`
    }
}
    const palyginimoRezultatas = palyginimas(13, 12);
    console.log(`2.)`,palyginimoRezultatas);

//3. Parašyti funkciją, kuri priimtų vieną skaičių. Turi būti grąžinamas rezultatas ar tie metai yra keliemieji.
function metai(duotiMetai) {
    if (0 === duotiMetai % 4 && 0 === duotiMetai % 400) {
        return `Keliamieji metai`
    } else {
        return `Paprasti metai`
    }
}
const arKeliamieji = metai(1700);
console.log(`3.)`,arKeliamieji);

//4. Parašyti funkciją, kuri priimtų vieną skaičių. Grąžinti skaičiaus kvadratą.
function kvadratas(sk4) {
    return `${sk4} pakelta kvadratu yra lygu ${sk4**2}`;
}
const grazinamasSkaicius = kvadratas(9);
console.log(`4.)`,grazinamasSkaicius);

//5. Parašyti funkciją, kuri priimtų vieną skaičių, kuris turi būti didesnis už vienetą. Funkcija turi grąžinti visų skaičių sumą, nuo 1 iki įvesto skaičiaus.
function skaiciuIntervalas (s5){
    if (1 < s5) {
        let suma = 0;
        for (let i = 1; i < s5; i++) {
            suma += i;         
        }
        return `nuo 1 iki skaiciaus ${s5} visu skaiciu suma yra lygi: ${suma}`
    }else {
        return `Ivestas skaicius yra mazesnis uz 1.`
    }
}
const ivestasSkaicius = skaiciuIntervalas(6);
console.log(`5.)`,ivestasSkaicius);

//6. Parašykite funkciją, kuri priimtų skaičių ir suskaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save).


//7. Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Funkcija turi išvesti tekstą į ekraną ir dar papildomai parodyti jo ilgį (simbolių kiekį).
function textas(s7) {
    return `Sis "${s7}" tekstas yra sudarytas is ${s7.length} simboliu`;
}
const duotasTekstas = textas('Laba diena mokyniai')
console.log(`7.)`, duotasTekstas);

//8. Parašyti funkciją telefonoNumeris, kuri priima vieną kintamąjį – masyvą su 10 skaičių jame. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX"

function telefonoNumeris(s8) {
    if (s8.length === 10) {
        return `(${s8[0]}${s8[1]}${s8[2]}) ${s8[3]}${s8[4]}${s8[5]}-${s8[6]}${s8[7]}${s8[8]}${s8[9]}`;
    } else {
        return `truksta arba per daug duomenu`;
    }
}
const masyvas = [6, 3, 4, 6, 6, 7, 9, 5, 4, 1]
const desimtSkaicius = telefonoNumeris(masyvas);
console.log(`8.)`,desimtSkaicius);

//9. Parašyti funkciją, kuri priimtų du kintamuosius - tekstus. Palyginti kuris tekstas yra ilgesnis.
function palyginkZodzius(sT1, sT2) {
    if (sT1.length > sT2.length){
        return `Pirmas tekstas yra ilgesnis uz antra ${sT1.length - sT2.length} simboliais`
    }else if(sT1.length < sT2.length){
        return `Antras tekstas yra ilgesnis uz antra ${sT2.length - sT1.length} simboliais`
    }else {
        return `Tekstu ilgis yra vienodas po ${sT1.length} simbolius`
    }
}
const t1 = `As noriu ismokti javascript kalba`;
const t2 = `As noriu ismokti javascript kalba`;
const zodziuPalyginimas = palyginkZodzius(t1, t2);
console.log(`9.)`,zodziuPalyginimas);

//10. Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Suskaičiuoti, kiek tekste yra ‚a‘ raidžių.
function raidziuSuma(s10) {
    const raidesA = s10.split("a").length - 1;
    return `Tekstas turi ${raidesA} "a" raidziu.`
}
const tekstas10 = `Labas krabas ir arabas`;
const sumaRaidziu = raidziuSuma(tekstas10);
console.log(`10.)`, sumaRaidziu);
