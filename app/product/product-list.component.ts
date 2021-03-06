import { Component, OnInit } from 'angular2/core';
import { IProduct  } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProductService } from './product/product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/product/product-list.component.html',
    styleUrls: ['app/product/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent, DashboardComponent]
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Products';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];

    constructor(private _productService: ProductService){
        
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    ngOnInit(): void {
        console.log('On Init Message');
        this.products = this._productService.getProducts();
    }
    
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
    
}