import { MultiplicarAction, DividirAction } from './../contador.actions';
import { AppState } from './../../app.reducers';
import { Store } from '@ngrx/store';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [],
})
export class HijoComponent implements OnInit {
  //@Input() contador: number;
  //@Output() cambioContador = new EventEmitter<number>();

  contador: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => (this.contador = state.contador));
  }

  multiplicar() {
    const accion = new MultiplicarAction(3);
    this.store.dispatch(accion);
    //this.contador *= 2;
    //this.cambioContador.emit(this.contador);
  }

  dividir() {
    const accion = new DividirAction(3);
    this.store.dispatch(accion);
    //this.contador /= 2;
    //this.cambioContador.emit(this.contador);
  }

  resetNieto(nuevoContador) {
    this.contador = nuevoContador;
    //this.cambioContador.emit(nuevoContador);
  }
}
