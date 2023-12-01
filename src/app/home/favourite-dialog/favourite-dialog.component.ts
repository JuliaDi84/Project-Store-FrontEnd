import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FavouriteService} from "../../services/favourite.service";
import {Item} from "../../models/Item";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-favourite-dialog',
  templateUrl: './favourite-dialog.component.html',
  styleUrls: ['./favourite-dialog.component.css']
})
export class FavouriteDialogComponent implements OnInit {
  items:Array<any> = [];

  constructor(private favouriteService: FavouriteService) {
    this.favouriteService.getFavourite().subscribe((items: Array<any>) => {
      this.items = [];

      this.items = items;

      console.log(items)
    });
  }

  ngOnInit() {
    console.log('test');
  }

  public onDeleteFavourite(item: Item) {
    this.favouriteService.removeFromFavourite(item);
  }

  public onBuy() {
    this.favouriteService.createFavourite()
  }
}
