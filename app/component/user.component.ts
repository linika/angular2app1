import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hey ! {{name}}.</h1>
    		<p><strong>Email</strong>:{{email}}</p>
    		<p><strong>Address</strong>:{{Address.area}},{{Address.city}},{{Address.state}}</p>
    		<button (click)="togglebutton()">{{showHobbies?"hide hobby":"show hobbies"}}</button>
    		<div *ngIf="showHobbies">
	    		<h3>Hobbies</h3>
	    		<ul>
	    			<li *ngFor="let Hobby of Hobbies">{{Hobby}}</li>
	    			<form (submit)="addHobby(hobby.value)">
	    				<label>Add hobbies:</label><br/>
	    				<input type="text" #hobby/><br/>
	    			</form>
	    		</ul>
	    	</div>
	    	<form>
	    		<label>Name:</label><br/>
	    		<input type="text" name="name" [(ngModel)]="name"/><br/>
	    		<label>Email:</label><br/>
	    		<input type="text" name="Email" [(ngModel)]="email"/><br/>
	    		<label>Area:</label><br/>
	    		<input type="text" name="Address.area" [(ngModel)]="Address.area"/><br/>
	    		<label>City:</label><br/>
	    		<input type="text" name="Address.city" [(ngModel)]="Address.city"/><br/>
	    		<label>State:</label><br/>
	    		<input type="text" name="Address.state" [(ngModel)]="Address.state"/><br/>
	    	</form>
	    	`,
})
export class UserComponent  {
		 name:string;
		email:string;
		Address:address;
		Hobbies:string[];
		showHobbies:boolean;
		
	constructor(){
		this.name="Linika";
		this.email= 'linikasddarokar@gmail'
		this.Address={
			area:'HSR Layout',
			city:'bangalore',
			state:'Mahrastra'
		}
		this.Hobbies=['drawing','painting','cooking'];
		this.showHobbies=false;
	}
    togglebutton(){
    	if(this.showHobbies==true){
    		this.showHobbies=false;
    	}else{
    	this.showHobbies=true;
    	}
    }
	    addHobby(hobby){
	    	this.Hobbies.push(hobby);
	    }
    }
	
	

interface address{
	area:string;
	city:string;
	state:string;

}					
				
