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
var Publications = /** @class */ (function () {
    function Publications(_a) {
        var author = _a.author, title = _a.title, body = _a.body;
        this.id = uuidv4_1.uuid();
        this.author = author;
        this.title = title;
        this.body = body;
        this.createdAt = date;
    }
    return Publications;
}());
exports.default = Publications;
