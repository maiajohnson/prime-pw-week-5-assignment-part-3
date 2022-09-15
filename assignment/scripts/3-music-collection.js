console.log('***** Music Collection *****')

// create variable called collection
let collection = [];

// create function called addToCollection
function addToCollection(title, artist, yearPublished) {
    let album = {
      title: title,
      artist: artist,
      yearPublished: yearPublished,
    } // create variable album with objects (title, artist, yearPublished) inside
    collection.push(album);
    return album;
    // add album to collection array and return it
}

// individually add each album to collection array and then log whole array
console.log('Added', addToCollection('Currents', 'Tame Impala', '2015'));
console.log('Added', addToCollection('21st Century Breakdown', 'Green Day', '2009'));
console.log('Added', addToCollection('RAZZMATAZZ', 'IDKHOW', '2020'));
console.log('Added', addToCollection('you ruined new york city for me', 'FLETCHER', '2019'));
console.log('Added', addToCollection('Ruin', 'The Amazing Devil', '2021'));
console.log('Added', addToCollection('Runaway, Run', 'molly ofgeography', '2020'));

console.log(collection);

// create function called showCollection
function showCollection(array) {
    console.log(array.length);
    // log the number of items in the array
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].title, 'by', array[i].artist, 'published in', array[i].yearPublished);
   
  } // loop through objects in array
}

// call function
showCollection(collection);


// create function called findByArtist
function findByArtist(array, artist) {
  let matchedArtist = [];
  // create empty array to hold results
  for (let i = 0; i < array.length; i++) // loop through array
  {
    if (array[i].artist === artist) {
      matchedArtist.push(array[i]);
    } // if the artist you are looking for is found in the array
      // then you add it to the empty array
  }
  return matchedArtist;
    }

// log findByArtist function using the collection array
console.log(findByArtist(collection, 'IDKHOW'));
console.log(findByArtist(collection, 'Green Day'));


