import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import  {Task} from '../../task'
import { UiTaskService } from '../../service/ui-task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTTask: boolean = false;
  subscription?: Subscription;

  constructor(
    private uiservice: UiTaskService
  ) { 
    this.subscription = this.uiservice.ontoggle().subscribe(vallue =>{ this.showAddTTask = vallue })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text == ""){
      alert('Please add a task!')
      return
    }
    const {text, day, reminder} = this
    const newTask = { text, day, reminder}
    this.onAddTask.emit(newTask)

  }

}
