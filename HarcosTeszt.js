var katona = new Harcos("kek", "katona", ".teszt-terulet");

console.assert(katona.getCsapat() === "kek", "Hiba a getCsapat() metódusban")
console.assert(katona.getTipus() === "katona", "Hiba a getTipus() metódusban")
console.assert(katona.getElet() === 50, "Hiba a getElet() metódusban")
console.assert(katona.getX() === 90, "Hiba a konstruktorban, mert a kék harcos nem a bal bázisnál indul")
console.assert(katona.toString() === "{kek;katona;Élet: 50/50}", "Hiba a toString() metódusban")
katona.lep();
console.assert(katona.getX() === 92, "Hiba a lep() metódusban, mert a kék harcos nem jobbra lép")
console.assert(katona.sebzodik(20) === true, "Hiba a sebzodik() metódusban")
console.assert(katona.getElet() === 30, "Hiba a sebzodik() metódusban")
console.assert(katona.sebzodik(-10) === false, "Hiba a sebzodik() metódusban, mert elfogadja a negatív sebzést")
console.assert(katona.sebzodik(0) === false, "Hiba a sebzodik() metódusban, mert elfogadja a 0 sebzést")
console.assert(katona.getElet() === 30, "Hiba a sebzodik() metódusban")
console.assert(katona.getElet() > 0, "Hiba a sebzodik() metódusban, mert túl korán meghal")
katona.sebzodik(100);
console.assert(katona.getElet() === 0, "Hiba a sebzodik() metódusban, mert az élet 0 alá megy")
console.assert(katona.toString() === "{kek;katona;Élet: 0/50}", "Hiba a toString() metódusban")
console.assert(katona.elerteABazist(900) === false, "Hiba az elerteABazist() metódusban")

var nehez = new Harcos("piros", "nehez", ".teszt-terulet");

console.assert(nehez.getElet() === 150, "Hiba a konstruktorban, mert a nehézgyalogos élete nem 150")
console.assert(nehez.getJutalom() === 60, "Hiba a getJutalom() metódusban")
console.assert(nehez.getX() === 740, "Hiba a konstruktorban, mert a piros harcos nem a jobb bázisnál indul")
nehez.lep();
console.assert(nehez.getX() === 739, "Hiba a lep() metódusban, mert a piros harcos nem balra lép")

var ismeretlen = new Harcos("zold", "sarkany", ".teszt-terulet");

console.assert(ismeretlen.getCsapat() === "kek", "Hiba a setCsapat() metódusban, mert elfogadja a nem létező csapatot")
console.assert(ismeretlen.getTipus() === "katona", "Hiba a setTipus() metódusban, mert elfogadja a nem létező típust")
console.assert(katona.bazisSzelesseg(900) === 90, "Hiba a bazisSzelesseg() metódusban")
console.assert(katona.bazisSzelesseg(400) === 60, "Hiba a bazisSzelesseg() metódusban, mert mobilon nem keskenyebb a bázis")
console.log("A tesztek lefutottak. Ha nincs fent piros Assertion failed üzenet, minden teszt sikeres.")