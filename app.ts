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
            <div *ngIf="sku.control.hasError('required')" class="ui error message">SKU is  required</div>
            <div *ngIf="sku.control.hasError('invalidSku')" class="ui error message">SKU must begin with <tt>123</tt></div>
        </div>

        <div *ngIf="!myForm.valid" class="ui error message">Form is invalid</div>

        <button type="submit" class="ui button">Submit</button>
        </form>
    </div>
    `
})
export class DemoFormSKUBuilder {
    myForm: ControlGroup;
    sku: any;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'sku': ['', Validators.compose([
                Validators.required, skuValidator])]
        });

        this.sku = this.myForm.controls['sku'];

        this.sku.valueChanges.subscribe(
            (value: string) => {
                console.log('sku changed to: ', value);
            }
        );

        this.myForm.valueChanges.subscribe(
            (form: any) => {
                console.log('form changed to: ', form);
            }
        )
    }

    onSubmit(value: string): void {
        console.log('you submitted value:', value);
    }
}

bootstrap(DemoFormSKUBuilder);