import { AfterViewInit, Component, OnInit } from '@angular/core';
import { from, fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'fun-obs',
  templateUrl: './fun-obs.component.html',
  styleUrls: ['./fun-obs.component.scss']
})
export class FunObsComponent implements OnInit,AfterViewInit {


  constructor(){
    console.log(this.postArray,'postArray')
    this.postArrayObservable$.subscribe(res => {
      console.log(res,'postArrayObservable')
    })
    console.log(this.functionobser$())
// ---------------------------------------------
    this.promiseObservable$.subscribe(res => {
      console.log(res,'promiseObservable')
    })

  // ------------------------------------
  this.custObservable$.subscribe(res => {
    console.log(res,'custObservable')
  })
  // =--------------------------?

  }

  postArray = [
    {id:1,name:'pandu'},
    {id:2,name:'teju'},
    {id:3,name:'sravani'}
  ]

  postArrayObservable$ = from(this.postArray);
  observa$ = new Observable((observer) => {
    console.log("observable call")
    observer.next("hello pandu");
    observer.next("observable return multiple values");
  });

  assigndata(){
    // this.observa$.next("hello")
    this.observa$.subscribe(res =>{
      console.log(res);
    })
  }

  functionobser$(){
    console.log("function return one value");
    return "yes function called..!"
    return "yes function called..!" // dead code 
  }
// ---------------------------------------------

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolve the  promise, sending data..!")
    },3000)
  })

  promiseObservable$ = from(this.promise);

  ngAfterViewInit(){
    fromEvent(document.getElementById('click-button')!,'click').subscribe(res => {
      console.log(res,'DOM observables')
    })
  }
  // <!-- custom observables creating -->
  custObservable$ = new Observable<number>(observer => {
    for(let i=0;i<=5;i++){
      // let timer = 0;
      // setTimeout(() => {
      //   observer.next(i);
      // }, timer + 2000);
      // ----------------------
      if(i === 4){
        observer.error("unknown error. i value is 4. ")
      }
      observer.next(i);
    }
    // observer.complete();
  })

  // -----------------------------------
  // creating the observer by object
  
 

  ngOnInit() {
  const objectObservable$ = new Observable<number>(observer => {
      for(let i=0;i<=5;i++){
        observer.next(i);
      }
    })
    var observer = {
      next: (data: number) => { console.log("creating the observer by object and subscribe" + data)},
      error: (error: string) => { console.log(error)},
      complete: () => { console.log("complete all done") }
    }
     //1nd way of subscribe
    objectObservable$.subscribe(observer);
    //2nd way of subscribe
    objectObservable$.subscribe({
      next: (data: number) => { console.log(" observer 2nd way " + data)},
      error: (error: string) => { console.log(error)},
      complete: () => { console.log("complete all done") }
    });

   //3rd way of subscribe
   objectObservable$.subscribe((res) => {
     console.log(" observer 3rd way " + res)
   }
  //  ,error => {
  //    console.log(error)
  //  },
  //  () => {
  //   console.log("complete done")
  //  }
   );
  }

}
