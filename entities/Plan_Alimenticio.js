export class PlanAlimenticio{
    edad;
    pesoActual;
    medidaDeCintura;
    duracion;
    objetivos = [];
    comida = [];

    generarEvaluacion(){
        
    }

    agregarComida(comida){
        this.comida.push(comida);
    }

    agregarObjetivo(objetivo){
        this.objetivos.push(objetivo);
    }

    cantidadDeComidas(){
        return this.comida.length;
    }

    porcentajeDeObjetivosCumplidos(){
        let contador = 0;
        let arrObjetivos = this.objetivos;
        arrObjetivos.forEach(o => {
            if(o.estaCumplido){
                contador++;
            }
        })
        return contador * 100 / arrObjetivos.length;
    }
    
    calificacionFinal(){
        let porcentajeDeObjetivos = this.porcentajeDeObjetivosCumplidos();
        let calificacion;
        if(porcentajeDeObjetivos === 100){
            calificacion = 'Excelente';
        }else if (porcentajeDeObjetivos >= 60){
            calificacion = 'Muy Buena';
        }else if (porcentajeDeObjetivos >= 50){
            calificacion = 'Buena';
        } else{
            calificacion = 'Regular';
        }
        return calificacion;
    }

    cantidadDeTipoDeComida(tipoDeComida){
        return this.comida.filter((comida) => comida.tipo == tipoDeComida).length;
    }

    esFuerteEnProteinas(){
        let comidasAC = this.comida.filter((comida) => comida.tipo === 'AC');

        let comidasACSonProteicas = comidasAC.every((comida) => comida.porcentajeDeProteinas() >= 50);

        return comidasACSonProteicas;
    }

    esBienVerde(){
        let comidasAC = this.comida.filter((comida) => comida.tipo === 'AC');

        let comidasACSonVegetales = comidasAC.every((comida) => comida.porcentajeDeVegetales() >= 35);

        return comidasACSonVegetales;
    }
}