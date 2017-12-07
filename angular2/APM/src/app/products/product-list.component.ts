import { Component } from '@angular/core';
import { IProduct } from './product';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProductService } from './product.service';


@Component({
  templateUrl: './product-list.component.html',
  styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  
  pageTitle: string = 'Product List';
  width: number=50;
  margin: number=2;
  showImage: boolean=false;
  filteredProducts: IProduct[];
  _listFilter: string;
  _productService: ProductService;
  errorMessage: string;

  constructor(productService: ProductService){
    this._productService = productService;
  }

  onRatingClicked(message: string): void{
    this.pageTitle = 'Product List: ' + message;
    console.log('Rating clicked: ' + message);
  }

  products: IProduct[]; 
    
    toggleImage(): void{
      this.showImage= !this.showImage;
    }

    ngOnInit(): void {
      this._productService.getProducts()
        .subscribe(products => {this.products = products;this.filteredProducts=products;},
                    error => this.errorMessage = <any>error);
      console.log('on init');
    }

    get listFilter(): string{
      return this._listFilter;
    }

    set listFilter(value: string){
      this._listFilter= value;
      console.log('filterBy' + value);
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    
    performFilter(filterBy: string): IProduct[]{
      filterBy=filterBy.toLocaleLowerCase();
      return this.products.filter(
        (product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) ;
    }
}
