import { Comida } from './Comida';

export class Colacion extends Comida {
  constructor() {
    super();
    this.tipo = 'colacion';
  }
}