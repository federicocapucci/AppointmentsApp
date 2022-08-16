import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-appointments',
  templateUrl: './create-appointments.component.html',
  styleUrls: ['./create-appointments.component.css'],
})
export class CreateAppointmentsComponent implements OnInit {
  name: string = '';
  date: string = '';
  time: string = '';
  symptoms: string = '';
  invalidForm: boolean = false;
  @Output() newAppointment = new EventEmitter<any>();
  



  constructor() { }

  ngOnInit(): void { }

  sendAppointment() {
    if (
      this.name == '' ||
      this.date == '' ||
      this.time == '' ||
      this.symptoms == ''
    )
      this.invalidForm = true;
    else {
      this.invalidForm = false;

      //create new appointment object
      const APPOINTMENT = {
        name: this.name,
        date: this.date,
        time: this.time,
        symptoms: this.symptoms
      }
      
      //send it to the parent
      this.newAppointment.emit(APPOINTMENT);
      
      this.cleanFormFields()
    }
  }

  cleanFormFields(){
     this.name = "";
     this.date = "";
     this.time = "";
     this.symptoms = "";
  }
}
