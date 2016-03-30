import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl} from 'angular2/common';
import { bootstrap } from "angular2/platform/browser";

@Component({
    selector: 'demo-form-sku',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    template: `
    <div class="ui raised segment">
        <h2 class="ui header">Demo Form: SKU with validations (shorthand)</h2>
        <form [ngFormModel]="myForm"
            (ngSubmit)="onSubmit(myForm.value)"
            class="ui form">

        <div class="field"
            [class.error]="!myForm.find('sku').valid && myForm.find('sku').touched">
            <label for="skuInput">SKU</label>
            <input type="text"
                id="skuInput"
                placeholder="SKU"
                #sku="ngForm"
                [ngFormControl]="myForm.controls['sku']">
            <div *ngIf="!sku.control.valid" class="ui error message">SKU is invalid</div>
            <div *ngIf="sku.control.hasError('required')" class="error">SKU is  required</div>
        </div>

        <div *ngIf="!myForm.valid" class="ui error message">Form is invalid</div>

        <button type="submit" class="ui button">Submit</button>
        </form>
    </div>
    `
})
export class DemoFormSKUBuilder {
    myForm: ControlGroup;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'sku': ['', Validators.required]
        });
    }

    onSubmit(value: string): void {
        console.log('you submitted value:', value);
    }
}

bootstrap(DemoFormSKUBuilder);