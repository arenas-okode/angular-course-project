import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from '../../recipie.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {


  @Input() recipie: Recipie;

  constructor() {
  }

  ngOnInit(): void {
  }

}
