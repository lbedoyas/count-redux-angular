import { createReducer, on } from '@ngrx/store';
import { incrementar, decrementar, reset } from './contador.actions';


export const initialState = 18;

const _contadorReducer = createReducer(initialState,
    on( incrementar, state => state + 1),
    on( decrementar, state => state - 1),
    on( reset      , state => initialState )
);

export function contadorReducer(state, action) {
    return _contadorReducer(state, action);
}
