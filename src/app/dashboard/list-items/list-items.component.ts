import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../models/Item";
import {ItemService} from "../../services/item.service";
import {CartService} from "../../services/cart.service";
import {FavouriteService} from "../../services/favourite.service";

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  @Input("showAdmin") showAdmin: boolean = false;
  @Output() changeData: EventEmitter<Item> = new EventEmitter<Item>();

  itemsList: Array<Item> = [];

  constructor(private itemService: ItemService, private cartService: CartService, private favouriteService: FavouriteService) {

  }

  ngOnInit() {
    this.itemService.getItemList().subscribe((itemsList: Array<Item>) => {
      this.itemsList = itemsList;
    });
  }


  onDelete(item: Item): void {
    console.log(item);
    // .id! => ! ii spune compilatorului ca proprietatea "id" este diferita de null.
    this.itemService.deleteItem(item.id!);
  }

  onEdit(item: Item): void {
    console.log("item list on edit")
    console.log(item);
    this.changeData.emit(item);
  }

  onAddToCart(item: Item): void {
    console.log("item was added to cart")
    console.log(item)
    this.cartService.addToCart(item);
  }
  onAddToFavourites(item: Item): void {
    console.log("item was added to favourites")
    console.log(item)
    this.favouriteService.onAddToFavourites(item);
  }

}
