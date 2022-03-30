// 1.
const n = -0;
if (n > 0) {
    console.log('Geras');
}else if (n < 0) {
    console.log('Blogas');   
}else {
    console.log('Nulis');
}

// 2.
const spalva = 2;
if (spalva === 1) {
    console.log('Zalia --> Eikite.');
} else if (spalva === 2) {
    console.log('Geltona --> Palaukite.');
}else if (spalva === 3) {
    console.log('Raudona --> Eiti Draudziama.');
}else {
    console.log('error');
}

// 3.
const knyguTalpa = 5;
const deszes = 2;
const knygos = 10;

if (knyguTalpa * deszes >= knygos) {
    console.log('Knygos telpa i dezes');
} else {
    console.log('Knygos netelpa i dezes');
}

// 4.
let a = 9;
let b = 3;
if (a < b) {
    console.log('a = ', ++a);
    console.log('b = ', --b);
} else if (a > b) {
    console.log('a = ', --a);
    console.log('b = ', ++b);
}else {
    console.log('lygu');
}

// 5.
const centai = 10;
const kaina = 20;
const graza = centai % kaina;
const kiekis = centai / kaina - graza/kaina;
if (kiekis >= 1) {
    console.log(`Saulius nusipirks ${kiekis} porcijas,  liks centu ${graza}`);
} else {
    console.log('Nepakanka pinigu');
}

// 6.
const degtukuSkaicius = 9;
const reikalingasDegtukuSkaicius = 3
const liekana = degtukuSkaicius % reikalingasDegtukuSkaicius;
if (0 !== liekana) {
    console.log('Trikampio sudelioti negalima.');
}else {
    console.log('Trikampi sudelioti galima.');
}

// 7.
const menuo = 13;

if (menuo === 1 || menuo === 3 || menuo === 5 || menuo === 7 || menuo === 8 || menuo === 10 || menuo === 12) {
    console.log('Turi 31 diena.');
}else if(menuo === 2) {
    console.log('Turi 28 dienu.');
}else if (menuo === 4 || menuo === 6 || menuo === 9 || menuo === 11){
    console.log('Turi 30 dienu.');
}else {
    console.log('Tokio menesio nera');
}

// 8.
const kambarys = 3;
const lyginis = kambarys % 2;
if (0 !== lyginis) {
    console.log('Kambari tvarkys jaunelis');
} else {
    console.log('Kambari tvarkys vyresnelis');
}

// 9.
const einamiMetai = 2004;
const nrVienas = einamiMetai - 1896;
const olimpoLiekana = nrVienas % 4;
if (olimpoLiekana === 0) {
    console.log('Olimpines zaidynes nr.', nrVienas / 4 + 1);
} else {
    console.log('Neolimpiniai metai!');
}

// 10.
const pradziaVal = 9;
const pradziaMin = 5;
const dabarVal = 8;
const dabarMin = 29;
const kelias = 7;

if (pradziaVal + pradziaMin / 60 < dabarVal + (dabarMin + kelias) / 60) {
    console.log('Petras i pamoka veluos');
} else {
    console.log('Petras neveluos i pamoka');
}