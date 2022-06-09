import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private recipes:boolean= true;

  recipesNavEventHandler():void {
    this.recipes = true;
  }

  shoplistNavEventHandler():void {
    this.recipes = false;
  }



}
