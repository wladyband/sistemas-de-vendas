import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { LazyLoadEvent } from 'primeng/components/common/api';

import { MenuAdminService, ContratoMenu } from '../../services/menuAdmin.service';

@Component({
  selector: 'mt-listmenu',
  templateUrl: './listmenu.component.html',
  styleUrls: ['./listmenu.component.css']
})
export class ListmenuComponent implements OnInit {

  totalRegistros = 0;
  filtro = new ContratoMenu()
 
  // description: string;
  public title: string;
  public menu:  Array<Menu>=[];
 
  
  constructor(
    private _menuService: MenuAdminService
  ) {
      this.title = 'Lista de Cardápios';
   
    }

  ngOnInit() {
  this.pesquisar()
  }

pesquisar(pagina = 0){
  this.filtro.pagina = pagina;
  this._menuService.pesquisar(this.filtro)
  .then(resultado => {
       this.totalRegistros = resultado.total;
      this.menu = resultado.menus;
  });
}

aoMudarPagina(event: LazyLoadEvent) {
  const pagina = event.first / event.rows;
  this.pesquisar(pagina);
}

}








/*

  this.getMenusPage(0,4);
  //this.getMenus();

pesquisa(){
  this._menuService.pesquisar()
  .then(() => null);
}

menus => this.menus = menus


  getMenusPage(page, size) {
    this._menuService.getMenuPage(page, size).subscribe(
      response => {
       console.log(response)
        if (!response.data) {
          
        } else {
        // this.page = response
       //  this.menus = page.data;
        this.menus = response.data;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  } 




  getMenus() {
    this._menuService.getMenus().subscribe(
      response => {
       console.log(response.menu)
        if (!response.menu) {
          
        } else {
          this.menu = response.menu;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }


*/