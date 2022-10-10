const resources = require('./ResourcesModel');

export function selectFromDb(params){
    resources.find({params})
    .select('Food Marble Gold Solfour')
    .then(res => {
        return res
    });
    return null;
}