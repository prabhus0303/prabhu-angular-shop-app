import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { CategoryListComponent } from "./components/category-list/category-list.component";
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [AppHeaderComponent, CategoryListComponent , ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shop-ui';

  imagePath = 'assets/img/electronics.png';

}
