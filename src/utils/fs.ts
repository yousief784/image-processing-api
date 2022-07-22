import fs from 'fs';
import path from 'path';
const pathFromRoot = process.cwd() + '/public';

export const makeThumbnailDirectoryIfNotExist = () => {
    if (!fs.existsSync(pathFromRoot + `/thumbinals`)) {
        fs.mkdirSync(path.join(pathFromRoot, 'thumbinals'));
    }
};
