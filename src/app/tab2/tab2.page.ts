import {Component, OnInit} from '@angular/core'
import {Employee} from "../model";
import {ApiService} from "../api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  dataSourse = new Array<Employee>() ;

  constructor(private apiService: ApiService) {}

  value = 1;
  ngOnInit(): void {
    this.getRestApi();

  }

  getRestApi(): void {
    this.apiService.getEmployess().subscribe((response: Employee[]) => this.dataSourse = response );
  }

}
