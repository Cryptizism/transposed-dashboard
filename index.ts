import { DataType } from "./@types/transposed/index";


const web = require('./website/app.ts');
const db = require('./database/db.ts');

web.instatiate();
//db.create('test2', [{name: 'test', type: DataType.TEXT}]);
db.getColumns('test2');