import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipies: Recipie[] = [
    new Recipie('A Test Recipie', 'This is simply a test', 'https://t1.rg.ltmcdn.com/es/posts/6/6/7/tortitas_35766_orig.jpg'),
    new Recipie('A Test Recipie', 'This is simply a test', 'https://t1.rg.ltmcdn.com/es/posts/6/6/7/tortitas_35766_orig.jpg'),
    new Recipie('A Test Recipie', 'This is simply a test', 'https://t1.rg.ltmcdn.com/es/posts/6/6/7/tortitas_35766_orig.jpg'),

  ]

  constructor() { }

  ngOnInit(): void {
  }


}
