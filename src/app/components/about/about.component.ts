import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Output() volverGreen = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  cambie(){
    this.volverGreen.emit()
  }
}
