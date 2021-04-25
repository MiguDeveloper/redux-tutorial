import { AppState } from './app.reducers';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  IncrementarAction,
  DecrementarAction,
} from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'redux-tutorial';
  contador: number;

  constructor(private store: Store<AppState>) {
    //this.contador = 10;
    this.store.subscribe((state) => {
      console.log(state);
      this.contador = state.contador;
    });
  }

  incrementar() {
    const accion = new IncrementarAction();

    this.store.dispatch(accion);
    //++this.contador;
  }

  decrementar() {
    const accion = new DecrementarAction();

    this.store.dispatch(accion);
    /*const partial = this.contador - 1;
    if (partial < 0) {
      this.contador = 0;
    } else {
      --this.contador;
    }*/
  }
}
