import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-new-spinner',
  templateUrl: './new-spinner.component.html',
  styleUrls: ['./new-spinner.component.css']
})
export class NewSpinnerComponent implements OnInit {
  
  @Input () spinnerSize:any; 

  constructor() { }

  ngOnInit(): void {
  }

}
