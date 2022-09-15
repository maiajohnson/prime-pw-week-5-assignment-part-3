console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {
      title: title,
      artist: artist,
      yearPublished: yearPublished,
    }
    collection.push(album);
    console.log(album);
    return;
}

addToCollection('Currents', 'Tame Impala', '2015');
addToCollection('21st Century Breakdown', 'Green Day', '2009');
addToCollection('RAZZMATAZZ', 'IDKHOW', '2020');
addToCollection('you ruined new york city for me', 'FLETCHER', '2019');
addToCollection('Ruin', 'The Amazing Devil', '2021');
addToCollection('Runaway, Run', 'molly ofgeography', '2020');

console.log(collection);

function showCollection(array) {
    console.log(array.length);
  for (let i = 0; i < array.length; i++) {
    console.log(array[0], 'by', array[1],', published in', array[2]);
    
  }
}

console.log(showCollection(collection));