import { Etat } from "./Etat";

export class Post{
    
	 idPost:number;
     etat:Etat ;
	
    content: String ;
	
	likes:number ;
	
	commenters:number ; 
    creationDate : String="";
    comm!: any[];


    constructor(idPost: number, etat: Etat, picture: string, content: string, likes: number, commenters:number,creationDate:String,comm:[]){

        this.idPost =idPost;
        this.etat = etat;
        
        this.content = content;
        this.likes = likes;
        this.commenters = commenters;
        this.creationDate=creationDate;
        this.comm=comm;
    
    }

}