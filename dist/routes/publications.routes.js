"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PublicationsRepository_1 = __importDefault(require("../repositories/PublicationsRepository"));
var CreatePublicationService_1 = __importDefault(require("../services/CreatePublicationService"));
var publicationsRepository = new PublicationsRepository_1.default();
var publicationsRouter = express_1.Router();
publicationsRouter.get('/', function (request, response) {
    var publications = publicationsRepository.all();
    return response.json(publications);
});
publicationsRouter.get('/', function (request, response) {
    var id = request.body.id;
    var publication = publicationsRepository.findById(id);
    return response.json(publication);
});
publicationsRouter.post('/', function (request, response) {
    try {
        var _a = request.body, author = _a.author, title = _a.title, body = _a.body;
        var createPublication = new CreatePublicationService_1.default(publicationsRepository);
        var publication = createPublication.execute({
            author: author,
            title: title,
            body: body
        });
        return response.json(publication);
    }
    catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
exports.default = publicationsRouter;
