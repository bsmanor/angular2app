import { Component } from '@angular/core';
import {Playlist} from "./playlist";

@Component({
    selector: 'playlist-component',
    templateUrl: './app/playlist/playlist.component.html'
})
export class PlaylistComponent {
    categories = ['Transactions', 'Credits-Refunds', 'Module Batch'];
    transactions = ['How To Set New Transaction'];
    creditsRefunds = ['Credit', 'Refund'];
    moduleBatch = ['Importing transactions'];
    
    playlist = Playlist();

    

}