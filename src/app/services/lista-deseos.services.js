var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
var ListaDeseosService = /** @class */ (function () {
    function ListaDeseosService() {
        /*let lista1 = new Lista("Compras de supermercado");
        let lista2 = new Lista("Juegos que deseo");
        let lista3 = new Lista("Cosas de la universidas");

        this.listas.push(lista1);
        this.listas.push(lista2);
        this.listas.push(lista3);*/
        this.listas = [];
        this.cargarData();
        console.log("servicio inicializado");
    }
    ListaDeseosService.prototype.actualizarData = function () {
        localStorage.setItem("data", JSON.stringify(this.listas));
    };
    ListaDeseosService.prototype.cargarData = function () {
        if (localStorage.getItem("data")) {
            this.listas = JSON.parse(localStorage.getItem("data"));
        }
    };
    ListaDeseosService.prototype.agregarLista = function (lista) {
        this.listas.push(lista);
        this.actualizarData();
    };
    ListaDeseosService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], ListaDeseosService);
    return ListaDeseosService;
}());
export { ListaDeseosService };
//# sourceMappingURL=lista-deseos.services.js.map