import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etat } from '../Models/Etat';
import { EmojisService } from '../service/emojis.service';
import { PostService } from '../service/post.service';
import Swal from 'sweetalert2';
import { CommentService } from '../service/comment.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  idPost:any;
  CreationDateComment:any;
  Posts:any={}
  body:any={}
  userFile: any;
  message: string="";
  imagePath: any="";
  imgURL: any;
  Emojis:any={}
  Comment:any={}
  Commenters:any={}

  etat = Etat;
  Keysr(): Array<string> {
    var Keys = Object.keys(this.etat);
    return Keys;
  }
  constructor(private post:PostService,
              private emojis:EmojisService,
              private comment:CommentService) { }
  ngOnInit(): void {
    this.get();
  }
OnSubmit1(){
 this.post.Publier(this.body,this.userFile).subscribe({
      next:(data:any)=>{
      this.get();
      this.body={}
      window.location.reload();
      Swal.fire(
        'Post has been added!',
        'success'
     ) 
        },
        error:(err:any)=>{    
          console.log(err) 
        },
        complete:()=>{},
    })
  }
get(){
    this.post.Get().subscribe({
      next:(data:any)=>{

        this.Posts=data
       
      console.log(data)
        },
        error:(err:any)=>{
          console.log(err)
        
        },
        complete:()=>{},
    
    })
  }
onSelectFile(event:any) {
    console.log("right me")
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
     // this.f['profile'].setValue(file);
 
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
    }}

OnLike(idPost:any){
     
      console.log(this.idPost)
      this.Emojis.type="ADORE"
      window.location.reload();
      this.emojis.addEmojis(idPost,this.Emojis).subscribe({
        next:(data:any)=>{
  console.log("mchet");
 this.get()

          },
          error:(err:any)=>{
            console.log(err)
          
          },
          complete:()=>{},
      
      })
    }


OnDelete(idPost:number){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.post.Delete(idPost).subscribe({
        next:(data:any)=>{
  console.log("mchet");
  this.get();
  window.location.reload();
  this.body={}

          },
          error:(err:any)=>{
            console.log(err)
          
          },
          complete:()=>{},
      
      })
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
  }


 OnCommment(idPost:any){
     
      this.comment.addComment(idPost,this.Comment).subscribe({
      next:(data:any)=>{
      console.log("mchet");
      this.get()
      window.location.reload();

          },
          error:(err:any)=>{
            console.log(err)
            window.location.reload();
          },
          complete:()=>{},
      
      })
    }
    OnGetCommment(idPost:any){

      this.comment.getComment(idPost,this.Comment).subscribe({
        next:(data:any)=>{
        console.log(data);
        console.log(this.Comment.content);
       
        
  
            },
            error:(err:any)=>{
              console.log(err)
              window.location.reload();
            },
            complete:()=>{},
        
        })
    }

      

}

