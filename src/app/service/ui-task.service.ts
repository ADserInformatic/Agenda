import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiTaskService {
  private showAddTassk: boolean = false;
  private subjet = new Subject<any>();

  constructor() { }

  toogleAddTask():void{
    this.showAddTassk = !this.showAddTassk;
    this.subjet.next(this.showAddTassk)
  }

  ontoggle(): Observable<any>{
    return this.subjet.asObservable();
  }
  cambiar(){
    console.log('que')
    return this.showAddTassk = true
  }
}
