import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Butler } from "@app/services/butler.service";

export interface TicketInterface {

}
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
		ticket: Observable<any>;
	cards:any;
  constructor(
  	public butler:Butler, 
 	 private http: HttpClient
  	) {}
  	headers : HttpHeaders = new HttpHeaders({  		
		  "Content-Type":"application/json"	
	});
	getCardByUserId(userId: string){
		const url_api = `https://db.buckapi.us:3069/api/cards?filter[where][userId]=${userId}`;
		this.cards = this.http.get(url_api);
		return ( this.http.get(url_api));		
	}
	saveTicket(ticket :TicketInterface){
		const url_api='https://db.buckapi.us:6001/api/transactions';
		return this.http
		.post<TicketInterface>(url_api, ticket)
		.pipe(map(data => data));
	}
}