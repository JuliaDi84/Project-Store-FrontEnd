import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FavouriteDialogComponent} from "../favourite-dialog/favourite-dialog.component";
import {FavouriteService} from "../../services/favourite.service";


@Component({

  selector: 'app-favourite-button',
  templateUrl: './favourite-button.component.html',
  styleUrls: ['./favourite-button.component.css']
})
export class FavouriteButtonComponent {
  @Input("itemCount") itemCount: number = 0;

  constructor(public dialog: MatDialog, private favouriteService: FavouriteService) {
    this.favouriteService.getFavourite().subscribe((items: Array<any>) => {
      this.itemCount = items.length;
    });
  }

  openFavouriteDialog(): void {
    const dialogRef = this.dialog.open(FavouriteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
