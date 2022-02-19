import { Component } from '@angular/core';
import { UiTaskService } from './service/ui-task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private tasks: UiTaskService
  ){

  }
  
  
  volver(){
    return this.tasks.cambiar()
  }
}
