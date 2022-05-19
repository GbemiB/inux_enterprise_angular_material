import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  exForm: FormGroup = new FormGroup({});
  public data: any;
  url?: string;
  hide: boolean = true;
  getIdtypes: any;
  idTypes: any;
  userdata: any;
  currentUser?: User;
  showPassword = false;

  constructor(private fb: FormBuilder,
    private notify: NotificationService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.exForm = this.fb.group({
      username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  login() {

    const data = {
      email: this.exForm.value.username,
      password: this.exForm.value.password
    }
    this._router.navigateByUrl('/trans');
    this.notify.success("Login successful", "dismiss");
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.exForm.controls[controlName].hasError(errorName);
  }

  public logout(): void {
  }


}




