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
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const router = express_1.default.Router();
const pathFromRoot = process.cwd() + '/public';
router.get('/images', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const query = req.query;
    const imageName = (_a = query.imagename) === null || _a === void 0 ? void 0 : _a.split('.')[0];
    const imagePath = pathFromRoot + `/images/${imageName}.jpg`;
    const width = query.width;
    const widthNum = parseInt(query.width);
    const height = query.height;
    const heightNum = parseInt(query.height);
    if (imageName) {
        if (width && (!widthNum || widthNum <= 0)) {
            res.status(400).send('width less than 0');
        }
        else if (height && (!heightNum || heightNum <= 0)) {
            res.status(400).send('height less than 0');
        }
        else {
            if (fs_1.default.existsSync(imagePath)) {
                if (widthNum || heightNum) {
                    const checkImageExist = (0, resizeImage_1.checkIfImageExist)(imageName, widthNum, heightNum);
                    if (checkImageExist) {
                        res.status(200).sendFile(checkImageExist);
                    }
                    else {
                        const getImageAfterSharp = yield (0, resizeImage_1.getImage)(imageName, widthNum, heightNum);
                        const root = pathFromRoot + `/thumbinals/${getImageAfterSharp}`;
                        res.status(200).sendFile(root);
                    }
                }
                else {
                    res.status(200).sendFile(imagePath);
                }
            }
            else {
                res.status(400).send('invalid image Name');
            }
        }
    }
    else {
        res.status(400).send('write in url "api/images/?imagename=(Image Name from src/public/images folder)"');
    }
}));
exports.default = router;
