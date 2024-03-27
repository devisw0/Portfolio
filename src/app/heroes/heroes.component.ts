import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { GlobalConstants } from '../global-constants';
import { FormsModule } from '@angular/forms';
import {HEROES} from '../mock-heroes';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common'; 

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, NgIf], //I guess if its not an Module it doesnt go here
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {




  hero: Hero = {
    id:1,
    name: 'Windstorm',
    summary: 'This is a template summary of the hero'

  };
  // property hero of type Hero which we imported 
  //we set to an object that has id, name, summary

  image = 'data:image/png;base64,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'
  title: string = "Sample"
  on = false;
  public name = '';

  test():void { 
    alert("Hello");
    console.log("hello") 
  } 

picture = GlobalConstants.image; 
//from my imports in global-variables.ts

heroes = HEROES;
//setting the heroes variable equal to the the array  of heroes we created
//in a seperate file and imported it which is now known as HEROES


selectedHero?:Hero
//Im guessing its saying that this is of type Hero or something to do with it?
//So we know it includes the id, name and summary

onSelect(hero:Hero): void {
  //onSelect is the function that executes with the event binding on the respective
  //template file and takes in an input called hero of type Hero

  this.selectedHero = hero;
  //Im not really sure by only guess is that its saying this instance of
  //type selectedHero is the same as the input of the function (hero) which is of
  //type hero

}



}
