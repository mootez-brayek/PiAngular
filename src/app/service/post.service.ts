import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient)  { }



  Publier (body:any,userfile:any) {
    const formData = new FormData();
    formData.append('file',userfile)
    formData.append('body',JSON.stringify(body) )
    return this.http.post("http://localhost:8083/PiDev/Post/add",formData);}




  Get(){
      return this.http.get("http://localhost:8083/PiDev/Post/retrieve");}


  Delete(idPost:number){
    return this.http.delete("http://localhost:8083/PiDev/Post/delete/"+idPost);
  }





}
