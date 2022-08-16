import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appointmentsListParent : any[] = [];

  addAppointment(app :any){
    this.appointmentsListParent.push(app);
    localStorage.setItem('appointments',JSON.stringify(this.appointmentsListParent));    
  }

  deleteAppointment(index :any){
    this.appointmentsListParent.splice(index, 1);
    localStorage.setItem('appointments',JSON.stringify(this.appointmentsListParent));    
  }
  loadAppointments(){
    this.appointmentsListParent = JSON.parse(localStorage.getItem('appointments') || ""); ;
  }

  ngOnInit():void{
    this.loadAppointments()
  }


}
