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
var core_1 = require('@angular/core');
var contact_1 = require('./contact');
var FormComponent = (function () {
    function FormComponent() {
        this.contact = new contact_1.Contact();
        this.whatDivClass = 'form-group';
    }
    FormComponent.prototype.whatClass = function (input) {
        if (input.length > 0) {
            this.whatDivClass = 'form-group has-success has-feedback';
            this.whatGlyph = 'glyphicon glyphicon-ok form-control-feedback';
        }
        else {
            this.whatGlyph = 'glyphicon glyphicon-warning-sign form-control-feedback';
            this.whatDivClass = 'form-group has-remove has-feedback';
        }
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'form-component',
            templateUrl: 'app/form/form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map