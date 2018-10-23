import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl} from '@angular/forms';
import { NewClient } from '../../utils/Models/newClient';

@Component({
  selector: 'app-addnewclient',
  templateUrl: './addnewclient.component.html',
  styleUrls: ['./addnewclient.component.css']
})
export class AddnewclientComponent implements OnInit {
  // @Output() dataCreated = new EventEmitter<{row1: string, row2: string}>();
 // row1 = '';
  // row2 = '';
 // element: { row1: 'string', row2: 'string'};
 // data = [ ];
  //newClient: NewClient
  data: any;

@ViewChild('f') Form: NgForm;

  constructor( private  _activateRoute: ActivatedRoute,
               private _router: Router) { }


  onSubmit(row1): void {
    sessionStorage.setItem('myData', row1.value )
    this._router.navigate(['/clientprof']);

    // this.data.push(
      // this.row2,
      // this.row1
  // ;
    // this.dataCreated.emit({
    //   row1: this.row1,
    //   row2: this.row2
    // });
  // console.log(this.Form);
  }

  ngOnInit() {
  }


}
