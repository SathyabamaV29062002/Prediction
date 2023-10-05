import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getAllUsers() {
      throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }
  postUser(data : any)
  {
    return this.http.post<any>("http://localhost:3000/posts", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getUser()
  {
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateUser(data : any,id: number)
  {
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteUser(id: number)
  {
    return this.http.delete<any>("http://localhost:3000/posts"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
