import {
  INCREMENTAR,
  DECREMENTAR,
  MULTIPLICAR,
  DIVIDIR,
  actions,
  MultiplicarAction,
  DividirAction,
  RESET,
} from './contador.actions';
import { Action } from '@ngrx/store';

export function contadorReducer(state: number = 10, action: actions) {
  const accion = {
    [INCREMENTAR]: function () {
      return state + 1;
    },
    [DECREMENTAR]: function () {
      return state - 1;
    },
    [MULTIPLICAR]: function () {
      return state * (action as MultiplicarAction).payload;
    },
    [DIVIDIR]: function () {
      return state / (action as DividirAction).payload;
    },
    [RESET]: function () {
      return 0;
    },
    default: function () {
      return state;
    },
  };

  return (accion[action.type] || accion['default'])();
}
