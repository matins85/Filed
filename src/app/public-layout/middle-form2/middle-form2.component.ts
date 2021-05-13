import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Second } from 'src/app/models/Sharedform';

import { SharedServiceService } from "src/app/services/shared-service.service";
import { PaymentService } from 'src/app/services/payment.service';


// state
import { select, Store } from '@ngrx/store';
import { User } from 'src/app/models/storeUser'
import * as konpayActions from 'src/app/actions/User.action';
import { AppState, selectAllUser} from 'src/app/reducers/index';
import { AddUser } from 'src/app/actions/User.action';


@Component({
  selector: 'app-middle-form2',
  templateUrl: './middle-form2.component.html',
  styleUrls: ['./middle-form2.component.scss']
})
export class MiddleForm2Component implements OnInit {

  @Input() data?: any;

  @ViewChild('fform') feedbackFormDirective: any;


  feedbackForm!: FormGroup;
  feedback?: Second;
  feedback2: any;
  disabled = true;
  isSaving: boolean = false
  stateUserData: any;

  

  formErrors: any = {
    'firstname': '',
    'lastname': '',
    'phoneNo': '',
    'email': '',
    'budget': '',
    'company_name': '',
  };

  validationMessages: any = {
    'firstname': {
      'required':      'Firstname is required.',
      'minlength':     'Firstname must be at least 2 characters long.',
      'maxlength':     'Firstname cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Lastname is required.',
      'minlength':     'Lastname must be at least 2 characters long.',
      'maxlength':     'Lastname cannot be more than 25 characters long.'
    },
    'company_name': {
      'required':      'company name is required.',
      'minlength':     'company name must be at least 2 characters long.',
      'maxlength':     'company name cannot be more than 40 characters long.'
    },
    'phoneNo': {
      'required':      'phone no. is required.',
      'pattern':       'phone no. must contain only numbers.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
    'budget': {
      'required':      'required.'
    },
    
  };

  
  constructor(private back: SharedServiceService, private elementRef: ElementRef, private http: HttpClient,
    private fb: FormBuilder, private snackBar: MatSnackBar,
    private router: Router, private payment: PaymentService, public store: Store<AppState>
    ) {
      this.createForm();

        this.stateUserData = store.select(selectAllUser);

  
  }

// form1
  createForm() {
    this.feedbackForm = this.fb.group({
      phoneNo: ['', [Validators.required,  Validators.pattern ] ],
      country: ['Romania(Roman)'],
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      company_name: ['None', [Validators.required, Validators.minLength(2), Validators.maxLength(40)] ],
      budget: ['', [Validators.required ] ],
      email: ['', [Validators.required, Validators.email] ],

    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged1(data));

    this.onValueChanged1(); // (re)set validation messages now
  }


  onValueChanged1(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
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
    this.isSaving = true
    this.feedback = this.feedbackForm.value;
    const data = {
        "budget": this.feedback?.budget,
        "company": this.feedback?.conpany_name,
        "email": this.feedback?.email,
        "phone": this.feedback?.phoneNo,
        "country": this.feedback?.country,
        "firstname": this.feedback?.firstname,
        "lastname": this.feedback?.lastname
    }

    this.payment.POST('https://reqres.in/api/posts').subscribe(
      datas=> {
        this.isSaving = false;
        this.feedbackFormDirective.resetForm();
        this.store.dispatch(new AddUser([{id: 1, data: data}]));
        this.snackBar.open("Success", "X", {
          duration: 5000,
          panelClass: "success"
        });
      },

      err=> {
        this.isSaving = false
        this.snackBar.open(err, "X", {
          duration: 5000,
        });
      }
    )

  }


  ngOnInit(): void {
    if (this.back.getMessage2() === undefined) {
      this.router.navigate(["/First"])
    } else {
      this.feedback2 = this.back.getMessage2()
    }
    
  }



}
