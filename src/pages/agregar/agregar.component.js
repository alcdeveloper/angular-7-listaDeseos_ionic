var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { AlertController, NavController } from "ionic-angular";
import { Lista, ListaItem } from "../../app/clases/index";
import { ListaDeseosService } from "../../app/services/lista-deseos.services";
var AgregarComponent = /** @class */ (function () {
    function AgregarComponent(alertCtrl, navCtrl, _listaDeseos) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this._listaDeseos = _listaDeseos;
        this.nombreLista = "";
        this.nombreItem = "";
        this.items = [];
    }
    AgregarComponent.prototype.ngOnInit = function () { };
    AgregarComponent.prototype.agregar = function () {
        if (this.nombreItem.length == 0) {
            return;
        }
        var item = new ListaItem();
        item.nombre = this.nombreItem;
        this.items.push(item);
        this.nombreItem = "";
    };
    AgregarComponent.prototype.borrarItem = function (idx) {
        this.items.splice(idx, 1);
    };
    AgregarComponent.prototype.guardarLista = function () {
        if (this.nombreLista.length == 0) {
            var alert_1 = this.alertCtrl.create({
                title: "Nombre de la lista",
                subTitle: "El nombre de la lista es necesario",
                buttons: ['Ok']
            });
            alert_1.present();
            return;
        }
        var lista = new Lista(this.nombreLista);
        lista.items = this.items;
        //this._listaDeseos.listas.push(lista);
        this._listaDeseos.agregarLista(lista);
        this.navCtrl.pop();
    };
    AgregarComponent = __decorate([
        Component({
            selector: "app-agregar",
            templateUrl: "agregar.component.html"
        }),
        __metadata("design:paramtypes", [AlertController,
            NavController,
            ListaDeseosService])
    ], AgregarComponent);
    return AgregarComponent;
}());
export { AgregarComponent };
//# sourceMappingURL=agregar.component.js.map