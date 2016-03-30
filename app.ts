import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl} from 'angular2/common';
import { bootstrap } from "angular2/platform/browser";
import {Validators} from "angular2/common";
import {AbstractControl} from "angular2/common";

@Component({
    selector: 'demo-form-sku',
    directives: [FORM_DIRECTIVES],
    template: `
    <div class="ui raised segment">
        <h2 class="ui header">Demo Form: SKU with validations (explicit)</h2>
        <form [ngFormModel]="myForm"
            (ngSubmit)="onSubmit(myForm.value)"
            class="ui form">

        <div class="field"
            [class.error]="!sku.valid && sku.touched">
            <label for="skuInput">SKU</label>
            <input type="text"
                id="skuInput"
                placeholder="SKU"
                [ngFormControl]="sku">
            <div *ngIf="!sku.valid" class="ui error message">SKU is invalid</div>
            <div *ngIf="sku.hasError('required')" class="error">SKU is  required</div>
        </div>

        <div *ngIf="!myForm.valid" class="ui error message">Form is invalid</div>

        <button type="submit" class="ui button">Submit</button>
        </form>
    </div>
    `
})
export class DemoFormSKUBuilder {
    myForm: ControlGroup;
    sku: AbstractControl;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'sku': ['', Validators.required]
        });

        this.sku = this.myForm.controls['sku'];
    }

    onSubmit(value: string): void {
        console.log('you submitted value:', value);
    }
}

bootstrap(DemoFormSKUBuilder);