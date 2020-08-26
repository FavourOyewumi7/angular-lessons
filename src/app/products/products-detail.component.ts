
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    templateUrl: './products-detail.component.html',
    styleUrls: ['./products-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';

    product: IProduct;

    constructor(private route: ActivatedRoute,
                private router: Router) {
        
    };

    ngOnInit(): void {
        let id = +this.route.snapshot.paramMap.get('id');
        this.pageTitle += `  ${id}`;
        this.product = {
            'productId' :id,
            'productName' : 'Leaf Rake',
            'productCode': 'GDN-0011',
            'releaseDate': 'March 19, 2019',
            'description': 'Leaf Rake best ting ever',
            'price': 19.95,
            'starRating': 3.6,
            'imageUrl': 'assets/images/leaf_rake.png'
        }
    };

    OnBack(): void{
        this.router.navigate(['/products'])
        


    }


}




