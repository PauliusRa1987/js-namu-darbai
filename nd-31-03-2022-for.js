//1. Naudojant ciklą atspausdinti penkias eilutes ‘Labas’.
const labas = 'Labas';
for (let i = 0; i < 5; i++) {
    console.log(labas);
}
//2. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje).
const penkiSkaiciai = [0, 1, 2, 3, 4];
for (let i = 0; i < penkiSkaiciai.length; i++) {
    console.log(penkiSkaiciai[i]);
}
//arba
for (let i = 0; i < 5; i++) {
    console.log(i);  
}
//3. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje).
const uzdavinysTrys = [0, 10, 20, 30, 40];
for (let i = 0; i < uzdavinysTrys.length; i++) {
    console.log(uzdavinysTrys[i]); 
}
//arba
for (let i = 0; i <= 40; i+=10) {
    console.log(i); 
}
//4. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje).
for (let i = 49; i <= 53; i++) {
    console.log(i); 
}
//5. Naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
let atsitikko = 0;
for (let i = 0; i < 5; i++) {
    atsitikko = Math.floor(Math.random()*(10 - 1)+1);
    console.log(atsitikko);
}

//6. Naudojant ciklą, atspausdinti skaičius nuo 1 iki 20. Nespausdinti skaičių, kurie dalinasi iš 3.
for (let i = 1; i <= 6; i++) {
    if ([i]%3 !== 0) {
        console.log(i);
    }
}

//7. Parašykite programą, kuri atspausdintų įvesto skaičiaus daugybos lentelę nuo 1 iki 10.
const ivestasSkaicius = 2;
for (let i = 1; i < 10; i++) {
    const lentele =`${ivestasSkaicius} x ${i}  = ${ivestasSkaicius * i}` ;
    console.log(lentele);
}

//8. Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n colius centimetrais
const n = 12;
const colis = 2.54;
for (let i = 1; i <= n; i++) {
    const matavimas = `${i} cm yra lygu ${i*colis} coliu`
    console.log(matavimas);
}
//9. Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, indėlį.
const metai = 2030;
const palukanos = 0.02;
const indelis = 100;
let bonusas = 0;
for (let i = 2023; i <= 2030; i++) {
    bonusas = bonusas + (palukanos*indelis);
    const ataskaita = `Metai: ${i}; Palukanos:${bonusas}; Indelis ${indelis + bonusas}`
    console.log(ataskaita);
}
//10. Keliamieji metai turi 366 dienas, paprastieji – 365. Visi metai, išskyrus šimtmečius, yra keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 metai yra keliamieji, nes dalūs iš 400, o 1700 – paprastieji. Raskite visus mūsų eros keliamuosius metus.
for (let i = 0; i < 500; i++) {
    if ([i]%4  && [i]%400 !== 0) {
        console.log(i);
    } 
}
// Cia sugebejau parsyti programa kuri nekeliamuosius metus isspausdina, bet nesugebejau padaryti kad butu atvirksciai... 

