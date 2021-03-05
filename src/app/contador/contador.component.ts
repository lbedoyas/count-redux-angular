import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as actions from './contador.actions';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador')
    .subscribe( contador => this.contador = contador);
   }

  ngOnInit(): void {
  }


  incrementar(){

    this.store.dispatch( actions.incrementar()  );

  }

  decrementar(){
    this.store.dispatch(  actions.decrementar()  );
  }


}
