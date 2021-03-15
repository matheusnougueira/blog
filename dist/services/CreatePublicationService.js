"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreatePublicationsService = /** @class */ (function () {
    function CreatePublicationsService(publicationsRepository) {
        this.publicationsRepository = publicationsRepository;
    }
    CreatePublicationsService.prototype.execute = function (_a) {
        var author = _a.author, title = _a.title, body = _a.body;
        var publication = this.publicationsRepository.create({
            author: author,
            title: title,
            body: body,
        });
        return publication;
    };
    return CreatePublicationsService;
}());
exports.default = CreatePublicationsService;
