/**
 * This file shows the intermediate components in the hello-world app.
 */
System.register(["angular2/platform/browser", "angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var HelloWorldWithName, HelloWorldWithNames;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HelloWorldWithName = (function () {
                function HelloWorldWithName() {
                    this.name = 'Felipe';
                }
                HelloWorldWithName = __decorate([
                    core_1.Component({
                        selector: 'hello-world',
                        template: "<div>Hello {{ name }}</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HelloWorldWithName);
                return HelloWorldWithName;
            })();
            HelloWorldWithNames = (function () {
                function HelloWorldWithNames() {
                    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
                }
                HelloWorldWithNames = __decorate([
                    core_1.Component({
                        selector: 'hello-world',
                        template: "\n  <ul>\n    <li *ngFor=\"#name of names\">Hello {{ name }}</li>\n  </ul>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HelloWorldWithNames);
                return HelloWorldWithNames;
            })();
            browser_1.bootstrap(HelloWorldWithNames);
        }
    }
});
//# sourceMappingURL=app-expanded.js.map