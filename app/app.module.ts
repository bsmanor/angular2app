import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routes';

// Components //
import { AppComponent }  from './app.component';
import { FormComponent }  from './form/form.component';
import { PlaylistComponent }  from './playlist/playlist.component';
// End Of Components //


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
      routing
  ],
  declarations: [
    AppComponent,
    FormComponent,
    PlaylistComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
