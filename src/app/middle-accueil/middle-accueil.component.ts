import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
@Component({
  selector: 'app-middle-accueil',
  templateUrl: './middle-accueil.component.html',
  styleUrls: ['./middle-accueil.component.css']
})
export class MiddleAccueilComponent implements OnInit {
  Posts:any={}
  constructor(private post:PostService) { }

  ngOnInit(): void {
    

   
     
  }

}
