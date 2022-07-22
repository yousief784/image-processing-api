import { makeThumbnailDirectoryIfNotExist } from './fs';
import sharp from 'sharp';
import fs from 'fs';
const pathFromRoot = process.cwd() + '/public';

export const getImage = async (
    imagename: string,
    width: number,
    height: number
): Promise<string> => {
    makeThumbnailDirectoryIfNotExist();
    const ImagePath: string = pathFromRoot + `/images/${imagename}.jpg`;
    if (width && height) {
        const imagenameAfterEdit = `${imagename}-width${width}-height${height}.jpg`;
        await sharp(ImagePath)
            .resize({ width: width, height: height })
            .toFile(pathFromRoot + `/thumbinals/${imagenameAfterEdit}`);
        return imagenameAfterEdit;
    } else if (width) {
        const imagenameAfterEdit = `${imagename}-width${width}.jpg`;
        await sharp(ImagePath)
            .resize({ width: width })
            .toFile(pathFromRoot + `/thumbinals/${imagenameAfterEdit}`);
        return imagenameAfterEdit;
    } else {
        const imagenameAfterEdit = `${imagename}-height${height}.jpg`;
        await sharp(ImagePath)
            .resize({ height: height })
            .toFile(pathFromRoot + `/thumbinals/${imagenameAfterEdit}`);
        return imagenameAfterEdit;
    }
};

export const checkIfImageExist = (
    imagename: string,
    width: number,
    height: number
) => {
    let imagenameFromThumbinals = ``;

    if (width && height)
        imagenameFromThumbinals = `${imagename}-width${width}-height${height}.jpg`;
    else if (width) imagenameFromThumbinals = `${imagename}-width${width}.jpg`;
    else imagenameFromThumbinals = `${imagename}-height${height}.jpg`;

    const root: string =
        pathFromRoot + `/thumbinals/${imagenameFromThumbinals}`;

    if (fs.existsSync(root)) {
        return root;
    }
};
