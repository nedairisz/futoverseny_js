import { FUTOK } from "./adatok.js";



// 1. feladat
function letrehozTablazat() {
    const tablazat=document.getElementById("feladat_1")
    let table = "<table>";
        for (let i = 0; i < FUTOK.length; i++) {
            let sorok = "<tr>"
            for (const key in FUTOK[i]) {
                sorok+= `<td>${FUTOK[i][key]} </td>`
            }
            sorok+="</tr>";  
            table+=sorok
        }
    table +="</table>"
    tablazat.innerHTML=table
}
letrehozTablazat()

// 2. feladat
function osszesit(versenySzam) {
    let ossz= 0;
    for (let i = 0; i < FUTOK.length; i++) { 
        if (FUTOK[i].versenySzam === versenySzam) {
            ossz++;
        }
    }   
    return ossz
}
const ossz=document.getElementById("feladat_2")
ossz.innerHTML +=`<p>félmaraton: ${osszesit("félmaraton")} db</p>`
ossz.innerHTML +=`<p>maraton: ${osszesit("maraton")} db</p>`
ossz.innerHTML +=`<p>10 km: ${osszesit("10 km")} db</p>`



//const kivalasztottSor = feladat3Tarolo.querySelector('.befutott');
/* const befutottVersenyzok = [];
// 3. feladat
function befutott() {
    const futokTr=document.querySelectorAll("#feladat_1 tr")
    
    const befutottakTarolo=document.getElementById("feladat_3_tarolo")
    
    for (let i = 0; i < futokTr.length; i++) {

        futokTr[i].addEventListener("click", function(){
            
            futokTr.classList.add("befutott")

            befutottVersenyzok.push(FUTOK[i].nev, FUTOK[i].nemzetiseg, FUTOK[i].versenyIdo)

            if (befutottVersenyzok.indexOf(FUTOK[i].nev)=== -1){
                befutottVersenyzok.push(FUTOK[i].nev)
            }

            
        }) 
        befutottVersenyzok.innerHTML=befutottVersenyzok.join(", ")
    }   
}
befutott() */

const befutottVersenyzok = [];

function befutott() {
    const futokTr = document.querySelectorAll("#feladat_1 tr");
    const befutottakTarolo = document.getElementById("feladat_3");
    for (let i = 0; i < futokTr.length; i++) {
        const sor = futokTr[i];
        sor.addEventListener("click", function() {
            const kivalasztottSor = document.querySelector('.befutott');
            // Kattintott sor kijelölése
            sor.classList.add('befutott');

            /* if (befutottVersenyzok.indexOf(FUTOK[i].nev)=== -1){
                befutottVersenyzok.push(FUTOK[i].nev)
            } */

            const nev = FUTOK[i].nev;
            const nemzetiseg = FUTOK[i].nemzetiseg;
            const versenyIdo = FUTOK[i].versenyIdo;
            befutottakTarolo.innerHTML += `<p>${nev} ${nemzetiseg} ${versenyIdo}</p>`

        });
    }
}
befutott();

/* 
            <!-- Hozz létre egy gomb eseményt, ami minden elemet töröl a befutott versenyzők-ből és kiűriti az elemeket a feladat_3 elemből -->
            <!-- A futóverseny táblázat sorairól is távolítsuk el a .befutott osztályt --> */
// 4. feladat
function torolEsemeny() {
    const gombKatt=document.querySelector("#options")
    gombKatt.addEventListener("click", function(){
        const befutottak=document.querySelector("#feladat_3")
        befutottak.innerHTML= ""
        befutottVersenyzok.splice(0)
        const kivalasztottSor = document.querySelector('.befutott');
            if (kivalasztottSor) {
                kivalasztottSor.classList.remove('befutott');
            }
    })
}
torolEsemeny()


// 5. feladat
function ellenoriz(){
    const osszesVersenyzoSzama = document.querySelectorAll("#feladat_1 tr").length;
    const befutottVersenyzokSzama = document.querySelectorAll("#feladat_1 tr.befutott").length;

    if (osszesVersenyzoSzama === befutottVersenyzokSzama) {
        alert("Verseny véget ért!");
    }
}
ellenoriz()