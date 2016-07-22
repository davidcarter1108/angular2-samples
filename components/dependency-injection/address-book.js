System.register(['@angular/core', './address-book-service', './address-book-title-service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, address_book_service_1, address_book_title_service_1;
    var AddressBook;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (address_book_service_1_1) {
                address_book_service_1 = address_book_service_1_1;
            },
            function (address_book_title_service_1_1) {
                address_book_title_service_1 = address_book_title_service_1_1;
            }],
        execute: function() {
            AddressBook = (function () {
                function AddressBook(addressBookService, addressBookTitleService) {
                    var _this = this;
                    console.log('Creating AddressBook');
                    this.result = { people: [] };
                    addressBookService.getEntries().subscribe(function (res) { return _this.result = res; });
                    this.title = addressBookTitleService.getTitle();
                    console.log(addressBookTitleService.callCount);
                }
                AddressBook = __decorate([
                    core_1.Component({
                        selector: 'address-book',
                        templateUrl: './components/dependency-injection/address-book.html',
                        providers: [address_book_service_1.AddressBookService]
                    }), 
                    __metadata('design:paramtypes', [address_book_service_1.AddressBookService, address_book_title_service_1.AddressBookTitleService])
                ], AddressBook);
                return AddressBook;
            }());
            exports_1("AddressBook", AddressBook);
        }
    }
});
//# sourceMappingURL=address-book.js.map