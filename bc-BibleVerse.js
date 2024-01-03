// Define the module/library
const bcBibleVerse = (function () {
  // Default settings
  const defaultOptions = {
    showKey: true,
    showVerse: true,
    keyAfterText: false,
    separationCharacter: ":",
  };

  const verses = {
    "Isaiah 9:6":
      "For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.",
    "Matthew 11:28-30":
      "Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls. For my yoke is easy, and my burden is light.",
    "John 1:1":
      "In the beginning was the Word, and the Word was with God, and the Word was God.",
    "John 3:16":
      "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
    "Hebrews 10:31":
      "It is a fearful thing to fall into the hands of the living God.",
    "Mark 9:42":
      "And whosoever shall offend one of these little ones that believe in me, it is better for him that a millstone were hanged about his neck, and he were cast into the sea.",
    "Revelation 21:4":
      "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.",
    "James 1:8": "A double minded man is unstable in all his ways.",
    "James 1:17":
      "Every good gift and every perfect gift is from above, and cometh down from the Father of lights, with whom is no variableness, neither shadow of turning.",
    "James 1:19":
      "Wherefore, my beloved brethren, let every man be swift to hear, slow to speak, slow to wrath:",
    "James 1:22":
      "But be ye doers of the word, and not hearers only, deceiving your own selves.",
    "James 2:19":
      "Thou believest that there is one God; thou doest well: the devils also believe, and tremble.",
    "James 3:17":
      "But the wisdom that is from above is first pure, then peaceable, gentle, and easy to be intreated, full of mercy and good fruits, without partiality, and without hypocrisy.",
    "Matthew 18:4":
      "Whosoever therefore shall humble himself as this little child, the same is greatest in the kingdom of heaven.",
    "James 4:17":
      "Therefore to him that knoweth to do good, and doeth it not, to him it is sin.",
    "James 5:20":
      "Let him know, that he which converteth the sinner from the error of his way shall save a soul from death, and shall hide a multitude of sins.",
    "Hebrews 11:24-25":
      "By faith Moses, when he was come to years, refused to be called the son of Pharaoh's daughter; Choosing rather to suffer affliction with the people of God, than to enjoy the pleasures of sin for a season;",
    "Matthew 5:3-5":
      "Blessed are the poor in spirit: for theirs is the kingdom of heaven. Blessed are they that mourn: for they shall be comforted. Blessed are the meek: for they shall inherit the earth.",
    "Matthew 5:6-8":
      "Blessed are they which do hunger and thirst after righteousness: for they shall be filled. Blessed are the merciful: for they shall obtain mercy. Blessed are the pure in heart: for they shall see God.",
    "Matthew 5:9-10":
      "Blessed are the peacemakers: for they shall be called the children of God. Blessed are they which are persecuted for righteousness' sake: for theirs is the kingdom of heaven.",
    "Matthew 5:11-12":
      "Blessed are ye, when men shall revile you, and persecute you, and shall say all manner of evil against you falsely, for my sake. Rejoice, and be exceeding glad: for great is your reward in heaven: for so persecuted they the prophets which were before you.",
    "Galatians 5:1":
      "Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage.",
    "Galatians 5:16":
      "This I say then, Walk in the Spirit, and ye shall not fulfil the lust of the flesh.",
    "Galatians 5:22-24":
      "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, Meekness, temperance: against such there is no law. And they that are Christ's have crucified the flesh with the affections and lusts.",
    "Galatians 5:26":
      "Let us not be desirous of vain glory, provoking one another, envying one another.",
    "Galatians 4:28":
      "Now we, brethren, as Isaac was, are the children of promise.",
    "Proverbs 26:11":
      "As a dog returneth to his vomit, so a fool returneth to his folly.",
    "Matthew 14:30-31":
      "But when he saw the wind boisterous, he was afraid; and beginning to sink, he cried, saying, Lord, save me. And immediately Jesus stretched forth his hand, and caught him, and said unto him, O thou of little faith, wherefore didst thou doubt?",
    "Matthew 12:21": "And in his name shall the Gentiles trust.",
    "Matthew 12:36-37":
      "But I say unto you, That every idle word that men shall speak, they shall give account thereof in the day of judgment. For by thy words thou shalt be justified, and by thy words thou shalt be condemned.",
    "Matthew 4:17":
      "From that time Jesus began to preach, and to say, Repent: for the kingdom of heaven is at hand.",
  };

  // Helper function to merge user options with default options
  function extendOptions(userOptions) {
    return Object.assign({}, defaultOptions, userOptions);
  }

  // Main function to get a random verse with 'keyAfterText' option
  function getRandomVerse(options = {}) {
    const verseKeys = Object.keys(verses);
    const randomKey = verseKeys[Math.floor(Math.random() * verseKeys.length)];
    const randomVerse = verses[randomKey];
    const finalOptions = extendOptions(options);

    // Build the verse text according to options
    let verseText = "";

    // Conditionally place the key before or after the verse
    if (!finalOptions.keyAfterText && finalOptions.showKey) {
      verseText += randomKey + finalOptions.separationCharacter;
    }

    if (finalOptions.showVerse) {
      verseText += randomVerse;
    }

    if (finalOptions.keyAfterText && finalOptions.showKey) {
      if (finalOptions.showVerse) {
        verseText += finalOptions.separationCharacter;
      }
      verseText += randomKey;
    }

    // Return the verse text
    return verseText;
  }

  // Expose the public function
  return {
    getRandomVerse: getRandomVerse,
  };
})();

// Usage
bcBibleVerse.getRandomVerse({
  showKey: true,
  showVerse: true,
  keyAfterText: false,
  separationCharacter: ": ",
});
