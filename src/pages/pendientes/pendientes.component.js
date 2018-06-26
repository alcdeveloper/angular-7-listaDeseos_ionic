var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ListaDeseosService } from "../../app/services/lista-deseos.services";
import { NavController } from "ionic-angular";
import { AgregarComponent } from "../agregar/agregar.component";
import { DetalleComponent } from "../detalle/detalle.component";
var PendientesComponent = /** @class */ (function () {
    function PendientesComponent(_listaDeseos, navCtrl) {
        this._listaDeseos = _listaDeseos;
        this.navCtrl = navCtrl;
    }
    PendientesComponent.prototype.ngOnInit = function () { };
    PendientesComponent.prototype.irAgregar = function () {
        this.navCtrl.push(AgregarComponent);
    };
    PendientesComponent.prototype.verDetalle = function (lista, idx) {
        this.navCtrl.push(DetalleComponent, { lista: lista, idx: idx });
    };
    PendientesComponent = __decorate([
        Component({
            selector: "app-pendientes",
            templateUrl: "pendientes.component.html"
        }),
        __metadata("design:paramtypes", [ListaDeseosService,
            NavController])
    ], PendientesComponent);
    return PendientesComponent;
}());
export { PendientesComponent };
//# sourceMappingURL=pendientes.component.js.map