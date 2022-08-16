import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.css']
})
export class ListAppointmentsComponent implements OnInit {
  
  @Input() appointmentsListChild: any;
  @Output() emitIndex = new EventEmitter<Number>();


  constructor() { }

  ngOnInit(): void {
  }

  sendIndexForDeletion(index :number) :void{
    this.emitIndex.emit(index);

  }

}
