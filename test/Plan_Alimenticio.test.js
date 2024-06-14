import { Comida } from "../entities/Comida";
import { Ingrediente } from "../entities/Ingrediente";
import { Objetivo } from "../entities/Objetivo";
import { PlanAlimenticio } from "../entities/Plan_Alimenticio"

// ! TEST REQUERIMIENTO 1

test("Preguntamos la calificacion final de un atleta y nos devuelve 'Muy Buena'", () => {
    let planAlimenticio = new PlanAlimenticio();

    let objetivo1 = new Objetivo("Objetivo 1", true);
    let objetivo2 = new Objetivo("Objetivo 2", true);
    let objetivo3 = new Objetivo("Objetivo 3", false);

    planAlimenticio.agregarObjetivo(objetivo1);
    planAlimenticio.agregarObjetivo(objetivo2);
    planAlimenticio.agregarObjetivo(objetivo3);

    let resultado = planAlimenticio.calificacionFinal();

    expect(resultado).toBe('Muy Buena');
})

// ! TEST REQUERIMIENTO 1

test("Preguntamos la calificacion final de un atleta y nos devuelve 'Excelente'", () => {
    let planAlimenticio = new PlanAlimenticio();

    let objetivo1 = new Objetivo("Objetivo 1", true);
    let objetivo2 = new Objetivo("Objetivo 2", true);
    let objetivo3 = new Objetivo("Objetivo 3", true);

    planAlimenticio.agregarObjetivo(objetivo1);
    planAlimenticio.agregarObjetivo(objetivo2);
    planAlimenticio.agregarObjetivo(objetivo3);

    let resultado = planAlimenticio.calificacionFinal();

    expect(resultado).toBe('Excelente');
})

// ! TEST REQUERIMIENTO 1

test("Preguntamos la calificacion final de un atleta y nos devuelve 'Regular'", () => {
    let planAlimenticio = new PlanAlimenticio();

    let objetivo1 = new Objetivo("Objetivo 1", true);
    let objetivo2 = new Objetivo("Objetivo 2", false);
    let objetivo3 = new Objetivo("Objetivo 3", false);

    planAlimenticio.agregarObjetivo(objetivo1);
    planAlimenticio.agregarObjetivo(objetivo2);
    planAlimenticio.agregarObjetivo(objetivo3);

    let resultado = planAlimenticio.calificacionFinal();

    expect(resultado).toBe('Regular');
})

// ! TEST REQUERIMIENTO 1

test("Preguntamos la calificacion final de un atleta y nos devuelve 'Buena'", () => {
    let planAlimenticio = new PlanAlimenticio();

    let objetivo1 = new Objetivo("Objetivo 1", true);
    let objetivo2 = new Objetivo("Objetivo 2", false);
    let objetivo3 = new Objetivo("Objetivo 3", false);
    let objetivo4 = new Objetivo("Objetivo 4", true)

    planAlimenticio.agregarObjetivo(objetivo1);
    planAlimenticio.agregarObjetivo(objetivo2);
    planAlimenticio.agregarObjetivo(objetivo3);
    planAlimenticio.agregarObjetivo(objetivo4);

    let resultado = planAlimenticio.calificacionFinal();

    expect(resultado).toBe('Buena');
})

// ! TEST REQUERIMIENTO 2

test("Un plan alimenticio tiene 3 comidas", () => {
    let planAlimenticio = new PlanAlimenticio();

    let comida1 = new Comida();
    let comida2 = new Comida();
    let comida3 = new Comida();

    planAlimenticio.agregarComida(comida1);
    planAlimenticio.agregarComida(comida2);
    planAlimenticio.agregarComida(comida3);

    let resultado = planAlimenticio.cantidadDeComidas();

    expect(resultado).toBe(3);
})

// ! TEST REQUERIMIENTO 3

test("Quiero saber la cantidad de tipos de comida DM y me devuelve 2", () => {
    let planAlimenticio = new PlanAlimenticio();

    let comida1 = new Comida();
    comida1.tipo = 'DM';
    let comida2 = new Comida();
    comida2.tipo = 'AC';
    let comida3 = new Comida();
    comida3.tipo = 'DM';

    planAlimenticio.agregarComida(comida1);
    planAlimenticio.agregarComida(comida2);
    planAlimenticio.agregarComida(comida3);

    let resultado = planAlimenticio.cantidadDeTipoDeComida('DM');

    expect(resultado).toBe(2)
})

// ! TEST REQUERIMIENTO 3

test("Quiero saber la cantidad de tipos de comida AC y me devuelve 1", () => {
    let planAlimenticio = new PlanAlimenticio();

    let comida1 = new Comida();
    comida1.tipo = 'DM';
    let comida2 = new Comida();
    comida2.tipo = 'AC';
    let comida3 = new Comida();
    comida3.tipo = 'DM';

    planAlimenticio.agregarComida(comida1);
    planAlimenticio.agregarComida(comida2);
    planAlimenticio.agregarComida(comida3);

    let resultado = planAlimenticio.cantidadDeTipoDeComida('AC');

    expect(resultado).toBe(1);
})

// ! TEST REQUERIMIENTO 4

test("Quiero saber si un plan alimenticio es fuerte en proteinas y me devuelve true", () => {
    let planAlimenticio = new PlanAlimenticio();

    let comida1 = new Comida();
    comida1.tipo = 'AC';
    let ingrediente1 = new Ingrediente();
    ingrediente1.tipo = 'proteina';
    ingrediente1.porcentaje = 60;
    let ingrediente2 = new Ingrediente();
    ingrediente2.tipo = 'proteina';
    ingrediente2.porcentaje = 55;

    comida1.agregarIngrediente(ingrediente1);
    comida1.agregarIngrediente(ingrediente2);

    let comida2 = new Comida();
    comida2.tipo = 'DM';
    let ingrediente3 = new Ingrediente();
    ingrediente3.tipo = 'proteina';
    ingrediente3.porcentaje = 25;

    comida2.agregarIngrediente(comida2);

    planAlimenticio.agregarComida(comida1);
    planAlimenticio.agregarComida(comida2);

    let resultado = planAlimenticio.esFuerteEnProteinas();

    expect(resultado).toBe(true);
})

test("Quiero saber si un plan alimenticio es fuerte en proteinas y me devuelve false", () => {
    let planAlimenticio = new PlanAlimenticio();

    let comida1 = new Comida();
    comida1.tipo = 'AC';
    let ingrediente1 = new Ingrediente();
    ingrediente1.tipo = 'proteina';
    ingrediente1.porcentaje = 20;
    let ingrediente2 = new Ingrediente();
    ingrediente2.tipo = 'proteina';
    ingrediente2.porcentaje = 25;

    comida1.agregarIngrediente(ingrediente1);
    comida1.agregarIngrediente(ingrediente2);

    let comida2 = new Comida();
    comida2.tipo = 'DM';
    let ingrediente3 = new Ingrediente();
    ingrediente3.tipo = 'proteina';
    ingrediente3.porcentaje = 25;

    comida2.agregarIngrediente(comida2);

    planAlimenticio.agregarComida(comida1)
    planAlimenticio.agregarComida(comida2)

    let resultado = planAlimenticio.esFuerteEnProteinas();

    expect(resultado).toBe(false);
})

test("Quiero saber si un plan alimenticio es bien verde y me devuelve false", () => {
    let planAlimenticio = new PlanAlimenticio();

    let comida1 = new Comida();
    comida1.tipo = 'AC';
    let ingrediente1 = new Ingrediente();
    ingrediente1.tipo = 'vegetal';
    ingrediente1.porcentaje = 20;
    let ingrediente2 = new Ingrediente();
    ingrediente2.tipo = 'vegetal';
    ingrediente2.porcentaje = 25;

    comida1.agregarIngrediente(ingrediente1);
    comida1.agregarIngrediente(ingrediente2);

    let comida2 = new Comida();
    comida2.tipo = 'DM';
    let ingrediente3 = new Ingrediente();
    ingrediente3.tipo = 'proteina';
    ingrediente3.porcentaje = 25;

    comida2.agregarIngrediente(comida2);

    planAlimenticio.agregarComida(comida1)
    planAlimenticio.agregarComida(comida2)

    let resultado = planAlimenticio.esBienVerde();

    expect(resultado).toBe(false);
})