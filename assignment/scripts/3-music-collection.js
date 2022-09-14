console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = [title, artist, yearPublished]
    collection.push(album);
    return;
}

addToCollection('Currents', 'Tame Impala', '2015');
addToCollection('21st Century Breakdown', 'Green Day', '2009');
addToCollection('RAZZMATAZZ', 'IDKHOW', '2020');
addToCollection('you ruined new york city for me', 'FLETCHER', '2019');
addToCollection('Ruin', 'The Amazing Devil', '2021');
addToCollection('Runaway, Run', 'molly ofgeography', '2020');

console.log(collection);