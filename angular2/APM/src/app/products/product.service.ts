import { IProduct } from "./product";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient,HttpErrorResponse } from "@angular/common/http";

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService{

    private _productURL = '../api/products/products.json'
    constructor(private _http: HttpClient){

    }

    getProducts(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this._productURL)
                .do(data => console.log(JSON.stringify(data)))
                .catch(this.handleError);    
    }

    getProduct(id: number): Observable<IProduct>{
        return this.getProducts().map((products: IProduct[]) => products.find(p => p.productId === id));
    }

    private handleError(err: HttpErrorResponse){
        return Observable.throw(err.message);
    }
}