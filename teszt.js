var jatek = new Jatek(50);

console.assert(jatek.getArany() === 50, "Hiba a getArany() metódusban")
console.assert(jatek.getKekElet() === 300, "Hiba a getKekElet() metódusban")
console.assert(jatek.getMaxElet() === 300, "Hiba a getMaxElet() metódusban")
console.assert(jatek.getPirosElet() === 300, "Hiba a getPirosElet() metódusban")
console.assert(jatek.allapot() === "fut", "Hiba az allapot() metódusban")
console.assert(jatek.toString() === "{Arany: 50;Kék bázis: 300/300;Piros bázis: 300/300}", "Hiba a toString() metódusban")

jatek.setArany(100);
console.assert(jatek.getArany() === 100, "Hiba a setArany() metódusban")
jatek.setArany(-5);
console.assert(jatek.getArany() === 0, "Hiba a setArany() metódusban, mert elfogadja a negatív aranyat")
jatek.setArany("sok");
console.assert(jatek.getArany() === 0, "Hiba a setArany() metódusban, mert elfogadja a szöveget")
jatek.setArany(50);
console.assert(jatek.vasarol(15) === true, "Hiba a vasarol() metódusban")
console.assert(jatek.getArany() === 35, "Hiba a vasarol() metódusban, mert nem vonja le az árat")
console.assert(jatek.vasarol(50) === false, "Hiba a vasarol() metódusban, mert engedi a vásárlást kevés aranyból")
console.assert(jatek.getArany() === 35, "Hiba a vasarol() metódusban, mert sikertelen vásárlásnál is levon")
console.assert(jatek.vasarol(0) === false, "Hiba a vasarol() metódusban, mert elfogadja a 0 árat")
console.assert(jatek.vasarol(-10) === false, "Hiba a vasarol() metódusban, mert elfogadja a negatív árat")
console.assert(jatek.hozzaad(5) === true, "Hiba a hozzaad() metódusban")
console.assert(jatek.getArany() === 40, "Hiba a hozzaad() metódusban")
console.assert(jatek.hozzaad(-5) === false, "Hiba a hozzaad() metódusban, mert elfogadja a negatív összeget")
console.assert(jatek.getArany() === 40, "Hiba a hozzaad() metódusban")
console.assert(jatek.sebzes("piros", 100) === true, "Hiba a sebzes() metódusban")
console.assert(jatek.getPirosElet() === 200, "Hiba a sebzes() metódusban")
console.assert(jatek.sebzes("zold", 100) === false, "Hiba a sebzes() metódusban, mert elfogadja a nem létező csapatot")
console.assert(jatek.sebzes("kek", -20) === false, "Hiba a sebzes() metódusban, mert elfogadja a negatív sebzést")
console.assert(jatek.getKekElet() === 300, "Hiba a sebzes() metódusban")

jatek.sebzes("piros", 1000);
console.assert(jatek.getPirosElet() === 0, "Hiba a sebzes() metódusban, mert a bázis élete 0 alá megy")
console.assert(jatek.allapot() === "nyert", "Hiba az allapot() metódusban")
console.assert(jatek.toString() === "{Arany: 40;Kék bázis: 300/300;Piros bázis: 0/300}", "Hiba a toString() metódusban")


var jatek2 = new Jatek(-100);

console.assert(jatek2.getArany() === 0, "Hiba a konstruktorban, mert elfogadja a negatív kezdő aranyat")
jatek2.sebzes("kek", 300);
console.assert(jatek2.allapot() === "vesztett", "Hiba az allapot() metódusban")

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