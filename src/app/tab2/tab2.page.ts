import {Component, OnInit} from '@angular/core'
import {Employee} from "../model";
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
import {ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators , NgForm , ValidatorFn , Validator} from "@angular/forms";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  dataSourse = new Array<Employee>();

  loginForm = new FormGroup({
    email: new FormControl('' , Validators.compose([])),
    password: new FormControl('' , Validators.compose([]))
  });

  constructor(private apiService: ApiService, private formbuilder: FormBuilder) {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['']
    });
  }

  value = 1;

  ngOnInit(): void {
    this.getRestApi();



  }

  formFuntion() {

  }

  onLogin() {

      console.log('everything is alright');

  }


  getRestApi(): void {
    this.apiService.getEmployess().subscribe((response: Employee[]) => this.dataSourse = response);
  }

}
