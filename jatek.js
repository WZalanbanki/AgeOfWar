class Jatek {
    #arany;
    #kekElet;
    #pirosElet;
    #maxElet;

    constructor(kezdoArany) {
        this.setArany(kezdoArany);
        this.#maxElet = 300;
        this.#kekElet = this.#maxElet;
        this.#pirosElet = this.#maxElet;
    }

    setArany(arany) {
        if (arany >= 0) {
            this.#arany = arany;
        } else {
            this.#arany = 0;
        }
    }

    getArany() { return this.#arany; }
    getMaxElet() { return this.#maxElet; }
    getKekElet() { return this.#kekElet; }
    getPirosElet() { return this.#pirosElet; }

    hozzaad(osszeg) {
        if (osszeg <= 0) {
            return false;
        }
        this.#arany = this.#arany + osszeg;
        return true;
    }

    vasarol(ar) {
        if (ar <= 0 || ar > this.#arany) {
            return false;
        }
        this.#arany = this.#arany - ar;
        return true;
    }

    sebzes(csapat, mennyit) {
        if (mennyit <= 0) {
            return false;
        }
        if (csapat == "kek") {
            this.#kekElet = this.#kekElet - mennyit;
            if (this.#kekElet < 0) {
                this.#kekElet = 0;
            }
        } else if (csapat == "piros") {
            this.#pirosElet = this.#pirosElet - mennyit;
            if (this.#pirosElet < 0) {
                this.#pirosElet = 0;
            }
        } else {
            return false;
        }
        return true;
    }

    allapot() {
        if (this.#pirosElet <= 0) return "nyert";
        if (this.#kekElet <= 0) return "vesztett";
        return "fut";
    }

    toString() {
        return "{Arany: " + this.#arany + ";Kék bázis: " + this.#kekElet + "/" + this.#maxElet +
            ";Piros bázis: " + this.#pirosElet + "/" + this.#maxElet + "}";
    }
}