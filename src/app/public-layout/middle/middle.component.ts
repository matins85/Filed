import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { First } from 'src/app/models/Sharedform';
import { SharedServiceService } from "src/app/services/shared-service.service";


// state
import { select, Store } from '@ngrx/store';
import { User } from 'src/app/models/storeUser'
import * as konpayActions from 'src/app/actions/User.action';
import { AppState, selectAllUser} from 'src/app/reducers/index';
import { AddUser, RemoveUser } from 'src/app/actions/User.action';



@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {

  @Output() event = new EventEmitter<any>()

  @ViewChild('fform') feedbackFormDirective: any;


  feedbackForm!: FormGroup;
  feedback?: First;
  disabled = true;
  stateUserData: any;
  data: any;


  formErrors: any= {
    'budget': ''
  };

  validationMessages: any = {
    'budget': {
      'required': 'required.'
    }
  };

  
  constructor(public back: SharedServiceService, private elementRef: ElementRef, private http: HttpClient,
    private fb: FormBuilder, private snackBar: MatSnackBar,public store: Store<AppState>,
    private router: Router
    ) {

      this.createForm();

      this.stateUserData = store.select(selectAllUser);
  
  }


  // form1
  createForm() {
    this.feedbackForm = this.fb.group({
      budget: ['', [Validators.required ] ],
      choose: ['yes'],
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors ) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }


  onSubmit() {    
    this.feedback = this.feedbackForm.value;

    this.back.setMessage2(this.feedback)
    this.router.navigate(['/Second']);
    
    this.feedbackForm.reset({
      budget: '',
      choose: 'yes'
    });
  }

  home() {
    this.store.dispatch(new RemoveUser([{id: 1, data: []}]));
    this.back.setMessage("first")
    this.router.navigate(["/First"])
  }



  ngOnInit(): void {
      

      this.stateUserData.forEach((e: any) => {
        if(e.length > 0 ) {

        this.data = e[0].data
          this.back.setMessage("third")
      }else {
      }
      });

    

  }


}
