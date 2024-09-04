const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');


// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
   
    // Return an array of just the names of kitties who are orange e.g.
        // ['Tiger', 'Snickers']

    //  pseudo: I want to filter out and bring back only
    // the kitties who are orange. (filter).
    // - this will return an array of 2 cat objects.
    // - I then want just the 2 cat names, in an array.
    // - to get name so map
    // function orangePetNames(kitties) {
      const kittyPrompts = {
        orangePetNames(animalData) {
      // const orangeKitties = kittyData.filter((kitty) => {
      //   return kitty.color === 'orange';
      // });

      // console.log(orangeKitties);
      // const orangeKittyNames = orangeKitties.map((kitty) => {
      //   return kitty.name;
      // });

      // console.log(orangeKittyNames)
      // return orangeKittyNames;
      const orangeKitties = []
      animalData.forEach((animal) => {
        if (animal.color === 'orange') {
          orangeKitties.push(animal.name)
        };
      });
      // console.log(orangeKitties)
      return orangeKitties
    },
    
       
    
    // Annotation:
    // the answer was two names in an array. I had to find, or filter
    // out the kittens to just the ones that were orange and then 
    // return just their names in an array. I started with a filter that
    // brought back two kitten objects and then a map to get their names
    // since map will give you
 


     // Sort the kitties by their age
    // from the test, I can see that this will be from the oldest
    // to the youngest. so sort?
   
  sortByAge(animal) {
   const animalByAge = animal.sort((a, b) => {
    return b.age - a.age
   });
   return animalByAge
  //   // Annotation:
  //   // Write your annotation here as a comment
  },

  //  so need to bring back an array of kitties and add two years to
  // their age.
   // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]
  growUp(animals) {
   
    const animalsGrowUp = []
    animals.forEach((animal) => {
      animal.age += 2
      animalsGrowUp.push(animal)
      // console.log(animalsGrowUp)
    });
   return animalsGrowUp
  }
};


// growUp(animals) {
//   const animalsGrowUp  = animals.map((animal) => {
//  animal.age += 2;
//   return animal
//   });
//  return animalsGrowUp

// }
// }

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: mods from ./datasets/mods
 // Return an array of objects where the 
    // keys are mod (the number of the module)
    // and studentsPerInstructor 
    // (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    // want an array back with obj(hash) first key/value pair does not 
    // change from original. Second key value pair is new, with 
    // students being divided by instructors to get studentsPer as key
    // how many students after division as value.
    // I have to iterate over the array, access the object properties, create
    // a new object and have key/values be as stated, push the transformed
    // object into the new array, and return the results.
// const modPrompts = {
//   studentsPerMod() {
//    let transformedMods = []
//     mods.forEach((mod) => {
//     let divide =  mod.students / mod.instructors
//     let divideStudents = {studentsPerInstructor: divide}
//     let name = mod.mod
//     let divideStudentsNew = {mod:name, ... divideStudents}
//     transformedMods.push(divideStudentsNew)
//     console.log(transformedMods)
   
//   } ); 
//     return transformedMods
//     }
//   };  

  const modPrompts = {
    studentsPerMod() {
     let results = mods.map((mod) => {
        return {
          mod: mod.mod,
          studentsPerInstructor: mod.students / mod.instructors
        }
      });
      console.log(results)
      return results
    }
  }

  // const modPrompts = {
  //   studentsPerMod() {
  //     let result = []
  //     mods.forEach((mod) => {
  //       const studentsPerInstructor = mod.students / mod.instructors;
  //       result.push({
  //         mod: mod.mod, studentsPerInstructor: studentsPerInstructor
  //       });
  //     });
  //     console.log(result)
  //     return result;
  //   }
  // };

 // Annotation: modPrompts
    // Write your annotation here as a comment




// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------



// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: classrooms from ./datasets/classrooms
 // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

  // go through array classrooms, iterate over classroom obj(hashes) and find or filter
  // through BE or FE to grab only FE and bring back array of obj(hashes) that 
  // are only FE.

// const classPrompts = {
//   feClassrooms() {
//     let feClassOnly = []
//     classrooms.forEach((classroomObj) => {
//       if (classroomObj.program === 'FE')
//         feClassOnly.push(classroomObj)
//     });
//     return feClassOnly
//   },

  const classPrompts = {
    feClassrooms() {
      return classrooms.filter((classroomObj) => {
       return classroomObj.program === 'FE'
      });
      // return feClassOnly
    },

    // Annotation:
    // Write your annotation here as a comment
 

    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    // I have an array of objects(hashes). I want to look at the program key, take the FE or BE,
    // and add up their capacity, and bring back an obj(hash) with all the FE capacities added together,
    // and the BE capacities added together.
    // {feCapacity: classrooms}

  totalCapacities() {
   const total = classrooms.reduce((acc, classroom) => {
        if (classroom.program === "FE") {
         (acc.feCapacity += classroom.capacity);
        } else if (classroom.program === "BE") {
          (acc.beCapacity += classroom.capacity);
        }
        return acc
   }, {feCapacity: 0, beCapacity: 0});
   return total
  },

  // totalCapacities() {
  //   const total = {feCapacity: 0, beCapacity: 0}
  //   classrooms.forEach((classroom) => {
  //        if (classroom.program === "FE") {
  //        total.feCapacity += classroom.capacity;
  //        }
  //        if (classroom.program === "BE") {
  //          total.beCapacity += classroom.capacity;
  //        }
  //       });
  //       return total;
  //     },
  // Annotation:
  // don't forget return statement,
  // needed to make obj with the keys first and 0 to be able
  // to add and then the obj(hash) name.key name so total.feCapacity
  // otherwise could not add. 



  // Return the array of classrooms sorted by their capacity (least capacity to greatest)
  // prob use .sort() since we want to take classrooms and 'sort' by capacity. Not
  // changing anything else in the array.
  sortByCapacity() {
    const sortedClassrooms = classrooms.sort((a, b) => {
      return a.capacity - b.capacity
    });
    return sortedClassrooms
  }
};
// Annotation:
// Write your annotation here as a comment

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  getBooksByYear(books, year) {
    // return an array of objects containing all books that were
    // published after the specified year without the author or genre data. 
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather


  // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

  // I have an array of obj(hash), that has a nested obj(hash) of temps
  // I need to iterate over the array and through the first obj,
  // to get to the nested obj of temps. I then need to add temps,
  // and divide temps to get to average. I need to bring back
  // an array of temps only, not obj.

const weatherPrompts = {
  getAverageTemps() {
    let avgTemps = []
    weather.forEach((weatherInfo) => {
    let divide =  (weatherInfo.temperature.high +
      weatherInfo.temperature.low) / 2
      avgTemps.push(divide)
    });
    return avgTemps
  },
  
  // const weatherPrompts = {
  //   getAverageTemps() {
  //    let avgTemps = weather.map((weatherInfo) => {
  //      return (weatherInfo.temperature.high +
  //       weatherInfo.temperature.low) / 2
        
  //     });
  //     return avgTemps 
  //   },

    // Annotation:
    // Write your annotation here as a comment
  

    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    // going through the array of weather
    // looking at weather obj(hash) and checking weather.type
    // if weather.type === sunny or mostly sunny,
    // returning #{weather.location} + is + ${weather.type} 
    //  in an array
  findSunnySpots() {
    const sortOfSunny = []
    weather.forEach((weatherObj) => {
      if (weatherObj.type === 'sunny' || weatherObj.type === 'mostly sunny'){
        sortOfSunny.push(`${weatherObj.location} is ${weatherObj.type}.`,)
        console.log(sortOfSunny)
      };
    });
    return sortOfSunny
  },
  // Annotation:
  // don't forget to return after the loop,
  // the or had to have weatherObj.type on both sides



  // Return the location with the highest humidity. Eg:
  // {
  //   location: 'Portland, Oregon',
  //   type: 'cloudy',
  //   humidity: 84,
  //   temperature: { high: 49, low: 38 }
  // }
  findHighestHumidity() {
    let highestHumidity = weather[0];
    weather.forEach((weatherObj) => {
      if (weatherObj.humidity > highestHumidity.humidity) {
        highestHumidity = weatherObj
      };
    });
    return highestHumidity
  }
};

// findHighestHumidity() {
  
//  return weather.reduce((acc, weatherObj) => {
//     if (weatherObj.humidity > acc.humidity) {
//       return weatherObj;
//     } else {
//       return acc;
//     }
// }, weather[0]);
// }
// }

// Annotation:
// Write your annotation here as a comment

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  /// Return an object containing the names of which parks I need to visit
  // and the ones I have already visited eg:
  // {
  //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
  //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
  //}

  // need an obj(hash) that has parksToVisit and parkesVistied as keys
  // values are an array of park names
  // iterate over the array, looking at visited, if visited is true
  // parksVisited, if false, parks to visit.
  getParkVisitList() {
    let parksOrdered = {parksToVisit: [], parksVisited: []};
    nationalParks.forEach((park) => {
      if (park.visited === true) {
        parksOrdered.parksVisited.push(park.name) 
      } else {
        parksOrdered.parksToVisit.push(park.name)
      }
        
    });
   return parksOrdered

  },
  // Annotation:
  // Write your annotation here as a comment

  // Return an array of objects where the key is the state and the value is its National Park
  // eg: [ { Colorado: 'Rocky Mountain' },
  // { Wyoming: 'Yellowstone' },
  // { Montana: 'Glacier' },
  // { Maine: 'Acadia' },
  // { Utah: 'Zion' },
  // { Florida: 'Everglades' } ]

  // I want an array that holds obj(hash) where the key is state,
  // value is park.name

  getParkInEachState() {
    let parks = nationalParks.map((park) => {
      return {[park.location]: park.name};
    });
   return parks
  },
  // Annotation:
  // Write your annotation here as a comment

  // Return an array of all the activities I can do
  // in a National Park. Make sure to exclude duplicates. eg:
  // [ 'hiking',
  //   'shoeshoing',
  //   'camping',
  //   'fishing',
  //   'boating',
  //   'watching wildlife',
  //   'cross-country skiing',
  //   'swimming',
  //   'bird watching',
  //   'canyoneering',
  //   'backpacking',
  //   'rock climbing' ]

  // need an array of strings back, the strings are the activities
  // from the national parks. Only need back the activites, no dups
  getParkActivities() {
    let activities = nationalParks.flatMap((park) => {
      return park.activities 
      
    })
    return Array.from(new Set(activities))
  }
};
// Annotation:
// Write your annotation here as a comment



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: breweries from ./datasets/breweries

// Return the total beer count of all beers for every brewery e.g.
    // 40
    // array with brewery object, array with beer info [{[]}]
    // i want to get to the inner array of beers, add them up, 
    // add up all 5 beer arrays into one number of individual beers
    // 
const breweryPrompts = {
  getBeerCount() {
   let totalBeers = 0
   breweries.forEach((brewery) => {
    totalBeers += brewery.beers.length
    //  console.log(totalBeers)
   });
   return totalBeers

    // Annotation:
    // Write your annotation here as a comment
  },

   // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    // taking the array, making a new array that has an obj(hash) 
    // where in the object there name as key, brewery as value and 
    // beer count is a key with a value of how many beers.
  getBreweryBeerCount() {
  
   let results = []
    breweries.forEach((brewery) => {
     const name = brewery.name;
     const beerCount = brewery.beers.length;
     const brewerySummary = {name: name, beerCount: beerCount}
     results.push(brewerySummary);
    //  console.log(results)
   });
   return results

    // return breweries.map((brewery) => {
     
    //     return {name: brewery.name, beerCount: brewery.beers.length};
    // });
  }, 
    // Annotation: for getBreweryCount
    // Write your annotation here as a comment


   // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5
    // only want back the total number of beers from one brewery
    // 
  getSingleBreweryBeerCount(breweryName) {
    singleBreweryTotal = 0
   breweries.forEach((brewery) => {
    if (breweryName === brewery.name) {
      singleBreweryTotal += brewery.beers.length
      // console.log(singleBreweryTotal)
    };
   });
   return singleBreweryTotal
  },
  // Annotation: getSingleBreweryBeerCount
  // Write your annotation here as a comment


  // Return the beer which has the highest ABV of all beers
  // e.g.
  // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }
  // need to go through all beers and find the highest ABV and return the beer object(hash)
  findHighestAbvBeer() {
    let highestABVBeer = breweries[0].beers[0]; // Initialize with the first beer of the first brewery

    breweries.forEach(brewery => {
      brewery.beers.forEach(beer => {
        if (beer.abv > highestABVBeer.abv) {
          highestABVBeer = beer;
        }
      });
    });
  
    return highestABVBeer;
  }
};
  // function findHighestAbvBeer() {
  //   return breweries.reduce((highestABVBeer, brewery) => {
  //     return brewery.beers.reduce((acc, beer) => {
  //       if (beer.abv > acc.abv) {
  //         return beer;
  //       }
  //       return acc;
  //     }, highestABVBeer);
  //   }, breweries[0].beers[0]); // Initialize with the first beer from the first brewery
  // }
   // Annotation:
    // this one you have to go through the outerlayer,
    // then the inner layer to get to the abv. Then you have to 
    // start wiht the first beer so you have a starting value to 
    // then compare the abv to find the highest and then return that
    // as the object and not just the abv number.
 


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

// Return an array of just the names of the games within a specified type. 
// e.g. given an argument of "strategy", return
// ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

// need an array of board game names that meets the arg passed in
// I have a hash, with an array of types of games, then obj(hash)in the 
// type array.
const boardGamePrompts = {
  listGames(type) {
      return boardGames[type].map((game) => {
       return game.name 
      });
  },

  // Annotation:
  // Write your annotation here as a comment

  // Return an array of just the names of the games within a specified 
  // type, sorted alphabetically. 
  // e.g. given an argument of "childrens", return
  // ["Candy Land", "Connect Four", "Operation", "Trouble"]

  listGamesAlphabetically(type) {
    
    
  
  },
  // Annotation:
  // Write your annotation here as a comment

  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars from ./datasets/astronomy
const astronomyPrompts = {
  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByBrightness() {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use.  Even though the same weapon might be used by multiple characters, count each weapon only once.
    // Solve this *without* using Object.keys().  Hint: iterate over the characters array, then iterate through each character's weapons array. Find a way to make sure you only count each weapon once. 
    // Answer => 59

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of *awesome* dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is an object whose key is a movie's title and whose value is the average age of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------





// ---------------------------------------------------------------------------
//  ADDITIONAL CHALLENGES THAT INCLUDE METHODS NOT NEEDED FOR YOUR ASSESSMENT
   /* NOTE - You will not see Object.keys() on an assessment */
// ---------------------------------------------------------------------------



// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    /* CODE GOES HERE */
 

    // Annotation:
    // Write your annotation here as a comment
  }
};

// DATASET: constellations, stars from ./datasets/astronomy
const astronomyPromptsII = {
  starsInConstellations() {
    // Return an array of all the star objects that appear in any of the constellations listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};


// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinoPromptsII = {
  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};














module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};
