interface AreaCalculavel {

    calculaArea(): number;

}

class Retangulo implements AreaCalculavel {

    constructor(private altura: number, private lado: number) {}

    calculaArea(): number {

        return this.altura * this.lado;
    }
}

class Quadrado implements AreaCalculavel {

    constructor(private lado: number) {}

    calculaArea(): number {

        return this.lado * this.lado;
    }
}


class Circulo implements AreaCalculavel {

    constructor(private raio: number) {}

    calculaArea() {

        return Math.PI * this.raio * this.raio;
    }
}

class CalculadorDeArea {

    static calcula(...areas: AreaCalculavel[]): number {

        return areas.reduce((a, b) => a + b.calculaArea(), 0)
    }
}


const quadrado = new Quadrado(30);
const retangulo = new Retangulo(50, 30);
const circulo = new Circulo(20);

const total = CalculadorDeArea.calcula(quadrado, retangulo, circulo);
console.log(total);
