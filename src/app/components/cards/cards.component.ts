import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items: any[] = [];

  constructor( private router: Router) { }

  ngOnInit() {
  }

  getArtistId( item: any): string {
    let id: string;

    if ( item.type === 'artist' ) {
      id = item.id;
    } else {
      id = item.artists[0].id;
    }

    this.router.navigate([ '/artist', id]);

    console.log(id);

    return id;
  }

}
