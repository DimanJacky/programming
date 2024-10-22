import utils from "../utils.js";
import {promises as fsPromise} from "fs";
import fs from "fs";
import path from "path";

class ProductController {

    async start(req, res) {
        try {
        const dir = await utils.readDirectory();
            res.json({dir});
        } catch (e) {
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }

    async create(req, res) {
        const chapter = req.body.chapter;
        const theme = req.body.theme;
        const newlesson = req.body.newlesson;
        try {
            const folderPath = 'C:\\project\\programming\\main\\files\\' + chapter + '\\';

            const folders = await fsPromise.readdir(folderPath);
            const arrFolder = [];

            for (const folder of folders) {
                const folderFullPath = path.join(folderPath, folder);
                const folderStats = await fsPromise.stat(folderFullPath);

                if (folderStats.isDirectory()) {
                    arrFolder.push(folder)
                }

            }

            const newfolder = folderPath + String(Math.max(...arrFolder) + 1);

            if (theme && newlesson) {
                if (chapter) {
                    if (!fs.existsSync(newfolder)) {
                        fs.mkdirSync(newfolder);
                        console.log('Папка создана успешно.');
                    } else {
                        console.log('Папка уже существует.');
                    }
                }

                if (chapter) {
                    if (!fs.existsSync(newfolder + '\\' + 'src')) {
                        fs.mkdirSync(newfolder + '\\' + 'src');
                        console.log('Папка создана успешно.');
                    } else {
                        console.log('Папка уже существует.');
                    }
                }
                const filePath = path.join(newfolder, 'description.ts');
                const fileContent = `const theme = '${theme}';\nconst name = '${newlesson}';`

                fs.writeFile(filePath, fileContent, (err) => {
                    if (err) {
                        console.error('Ошибка при создании файла:', err);
                    } else {
                        console.log('Файл успешно создан.');
                    }
                });

                const srcDir = `C:\\project\\programming\\${chapter}\\src`;

                (async function main() {
                    await utils.copyFolderRecursiveSync(srcDir, newfolder);
                })()
            }
            res.json('create');
        } catch (e) {
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }

    async edit(req, res) {
        const chapter = req.body.chapter;
        const theme = req.body.theme;
        const newlesson = req.body.newlesson;
        const folderLesson = req.body.folderLesson;
        try {
            const folderPath = 'C:\\project\\programming\\main\\files\\' + chapter + '\\';

            const newfolder = folderPath + folderLesson;

            console.log('newfolderedit', newfolder);

            if (theme && newlesson) {
                console.log('theme && newlesson');
                if (chapter) {
                    if (!fs.existsSync(newfolder + '\\' + 'src')) {
                        fs.mkdirSync(newfolder + '\\' + 'src');
                        console.log('Папка создана успешно.');
                    } else {
                        console.log('Папка уже существует.');
                    }
                }
                const filePath = path.join(newfolder, 'description.ts');
                const fileContent = `const theme = '${theme}';\nconst name = '${newlesson}';`

                console.log('writeFile')

                fs.writeFile(filePath, fileContent, (err) => {
                    if (err) {
                        console.error('Ошибка при создании файла:', err);
                    } else {
                        console.log('Файл успешно создан.');
                    }
                });

                console.log('after write');

                const srcDir = `C:\\project\\programming\\${chapter}\\src`;

                (async function main() {
                    await utils.copyFolderRecursiveSync(srcDir, newfolder);
                })()
            }
            res.json('edit');
        } catch (e) {
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }

    async nonPersoCardTpStart(req, res) {
        try {

            const chapter = req.body.chapter; // Название раздела
            const lesson = req.body.lesson; // Название темы

            const folderFiles = 'C:\\project\\programming\\main\\files\\';

            const folderLesson = folderFiles + `${chapter}\\`;

            // Копирование файла

            // Из этой папки копируются файлы
            const srcDir = folderLesson + `${lesson}\\src`;

            // Файлы копируются в эту папку
            const destDir = `C:\\project\\programming\\${chapter}`;

            // Папка src удаляется и заменяется другой
            const destDir1 = `C:\\project\\programming\\${chapter}\\src`;

            // Вызываем поочередно функции
            // Сначала нужно удалить папку src
            // И создать новую папку
            (async function main() {
                await utils.deleteDirectory(destDir1);
                await utils.copyFolderRecursiveSync(srcDir, destDir);
            })()
            res.json('файлы добавлены');


        } catch (e) {
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }


}

export default new ProductController()