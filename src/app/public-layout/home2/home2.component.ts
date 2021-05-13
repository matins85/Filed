import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedServiceService } from "src/app/services/shared-service.service";


@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {

  constructor(public back: SharedServiceService, private elementRef: ElementRef, private http: HttpClient,
    private fb: FormBuilder, private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.back.setMessage('second')
  }

}
