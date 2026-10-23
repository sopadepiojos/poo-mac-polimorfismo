// ==========================================
// 1: CLASE PADRE Y CÍRCULO
// ==========================================
class Figura {
  #nombre;

  constructor(nombre) {
    this.#nombre = nombre;
  }

  getNombre() {
    return this.#nombre;
  }

  calcularArea() {
    return 0;
  }

  calcularPerimetro() {
    return 0;
  }
}

class Circulo extends Figura {
  #radio
  constructor(radio) {
    super("Circulo")
    this.#radio = radio
    
  }

  calcularArea() {
    return 3.1416 * this.#radio * this.#radio;
  }

  calcularPerimetro() {
    return 2 * 3.1416 * this.#radio
  }
}

// ==========================================
// 2: RECTÁNGULO
// ==========================================
class Rectangulo extends Figura {
  #base
  #altura
  constructor() {
    super("Rectángulo")
    this.#base = base
    this.#altura = altura
  }

  calcularArea() {
    return this.#base * this.#altura;
  }

  calcularPerimetro() {
    return 2 * (this.#base + this.#altura)
  }
}

// ==========================================
// 3: TRIÁNGULO RECTÁNGULO
// ==========================================
class TrianguloRectangulo extends Figura {
    #base;
    #altura;
    #lado2;
    #lado3;
  constructor(base, altura, lado2, lado3) {
    super("Triángulo");
    this.#base = base;
    this.#altura = altura;
    this.#lado2 = lado2;
    this.#lado3 = lado3;
  }

  calcularArea() {
    return (this.#base * this.#altura) / 2;
  }

  calcularPerimetro() {
    return this.#base + this.#lado2 + this.#lado3;
  }
}
// ==========================================
// 4: ZONA DE PRUEBAS
// ==========================================
const c = new Circulo(5);
const r = new Rectangulo(4, 6);
const t = new Triangulo(3, 4, 4, 5);

console.log(c.getNombre());
console.log("Área:", c.getArea());
console.log("Perímetro:", c.getPerimetro());

console.log(r.getNombre());
console.log("Área:", r.getArea());
console.log("Perímetro:", r.getPerimetro());

console.log(t.getNombre());
console.log("Área:", t.getArea());
console.log("Perímetro:", t.getPerimetro());
