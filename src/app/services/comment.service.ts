import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { enviroment } from '../enviroment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  http = inject(HttpClient)

  getComments(parentId: string = ''){
    let url = `${enviroment.apiBaseUrl}/comments`
    if(parentId){
      url+= `parentId=${parentId}`
    }
    this.http.get(url)
  }

  constructor() { }
}
