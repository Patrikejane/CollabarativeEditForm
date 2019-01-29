import { Component, OnInit } from '@angular/core';
import { DsService } from './services/ds.service';
// Type deepstream with any
declare var deepstream: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  firstname;
  lastname;
  record;
  dname;
  rapidPageValue;
  name = [ "sunimal" , "damn" ];

  constructor(private dsService: DsService){}

  ngOnInit() {
    this.dsService.login(null,this.loginHandler)
    this.record = this.dsService.getRecord('jobId/' + 'job123' )

    this.record.subscribe((val) => {
      this.firstname = val.firstname;
      this.lastname = val.lastname;
      this.dname = val.dname;
      this.rapidPageValue = val.rapidPageValue;
    })
  }

  handleFnameChange(val){
    this.record.set('firstname', val);
  }
  handleLnameChange(val) {
    this.record.set('lastname', val);
  }
  handleDropChange(val) {
    this.record.set('dname', val);
  }
  handleTextChange(val) {
    this.record.set('rapidPageValue', val);
  }

    loginHandler(success, data){
    console.log('logged in', success, data);
  }
}



  // addChat() {

  //   const recordName = 'chat/' + this.ds.dsInstance.getUid();
  //   console.log(recordName);

  //   const chatRecord = this.ds.getRecord(recordName);
  //   chatRecord.set({username: this.username, text: this.text});
  //   this.text = '';
  //   // Update the chats list
  //   this.chats.addEntry(recordName);
  // }
