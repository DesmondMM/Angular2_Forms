import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup} from 'angular2/common';
import { bootstrap } from "angular2/platform/browser";
import {Validators} from "angular2/common";

@Component({
    selector: 'demo-form-sku',
    directives: [FORM_DIRECTIVES],
    template: `
    <div class="ui raised segment">
        <h2 class="ui header">Demo Form: SKU</h2>
        <form [ngFormModel]="myForm"
            (ngSubmit)="onSubmit(myForm.value)"
            class="ui form">

        <div class="field">
            <label for="skuInput">SKU</label>
            <input type="text"
                id="skuInput"
                placeholder="SKU"
                [ngFormControl]="myForm.controls['sku']">
        </div>

        <button type="submit" class="ui button">Submit</button>
        </form>
    </div>
    `
})
export class DemoFormSKUBuilder {
    myForm: ControlGroup;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'sku': ['Desmond Munashe', Validators.required]
        });
    }

    onSubmit(value: string): void {
        console.log('you submitted value:', value);
    }
}

bootstrap(DemoFormSKUBuilder);