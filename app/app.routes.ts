import { Routes, RouterModule } from '@angular/router';

import { PlaylistComponent } from './playlist/playlist.component';
import { FormComponent } from './form/form.component';
import {NavbarComponent} from './navbar/navbar.component';

const appRoutes: Routes = [
    {path: '', component: NavbarComponent},
    {path: 'playlist', component: PlaylistComponent},
    {path: 'form', component: FormComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);



