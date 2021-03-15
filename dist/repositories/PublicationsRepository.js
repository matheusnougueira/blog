"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Publications_1 = __importDefault(require("../models/Publications"));
var PublicationsRepository = /** @class */ (function () {
    function PublicationsRepository() {
        this.publications = [];
    }
    PublicationsRepository.prototype.all = function () {
        return this.publications;
    };
    PublicationsRepository.prototype.findById = function (id) {
        var findPublication = this.publications.find(function (publications) { return id === publications.id; });
        return findPublication || null;
    };
    PublicationsRepository.prototype.create = function (_a) {
        var author = _a.author, title = _a.title, body = _a.body;
        var publication = new Publications_1.default({ author: author, title: title, body: body });
        this.publications.push(publication);
        return publication;
    };
    return PublicationsRepository;
}());
exports.default = PublicationsRepository;
