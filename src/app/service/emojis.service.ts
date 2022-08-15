import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmojisService {

  constructor(private http:HttpClient) { }

  addEmojis (idPost:number, emojis:any) {
    return this.http.post("http://localhost:8083/PiDev/Emojis/add/"+idPost,emojis);}

}
