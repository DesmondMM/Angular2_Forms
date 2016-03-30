import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl, Control} from 'angular2/common';
import { bootstrap } from "angular2/platform/browser";
import any = jasmine.any;

function skuValidator(control: Control): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}

@Component({
    selector: 'demo-form-sku',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    template: `
    <div class="ui raised segment">
        <h2 class="ui header">Demo Form with ng-model</h2>
        <form [ngFormModel]="myForm"
            (ngSubmit)="onSubmit(myForm.value)"
            class="ui form">
        <div class="ui info message">
            The product name is: {{productName}}
        </div>
        <div class="field"
            [class.error]="!myForm.find('productName').valid && myForm.find('productName').touched">
            <label for="productName">Product Name</label>
            <input type="text"
                id="productNameInput"
                placeholder="Product Name"
                [ngFormControl]="myForm.controls['productName']"
                [(ngModel)]="productName">
        </div>


        <button type="submit" class="ui button">Submit</button>
        </form>
    </div>
    `
})
export class DemoFormBuilder {
    myForm: ControlGroup;
    productName: string;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'productName': ['', Validators.required]
        });
    }

    onSubmit(value: string): void {
        console.log('you submitted value:', value);
    }
}

bootstrap(DemoFormBuilder);