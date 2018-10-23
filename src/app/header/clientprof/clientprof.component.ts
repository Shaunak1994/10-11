import { Component, OnInit, Input } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-clientprof',
  templateUrl: './clientprof.component.html',
  styleUrls: ['./clientprof.component.css']
})
export class ClientprofComponent implements OnInit {
 // @Input() clientInfo = [{ row1: '' , row2: '' }];

  // onDataAdded(clientData: { row1: string, row2: string }) {
  //   this._addnewclientcomponent.dataCreated.pipe({
  //     row1: clientData.row1,
  //     row2: clientData.row2
  //   });
  // }
  data: string;

  constructor( ) { }

  ngOnInit() {
    this.data = sessionStorage.getItem('myData');
    console.log(this.data);
  }

}
