"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Users_1 = __importDefault(require("../models/Users"));
var UsersRepository = /** @class */ (function () {
    function UsersRepository() {
        this.users = [];
    }
    UsersRepository.prototype.all = function () {
        return this.users;
    };
    UsersRepository.prototype.create = function (_a) {
        var email = _a.email, name = _a.name, password = _a.password;
        var publication = new Users_1.default({ email: email, name: name, password: password });
        this.users.push(publication);
        return publication;
    };
    return UsersRepository;
}());
exports.default = UsersRepository;
