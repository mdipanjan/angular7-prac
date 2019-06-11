import { Component, OnInit } from '@angular/core';
import { SupportsService } from './supports.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']  
})
export class SupportComponent implements OnInit {
  public supports = []
  public users:any = []
  constructor(private _newService: SupportsService) { 
    
  }

  ngOnInit() {
    this.supports = this._newService.supports
    this._newService.getData()
    .subscribe(resp => {
      this.users = resp;
      console.log(this.users)
    })
   
  }

}
