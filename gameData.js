// I don't know why but chrome won't read the txt file
// So I got python to do it and spit it out, and I copied/pasted it into here

const itemKinds = new Array([
    "Error",
    "Gold",
    "Ivory",
    "Spices",
    "Animal Skins",
    "Timber",
    "Porcelain",
    "Silk",
    "Rice",
    "Tea",
    "Cotton Textiles",
    "Gems",
    "Incense",
    "Steel Swords",
    "Silver",
    "Wine",
    "Wool Textiles",
    "Salt",
    "Pepper",
    "Pearls",
    "Horses",
    "Carpets",
    "Dyes",
    "Percelain",
    "Sugar Cultivation Knowledge",
    "Metals",
    "Gunpowder",
    "Dye",
]);

const cities = new Array([
    "Error, MLG360NOSCOPE",
    "Zanzibar, Faraji",
    "Venice, Giovanni",
    "Hambantota, Lashith",
    "Egypt, Ammon",
    "Persia, Syrus",
    "Malacca, Muhammad",
    "Kilwa, Johari",
    "Hangzhou, Haoyu",
    "Gujarat, Aarav",
    "Calicut, Krishna",
])

const technologyKinds = new Array([
    "Error",
    "Dhow Ships",
    "Lanteen Sail",
    "Astrolabe",
    "Magnetic Compass",
    "Stern Rudder",
    "Junk Ship",
])

// This took a couple attempts to generate right

const places = new Array([
    {cityName:"Zanzibar", location:"Swahili Coast", stock: new Set(['Gold', 'Ivory', 'Spices', 'Animal Skins', 'Timber']), desired: new Set(['Gold', 'Ivory', 'Spices', 'Animal Skins', 'Timber']), tech: new Set(['Gold', 'Ivory', 'Spices', 'Animal Skins', 'Timber']), destinations: new Set(['Venice', 'Persia', 'Egypt', 'Calicut', 'Kilwa', 'Gujarat'])},
    {cityName:"Venice", location:"Mediterranean", stock: new Set(['Silver', 'Wine', 'Wool Textiles', 'Salt']), desired: new Set(['Silver', 'Wine', 'Wool Textiles', 'Salt']), tech: new Set(['Silver', 'Wine', 'Wool Textiles', 'Salt']), destinations: new Set(['Egypt', 'Persia'])},
    {cityName:"Hambantota", location:"Sri Lanka", stock: new Set(['Spices', 'Ivory', 'Gems', 'Pearls', 'Cotton Textiles']), desired: new Set(['Spices', 'Ivory', 'Gems', 'Pearls', 'Cotton Textiles']), tech: new Set(['Spices', 'Ivory', 'Gems', 'Pearls', 'Cotton Textiles']), destinations: new Set(['Persia', 'Calicut', 'Gujarat', 'Malacca'])},
    {cityName:"Egypt", location:"The Red Sea", stock: new Set(['Gold', 'Horses', 'Incense', 'Pearls', 'Silver']), desired: new Set(['Gold', 'Horses', 'Incense', 'Pearls', 'Silver']), tech: new Set(['Gold', 'Horses', 'Incense', 'Pearls', 'Silver']), destinations: new Set(['Kilwa', 'Persia', 'Calicut', 'Gujarat'])},
    {cityName:"Persia", location:"Persian Gulf", stock: new Set(['Carpets', 'Horses', 'Incense', 'Pearls', 'Silver', 'Dyes', 'Steel Swords']), desired: new Set(['Carpets', 'Horses', 'Incense', 'Pearls', 'Silver', 'Dyes', 'Steel Swords']), tech: new Set(['Carpets', 'Horses', 'Incense', 'Pearls', 'Silver', 'Dyes', 'Steel Swords']), destinations: new Set(['Kilwa', 'Egypt', 'Calicut', 'Gujarat'])},
    {cityName:"Malacca", location:"Malaccan Strait", stock: new Set(['Gems', 'Pepper', 'Pearls', 'Spices', 'Timber']), desired: new Set(['Gems', 'Pepper', 'Pearls', 'Spices', 'Timber']), tech: new Set(['Gems', 'Pepper', 'Pearls', 'Spices', 'Timber']), destinations: new Set(['Calicut', 'Gujarat', 'Hambantota', 'Hangzhou'])},
    {cityName:"Kilwa", location:"Swahili Coast", stock: new Set(['Gold', 'Ivory']), desired: new Set(['Gold', 'Ivory']), tech: new Set(['Gold', 'Ivory']), destinations: new Set(['Egypt', 'Calicut', 'Gujarat', 'Malacca'])},
    {cityName:"Hangzhou", location:"China", stock: new Set(['Silk', 'Porcelain', 'Metals', 'Gunpowder', 'Tea', 'Rice']), desired: new Set(['Silk', 'Porcelain', 'Metals', 'Gunpowder', 'Tea', 'Rice']), tech: new Set(['Silk', 'Porcelain', 'Metals', 'Gunpowder', 'Tea', 'Rice']), destinations: new Set(['Malacca'])},
    {cityName:"Gujarat", location:"India", stock: new Set(['Cotton Textiles', 'Pepper', 'Steel Swords', 'Gold', 'Gems', 'Dye', 'Silk', 'Spices']), desired: new Set(['Cotton Textiles', 'Pepper', 'Steel Swords', 'Gold', 'Gems', 'Dye', 'Silk', 'Spices']), tech: new Set(['Cotton Textiles', 'Pepper', 'Steel Swords', 'Gold', 'Gems', 'Dye', 'Silk', 'Spices']), destinations: new Set(['Hambantota', 'Zanzibar', 'Venice', 'Egypt', 'Persia', 'Malacca', 'Kilwa', 'Calicut'])},
    {cityName:"Calicut", location:"India", stock: new Set(['Cotton Textiles', 'Pepper', 'Gold', 'Gems', 'Steel Swords', 'Dye', 'Silk', 'Spices']), desired: new Set(['Cotton Textiles', 'Pepper', 'Gold', 'Gems', 'Steel Swords', 'Dye', 'Silk', 'Spices']), tech: new Set(['Cotton Textiles', 'Pepper', 'Gold', 'Gems', 'Steel Swords', 'Dye', 'Silk', 'Spices']), destinations: new Set(['Hambantota', 'Zanzibar', 'Venice', 'Egypt', 'Persia', 'Malacca', 'Kilwa', 'Gujarat'])},
])

// This took fewer attempts. I'm glad I know python!
const dialog = new Map([
    ['introduce', new Set(['Hi there! My name is', "Hello. I'm", "Hey! The name's", 'Howdy. I am', 'Heyo! My name is'])],
    ['reintroduce', new Set(['Hey, welcome back!', 'Nice to see you again!', 'I was wondering how long it would be till I saw you again!', 'Hi again!'])],
    ['start', new Set(['Does anything here catch your eye?', 'Anything catch your eye?', 'Would you like to sell something?', "Let's get down to business.", 'Would you like to buy something here?'])],
    ['pitch', new Set(['Certainly! Come over here to see my wares...', 'Sure! Here is my cargo...', 'Great! You can see my wares over there.'])],
    ['intro item', new Set(['Ah yes,', 'Oh,', 'Ah,'])],
    ['supply', new Set(['We actually sell that here.', 'That guy over there is selling it for a cheaper price.', "That's in high supply here!", 'We already have that here.'])],
    ['low demand', new Set(['It goes for a small price around here.', "I'll take it, I guess.", "Sure, why not? It can't hurt my business.", 'We have a decent amount of that here.', 'Maybe I can resell it.'])],
    ['high demand', new Set(['I could really use that!', "Can I have it? I'll pay a good price!", "I'll take it!", 'That goes for a very fine price around here.', "Better keep quiet! That's in high demand here."])],
    ['bad deal', new Set(["Stop joking around, I'm not paying that.", "You'd make a better comedian than merchant.", 'Nope, not doing that.', 'What, are you serious? No!'])],
    ['meh deal', new Set(["Not bad, but I'd like a bit more on top.", 'Eh. No.', 'Raise your payment a little more, and sure.'])],
    ['okay deal', new Set(["Your deal sounds good. I'll take it!", 'Sounds good to me!', "That's a good price. I accept.", 'Sure, why not? I accept your offer.', "That's a good price for me."])],
    ['great deal', new Set(["That's a steal! I'll pay that happily.", "I'll take it! Let me grab my stuff here...", 'Sounds good to me!', "That's a good price. I accept.", 'Gimme gimme gimme! I like that price!'])],
    ['trade', new Set(['Very fair. Good trade!', 'Thank you for your business!', 'You make a mean deal. Do you want anything else in my wares?', 'Alright! Anything else catch your eye?'])],
    ['too full', new Set(["That ship of yours is loaded! I don't think you can take any more stuff, sorry!", 'If you put anything more on that ship of yours it will sink!', "I'm not selling you anything until you unload some cargo off that ship!", "That ship is overflowing with cargo! Sell some of it first. I'll give you a mean deal!"])],
    ['look at inventory', new Set(['Sure! Let me see what you have...', "Alright! What's in that cargo of yours...", 'Okay! Let me see your wares...', 'Sounds good! May I take a tour of your cargo?'])],
    ['goodbye', new Set(['Thank you for your business! I hope to meet you again soon!', 'Come back soon! You have real potential as a merchant.', 'Bye! Safe travels!', 'May you have a safe voyage!'])],
    ['offer', new Set(['How about this:', 'How does this sound:', "I'll pay this:", 'Does this sound good:'])],
    ['unload%,', new Set(['Certainly. What exotics did you get?', "Wow, that's a lot of items! What did you want to unload again?", 'Great, what do you have for me?'])],
    ['unload fail', new Set(['Hard to unload an already empty ship, bud.', "I can't unload what's already empty!", "There's nothing to unload!"])],
    ['load', new Set(['Yep, get these goods and get selling!', 'Yeah sure, what do you want?', 'Alright, what would you like?'])]
])


// they really ought to let us index sets, so I made a function to do that 
// it basically increases i as it iterates through set, and when i == index it returns
// set_index(foo, 2) is the same as foo[2] in python (where foo is a list or tuple)
function set_at_index(set, index) {

    if (set instanceof Set || set instanceof Array) {
        let i = 0;
        for (const val of set) {
            if (i == index) {
                return val;
            }
            i++;
        }
    }
    else {
        throw("set_index only takes iterable objects!");
    }
}

// this is the equivalent of list.index() in python
function index_set(set, thing) {
    const setArray = Array.from(set)
    return setArray.indexOf(thing)
}

// straight from stackOverflow
function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
  }

// and now we export it off and away!

export {itemKinds, cities, technologyKinds, places, dialog, set_at_index, index_set, toTitleCase};

