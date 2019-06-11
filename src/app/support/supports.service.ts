  import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SupportsService {
 
  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(map(data => {return data}))
  }
  supports = [
    {name:'John', age:'40', email:"john@example.com"},
    {name:'Jill', age:'32', email:"mary@example.com"},
    {name:'Morison', age:'39', email:"july@example.com"},
    {name:'Billy', age:'50', email:"jakey@example.com"},
  ]
}
