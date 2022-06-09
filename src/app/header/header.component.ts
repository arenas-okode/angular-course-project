import { Component, Output } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: "./header.component.html",

})
export class HeaderComponent {
    collapsed = true;

    @Output() recipesNavEvent;
    @Output() shoplistNavEvent;





}