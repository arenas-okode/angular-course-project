import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipie: Recipie;

  constructor() { }

  ngOnInit(): void {
  }

}
