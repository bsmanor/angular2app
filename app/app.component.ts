import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { PlaylistComponent } from './Playlist/Playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [NavbarComponent, FormComponent, PlaylistComponent]
})
export class AppComponent {

}
