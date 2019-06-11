import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { 
    
  }
   blogs = [
     {text:"Some quick example text to build on the card title and make up the bulk of the card's content.",  url:"https://www.bloemfonteincourant.co.za/wp-content/uploads/2018/07/digital-coding-785.jpg"},
     {text:"Some quick example text to build on the card title and make up the bulk of the card's content.",  url:"https://think360studio.com/wp-content/uploads/2017/12/Learn-coding-online.jpeg"},
     {text:"Some quick example text to build on the card title and make up the bulk of the card's content.",  url:"https://think360studio.com/wp-content/uploads/2017/12/Learn-coding-online.jpeg"},
     {text:"Some quick example text to build on the card title and make up the bulk of the card's content.",  url:"https://soldbyres.b-cdn.net/wp-content/uploads/2018/08/000.jpg"}
   ]
  ngOnInit() {
  }

}
