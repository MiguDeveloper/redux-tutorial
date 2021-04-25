import { AppState } from './../../app.reducers';
import { Store } from '@ngrx/store';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [],
})
export class NietoComponent implements OnInit {
  contador: number;
  //@Input() contador: number;
  //@Output() cambioContador = new EventEmitter<number>();

  constructor(private store: Store<AppState>) {
    this.store.subscribe((state) => (this.contador = state.contador));
  }

  ngOnInit(): void {}

  reset() {
    const accion = new ResetAction();
    this.store.dispatch(accion);
    //this.contador = 0;
    //this.cambioContador.emit(this.contador);
  }
}
