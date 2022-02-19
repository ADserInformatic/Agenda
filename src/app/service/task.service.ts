import { Injectable } from '@angular/core';
import {TASKS} from '../mock_tasks'
import {Task} from '../task'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable, of} from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(
    private http: HttpClient
  ) { }

  getTask(): Observable <Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url)
  }
  updateTaskReminder(task: Task): Observable<Task>{
    const usl = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(usl, task, httpOptions)
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }
}
