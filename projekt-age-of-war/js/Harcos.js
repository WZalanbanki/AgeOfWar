class Harcos {
    #x;
    #csapat;
    #tipus;
    #elet;
    #maxElet;
    #sebzes;
    #sebesseg;
    #jutalom;
    #szelesseg;
    #kep;
    #element;
    #eletcsik;

    constructor(csapat, tipus, container) {
        this.setCsapat(csapat);
        this.setTipus(tipus);
        this.createHarcos(container);
    }

    setCsapat(csapat) {
        if (csapat == "kek" || csapat == "piros") {
            this.#csapat = csapat;
        } else {
            this.#csapat = "kek";
        }
    }

    setTipus(tipus) {
        if (tipus == "nehez") {
            this.#tipus = "nehez";
            this.#maxElet = 150;
            this.#sebzes = 1;
            this.#sebesseg = 1;
            this.#jutalom = 60;
            this.#szelesseg = 70;
        } else {
            this.#tipus = "katona";
            this.#maxElet = 50;
            this.#sebzes = 0.5;
            this.#sebesseg = 2;
            this.#jutalom = 20;
            this.#szelesseg = 50;
        }
        this.#elet = this.#maxElet;
        var szin = "red_";
        if (this.#csapat == "kek") {
            szin = "blue_";
        }
        var nev = "heavy";
        if (this.#tipus == "katona") {
            nev = "soldier";
        }
        this.#kep = "img/" + szin + nev + ".png";
    }

    getTipus() { return this.#tipus; }
    getX() { return this.#x; }
    getCsapat() { return this.#csapat; }
    getSebzes() { return this.#sebzes; }
    getJutalom() { return this.#jutalom; }
    getElet() { return this.#elet; }
    getSzelesseg() { return this.#szelesseg; }

    bazisSzelesseg(teruletSzelesseg) {
        if (teruletSzelesseg < 600) {
            return 60;
        }
        return 90;
    }

    createHarcos(container) {
        var terulet = document.querySelector(container);
        var bazis = this.bazisSzelesseg(terulet.offsetWidth);
        if (terulet.offsetWidth < 600) {
            this.#szelesseg = this.#szelesseg - this.#szelesseg * 3 / 10;
        }
        if (this.#csapat == "kek") {
            this.#x = bazis;
        } else {
            this.#x = terulet.offsetWidth - bazis - this.#szelesseg;
        }

        this.#element = document.createElement("div");
        this.#element.classList.add("harcos");
        this.#element.style.width = this.#szelesseg + "px";
        this.#element.style.height = (this.#szelesseg * 1.3) + "px";
        this.#element.style.transform = "translateX(" + this.#x + "px)";
        this.#element.innerHTML = '<div class="elet"><div></div></div><img src="' + this.#kep + '" alt="harcos">';
        this.#eletcsik = this.#element.querySelector(".elet div");
        terulet.appendChild(this.#element);
    }

    lep() {
        if (this.#csapat == "kek") {
            this.#x = this.#x + this.#sebesseg;
        } else {
            this.#x = this.#x - this.#sebesseg;
        }
        this.#element.style.transform = "translateX(" + this.#x + "px)";
    }

    elerteABazist(szelesseg) {
        var bazis = this.bazisSzelesseg(szelesseg);
        if (this.#csapat == "kek") {
            return this.#x + this.#szelesseg >= szelesseg - bazis;
        }
        return this.#x <= bazis;
    }

    sebzodik(mennyit) {
        if (mennyit <= 0) {
            return false;
        }
        this.#elet = this.#elet - mennyit;
        if (this.#elet < 0) {
            this.#elet = 0;
        }
        this.#eletcsik.style.width = (this.#elet / this.#maxElet * 100) + "%";
        return true;
    }

    remove() {
        this.#element.remove();
    }

    toString() {
        return "{" + this.#csapat + ";" + this.#tipus + ";Élet: " + this.#elet + "/" + this.#maxElet + "}";
    }
}
