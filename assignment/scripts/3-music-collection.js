console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {
      title: title,
      artist: artist,
      yearPublished: yearPublished,
    }
    collection.push(album);
    return album;
}

console.log('Added', addToCollection('Currents', 'Tame Impala', '2015'));
console.log('Added', addToCollection('21st Century Breakdown', 'Green Day', '2009'));
console.log('Added', addToCollection('RAZZMATAZZ', 'IDKHOW', '2020'));
console.log('Added', addToCollection('you ruined new york city for me', 'FLETCHER', '2019'));
console.log('Added', addToCollection('Ruin', 'The Amazing Devil', '2021'));
console.log('Added', addToCollection('Runaway, Run', 'molly ofgeography', '2020'));

console.log(collection);

function showCollection(array) {
    console.log(array.length);
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].title, 'by', array[i].artist, 'published in', array[i].yearPublished);
   
  }
}

showCollection(collection);