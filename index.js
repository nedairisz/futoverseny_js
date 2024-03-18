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


const befutottVersenyzok = [];
// 3. feladat
function befutott() {
    const futokTr=document.querySelectorAll("#feladat_1 tr")

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
befutott()

// 4. feladat
function torolEsemeny() {

}

// 5. feladat
function ellenoriz(){
  
}