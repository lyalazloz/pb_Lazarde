"use strict";
exports.__esModule = true;
var Resta = /** @class */ (function () {
    function Resta(numero1, numero2) {
        var _this = this;
        this.resultado = function () { _this.numero1 - _this.numero2; };
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    return Resta;
}());
exports["default"] = Resta;
