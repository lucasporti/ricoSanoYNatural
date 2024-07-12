import { Comida } from './Comida';

export class Bebida extends Comida {
  constructor() {
    super();
    this.tipo = 'bebida';
  }
}