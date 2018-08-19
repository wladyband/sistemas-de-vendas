
import { Injectable } from '@angular/core';
import { Http,  Headers,  URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from 'environments/environment';
import { RestaurantEdit } from '../models/restaurantEdit';



export class ContratoMenu {
  price: number;
 // description: string;  
  pagina = 0;
  itensPorPagina = 4;
};



@Injectable()
export class MenuAdminService {

      public url: string;
      restaurantE = new RestaurantEdit()


      constructor(private _http: Http) {
        this.url = environment.url;
      }
      pesquisar(filtro: ContratoMenu): Promise<any> {
        const params = new URLSearchParams();
        const headers = new Headers();
       
        params.set('skip', filtro.pagina.toString());
        params.set('limit', filtro.itensPorPagina.toString());


        if(filtro.price){
          params.set('price', filtro.price.toString());
        }

       

        return this._http.get(`${this.url}/menu`, 
        
        { headers, search: params })
        
        .toPromise()
        .then(response => {
          const resposeJson = response.json();
          const menus = resposeJson.data;

          const resultado = {
            menus,
            total: resposeJson.total
          };
          return resultado;
        })

      }

}






/*

 return this._http.get(`${this.url}/menus`, { headers })
          .toPromise()
          .then(response => 
            console.log(response.json().menu));
      }


    getMenus(){
            return this._http.get(`${this.url}/menus`)
            .map(res => res.json());
    }

    getMenuPage(page, size): Observable<Page>{ 
      return this._http.get(`${this.url}/menuspage?skip=${page}&limit=${size}`)
      .map(res => res.json());

    }



getMenusPage(page, size){
    return this._http.get(`${this.url}/menus?page=${page}&size=${size}`)
    .map(res => res.json());
}
*/