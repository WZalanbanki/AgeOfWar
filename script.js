var gameInterval = null;
var aranyInterval = null;
var ellensegInterval = null;
var jatek = new Jatek(50);
var harcosok = [];

var gameArea = document.querySelector(".csatater");
var aranyKiiras = document.querySelector(".arany");

function kiir() {
    aranyKiiras.innerHTML = jatek.getArany();
    document.querySelector(".kek-elet div").style.width = (jatek.getKekElet() / jatek.getMaxElet() * 100) + "%";
    document.querySelector(".piros-elet div").style.width = (jatek.getPirosElet() / jatek.getMaxElet() * 100) + "%";
}

function uzenet(cim, szoveg) {
    if (szoveg === undefined) {
        szoveg = "";
    }
    document.querySelector(".uzenet-cim").innerHTML = cim;
    document.querySelector(".uzenet-szoveg").innerHTML = szoveg;
    document.querySelector(".uzenet-hatter").classList.remove("d-none");
}

document.querySelector(".uzenet-gomb").addEventListener("click", () => {
    document.querySelector(".uzenet-hatter").classList.add("d-none");
});

function kepez(tipus, ar) {
    if (!gameInterval) {
        uzenet("Hiba", "Előbb indítsd el a játékot");
    } else if (jatek.vasarol(ar)) {
        harcosok.push(new Harcos("kek", tipus, ".csatater"));
        kiir();
    }
}

function keresEllenseg(h, tavolsag) {
    for (var i = 0; i < harcosok.length; i++) {
        var masik = harcosok[i];
        var kulonbseg = masik.getX() - h.getX();
        if (kulonbseg < 0) {
            kulonbseg = -kulonbseg;
        }
        if (masik.getCsapat() != h.getCsapat() && masik.getElet() > 0 && kulonbseg < tavolsag) {
            return masik;
        }
    }
    return null;
}

function frissit() {
    var tavolsag = 54;
    if (gameArea.offsetWidth < 600) {
        tavolsag = 36;
    }

    for (var i = 0; i < harcosok.length; i++) {
        var h = harcosok[i];
        var ellenseg = keresEllenseg(h, tavolsag);

        if (ellenseg != null) {
            ellenseg.sebzodik(h.getSebzes());
        } else if (h.elerteABazist(gameArea.offsetWidth)) {
            if (h.getCsapat() == "kek") {
                jatek.sebzes("piros", h.getSebzes());
            } else {
                jatek.sebzes("kek", h.getSebzes());
            }
        } else {
            h.lep();
        }
    }

    for (var j = harcosok.length - 1; j >= 0; j--) {
        if (harcosok[j].getElet() <= 0) {
            if (harcosok[j].getCsapat() == "piros") {
                jatek.hozzaad(harcosok[j].getJutalom());
            }
            harcosok[j].remove();
            harcosok.splice(j, 1);
        }
    }
    kiir();

    if (jatek.allapot() == "nyert") {
        stop();
        uzenet("Játék vége", "Gratulálok, nyertél!");
    } else if (jatek.allapot() == "vesztett") {
        stop();
        uzenet("Játék vége", "Sajnos vesztettél");
    }
}

document.querySelector(".inditas-gomb").addEventListener("click", () => {
    if (gameInterval) return;
    jatek = new Jatek(50);
    kiir();

    gameInterval = setInterval(frissit, 30);
    aranyInterval = setInterval(() => {
        jatek.hozzaad(5);
        kiir();
    }, 1000);
    ellensegInterval = setInterval(() => {
        var tipus = "katona";
        if (Math.random() < 0.25) {
            tipus = "nehez";
        }
        harcosok.push(new Harcos("piros", tipus, ".csatater"));
    }, 3500);
});

document.querySelector(".megallitas-gomb").addEventListener("click", () => {
    stop();
});

document.querySelector(".katona-gomb").addEventListener("click", () => kepez("katona", 15));
document.querySelector(".nehez-gomb").addEventListener("click", () => kepez("nehez", 50));

function stop() {
    clearInterval(gameInterval);
    clearInterval(aranyInterval);
    clearInterval(ellensegInterval);
    gameInterval = null;
    for (var i = 0; i < harcosok.length; i++) {
        harcosok[i].remove();
    }
    harcosok = [];
}