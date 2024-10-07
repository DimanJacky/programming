const fs = require('fs');
const fsPromise = require('fs').promises;
const path = require('path');

// Функция копирования файла
function copyFileSync( source, target ) {

    var targetFile = target;

    //if target is a directory a new file with the same name will be created
    if ( fs.existsSync( target ) ) {
        if ( fs.lstatSync( target ).isDirectory() ) {
            targetFile = path.join( target, path.basename( source ) );
        }
    }

    fs.writeFileSync(targetFile, fs.readFileSync(source));
}

// Функция рекурсивного копирования папки
function copyFolderRecursiveSync( source, target ) {
    var files = [];

    //check if folder needs to be created or integrated
    var targetFolder = path.join( target, path.basename( source ) );
    if ( !fs.existsSync( targetFolder ) ) {
        fs.mkdirSync( targetFolder );
    }

    //copy
    if ( fs.lstatSync( source ).isDirectory() ) {
        files = fs.readdirSync( source );
        files.forEach( function ( file ) {
            var curSource = path.join( source, file );
            if ( fs.lstatSync( curSource ).isDirectory() ) {
                copyFolderRecursiveSync( curSource, targetFolder );
            } else {
                copyFileSync( curSource, targetFolder );
            }
        } );
    }
}

// Функция удаления файла
function deleteFile(dir, file) {
    return new Promise(function (resolve, reject) {
        var filePath = path.join(dir, file);
        fs.lstat(filePath, function (err, stats) {
            if (err) {
                return reject(err);
            }
            if (stats.isDirectory()) {
                resolve(deleteDirectory(filePath));
            } else {
                fs.unlink(filePath, function (err) {
                    if (err) {
                        return reject(err);
                    }
                    resolve();
                });
            }
        });
    });
};

// Функция удаления папки
function deleteDirectory(dir) {
    return new Promise(function (resolve, reject) {
        fs.access(dir, function (err) {
            if (err) {
                return reject(err);
            }
            fs.readdir(dir, function (err, files) {
                if (err) {
                    return reject(err);
                }
                Promise.all(files.map(function (file) {
                    return deleteFile(dir, file);
                })).then(function () {
                    fs.rmdir(dir, function (err) {
                        if (err) {
                            return reject(err);
                        }
                        resolve();
                    });
                }).catch(reject);
            });
        });
    });
};

    async function readDirectory() {
        const folderPath = 'C:\\project\\programming\\main\\files\\';
        const directoryData = [];
        try {
            const folders = await fsPromise.readdir(folderPath);

            for (const folder of folders) {
                const folderFullPath = path.join(folderPath, folder);
                const folderStats = await fsPromise.stat(folderFullPath);

                const data = {
                    name: folder,
                    subfolders: [],
                    id: folder,
                };

                const descriptionFilePath = path.join(folderFullPath, 'description.ts');
                try {
                    const descriptionContent = await fsPromise.readFile(descriptionFilePath, 'utf-8');
                    const match = descriptionContent.match(/const name = '(.*)';/);
                    let nameValue;
                    if (match && match[1]) {
                        nameValue = match[1];
                    } else {
                        console.log('Не удалось извлечь значение переменной theme');
                    }
                    data.name = nameValue;
                } catch (error) {
                    console.log('Содержимое файла description.ts: Unable to read');
                }

                const subfolderData = await readSubdirectories(folderFullPath);
                data.subfolders = subfolderData;
                directoryData.push(data);
            }
        } catch (error) {
            console.error('Ошибка при чтении папки:', error);
        }
        return directoryData;
    }

async function readSubdirectories(folderPath) {
    const subfolderData = [];
    const subfolders = await fsPromise.readdir(folderPath);

    for (const subfolder of subfolders) {
        const subfolderFullPath = path.join(folderPath, subfolder);
        const subfolderStats = await fsPromise.stat(subfolderFullPath);

        const data = {
            name: subfolder,
            theme: subfolder,
            folderName: subfolder,
            id: subfolder
        };

        if (subfolderStats.isDirectory()) {

            const descriptionFilePath = path.join(subfolderFullPath, 'description.ts');
            try {
                const descriptionContent = await fsPromise.readFile(descriptionFilePath, 'utf-8');
                const matchTheme = descriptionContent.match(/const theme = '(.*)';/);
                const matchName = descriptionContent.match(/const name = '(.*)';/);
                let themeValue;
                let nameValue;
                if (matchTheme && matchTheme[1]) {
                    themeValue = matchTheme[1];
                } else {
                    console.log('Не удалось извлечь значение переменной theme');
                }
                if (matchName && matchName[1]) {
                    nameValue = matchName[1];
                } else {
                    console.log('Не удалось извлечь значение переменной theme');
                }
                data.theme = themeValue;
                data.name = nameValue;
            } catch (error) {
                console.log('    Содержимое файла description.ts: Unable to read');
            }
            subfolderData.push(data);
        }
    }
    return subfolderData;
}

module.exports.copyFileSync = copyFileSync;
module.exports.copyFolderRecursiveSync = copyFolderRecursiveSync;
module.exports.deleteFile = deleteFile;
module.exports.deleteDirectory = deleteDirectory;
module.exports.readDirectory = readDirectory;
