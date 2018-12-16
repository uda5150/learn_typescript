var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bird = /** @class */ (function () {
    function Bird(name) {
        this.name = name;
    }
    Bird.prototype.chirp = function () {
        console.log(this.name + "\u304C\u9CF4\u304D\u307E\u3057\u305F");
    };
    Bird.explain = function (name) {
        console.log(name + "\u306F\u7FFC\u304C\u3042\u3063\u3066\u5375\u3092\u751F\u307F\u307E\u3059");
    };
    return Bird;
}());
var FlyableBird = /** @class */ (function (_super) {
    __extends(FlyableBird, _super);
    function FlyableBird(name) {
        return _super.call(this, name) || this;
    }
    FlyableBird.prototype.fly = function () {
        console.log(this.name + "\u304C\u98DB\u3073\u307E\u3057\u305F");
    };
    return FlyableBird;
}(Bird));
var bd1 = new Bird('ペンギン');
bd1.chirp();
Bird.explain('カラス');
var bd2 = new FlyableBird('スズメ');
bd2.fly();
