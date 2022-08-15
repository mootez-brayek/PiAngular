import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TranslationService } from '../service/translation.service';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

  targetLanguage:string='';
  inputText:string='';
  transalatedText='';
  title = 'ng-google-translate';
  model:any={}

  constructor(private Translation:TranslationService) { }

  ngOnInit(): void {
  }
  translate(){
    let model={
      "q": [this.inputText],
      "target": this.targetLanguage
    };
     this.Translation.translate(this.model).subscribe((response:any)=>{
      this.transalatedText=response.data.translations[0].translatedText
    })
  }

}
