import {Component} from '@angular/core';
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = environment.appName;
  logo: string = environment.appLogo;
  owner: string = environment.appOwner;

  items: Array<any> = [
    {
      title: 'Home',
      route: '/home',
    },
    {
      title: 'About Us',
      route: '/about_us',
    },
    {
      title: 'Admin',
      route: '/dashboard',
    },
    {
      title: 'Logout',
      route: '/auth',
    },
  ];

  imageBanner: string = 'assets/banner.png' ;
  // imageSalesMiddle: string = 'assets/sales_middle.jpeg';
  // imageSalesRight: string = 'assets/sales_right.jpg';

  constructor(private router: Router) {
  }

  onChangePage(page: any) {
    console.log(page);
    this.router.navigateByUrl(page.route);
  }

  onLogout(): void {
    this.router.navigateByUrl('/auth')
  }
}