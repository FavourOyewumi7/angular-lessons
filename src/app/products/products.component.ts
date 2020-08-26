import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import { ProductsService } from './products.service';

@Component({

    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
    
})

export class ProductComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 70;
    imageHeight: number = 70;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string;
  errorMessage: any;

    get listFilter(): string{
      return this._listFilter;
    }

    set listFilter(value:string){
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter):this.products;
    }
    filteredProducts: IProduct[];
    products: IProduct[] = [];

      constructor(private productService: ProductsService ) {
      }

      performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
         product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }

      onRatingClicked(message: string): void{
        this.pageTitle = 'Product List:' + message;
      }

      ngOnInit() : void{
        this.productService.getProduct().subscribe({
          next: products => {
            this.products = products,
            this.filteredProducts = this.products;
          },
          error: err => this.errorMessage = err
        });
        

      }

      toggleImage(): void {
        this.showImage = !this.showImage;
      }
}
