import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'cancelingobser',
  templateUrl: './cancelingobser.component.html',
  styleUrls: ['./cancelingobser.component.scss']
})
export class CancelingobserComponent implements OnInit {

  constructor() { }
  timerSubscription$ = new Subscription()
  ngOnInit(){
   const newObservables$ = interval(1000);
   
   this.timerSubscription$ = newObservables$.subscribe(res => {
     console.log(new Date().toLocaleTimeString() + ' ' + res);
   })
  }
  cancelTimer(){
    console.log("subscription cancelled");
    this.timerSubscription$.unsubscribe();
  }

}
