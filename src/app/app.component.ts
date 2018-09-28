import { Component } from '@angular/core';
import axios from 'axios';

let info=null;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Skills in Angular 6';
  clientes=null;
  cantidad=0;
  selectClient:null;

  constructor(){
  	// Make a request for a user with a given ID
	axios.get('https://randomuser.me/api/?results=10')
	  .then((response)=>{
	    // handle success
	    console.log(response.data.results);
	    info=response.data.results;
	    this.clientes=info;
	    this.cantidad=info.length;
	    console.log(this.clientes);
	     //i Like Preload All images the profile
	     for (var i = info.length - 1; i >= 0; i--) {
	     	var imageObject = new Image();
	        imageObject.src = info[i].picture.large;
	     }
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


}
