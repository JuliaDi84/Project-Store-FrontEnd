import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Item} from "../models/Item";
import {UserService} from "./user.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {B} from "@angular/cdk/keycodes";

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  private favouriteObservable = new BehaviorSubject<Array<Item>>([]);
  private allFavouritesObservable = new BehaviorSubject(<Array<any>>([]));

  constructor(private userService: UserService, private httpClient: HttpClient) {
    this.readAllFavourites();
  }


  public addToCart(item: Item): void {
    let items = this.favouriteObservable.getValue();
    items.push(item);
    this.favouriteObservable.next(items);
  }


  public removeFromFavourite(item: Item): void {
    let items = this.favouriteObservable.getValue();
    /*items = items.filter((it:Item)=>{
      if(it.id==item.id){
        return false;
      }else {return true};
    })*/
    items = items.filter((it: Item) => it.id != item.id);
    this.favouriteObservable.next(items);
  }

  public getFavourite() {
    return this.favouriteObservable.asObservable()
  }

  public getAllCartsFromServer() {
    return this.allFavouritesObservable.asObservable();
  }

  public createFavourite() {
    let body = {
      userId: this.userService.getUser().id,
      items: this.favouriteObservable.getValue()
    }

    console.log(body)

    this.httpClient.post(`${environment.apiUrl}/favourite/`, body).subscribe((response: any) => {
      console.log(response)
      this.favouriteObservable.next([]);
    })
  }

  public createFavouriteWithDto() {
    let body = {
      userId: this.userService.getUser().id,
      items: this.favouriteObservable.getValue()
    }

    this.httpClient.post(`${environment.apiUrl}/favourites/create-dto`, body).subscribe((response: any) => {
      console.log(response)
    })
  }

  public deleteFavourite(id: string) {
    this.httpClient.delete(`${environment.apiUrl}/favourites/${id}`).subscribe((response: any) => {
      console.log(response);
      this.readAllFavourites()
    })
  }

  public readAllFavourites() {
    return this.httpClient.get(`${environment.apiUrl}/favourite/`).subscribe((response: any) => {
      this.allFavouritesObservable.next(response.data)
    });
  }

    onAddToFavourites(item: Item) {
      let items = this.favouriteObservable.getValue();
      items.push(item);
      this.favouriteObservable.next(items);

    }
}
