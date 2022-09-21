import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
//import { Card } from '../interfaces/card';
import {BuckapicardInterface} from 'src/app/interfaces/buckapicard';
import { Butler } from "@app/services/butler.service";

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
	card: any[];
	 //  public card : Card ={};
  constructor(
  	public butler:Butler, 
  //	private authService:AuthService

  private http: HttpClient
  	) {}
  	headers : HttpHeaders = new HttpHeaders({
  		
//  		Authorization: this.authService.getToken(),
		  "Content-Type":"application/json"	
	});
		  getCardByUserId(userId: string){
			 	const url_api = `https://db.buckapi.com:3069/api/cards?filter[where][userId]=${userId}`;
			 	this.card = this.http.get(url_api);
				//this.butler.userId=this.card[0].id;
				//this.butler.idApp=this.card[0].idApp;
			 	return (this.card);
		
		
			 }

}

  	//	updateProduct(tix :ProductInterface, id: string){
	// let token = this.authService.getToken();
	//	const url_api=`https://db.buckapi.com:3025/api/product/${id}`;
	//	return this.http
	//	.put<ProductInterface>(url_api, tix)
	//	.pipe(map(data => data));
	//}
	// getAllTixs(){
	// 	const url_api = 'https://db.buckapi.com:3025/api/tixes?filter[where][status]=activated';
	// 	return this.http.get(url_api);
	// }
 	// getTamano(){
	// 	const url_api = 'https://db.buckapi.com:3025/api/tixes?filter[where][status]=activated';
	// 	return (this.tixs = this.http.get(url_api));
	// }
	// getTamanoIni(){
	// 	const url_api = 'https://db.buckapi.com:3025/api/tixes?filter[where][initload]=activated';
	// 	return (this.tixs = this.http.get(url_api));
	// }
	// getAllTixsInitload(){
	// 	const url_api = 'https://db.buckapi.com:3025/api/tixes?filter[where][initload]=activated';
	// 	return this.http.get(url_api);
	// }
	// getInfo(){
	// 	const url_api=`https://db.buckapi.com:3025/api/infos/`;
	// 	this.info = this.http.get(url_api);
	// 	return (this.info);
	// }
	// saveSale(sale :SaleInterface){
	// 	const url_api='https://db.buckapi.com:3025/api/sale';
	// 	return this.http
	// 	.post<SaleInterface>(url_api, sale)
	// 	.pipe(map(data => data));
	// }
	// 	saveOrder(order :OrderInterface){
	// 		const url_api='https://db.buckapi.com:3025/api/order';
	// 		return this.http
	// 		.post<OrderInterface>(url_api, order)
	// 		.pipe(map(data => data));
	// 	}
	// sendMailNewBookAppToAdmin(book){
	// 		const url_api='https://email.penguinscleaning.ca:3005/newBookAppToAdmin';
	// 		return this.http
	// 		.post(url_api, book)
	// 		.pipe(map(data => data));
	// 	}
	// updateOrder(order :OrderInterface, id: string){
	// 	// let token = this.authService.getToken();
	// 	const url_api=`https://db.buckapi.com:3025/api/order/${id}`;
	// 	return this.http
	// 	.put<OrderInterface>(url_api, order)
	// 	.pipe(map(data => data));
	// }
	// getOrderByNpedido(npedido: string){
	// 	const url_api = `https://db.buckapi.com:3025/api/order?filter[where][npedido]=${npedido}`;
	// 	this.order = this.http.get(url_api);
	// 	return (this.order);
	// }
	// let indice = id;
	// const url_api=`https://db.andesproadventures.com:3018/api/book/${indice}`;
	// this.book = this.http.get(url_api);
	// return (this.book);
	// this.info = this.http.get(url_api);
	// return (this.info);