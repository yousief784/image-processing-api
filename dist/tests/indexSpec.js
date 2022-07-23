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
const resizeImage_1 = require("./../utils/resizeImage");
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require(".."));
const request = (0, supertest_1.default)(__1.default);
describe('test', () => {
    const validImagename = 'santamonica';
    const invalidImagename = 'plane';
    const width = 500;
    const height = 400;
    it('test endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images');
        expect(response.status).toBe(400);
    }));
    it('test endpoint with valid imagename, valid width and valid height', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, resizeImage_1.getImage)(validImagename, width, height)).toBeResolved();
    }));
    it('test endpoint with invalid imagename, valid width but invalid height', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, resizeImage_1.getImage)(invalidImagename, width, -1)).toBeRejected();
    }));
});
