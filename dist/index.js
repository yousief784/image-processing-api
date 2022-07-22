"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = 3000;
const host = 'http://localhost:';
app.use('/api', routes_1.default);
app.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(`Image Processing API Project <br> access end point <br>
    http://localhost:3000/api/images <br>
    example: <br>
    http://localhost:3000/api/images/?imagename=fjord&width=500&height=400 <br>
    can remove thumbinals folder from public folder and it recreated when access above endpoint`);
}));
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`app run at ${host}${port}`);
}));
exports.default = app;
