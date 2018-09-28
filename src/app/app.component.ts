import { Component } from '@angular/core';
import axios from 'axios';

let info=null;
let paginator={};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Skills in Angular 6';
  clientes=null;
  cantidad:number=0;
  selectClient:null;
  indice_start:number=0;
  count_pages:number=0;
  users_per_pages:number=5;
  pages=[];
  constructor(){
  	// Make a request for a user with a given ID
	axios.get('https://randomuser.me/api/?results=50')
	  .then((response)=>{
	    // handle success
	    console.log(response.data.results);
	    info=response.data.results;
	    this.cantidad=info.length;
	    this.count_pages=this.cantidad/this.users_per_pages;
	     //i Like to Preload All images the profile
	     for (var i = info.length - 1; i >= 0; i--) {
	     	var imageObject = new Image();
	        imageObject.src = info[i].picture.large;
	        info[i].key=i;
	     }

	     //order pages
	     for (var o =0; o < this.count_pages; o++) {
	     	var inicio=o*(this.users_per_pages-1);
	     	var final=inicio+this.users_per_pages;
	     	paginator[o]={page:o+1,start:inicio,end:final};	    		
	     	//this.pages[o]=new Array({page:o+1,start:inicio,end:final});
	     	this.pages[o]={page:o+1,start:inicio,end:final}	;
	     }
	     console.log(paginator)
	     console.log(this.pages)

	    this.clientes=info;
	    console.log(this.clientes);
	  })
	  .catch(function (error) {
	    // handle error
	    console.log(error);
	  })
	  .then(function () {
	    // always executed
	  });
  }

onSelect(obj): void {
  this.selectClient = obj;
  document.getElementById("modal").style.display="inline-block";
  console.log(obj)
}

closedModal(): void {
  this.selectClient = null;
  document.getElementById("modal").style.display="none";
}

changePage(obj):void{
	console.log(obj);
	this.indice_start=obj.start;
}


}
