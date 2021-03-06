import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedServiceService } from "src/app/services/shared-service.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public back: SharedServiceService, private elementRef: ElementRef, private http: HttpClient,
    private fb: FormBuilder, private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.back.setMessage('first')
  }

}
