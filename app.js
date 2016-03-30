System.register(['angular2/core', 'angular2/common', "angular2/platform/browser"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, browser_1;
    var DemoFormBuilder;
    function skuValidator(control) {
        if (!control.value.match(/^123/)) {
            return { invalidSku: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            DemoFormBuilder = (function () {
                function DemoFormBuilder(fb) {
                    this.myForm = fb.group({
                        'productName': ['', common_1.Validators.required]
                    });
                }
                DemoFormBuilder.prototype.onSubmit = function (value) {
                    console.log('you submitted value:', value);
                };
                DemoFormBuilder = __decorate([
                    core_1.Component({
                        selector: 'demo-form-sku',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        template: "\n    <div class=\"ui raised segment\">\n        <h2 class=\"ui header\">Demo Form with ng-model</h2>\n        <form [ngFormModel]=\"myForm\"\n            (ngSubmit)=\"onSubmit(myForm.value)\"\n            class=\"ui form\">\n        <div class=\"ui info message\">\n            The product name is: {{productName}}\n        </div>\n        <div class=\"field\"\n            [class.error]=\"!myForm.find('productName').valid && myForm.find('productName').touched\">\n            <label for=\"productName\">Product Name</label>\n            <input type=\"text\"\n                id=\"productNameInput\"\n                placeholder=\"Product Name\"\n                [ngFormControl]=\"myForm.controls['productName']\"\n                [(ngModel)]=\"productName\">\n        </div>\n\n\n        <button type=\"submit\" class=\"ui button\">Submit</button>\n        </form>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DemoFormBuilder);
                return DemoFormBuilder;
            })();
            exports_1("DemoFormBuilder", DemoFormBuilder);
            browser_1.bootstrap(DemoFormBuilder);
        }
    }
});
//# sourceMappingURL=app.js.map