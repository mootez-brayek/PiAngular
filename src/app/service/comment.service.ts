import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  addComment (idPost:number, comment:any) {
    return this.http.post("http://localhost:8083/PiDev/Comment/add/"+idPost,comment);}
  getComment(idPost:number, comment:any){
    return this.http.get("http://localhost:8083/PiDev/Comment/retrieveByPost/"+idPost,comment);}
    getCommentairs(){
      return this.http.get("http://localhost:8083/PiDev/Comment/retrieve");} 
       
}
