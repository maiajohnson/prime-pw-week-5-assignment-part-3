console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = [title, artist, yearPublished]
    collection.push(album);
    return;
}

addToCollection('Currents', 'Tame Impala', '2015');
