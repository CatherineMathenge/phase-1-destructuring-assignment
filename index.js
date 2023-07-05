// Strings
const farmAnimals = 'cow horse sheep pig chicken';
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

const animals = 'cow horse sheep pig chicken'.split(' ');
const [bessie, , dolly, babe, little] = animals;

const [blackAndWhite, , black, pink] = animals;

// Arrays
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, , violet] = colors;

const [r, o, y, g, b, , v] = colors;

// Objects
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const { muppetName, color, song, job, partner } = muppet;

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;
