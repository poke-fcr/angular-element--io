import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent {

  @Input() message = ''

  @Output() time = new EventEmitter<any>()

  showTime(){
    this.time.emit({data: new Date().toISOString()})
  }
  
}
