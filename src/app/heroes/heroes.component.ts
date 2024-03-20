import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  image = 'assets/shrek.jpeg'
  title: string = "Hello"
  on = false;
  public name = '';

  test():void { 
    alert("Hello");
    console.log("hello") 
  } 
}
