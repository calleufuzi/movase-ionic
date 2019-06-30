import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  showLoad(){
		document.getElementById("loader").style.display = "flex"
	}
	hideLoad(){
		document.getElementById("loader").style.display = "none"
  }

}
