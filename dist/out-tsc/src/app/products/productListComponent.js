"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var productListComponent = /** @class */ (function () {
    function productListComponent() {
        this.pageTitle = "OUAHID";
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.products = [
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 0,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            },
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2016",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            }
        ];
        this.filteredProducts = this.products;
        this._listFilter = 'cart';
    }
    productListComponent.prototype.ngOnInit = function () {
        console.log('mon objet est passe par on init interface');
    };
    Object.defineProperty(productListComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filteredProducts = value ? this.performFilter(value) : this.products;
        },
        enumerable: true,
        configurable: true
    });
    productListComponent.prototype.toogleImage = function () {
        this.showImage = !this.showImage;
    };
    productListComponent.prototype.performFilter = function (value) {
        value = value.toLocaleUpperCase();
        return this.products.filter(function (toto) { return toto.productName.toLocaleUpperCase().indexOf(value) !== -1; });
    };
    productListComponent = __decorate([
        core_1.Component({
            selector: 'pm-products',
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], productListComponent);
    return productListComponent;
}());
exports.productListComponent = productListComponent;
//# sourceMappingURL=productListComponent.js.map