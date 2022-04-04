import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorStatus: number | null;
  errorMessage: string | null;

  constructor() {

    this.errorStatus = 0;
    this.errorMessage = "";
  }

  ngOnInit(): void {

    
  }

}
