"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidv4_1 = require("uuidv4");
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var hour = String(today.getHours());
var min = String(today.getMinutes());
var sec = String(today.getSeconds());
var date = String(dd + "/" + mm + "/" + yyyy + " as " + hour + ":" + min + ":" + sec);
var Users = /** @class */ (function () {
    function Users(_a) {
        var name = _a.name, email = _a.email, password = _a.password;
        this.id = uuidv4_1.uuid();
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdAt = date;
    }
    return Users;
}());
exports.default = Users;
