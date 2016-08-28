import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
    selector: 'form-component',
    templateUrl: 'app/form/form.component.html'
})
export class FormComponent {

    contact = new Contact();
    whatDivClass: string = 'form-group';
    whatGlyph: string;
    whatClass(input: any) {
        if (input.length > 0 ) {
            this.whatDivClass = 'form-group has-success has-feedback';
            this.whatGlyph = 'glyphicon glyphicon-ok form-control-feedback';
        } else {
            this.whatGlyph = 'glyphicon glyphicon-warning-sign form-control-feedback';
            this.whatDivClass = 'form-group has-remove has-feedback';
        }
    }

}
