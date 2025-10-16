// ENGLISH WALA 10 App JavaScript

// App State
const appState = {
    currentUser: null,
    currentPage: 'home',
    quizState: {
        currentTopic: null,
        currentQuestionIndex: 0,
        questions: [],
        answers: [],
        score: 0,
        usedQuestions: {}
    }
};

// Grammar Notes Data
const grammarNotes = [
    { id: 1, title: "Parts of Speech", description: "Nouns, Pronouns, Verbs, Adjectives, etc.", content: "parts-of-speech" },
    { id: 2, title: "Tenses", description: "Present, Past, Future Tenses", content: "tenses" },
    { id: 3, title: "Articles", description: "A, An, The - Usage and Rules", content: "articles" },
    { id: 4, title: "Prepositions", description: "In, On, At, By, etc.", content: "prepositions" },
    { id: 5, title: "Conjunctions", description: "And, But, Or, Because, etc.", content: "conjunctions" },
    { id: 6, title: "Active & Passive Voice", description: "Voice Transformation Rules", content: "voice" },
    { id: 7, title: "Direct & Indirect Speech", description: "Narration Rules", content: "narration" },
    { id: 8, title: "Subject-Verb Agreement", description: "Agreement Rules", content: "agreement" },
    { id: 9, title: "Conditionals", description: "If Clauses - Types", content: "conditionals" },
    { id: 10, title: "Modal Verbs", description: "Can, Could, May, Might, etc.", content: "modals" },
    { id: 11, title: "Phrasal Verbs", description: "Common Phrasal Verbs", content: "phrasal-verbs" },
    { id: 12, title: "Idioms & Phrases", description: "Common English Idioms", content: "idioms" },
    { id: 13, title: "Sentence Structure", description: "Simple, Compound, Complex", content: "sentence-structure" },
    { id: 14, title: "Punctuation", description: "Comma, Period, Semicolon, etc.", content: "punctuation" },
    { id: 15, title: "Common Errors", description: "Frequently Made Mistakes", content: "common-errors" }
];

// Quiz Topics
const quizTopics = [
    { id: 'tenses', name: 'Tenses', icon: '⏰' },
    { id: 'articles', name: 'Articles', icon: '📰' },
    { id: 'prepositions', name: 'Prepositions', icon: '🎯' },
    { id: 'vocabulary', name: 'Vocabulary', icon: '📚' },
    { id: 'grammar', name: 'Grammar', icon: '✍️' },
    { id: 'verbs', name: 'Verbs', icon: '🏃' },
    { id: 'adjectives', name: 'Adjectives', icon: '🎨' },
    { id: 'pronouns', name: 'Pronouns', icon: '👤' },
    { id: 'conjunctions', name: 'Conjunctions', icon: '🔗' },
    { id: 'voice', name: 'Voice', icon: '🔄' },
    { id: 'narration', name: 'Narration', icon: '💬' },
    { id: 'idioms', name: 'Idioms', icon: '🎭' }
];

// Quiz Questions Database (Extensive)
const quizQuestions = {
    tenses: [
        { q: "She _____ to school every day.", options: ["go", "goes", "going", "gone"], correct: 1 },
        { q: "I _____ my homework yesterday.", options: ["do", "did", "done", "doing"], correct: 1 },
        { q: "They _____ playing cricket now.", options: ["is", "am", "are", "be"], correct: 2 },
        { q: "He _____ finished his work.", options: ["have", "has", "had", "having"], correct: 1 },
        { q: "We _____ to Delhi next week.", options: ["go", "went", "will go", "going"], correct: 2 },
        { q: "She _____ a book when I called her.", options: ["read", "reads", "was reading", "is reading"], correct: 2 },
        { q: "I _____ in this city since 2010.", options: ["live", "lived", "have lived", "am living"], correct: 2 },
        { q: "By next year, I _____ my degree.", options: ["complete", "completed", "will complete", "will have completed"], correct: 3 },
        { q: "He _____ his breakfast before going to office.", options: ["eat", "eats", "ate", "eaten"], correct: 1 },
        { q: "They _____ for two hours when it started raining.", options: ["play", "played", "had been playing", "were playing"], correct: 2 },
        { q: "The sun _____ in the east.", options: ["rise", "rises", "rose", "rising"], correct: 1 },
        { q: "I _____ him for five years.", options: ["know", "knew", "have known", "am knowing"], correct: 2 },
        { q: "She _____ to the market when I met her.", options: ["go", "went", "was going", "has gone"], correct: 2 },
        { q: "We _____ the movie by the time you arrive.", options: ["watch", "watched", "will watch", "will have watched"], correct: 3 },
        { q: "He _____ his car last month.", options: ["buy", "buys", "bought", "buying"], correct: 2 },
        { q: "I _____ English for three years.", options: ["study", "studied", "have been studying", "am studying"], correct: 2 },
        { q: "They _____ the project next Monday.", options: ["submit", "submitted", "will submit", "submitting"], correct: 2 },
        { q: "She _____ her keys somewhere.", options: ["lose", "loses", "lost", "has lost"], correct: 3 },
        { q: "We _____ dinner when the phone rang.", options: ["have", "had", "were having", "are having"], correct: 2 },
        { q: "He _____ to become a doctor.", options: ["want", "wants", "wanted", "wanting"], correct: 1 }
    ],
    articles: [
        { q: "I saw _____ elephant in the zoo.", options: ["a", "an", "the", "no article"], correct: 1 },
        { q: "_____ Taj Mahal is in Agra.", options: ["A", "An", "The", "No article"], correct: 2 },
        { q: "She is _____ honest girl.", options: ["a", "an", "the", "no article"], correct: 1 },
        { q: "He plays _____ cricket every day.", options: ["a", "an", "the", "no article"], correct: 3 },
        { q: "_____ sun rises in the east.", options: ["A", "An", "The", "No article"], correct: 2 },
        { q: "I need _____ pen to write.", options: ["a", "an", "the", "no article"], correct: 0 },
        { q: "She is _____ European.", options: ["a", "an", "the", "no article"], correct: 0 },
        { q: "_____ honesty is the best policy.", options: ["A", "An", "The", "No article"], correct: 3 },
        { q: "He is _____ M.A. in English.", options: ["a", "an", "the", "no article"], correct: 1 },
        { q: "I met _____ one-eyed man.", options: ["a", "an", "the", "no article"], correct: 0 },
        { q: "_____ Himalayas are in India.", options: ["A", "An", "The", "No article"], correct: 2 },
        { q: "She goes to _____ school daily.", options: ["a", "an", "the", "no article"], correct: 3 },
        { q: "He is _____ university student.", options: ["a", "an", "the", "no article"], correct: 0 },
        { q: "_____ rich should help the poor.", options: ["A", "An", "The", "No article"], correct: 2 },
        { q: "I have _____ apple and _____ orange.", options: ["a, a", "an, an", "an, a", "a, an"], correct: 2 },
        { q: "She plays _____ piano beautifully.", options: ["a", "an", "the", "no article"], correct: 2 },
        { q: "_____ Mount Everest is the highest peak.", options: ["A", "An", "The", "No article"], correct: 3 },
        { q: "He is _____ heir to the property.", options: ["a", "an", "the", "no article"], correct: 1 },
        { q: "I go to _____ bed at 10 PM.", options: ["a", "an", "the", "no article"], correct: 3 },
        { q: "_____ United States is a developed country.", options: ["A", "An", "The", "No article"], correct: 2 }
    ],
    prepositions: [
        { q: "She is sitting _____ the chair.", options: ["in", "on", "at", "by"], correct: 1 },
        { q: "He lives _____ Delhi.", options: ["in", "on", "at", "by"], correct: 0 },
        { q: "The book is _____ the table.", options: ["in", "on", "at", "by"], correct: 1 },
        { q: "I will meet you _____ 5 PM.", options: ["in", "on", "at", "by"], correct: 2 },
        { q: "She was born _____ 1995.", options: ["in", "on", "at", "by"], correct: 0 },
        { q: "He is good _____ mathematics.", options: ["in", "on", "at", "by"], correct: 2 },
        { q: "The cat is hiding _____ the bed.", options: ["under", "on", "at", "in"], correct: 0 },
        { q: "I am going _____ school.", options: ["in", "to", "at", "by"], correct: 1 },
        { q: "She arrived _____ Monday.", options: ["in", "on", "at", "by"], correct: 1 },
        { q: "The train leaves _____ 6 o'clock.", options: ["in", "on", "at", "by"], correct: 2 },
        { q: "He is standing _____ the door.", options: ["in", "on", "at", "by"], correct: 2 },
        { q: "I will finish this _____ tomorrow.", options: ["in", "on", "at", "by"], correct: 3 },
        { q: "She is afraid _____ dogs.", options: ["of", "from", "with", "by"], correct: 0 },
        { q: "The picture is hanging _____ the wall.", options: ["in", "on", "at", "by"], correct: 1 },
        { q: "He jumped _____ the river.", options: ["in", "into", "at", "on"], correct: 1 },
        { q: "I am interested _____ music.", options: ["in", "on", "at", "by"], correct: 0 },
        { q: "She walked _____ the park.", options: ["through", "in", "at", "on"], correct: 0 },
        { q: "The shop is _____ the corner.", options: ["in", "on", "at", "by"], correct: 2 },
        { q: "He is angry _____ me.", options: ["on", "with", "at", "by"], correct: 1 },
        { q: "I will come _____ the evening.", options: ["in", "on", "at", "by"], correct: 0 }
    ],
    vocabulary: [
        { q: "Synonym of 'Happy':", options: ["Sad", "Joyful", "Angry", "Tired"], correct: 1 },
        { q: "Antonym of 'Big':", options: ["Large", "Huge", "Small", "Giant"], correct: 2 },
        { q: "Meaning of 'Brave':", options: ["Coward", "Fearless", "Weak", "Timid"], correct: 1 },
        { q: "Synonym of 'Beautiful':", options: ["Ugly", "Pretty", "Bad", "Dirty"], correct: 1 },
        { q: "Antonym of 'Hot':", options: ["Warm", "Cold", "Cool", "Freezing"], correct: 1 },
        { q: "Meaning of 'Generous':", options: ["Selfish", "Kind", "Mean", "Greedy"], correct: 1 },
        { q: "Synonym of 'Intelligent':", options: ["Stupid", "Smart", "Dull", "Foolish"], correct: 1 },
        { q: "Antonym of 'Easy':", options: ["Simple", "Difficult", "Light", "Soft"], correct: 1 },
        { q: "Meaning of 'Ancient':", options: ["Modern", "New", "Old", "Recent"], correct: 2 },
        { q: "Synonym of 'Quick':", options: ["Slow", "Fast", "Lazy", "Tired"], correct: 1 },
        { q: "Antonym of 'Strong':", options: ["Powerful", "Weak", "Mighty", "Tough"], correct: 1 },
        { q: "Meaning of 'Abundant':", options: ["Scarce", "Plentiful", "Rare", "Few"], correct: 1 },
        { q: "Synonym of 'Difficult':", options: ["Easy", "Hard", "Simple", "Light"], correct: 1 },
        { q: "Antonym of 'Rich':", options: ["Wealthy", "Poor", "Affluent", "Prosperous"], correct: 1 },
        { q: "Meaning of 'Diligent':", options: ["Lazy", "Hardworking", "Careless", "Idle"], correct: 1 },
        { q: "Synonym of 'Angry':", options: ["Happy", "Furious", "Calm", "Peaceful"], correct: 1 },
        { q: "Antonym of 'Love':", options: ["Like", "Hate", "Adore", "Cherish"], correct: 1 },
        { q: "Meaning of 'Humble':", options: ["Proud", "Modest", "Arrogant", "Boastful"], correct: 1 },
        { q: "Synonym of 'Sad':", options: ["Happy", "Unhappy", "Joyful", "Cheerful"], correct: 1 },
        { q: "Antonym of 'Day':", options: ["Morning", "Night", "Afternoon", "Evening"], correct: 1 }
    ],
    grammar: [
        { q: "Which is a noun?", options: ["Run", "Beautiful", "Book", "Quickly"], correct: 2 },
        { q: "Which is a verb?", options: ["Table", "Write", "Happy", "Slowly"], correct: 1 },
        { q: "Which is an adjective?", options: ["Sing", "Chair", "Beautiful", "Quickly"], correct: 2 },
        { q: "Which is an adverb?", options: ["Fast", "Book", "Write", "Quickly"], correct: 3 },
        { q: "Plural of 'Child':", options: ["Childs", "Children", "Childes", "Childrens"], correct: 1 },
        { q: "Past tense of 'Go':", options: ["Goed", "Gone", "Went", "Going"], correct: 2 },
        { q: "Which is correct?", options: ["He don't know", "He doesn't know", "He not know", "He no know"], correct: 1 },
        { q: "Comparative of 'Good':", options: ["Gooder", "More good", "Better", "Best"], correct: 2 },
        { q: "Superlative of 'Bad':", options: ["Baddest", "More bad", "Worse", "Worst"], correct: 3 },
        { q: "Which is a pronoun?", options: ["Book", "He", "Run", "Beautiful"], correct: 1 },
        { q: "Which is a conjunction?", options: ["And", "Book", "Run", "Beautiful"], correct: 0 },
        { q: "Which is correct?", options: ["I is a student", "I am a student", "I are a student", "I be a student"], correct: 1 },
        { q: "Plural of 'Mouse':", options: ["Mouses", "Mice", "Mices", "Mousies"], correct: 1 },
        { q: "Past participle of 'Eat':", options: ["Ate", "Eaten", "Eated", "Eating"], correct: 1 },
        { q: "Which is correct?", options: ["She have a car", "She has a car", "She having a car", "She had have a car"], correct: 1 },
        { q: "Opposite of 'Buy':", options: ["Purchase", "Sell", "Get", "Take"], correct: 1 },
        { q: "Which is a preposition?", options: ["Under", "Book", "Run", "Beautiful"], correct: 0 },
        { q: "Which is correct?", options: ["They is coming", "They am coming", "They are coming", "They be coming"], correct: 2 },
        { q: "Plural of 'Foot':", options: ["Foots", "Feet", "Feets", "Footes"], correct: 1 },
        { q: "Past tense of 'See':", options: ["Seed", "Seen", "Saw", "Seeing"], correct: 2 }
    ],
    verbs: [
        { q: "Which is an action verb?", options: ["Beautiful", "Run", "Happy", "Quickly"], correct: 1 },
        { q: "Past tense of 'Write':", options: ["Writed", "Written", "Wrote", "Writing"], correct: 2 },
        { q: "Present participle of 'Swim':", options: ["Swam", "Swum", "Swimming", "Swimmed"], correct: 2 },
        { q: "Which is a helping verb?", options: ["Run", "Is", "Book", "Beautiful"], correct: 1 },
        { q: "Past participle of 'Break':", options: ["Broke", "Broken", "Breaked", "Breaking"], correct: 1 },
        { q: "Which is correct?", options: ["He do his work", "He does his work", "He doing his work", "He did does his work"], correct: 1 },
        { q: "Past tense of 'Sing':", options: ["Singed", "Sung", "Sang", "Singing"], correct: 2 },
        { q: "Which is a linking verb?", options: ["Run", "Jump", "Become", "Write"], correct: 2 },
        { q: "Past participle of 'Go':", options: ["Went", "Gone", "Goed", "Going"], correct: 1 },
        { q: "Which is correct?", options: ["She have finished", "She has finished", "She having finished", "She had have finished"], correct: 1 },
        { q: "Past tense of 'Bring':", options: ["Bringed", "Brought", "Brang", "Bringing"], correct: 1 },
        { q: "Present participle of 'Die':", options: ["Dieing", "Dying", "Died", "Dies"], correct: 1 },
        { q: "Past participle of 'Drink':", options: ["Drank", "Drunk", "Drinked", "Drinking"], correct: 1 },
        { q: "Which is correct?", options: ["I has been waiting", "I have been waiting", "I having been waiting", "I had have been waiting"], correct: 1 },
        { q: "Past tense of 'Teach':", options: ["Teached", "Taught", "Tought", "Teaching"], correct: 1 },
        { q: "Which is a modal verb?", options: ["Run", "Can", "Book", "Beautiful"], correct: 1 },
        { q: "Past participle of 'Speak':", options: ["Spoke", "Spoken", "Speaked", "Speaking"], correct: 1 },
        { q: "Which is correct?", options: ["They was playing", "They were playing", "They is playing", "They be playing"], correct: 1 },
        { q: "Past tense of 'Catch':", options: ["Catched", "Caught", "Cought", "Catching"], correct: 1 },
        { q: "Present participle of 'Lie' (to recline):", options: ["Lieing", "Lying", "Lied", "Lies"], correct: 1 }
    ],
    adjectives: [
        { q: "Which is an adjective?", options: ["Run", "Beautiful", "Quickly", "Book"], correct: 1 },
        { q: "Comparative of 'Big':", options: ["Biger", "Bigger", "More big", "Biggest"], correct: 1 },
        { q: "Superlative of 'Happy':", options: ["Happier", "More happy", "Happiest", "Most happy"], correct: 2 },
        { q: "Which is correct?", options: ["A honest man", "An honest man", "The honest man", "Honest man"], correct: 1 },
        { q: "Comparative of 'Beautiful':", options: ["Beautifuler", "More beautiful", "Beautifuller", "Most beautiful"], correct: 1 },
        { q: "Which is a possessive adjective?", options: ["My", "Me", "Mine", "I"], correct: 0 },
        { q: "Superlative of 'Little':", options: ["Littler", "Less", "Least", "Lesser"], correct: 2 },
        { q: "Which is correct?", options: ["This books", "These books", "That books", "Those book"], correct: 1 },
        { q: "Comparative of 'Far':", options: ["Farer", "Farrer", "Farther", "Most far"], correct: 2 },
        { q: "Which is a demonstrative adjective?", options: ["Beautiful", "This", "My", "Good"], correct: 1 },
        { q: "Superlative of 'Many':", options: ["Maniest", "More", "Most", "Much"], correct: 2 },
        { q: "Which is correct?", options: ["A unique idea", "An unique idea", "The unique idea", "Unique idea"], correct: 0 },
        { q: "Comparative of 'Old':", options: ["Older", "More old", "Oldest", "Most old"], correct: 0 },
        { q: "Which is a quantitative adjective?", options: ["Beautiful", "This", "Many", "Good"], correct: 2 },
        { q: "Superlative of 'Difficult':", options: ["Difficultest", "More difficult", "Most difficult", "Difficulter"], correct: 2 },
        { q: "Which is correct?", options: ["Much books", "Many books", "More books", "Most books"], correct: 1 },
        { q: "Comparative of 'Late':", options: ["Later", "More late", "Latest", "Most late"], correct: 0 },
        { q: "Which is an interrogative adjective?", options: ["Beautiful", "This", "Which", "Good"], correct: 2 },
        { q: "Superlative of 'Expensive':", options: ["Expensivest", "More expensive", "Most expensive", "Expensiver"], correct: 2 },
        { q: "Which is correct?", options: ["Less people", "Fewer people", "Lesser people", "Few people"], correct: 1 }
    ],
    pronouns: [
        { q: "Which is a personal pronoun?", options: ["Book", "He", "Beautiful", "Run"], correct: 1 },
        { q: "Which is correct?", options: ["Me and him went", "He and I went", "Him and me went", "Me and he went"], correct: 1 },
        { q: "Which is a possessive pronoun?", options: ["My", "Mine", "Me", "I"], correct: 1 },
        { q: "Which is correct?", options: ["This is me", "This is I", "This is myself", "This is mine"], correct: 0 },
        { q: "Which is a reflexive pronoun?", options: ["He", "Him", "Himself", "His"], correct: 2 },
        { q: "Which is correct?", options: ["Between you and I", "Between you and me", "Between you and myself", "Between I and you"], correct: 1 },
        { q: "Which is a relative pronoun?", options: ["He", "Who", "My", "Me"], correct: 1 },
        { q: "Which is correct?", options: ["Who's book is this?", "Whose book is this?", "Who book is this?", "Whom book is this?"], correct: 1 },
        { q: "Which is a demonstrative pronoun?", options: ["He", "This", "My", "Who"], correct: 1 },
        { q: "Which is correct?", options: ["It's me", "It's I", "It's myself", "It's mine"], correct: 0 },
        { q: "Which is an indefinite pronoun?", options: ["He", "Someone", "My", "Who"], correct: 1 },
        { q: "Which is correct?", options: ["Everyone have finished", "Everyone has finished", "Everyone are finished", "Everyone were finished"], correct: 1 },
        { q: "Which is an interrogative pronoun?", options: ["He", "What", "My", "This"], correct: 1 },
        { q: "Which is correct?", options: ["Who did you see?", "Whom did you see?", "Who you saw?", "Whom you saw?"], correct: 1 },
        { q: "Which is correct?", options: ["She and me are friends", "She and I are friends", "Me and she are friends", "Her and I are friends"], correct: 1 },
        { q: "Which is a reciprocal pronoun?", options: ["He", "Each other", "My", "Who"], correct: 1 },
        { q: "Which is correct?", options: ["The book is her's", "The book is hers", "The book is her", "The book is she"], correct: 1 },
        { q: "Which is correct?", options: ["Nobody know the answer", "Nobody knows the answer", "Nobody knowing the answer", "Nobody are knowing the answer"], correct: 1 },
        { q: "Which is correct?", options: ["This is our's", "This is ours", "This is our", "This is we"], correct: 1 },
        { q: "Which is correct?", options: ["Each of the students have a book", "Each of the students has a book", "Each of the students are having a book", "Each of the students were having a book"], correct: 1 }
    ],
    conjunctions: [
        { q: "Which is a coordinating conjunction?", options: ["Because", "And", "Although", "If"], correct: 1 },
        { q: "Which is a subordinating conjunction?", options: ["And", "But", "Because", "Or"], correct: 2 },
        { q: "Which is correct?", options: ["Neither he nor I am going", "Neither he nor I is going", "Neither he nor I are going", "Neither he nor I be going"], correct: 0 },
        { q: "Which is a correlative conjunction?", options: ["And", "But", "Either...or", "Because"], correct: 2 },
        { q: "Which is correct?", options: ["Both he and she is coming", "Both he and she are coming", "Both he and she am coming", "Both he and she be coming"], correct: 1 },
        { q: "Which conjunction shows contrast?", options: ["And", "But", "Or", "So"], correct: 1 },
        { q: "Which is correct?", options: ["Not only he but also I am responsible", "Not only he but also I is responsible", "Not only he but also I are responsible", "Not only he but also I be responsible"], correct: 0 },
        { q: "Which conjunction shows cause?", options: ["And", "But", "Because", "Or"], correct: 2 },
        { q: "Which is correct?", options: ["Either you or he have to go", "Either you or he has to go", "Either you or he are to go", "Either you or he am to go"], correct: 1 },
        { q: "Which conjunction shows result?", options: ["And", "So", "Or", "But"], correct: 1 },
        { q: "Which is correct?", options: ["Although he is rich, but he is unhappy", "Although he is rich, he is unhappy", "Although he is rich and he is unhappy", "Although he is rich or he is unhappy"], correct: 1 },
        { q: "Which conjunction shows choice?", options: ["And", "But", "Or", "So"], correct: 2 },
        { q: "Which is correct?", options: ["Unless you work hard, you will not succeed", "Unless you work hard, you will succeed", "Unless you not work hard, you will succeed", "Unless you work hard, you not will succeed"], correct: 0 },
        { q: "Which conjunction shows time?", options: ["And", "But", "When", "Or"], correct: 2 },
        { q: "Which is correct?", options: ["Hardly had he reached when the train left", "Hardly he had reached when the train left", "Hardly had he reached than the train left", "Hardly he reached when the train left"], correct: 0 },
        { q: "Which conjunction shows condition?", options: ["And", "But", "If", "Or"], correct: 2 },
        { q: "Which is correct?", options: ["Scarcely had I entered when it started raining", "Scarcely I had entered when it started raining", "Scarcely had I entered than it started raining", "Scarcely I entered when it started raining"], correct: 0 },
        { q: "Which conjunction shows purpose?", options: ["And", "But", "So that", "Or"], correct: 2 },
        { q: "Which is correct?", options: ["No sooner did he arrive when we left", "No sooner did he arrive than we left", "No sooner he arrived when we left", "No sooner he arrive than we left"], correct: 1 },
        { q: "Which conjunction shows comparison?", options: ["And", "But", "As", "Or"], correct: 2 }
    ],
    voice: [
        { q: "Active: He writes a letter. Passive:", options: ["A letter is written by him", "A letter was written by him", "A letter is being written by him", "A letter has been written by him"], correct: 0 },
        { q: "Active: She is reading a book. Passive:", options: ["A book is read by her", "A book is being read by her", "A book was being read by her", "A book has been read by her"], correct: 1 },
        { q: "Active: They have finished the work. Passive:", options: ["The work is finished by them", "The work was finished by them", "The work has been finished by them", "The work had been finished by them"], correct: 2 },
        { q: "Active: He will do the work. Passive:", options: ["The work is done by him", "The work was done by him", "The work will be done by him", "The work has been done by him"], correct: 2 },
        { q: "Active: She was writing a letter. Passive:", options: ["A letter is being written by her", "A letter was being written by her", "A letter has been written by her", "A letter had been written by her"], correct: 1 },
        { q: "Passive: The work is done by him. Active:", options: ["He does the work", "He did the work", "He is doing the work", "He has done the work"], correct: 0 },
        { q: "Active: They are building a house. Passive:", options: ["A house is built by them", "A house is being built by them", "A house was being built by them", "A house has been built by them"], correct: 1 },
        { q: "Active: He had completed the task. Passive:", options: ["The task is completed by him", "The task was completed by him", "The task has been completed by him", "The task had been completed by him"], correct: 3 },
        { q: "Passive: A letter was written by her. Active:", options: ["She writes a letter", "She wrote a letter", "She is writing a letter", "She has written a letter"], correct: 1 },
        { q: "Active: She will have finished the work. Passive:", options: ["The work will be finished by her", "The work will have been finished by her", "The work has been finished by her", "The work had been finished by her"], correct: 1 },
        { q: "Active: Open the door. Passive:", options: ["The door is opened", "Let the door be opened", "The door was opened", "The door has been opened"], correct: 1 },
        { q: "Passive: The book is being read by him. Active:", options: ["He reads the book", "He is reading the book", "He was reading the book", "He has read the book"], correct: 1 },
        { q: "Active: Who wrote this letter? Passive:", options: ["By whom is this letter written?", "By whom was this letter written?", "By whom has this letter been written?", "By whom had this letter been written?"], correct: 1 },
        { q: "Active: They were watching a movie. Passive:", options: ["A movie is being watched by them", "A movie was being watched by them", "A movie has been watched by them", "A movie had been watched by them"], correct: 1 },
        { q: "Passive: The work has been completed by them. Active:", options: ["They complete the work", "They completed the work", "They have completed the work", "They had completed the work"], correct: 2 },
        { q: "Active: She can do this work. Passive:", options: ["This work is done by her", "This work can be done by her", "This work was done by her", "This work has been done by her"], correct: 1 },
        { q: "Active: He must finish the project. Passive:", options: ["The project is finished by him", "The project must be finished by him", "The project was finished by him", "The project has been finished by him"], correct: 1 },
        { q: "Passive: The letter was being written by her. Active:", options: ["She writes the letter", "She wrote the letter", "She is writing the letter", "She was writing the letter"], correct: 3 },
        { q: "Active: They should complete the task. Passive:", options: ["The task is completed by them", "The task should be completed by them", "The task was completed by them", "The task has been completed by them"], correct: 1 },
        { q: "Active: We are going to build a house. Passive:", options: ["A house is built by us", "A house is going to be built by us", "A house was built by us", "A house has been built by us"], correct: 1 }
    ],
    narration: [
        { q: "Direct: He said, 'I am happy.' Indirect:", options: ["He said that he is happy", "He said that he was happy", "He said that I am happy", "He said that I was happy"], correct: 1 },
        { q: "Direct: She said, 'I will go tomorrow.' Indirect:", options: ["She said that she will go tomorrow", "She said that she would go the next day", "She said that I will go tomorrow", "She said that I would go the next day"], correct: 1 },
        { q: "Direct: He said to me, 'Are you happy?' Indirect:", options: ["He asked me if I am happy", "He asked me if I was happy", "He told me if I am happy", "He told me if I was happy"], correct: 1 },
        { q: "Direct: She said, 'What is your name?' Indirect:", options: ["She asked what is my name", "She asked what was my name", "She asked what my name is", "She asked what my name was"], correct: 3 },
        { q: "Direct: He said, 'Please help me.' Indirect:", options: ["He requested to help him", "He requested me to help him", "He ordered to help him", "He told to help him"], correct: 1 },
        { q: "Indirect: He said that he was ill. Direct:", options: ["He said, 'I am ill'", "He said, 'I was ill'", "He said, 'He is ill'", "He said, 'He was ill'"], correct: 0 },
        { q: "Direct: She said, 'I have finished my work.' Indirect:", options: ["She said that she has finished her work", "She said that she had finished her work", "She said that I have finished my work", "She said that I had finished my work"], correct: 1 },
        { q: "Direct: He said, 'Where do you live?' Indirect:", options: ["He asked where do I live", "He asked where did I live", "He asked where I live", "He asked where I lived"], correct: 3 },
        { q: "Direct: She said to me, 'Don't go there.' Indirect:", options: ["She advised me not to go there", "She advised me to not go there", "She told me not to go there", "She ordered me not to go there"], correct: 0 },
        { q: "Indirect: He asked me if I was ready. Direct:", options: ["He said to me, 'Am I ready?'", "He said to me, 'Are you ready?'", "He said to me, 'Was I ready?'", "He said to me, 'Were you ready?'"], correct: 1 },
        { q: "Direct: He said, 'I can do this work.' Indirect:", options: ["He said that he can do that work", "He said that he could do that work", "He said that I can do this work", "He said that I could do this work"], correct: 1 },
        { q: "Direct: She said, 'May God bless you!' Indirect:", options: ["She prayed that God may bless me", "She prayed that God might bless me", "She wished that God may bless me", "She wished that God might bless me"], correct: 1 },
        { q: "Direct: He said, 'Alas! I am ruined.' Indirect:", options: ["He exclaimed with sorrow that he is ruined", "He exclaimed with sorrow that he was ruined", "He said with sorrow that he is ruined", "He said with sorrow that he was ruined"], correct: 1 },
        { q: "Indirect: She told me that she would come the next day. Direct:", options: ["She said to me, 'I will come tomorrow'", "She said to me, 'I would come tomorrow'", "She said to me, 'She will come tomorrow'", "She said to me, 'She would come tomorrow'"], correct: 0 },
        { q: "Direct: He said, 'Let us go for a walk.' Indirect:", options: ["He proposed that we should go for a walk", "He proposed that they should go for a walk", "He suggested that we should go for a walk", "He suggested that they should go for a walk"], correct: 2 },
        { q: "Direct: She said, 'How beautiful the flower is!' Indirect:", options: ["She exclaimed that the flower is very beautiful", "She exclaimed that the flower was very beautiful", "She said that the flower is very beautiful", "She said that the flower was very beautiful"], correct: 1 },
        { q: "Indirect: He asked me where I was going. Direct:", options: ["He said to me, 'Where am I going?'", "He said to me, 'Where are you going?'", "He said to me, 'Where was I going?'", "He said to me, 'Where were you going?'"], correct: 1 },
        { q: "Direct: He said, 'Good morning, friends!' Indirect:", options: ["He wished his friends good morning", "He greeted his friends good morning", "He said good morning to his friends", "He told his friends good morning"], correct: 0 },
        { q: "Direct: She said, 'I must go now.' Indirect:", options: ["She said that she must go then", "She said that she had to go then", "She said that I must go now", "She said that I had to go now"], correct: 1 },
        { q: "Indirect: He told me that he had seen that movie. Direct:", options: ["He said to me, 'I saw that movie'", "He said to me, 'I have seen that movie'", "He said to me, 'I had seen that movie'", "He said to me, 'He saw that movie'"], correct: 1 }
    ],
    idioms: [
        { q: "Meaning of 'A piece of cake':", options: ["Very difficult", "Very easy", "Very expensive", "Very sweet"], correct: 1 },
        { q: "Meaning of 'Break the ice':", options: ["To break something", "To start a conversation", "To stop talking", "To freeze water"], correct: 1 },
        { q: "Meaning of 'Hit the nail on the head':", options: ["To hit something", "To be exactly right", "To make a mistake", "To build something"], correct: 1 },
        { q: "Meaning of 'Once in a blue moon':", options: ["Very often", "Very rarely", "Every month", "Every night"], correct: 1 },
        { q: "Meaning of 'Spill the beans':", options: ["To cook food", "To reveal a secret", "To waste food", "To clean up"], correct: 1 },
        { q: "Meaning of 'Under the weather':", options: ["In the rain", "Feeling sick", "Very happy", "Very angry"], correct: 1 },
        { q: "Meaning of 'Bite the bullet':", options: ["To eat food", "To face a difficult situation", "To run away", "To fight someone"], correct: 1 },
        { q: "Meaning of 'Cost an arm and a leg':", options: ["Very cheap", "Very expensive", "Free", "Painful"], correct: 1 },
        { q: "Meaning of 'Let the cat out of the bag':", options: ["To free an animal", "To reveal a secret", "To catch something", "To hide something"], correct: 1 },
        { q: "Meaning of 'Raining cats and dogs':", options: ["Light rain", "Heavy rain", "No rain", "Animals falling"], correct: 1 },
        { q: "Meaning of 'The ball is in your court':", options: ["Play sports", "It's your decision", "Give up", "Start over"], correct: 1 },
        { q: "Meaning of 'Burn the midnight oil':", options: ["To sleep early", "To work late at night", "To waste time", "To light a fire"], correct: 1 },
        { q: "Meaning of 'Cut corners':", options: ["To be careful", "To do something poorly to save time/money", "To be precise", "To give up"], correct: 1 },
        { q: "Meaning of 'Get cold feet':", options: ["To be cold", "To become nervous", "To be brave", "To run fast"], correct: 1 },
        { q: "Meaning of 'Hit the sack':", options: ["To fight", "To go to bed", "To wake up", "To work hard"], correct: 1 },
        { q: "Meaning of 'Pull someone's leg':", options: ["To hurt someone", "To joke with someone", "To help someone", "To ignore someone"], correct: 1 },
        { q: "Meaning of 'See eye to eye':", options: ["To look at each other", "To agree", "To disagree", "To fight"], correct: 1 },
        { q: "Meaning of 'The best of both worlds':", options: ["To travel", "To have advantages of two different things", "To choose one", "To lose everything"], correct: 1 },
        { q: "Meaning of 'Time flies':", options: ["Birds flying", "Time passes quickly", "Time stops", "Time is slow"], correct: 1 },
        { q: "Meaning of 'When pigs fly':", options: ["Very soon", "Never/impossible", "Sometimes", "Always"], correct: 1 }
    ]
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Hide splash screen after 3 seconds
    setTimeout(() => {
        document.getElementById('splash-screen').classList.add('hidden');
        checkUserLogin();
    }, 3000);

    // Setup event listeners
    setupEventListeners();
}

function checkUserLogin() {
    const userData = localStorage.getItem('englishWala10User');
    if (userData) {
        appState.currentUser = JSON.parse(userData);
        showMainApp();
        loadUserProgress();
    } else {
        showLoginScreen();
    }
}

function showLoginScreen() {
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('main-app').classList.add('hidden');
}

function showMainApp() {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
    loadNotes();
    loadQuizTopics();
}

function setupEventListeners() {
    // Login events
    document.getElementById('send-otp-btn').addEventListener('click', sendOTP);
    document.getElementById('verify-otp-btn').addEventListener('click', verifyOTP);
    document.getElementById('resend-otp-btn').addEventListener('click', sendOTP);
    
    // Logout event
    document.getElementById('logout-btn').addEventListener('click', logout);
    
    // Navigation events
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => navigateToPage(btn.dataset.page));
    });
    
    // Quiz events
    document.getElementById('back-to-topics-btn').addEventListener('click', showQuizTopics);
    document.getElementById('next-question-btn').addEventListener('click', nextQuestion);
    document.getElementById('finish-quiz-btn').addEventListener('click', finishQuiz);
    document.getElementById('retake-quiz-btn').addEventListener('click', showQuizTopics);
}

// OTP System
function sendOTP() {
    const phoneInput = document.getElementById('phone-number');
    const phone = phoneInput.value.trim();
    
    if (!phone || phone.length < 10) {
        alert('Please enter a valid mobile number');
        return;
    }
    
    // Generate unique OTP based on phone number
    const otp = generateUniqueOTP(phone);
    
    // Store OTP temporarily
    sessionStorage.setItem('currentOTP', otp);
    sessionStorage.setItem('currentPhone', phone);
    
    // Show OTP input section
    document.getElementById('phone-input-section').classList.add('hidden');
    document.getElementById('otp-input-section').classList.remove('hidden');
    document.getElementById('generated-otp').textContent = otp;
}

function generateUniqueOTP(phone) {
    // Generate consistent OTP for same phone number
    let hash = 0;
    for (let i = 0; i < phone.length; i++) {
        hash = ((hash << 5) - hash) + phone.charCodeAt(i);
        hash = hash & hash;
    }
    const otp = Math.abs(hash % 900000) + 100000;
    return otp.toString();
}

function verifyOTP() {
    const otpInput = document.getElementById('otp-input').value.trim();
    const storedOTP = sessionStorage.getItem('currentOTP');
    const phone = sessionStorage.getItem('currentPhone');
    
    if (otpInput === storedOTP) {
        // Check if user exists
        const existingUser = localStorage.getItem(`user_${phone}`);
        
        if (existingUser) {
            // Load existing user data
            appState.currentUser = JSON.parse(existingUser);
        } else {
            // Create new user
            appState.currentUser = {
                phone: phone,
                joinedDate: new Date().toISOString(),
                quizProgress: {},
                completedQuizzes: []
            };
            localStorage.setItem(`user_${phone}`, JSON.stringify(appState.currentUser));
        }
        
        localStorage.setItem('englishWala10User', JSON.stringify(appState.currentUser));
        showMainApp();
    } else {
        alert('Invalid OTP. Please try again.');
    }
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('englishWala10User');
        appState.currentUser = null;
        appState.currentPage = 'home';
        
        // Reset login screen
        document.getElementById('phone-number').value = '';
        document.getElementById('otp-input').value = '';
        document.getElementById('phone-input-section').classList.remove('hidden');
        document.getElementById('otp-input-section').classList.add('hidden');
        
        showLoginScreen();
    }
}

// Navigation
function navigateToPage(pageName) {
    // Update navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.page === pageName) {
            btn.classList.add('active');
        }
    });
    
    // Update pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(`${pageName}-page`).classList.remove('hidden');
    
    appState.currentPage = pageName;
}

// Notes System
function loadNotes() {
    const notesContainer = document.getElementById('notes-container');
    notesContainer.innerHTML = '';
    
    grammarNotes.forEach(note => {
        const noteCard = document.createElement('div');
        noteCard.className = 'note-card';
        noteCard.innerHTML = `
            <div class="note-info">
                <h3>${note.title}</h3>
                <p>${note.description}</p>
            </div>
            <a href="#" class="download-btn" onclick="downloadNote('${note.content}', '${note.title}'); return false;">
                Download
            </a>
        `;
        notesContainer.appendChild(noteCard);
    });
}

function downloadNote(content, title) {
    // Create comprehensive note content
    const noteContent = generateNoteContent(content, title);
    
    // Create blob and download
    const blob = new Blob([noteContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.replace(/\s+/g, '_')}_Notes.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function generateNoteContent(content, title) {
    const noteTemplates = {
        'parts-of-speech': `
ENGLISH WALA 10 - PARTS OF SPEECH NOTES
========================================

1. NOUN
   - Definition: A word that names a person, place, thing, or idea
   - Types: Proper, Common, Collective, Abstract, Material
   - Examples: Ram, Delhi, book, happiness, gold

2. PRONOUN
   - Definition: A word used in place of a noun
   - Types: Personal, Possessive, Reflexive, Demonstrative, Interrogative
   - Examples: I, you, he, she, it, we, they

3. VERB
   - Definition: A word that shows action or state of being
   - Types: Action verbs, Linking verbs, Helping verbs
   - Examples: run, write, is, am, are, have, has

4. ADJECTIVE
   - Definition: A word that describes a noun or pronoun
   - Types: Descriptive, Quantitative, Demonstrative, Possessive
   - Examples: beautiful, five, this, my

5. ADVERB
   - Definition: A word that modifies a verb, adjective, or another adverb
   - Types: Manner, Place, Time, Frequency, Degree
   - Examples: quickly, here, now, always, very

6. PREPOSITION
   - Definition: A word that shows relationship between noun/pronoun and other words
   - Examples: in, on, at, by, with, from, to

7. CONJUNCTION
   - Definition: A word that connects words, phrases, or clauses
   - Types: Coordinating, Subordinating, Correlative
   - Examples: and, but, or, because, although

8. INTERJECTION
   - Definition: A word that expresses strong emotion
   - Examples: Oh!, Wow!, Alas!, Hurray!

© ENGLISH WALA 10 - For more resources, visit our YouTube channel
`,
        'tenses': `
ENGLISH WALA 10 - TENSES NOTES
================================

PRESENT TENSE
-------------
1. Simple Present: Subject + V1 (s/es)
   - I go to school daily
   - She goes to school daily

2. Present Continuous: Subject + is/am/are + V1+ing
   - I am going to school
   - She is going to school

3. Present Perfect: Subject + has/have + V3
   - I have finished my work
   - She has finished her work

4. Present Perfect Continuous: Subject + has/have + been + V1+ing
   - I have been studying for two hours
   - She has been studying for two hours

PAST TENSE
----------
1. Simple Past: Subject + V2
   - I went to school yesterday
   - She went to school yesterday

2. Past Continuous: Subject + was/were + V1+ing
   - I was going to school
   - They were going to school

3. Past Perfect: Subject + had + V3
   - I had finished my work
   - She had finished her work

4. Past Perfect Continuous: Subject + had + been + V1+ing
   - I had been studying for two hours
   - She had been studying for two hours

FUTURE TENSE
------------
1. Simple Future: Subject + will/shall + V1
   - I will go to school tomorrow
   - She will go to school tomorrow

2. Future Continuous: Subject + will/shall + be + V1+ing
   - I will be going to school
   - She will be going to school

3. Future Perfect: Subject + will/shall + have + V3
   - I will have finished my work
   - She will have finished her work

4. Future Perfect Continuous: Subject + will/shall + have + been + V1+ing
   - I will have been studying for two hours
   - She will have been studying for two hours

© ENGLISH WALA 10 - For more resources, visit our YouTube channel
`,
        'articles': `
ENGLISH WALA 10 - ARTICLES NOTES
==================================

TYPES OF ARTICLES
-----------------
1. Indefinite Articles: A, An
2. Definite Article: The

USE OF 'A'
----------
- Before consonant sounds
- Examples: a book, a university, a European

USE OF 'AN'
-----------
- Before vowel sounds (a, e, i, o, u)
- Examples: an apple, an hour, an honest man

USE OF 'THE'
------------
- Before specific/particular nouns
- Before superlatives
- Before unique things
- Before rivers, oceans, mountain ranges
- Before musical instruments
- Examples: the Taj Mahal, the best, the sun, the Ganga, the piano

NO ARTICLE USED
---------------
- Before plural countable nouns (general)
- Before uncountable nouns (general)
- Before proper nouns
- Before languages
- Before sports and games
- Before meals (general)
- Examples: Books are useful, Water is essential, Ram is a boy, I speak English

SPECIAL RULES
--------------
1. Use 'a' before words starting with 'u' when pronounced as 'you'
   - a university, a useful book

2. Use 'an' before words starting with silent 'h'
   - an hour, an honest man

3. Use 'the' before ordinal numbers
   - the first, the second

© ENGLISH WALA 10 - For more resources, visit our YouTube channel
`,
        'prepositions': `
ENGLISH WALA 10 - PREPOSITIONS NOTES
======================================

PREPOSITIONS OF TIME
--------------------
- IN: months, years, centuries, long periods
  Examples: in January, in 2024, in the morning

- ON: days, dates, specific days
  Examples: on Monday, on 15th August, on my birthday

- AT: specific time, festivals
  Examples: at 5 PM, at night, at Diwali

- BY: deadline
  Examples: by tomorrow, by 5 PM

PREPOSITIONS OF PLACE
----------------------
- IN: inside something, cities, countries
  Examples: in the room, in Delhi, in India

- ON: surface, contact
  Examples: on the table, on the wall

- AT: specific point/location
  Examples: at the door, at the bus stop

- UNDER: below something
  Examples: under the table, under the tree

- ABOVE: higher than
  Examples: above the clouds, above sea level

- BELOW: lower than
  Examples: below the surface, below average

PREPOSITIONS OF MOVEMENT
-------------------------
- TO: direction towards
  Examples: go to school, come to me

- FROM: starting point
  Examples: from Delhi, from home

- INTO: entering
  Examples: go into the room, jump into the water

- OUT OF: exiting
  Examples: come out of the house, get out of the car

COMMON PREPOSITIONAL PHRASES
-----------------------------
- Good at: He is good at mathematics
- Interested in: I am interested in music
- Afraid of: She is afraid of dogs
- Proud of: We are proud of our country
- Fond of: He is fond of chocolates
- Angry with: She is angry with me
- Different from: This is different from that
- Similar to: This is similar to that

© ENGLISH WALA 10 - For more resources, visit our YouTube channel
`,
        'conjunctions': `
ENGLISH WALA 10 - CONJUNCTIONS NOTES
======================================

COORDINATING CONJUNCTIONS (FANBOYS)
------------------------------------
F - For (reason)
A - And (addition)
N - Nor (negative addition)
B - But (contrast)
O - Or (choice)
Y - Yet (contrast)
S - So (result)

Examples:
- I was tired, for I had worked all day
- She is intelligent and hardworking
- He neither drinks nor smokes
- She is poor but honest
- You can have tea or coffee
- He is rich yet unhappy
- It was raining, so we stayed home

SUBORDINATING CONJUNCTIONS
---------------------------
Time: when, while, after, before, until, since, as soon as
Cause: because, since, as
Condition: if, unless, provided that
Contrast: although, though, even though, whereas, while
Purpose: so that, in order that
Result: so...that, such...that

Examples:
- I will call you when I reach home
- She was reading while I was cooking
- We left after the movie ended
- Because it was raining, we stayed home
- If you work hard, you will succeed
- Although he is rich, he is unhappy

CORRELATIVE CONJUNCTIONS
-------------------------
- Either...or: Either you or I will go
- Neither...nor: Neither he nor she is coming
- Both...and: Both Ram and Shyam are present
- Not only...but also: He is not only intelligent but also hardworking
- Whether...or: Whether you like it or not, you have to do it

© ENGLISH WALA 10 - For more resources, visit our YouTube channel
`,
        'voice': `
ENGLISH WALA 10 - ACTIVE & PASSIVE VOICE NOTES
================================================

BASIC STRUCTURE
---------------
Active Voice: Subject + Verb + Object
Passive Voice: Object + be + Past Participle + by + Subject

SIMPLE PRESENT
--------------
Active: He writes a letter
Passive: A letter is written by him

PRESENT CONTINUOUS
------------------
Active: He is writing a letter
Passive: A letter is being written by him

PRESENT PERFECT
---------------
Active: He has written a letter
Passive: A letter has been written by him

SIMPLE PAST
-----------
Active: He wrote a letter
Passive: A letter was written by him

PAST CONTINUOUS
---------------
Active: He was writing a letter
Passive: A letter was being written by him

PAST PERFECT
------------
Active: He had written a letter
Passive: A letter had been written by him

SIMPLE FUTURE
-------------
Active: He will write a letter
Passive: A letter will be written by him

FUTURE PERFECT
--------------
Active: He will have written a letter
Passive: A letter will have been written by him

MODALS
------
Active: He can write a letter
Passive: A letter can be written by him

IMPERATIVE SENTENCES
--------------------
Active: Open the door
Passive: Let the door be opened

INTERROGATIVE SENTENCES
-----------------------
Active: Who wrote this letter?
Passive: By whom was this letter written?

SPECIAL CASES
-------------
1. When subject is unknown or unimportant, 'by + subject' is omitted
   - English is spoken all over the world

2. Verbs with two objects
   - Active: He gave me a book
   - Passive: I was given a book by him / A book was given to me by him

© ENGLISH WALA 10 - For more resources, visit our YouTube channel
`,
        'narration': `
ENGLISH WALA 10 - DIRECT & INDIRECT SPEECH NOTES
==================================================

BASIC RULES
-----------
1. Remove inverted commas
2. Use 'that' as conjunction
3. Change pronouns according to subject
4. Change tenses (backshift)
5. Change time and place adverbs

ASSERTIVE SENTENCES
-------------------
Reporting Verb: said, told

Direct: He said, "I am happy"
Indirect: He said that he was happy

Direct: She said to me, "I will help you"
Indirect: She told me that she would help me

INTERROGATIVE SENTENCES
-----------------------
Reporting Verb: asked, enquired, wanted to know

Yes/No Questions:
Direct: He said to me, "Are you happy?"
Indirect: He asked me if/whether I was happy

Wh- Questions:
Direct: She said, "What is your name?"
Indirect: She asked what my name was

IMPERATIVE SENTENCES
--------------------
Reporting Verb: ordered, requested, advised, told

Direct: He said to me, "Please help me"
Indirect: He requested me to help him

Direct: She said, "Don't go there"
Indirect: She advised/told me not to go there

EXCLAMATORY SENTENCES
---------------------
Reporting Verb: exclaimed with joy/sorrow

Direct: He said, "Hurrah! We have won"
Indirect: He exclaimed with joy that they had won

Direct: She said, "Alas! I am ruined"
Indirect: She exclaimed with sorrow that she was ruined

OPTATIVE SENTENCES
------------------
Reporting Verb: wished, prayed

Direct: He said, "May God bless you!"
Indirect: He prayed that God might bless me

TENSE CHANGES
-------------
Present Simple → Past Simple
Present Continuous → Past Continuous
Present Perfect → Past Perfect
Past Simple → Past Perfect
Will → Would
Can → Could
May → Might

TIME & PLACE CHANGES
--------------------
Now → Then
Today → That day
Tomorrow → The next day
Yesterday → The previous day
Here → There
This → That
These → Those

© ENGLISH WALA 10 - For more resources, visit our YouTube channel
`,
        'agreement': `
ENGLISH WALA 10 - SUBJECT-VERB AGREEMENT NOTES
================================================

BASIC RULE
----------
Singular subject takes singular verb
Plural subject takes plural verb

Examples:
- He goes to school (Singular)
- They go to school (Plural)

SPECIAL RULES
--------------

1. Two singular subjects joined by 'and' take plural verb
   - Ram and Shyam are friends

2. Two singular subjects joined by 'or/nor' take singular verb
   - Ram or Shyam is coming

3. When subjects are of different persons, verb agrees with the nearest
   - Either you or he is wrong
   - Neither he nor I am going

4. Collective nouns take singular verb when acting as unit
   - The team is playing well

5. Some nouns are always plural
   - Scissors, trousers, spectacles are plural
   - The scissors are on the table

6. Uncountable nouns take singular verb
   - Water is essential
   - Money is important

7. Each, every, either, neither take singular verb
   - Each student has a book
   - Every boy is present

8. Some, any, none, all, most can be singular or plural
   - Some of the water is spilled (uncountable - singular)
   - Some of the students are absent (countable - plural)

9. The number takes singular, A number takes plural
   - The number of students is increasing
   - A number of students are absent

10. Titles, names of countries take singular verb
    - The United States is a developed country
    - "The Arabian Nights" is an interesting book

© ENGLISH WALA 10 - For more resources, visit our YouTube channel
`,
        'conditionals': `
ENGLISH WALA 10 - CONDITIONALS NOTES
======================================

TYPE 0 - GENERAL TRUTH
----------------------
Structure: If + Present Simple, Present Simple
Use: Facts, general truths, scientific facts

Examples:
- If you heat water to 100°C, it boils
- If the sun rises, it becomes day

TYPE 1 - REAL POSSIBILITY
--------------------------
Structure: If + Present Simple, will + base form
Use: Real and possible situations in future

Examples:
- If it rains, I will stay home
- If you study hard, you will pass

TYPE 2 - UNREAL PRESENT
------------------------
Structure: If + Past Simple, would + base form
Use: Unreal or unlikely situations in present/future

Examples:
- If I were rich, I would buy a car
- If I had time, I would help you

TYPE 3 - UNREAL PAST
--------------------
Structure: If + Past Perfect, would have + past participle
Use: Unreal situations in past (regrets, criticism)

Examples:
- If I had studied, I would have passed
- If he had come, we would have met

MIXED CONDITIONALS
------------------
Type 2 + Type 3:
- If I were rich (now), I would have bought that house (past)

Type 3 + Type 2:
- If I had studied medicine (past), I would be a doctor (now)

OTHER CONDITIONAL WORDS
-----------------------
- Unless = If not
  Unless you work hard, you will fail
  = If you don't work hard, you will fail

- Provided that / Providing that = If
  I will help you provided that you help me

- In case = If (for precaution)
  Take an umbrella in case it rains

- As long as / So long as = If
  You can stay as long as you want

© ENGLISH WALA 10 - For more resources, visit our YouTube channel
`,
        'modals': `
ENGLISH WALA 10 - MODAL VERBS NOTES
=====================================

MODAL VERBS
-----------
Can, Could, May, Might, Must, Shall, Should, Will, Would, Ought to

CHARACTERISTICS
---------------
1. No 's' in third person singular
2. Followed by base form of verb
3. No 'to' before main verb (except ought to)
4. No auxiliary verb in questions/negatives

CAN
---
Uses:
- Ability: I can swim
- Permission: Can I go?
- Possibility: It can be true

COULD
-----
Uses:
- Past ability: I could swim when I was young
- Polite request: Could you help me?
- Possibility: It could rain

MAY
---
Uses:
- Permission: May I come in?
- Possibility: It may rain
- Wish: May God bless you!

MIGHT
-----
Uses:
- Less possibility: It might rain
- Past permission: He said I might go

MUST
----
Uses:
- Obligation: You must obey rules
- Strong necessity: I must go now
- Logical conclusion: He must be tired

SHOULD / OUGHT TO
-----------------
Uses:
- Advice: You should study hard
- Duty: We should respect elders
- Expectation: He should be here by now

SHALL
-----
Uses:
- Future (I/We): I shall go tomorrow
- Offer: Shall I help you?
- Suggestion: Shall we go?

WILL
----
Uses:
- Future: I will go tomorrow
- Promise: I will help you
- Request: Will you help me?

WOULD
-----
Uses:
- Past habit: He would often visit us
- Polite request: Would you help me?
- Conditional: I would go if I had time

NEED
----
Uses:
- Necessity: You need to work hard
- Negative: You need not worry

DARE
----
Uses:
- Challenge: How dare you say that?
- Negative: He dare not go there

© ENGLISH WALA 10 - For more resources, visit our YouTube channel
`,
        'phrasal-verbs': `
ENGLISH WALA 10 - PHRASAL VERBS NOTES
=======================================

COMMON PHRASAL VERBS
--------------------

BREAK
- Break down: Stop working (machine)
- Break into: Enter forcibly
- Break out: Start suddenly (war, fire)
- Break up: End a relationship

BRING
- Bring up: Raise (children)
- Bring about: Cause to happen
- Bring out: Publish
- Bring back: Return

CALL
- Call off: Cancel
- Call on: Visit
- Call for: Require
- Call up: Telephone

CARRY
- Carry on: Continue
- Carry out: Execute
- Carry away: Lose control

COME
- Come across: Find by chance
- Come up: Arise
- Come out: Be published
- Come round: Regain consciousness

GET
- Get up: Rise from bed
- Get on: Progress
- Get over: Recover from
- Get through: Pass (exam)

GIVE
- Give up: Stop trying
- Give in: Surrender
- Give away: Distribute free
- Give out: Distribute

GO
- Go on: Continue
- Go through: Experience
- Go over: Review
- Go off: Explode

LOOK
- Look after: Take care of
- Look for: Search
- Look into: Investigate
- Look up: Search in reference

MAKE
- Make up: Invent (story)
- Make out: Understand
- Make up for: Compensate
- Make do with: Manage with

PUT
- Put off: Postpone
- Put on: Wear
- Put up with: Tolerate
- Put out: Extinguish

TAKE
- Take after: Resemble
- Take off: Remove / Depart (plane)
- Take over: Assume control
- Take up: Start (hobby)

TURN
- Turn down: Reject
- Turn up: Arrive
- Turn into: Transform
- Turn out: Result

© ENGLISH WALA 10 - For more resources, visit our YouTube channel
`,
        'idioms': `
ENGLISH WALA 10 - IDIOMS & PHRASES NOTES
==========================================

COMMON IDIOMS
-------------

A
- A blessing in disguise: Good thing that seemed bad at first
- A dime a dozen: Very common
- A piece of cake: Very easy
- Add insult to injury: Make bad situation worse

B
- Beat around the bush: Avoid main topic
- Bite the bullet: Face difficult situation
- Break the ice: Start conversation
- Burn the midnight oil: Work late at night

C
- Call it a day: Stop working
- Cost an arm and a leg: Very expensive
- Cut corners: Do something poorly to save time/money
- Cry over spilt milk: Regret past events

D
- Devil's advocate: Argue opposite view
- Don't put all eggs in one basket: Don't risk everything

E
- Every cloud has a silver lining: Good in every bad situation

F
- Face the music: Accept consequences
- Feel under the weather: Feel sick

G
- Get cold feet: Become nervous
- Give someone the cold shoulder: Ignore someone

H
- Hit the nail on the head: Be exactly right
- Hit the sack: Go to bed

I
- In hot water: In trouble
- It's raining cats and dogs: Heavy rain

J
- Jump on the bandwagon: Follow trend

K
- Keep an eye on: Watch carefully
- Kill two birds with one stone: Achieve two things at once

L
- Let the cat out of the bag: Reveal secret
- Let sleeping dogs lie: Don't disturb situation

M
- Make a long story short: Tell briefly
- Miss the boat: Miss opportunity

O
- Once in a blue moon: Very rarely
- On cloud nine: Very happy

P
- Pull someone's leg: Joke with someone
- Put all eggs in one basket: Risk everything

S
- Speak of the devil: Person appears when talking about them
- Spill the beans: Reveal secret

T
- The ball is in your court: Your decision
- The best of both worlds: Advantages of two things
- Time flies: Time passes quickly

U
- Under the weather: Feeling sick

W
- When pigs fly: Never/Impossible
- Wrap your head around: Understand

© ENGLISH WALA 10 - For more resources, visit our YouTube channel
`,
        'sentence-structure': `
ENGLISH WALA 10 - SENTENCE STRUCTURE NOTES
============================================

TYPES OF SENTENCES
------------------

1. SIMPLE SENTENCE
   - One independent clause
   - Subject + Verb + Object
   - Examples:
     * I read books
     * She is a teacher
     * They play cricket

2. COMPOUND SENTENCE
   - Two or more independent clauses
   - Connected by coordinating conjunctions (and, but, or, so, yet)
   - Examples:
     * I read books and she writes stories
     * He is rich but he is unhappy
     * You can stay or you can go

3. COMPLEX SENTENCE
   - One independent clause + one or more dependent clauses
   - Connected by subordinating conjunctions (because, although, when, if)
   - Examples:
     * I read books because I love reading
     * Although he is rich, he is unhappy
     * When I reached home, it started raining

4. COMPOUND-COMPLEX SENTENCE
   - Two or more independent clauses + one or more dependent clauses
   - Examples:
     * I read books and she writes stories because we love literature
     * Although he is rich, he is unhappy and he lives alone

SENTENCE PATTERNS
-----------------

Pattern 1: Subject + Verb
- Birds fly
- She laughs

Pattern 2: Subject + Verb + Object
- I read books
- She writes letters

Pattern 3: Subject + Verb + Complement
- He is a teacher
- She looks beautiful

Pattern 4: Subject + Verb + Indirect Object + Direct Object
- I gave him a book
- She told me a story

Pattern 5: Subject + Verb + Object + Complement
- They elected him president
- We found the movie interesting

CLAUSES
-------

Independent Clause:
- Can stand alone as complete sentence
- Has subject and verb
- Example: I read books

Dependent Clause:
- Cannot stand alone
- Begins with subordinating conjunction
- Example: because I love reading

Types of Dependent Clauses:
1. Noun Clause: Acts as noun
   - What he said is true

2. Adjective Clause: Modifies noun
   - The book which I bought is interesting

3. Adverb Clause: Modifies verb
   - I will go when I finish my work

© ENGLISH WALA 10 - For more resources, visit our YouTube channel
`,
        'punctuation': `
ENGLISH WALA 10 - PUNCTUATION NOTES
=====================================

PERIOD (.)
----------
Uses:
- End of declarative sentence: I am a student.
- After abbreviations: Dr., Mr., etc.

COMMA (,)
---------
Uses:
- Separate items in list: I bought apples, oranges, and bananas.
- After introductory phrase: After dinner, we went for a walk.
- Before coordinating conjunction: I wanted to go, but it was raining.
- Around non-essential information: My brother, who lives in Delhi, is a doctor.

QUESTION MARK (?)
-----------------
Uses:
- End of interrogative sentence: What is your name?
- After direct question: He asked, "Where are you going?"

EXCLAMATION MARK (!)
--------------------
Uses:
- Express strong emotion: What a beautiful day!
- After interjections: Wow! That's amazing!

SEMICOLON (;)
-------------
Uses:
- Connect related independent clauses: I love reading; it's my favorite hobby.
- Separate items in complex list: I visited Delhi, India; Paris, France; and London, England.

COLON (:)
---------
Uses:
- Introduce list: I need three things: pen, paper, and eraser.
- Before explanation: There's one problem: we don't have enough time.
- After salutation in formal letter: Dear Sir:

APOSTROPHE (')
--------------
Uses:
- Show possession: Ram's book, children's toys
- Form contractions: don't, can't, it's

QUOTATION MARKS (" ")
---------------------
Uses:
- Direct speech: He said, "I am happy."
- Titles of short works: "The Road Not Taken" (poem)
- Special terms: The word "love" has many meanings.

HYPHEN (-)
----------
Uses:
- Compound words: mother-in-law, twenty-one
- Prefixes: ex-president, self-made

DASH (—)
--------
Uses:
- Emphasize information: The result—as we expected—was positive.
- Sudden break: I was going to tell you—oh, never mind.

PARENTHESES ( )
---------------
Uses:
- Additional information: The movie (which was released last year) won many awards.
- Clarification: The capital of India (New Delhi) is a beautiful city.

© ENGLISH WALA 10 - For more resources, visit our YouTube channel
`,
        'common-errors': `
ENGLISH WALA 10 - COMMON ERRORS NOTES
=======================================

SUBJECT-VERB AGREEMENT ERRORS
------------------------------
Wrong: He don't know
Right: He doesn't know

Wrong: They was playing
Right: They were playing

PRONOUN ERRORS
--------------
Wrong: Me and him went
Right: He and I went

Wrong: Between you and I
Right: Between you and me

TENSE ERRORS
------------
Wrong: I have went
Right: I have gone

Wrong: She has wrote
Right: She has written

ARTICLE ERRORS
--------------
Wrong: I saw a elephant
Right: I saw an elephant

Wrong: He is a honest man
Right: He is an honest man

PREPOSITION ERRORS
------------------
Wrong: I am good in English
Right: I am good at English

Wrong: She is afraid from dogs
Right: She is afraid of dogs

DOUBLE NEGATIVE
---------------
Wrong: I don't have no money
Right: I don't have any money

WORD ORDER ERRORS
-----------------
Wrong: I very much like it
Right: I like it very much

Wrong: Always he comes late
Right: He always comes late

COMPARATIVE/SUPERLATIVE ERRORS
-------------------------------
Wrong: More better
Right: Better

Wrong: Most best
Right: Best

CONFUSED WORDS
--------------
Their/There/They're:
- Their book (possessive)
- There is a book (place)
- They're happy (they are)

Its/It's:
- Its color (possessive)
- It's raining (it is)

Your/You're:
- Your book (possessive)
- You're smart (you are)

Affect/Effect:
- Affect (verb): The weather affects my mood
- Effect (noun): The effect was positive

Accept/Except:
- Accept (verb): I accept your offer
- Except (preposition): Everyone except him

REDUNDANCY
----------
Wrong: Repeat again
Right: Repeat

Wrong: Return back
Right: Return

SENTENCE FRAGMENTS
------------------
Wrong: Because I was tired.
Right: I went to bed because I was tired.

RUN-ON SENTENCES
----------------
Wrong: I love reading I read every day
Right: I love reading. I read every day.
Or: I love reading, and I read every day.

© ENGLISH WALA 10 - For more resources, visit our YouTube channel
`
    };
    
    return noteTemplates[content] || `
ENGLISH WALA 10 - ${title.toUpperCase()}
${'='.repeat(title.length + 20)}

This is a comprehensive guide on ${title}.

For detailed notes and video lessons, please visit:
YouTube: https://youtube.com/@englishwala10
WhatsApp: https://whatsapp.com/channel/0029VbBSYQ9C1FuHdDN8tW3i

Contact:
Instagram: @ENGLISH_WALA_10
Email: dp194267@gmail.com

© ENGLISH WALA 10 - Your English Learning Partner
`;
}

// Quiz System
function loadQuizTopics() {
    const topicGrid = document.getElementById('topic-grid');
    topicGrid.innerHTML = '';
    
    quizTopics.forEach(topic => {
        const topicBtn = document.createElement('button');
        topicBtn.className = 'topic-btn';
        topicBtn.innerHTML = `
            <span class="topic-icon">${topic.icon}</span>
            <span class="topic-name">${topic.name}</span>
        `;
        topicBtn.onclick = () => startQuiz(topic.id);
        topicGrid.appendChild(topicBtn);
    });
}

function startQuiz(topicId) {
    const topic = quizTopics.find(t => t.id === topicId);
    if (!topic) return;
    
    // Get questions for this topic
    const allQuestions = quizQuestions[topicId] || [];
    
    // Get user's used questions for this topic
    if (!appState.currentUser.quizProgress[topicId]) {
        appState.currentUser.quizProgress[topicId] = [];
    }
    
    const usedQuestions = appState.currentUser.quizProgress[topicId];
    
    // Filter out used questions
    let availableQuestions = allQuestions.filter((q, index) => 
        !usedQuestions.includes(index)
    );
    
    // If all questions used, reset
    if (availableQuestions.length < 10) {
        appState.currentUser.quizProgress[topicId] = [];
        availableQuestions = allQuestions;
    }
    
    // Select 10 random questions
    const selectedQuestions = [];
    const selectedIndices = [];
    
    for (let i = 0; i < Math.min(10, availableQuestions.length); i++) {
        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        const question = availableQuestions[randomIndex];
        const originalIndex = allQuestions.indexOf(question);
        
        selectedQuestions.push(question);
        selectedIndices.push(originalIndex);
        availableQuestions.splice(randomIndex, 1);
    }
    
    // Update used questions
    appState.currentUser.quizProgress[topicId].push(...selectedIndices);
    saveUserData();
    
    // Initialize quiz state
    appState.quizState = {
        currentTopic: topic,
        currentQuestionIndex: 0,
        questions: selectedQuestions,
        answers: [],
        score: 0
    };
    
    // Show quiz container
    document.getElementById('quiz-topics').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    
    // Load first question
    loadQuestion();
}

function loadQuestion() {
    const { currentQuestionIndex, questions, currentTopic } = appState.quizState;
    const question = questions[currentQuestionIndex];
    
    document.getElementById('quiz-topic-title').textContent = currentTopic.name;
    document.getElementById('question-number').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = questions.length;
    document.getElementById('question-text').textContent = question.q;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = option;
        optionBtn.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionBtn);
    });
    
    document.getElementById('next-question-btn').disabled = true;
    
    // Show finish button on last question
    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById('next-question-btn').classList.add('hidden');
        document.getElementById('finish-quiz-btn').classList.remove('hidden');
    } else {
        document.getElementById('next-question-btn').classList.remove('hidden');
        document.getElementById('finish-quiz-btn').classList.add('hidden');
    }
}

function selectOption(optionIndex) {
    const { currentQuestionIndex, questions } = appState.quizState;
    const question = questions[currentQuestionIndex];
    
    // Remove previous selection
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Mark selected option
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns[optionIndex].classList.add('selected');
    
    // Show correct/incorrect
    if (optionIndex === question.correct) {
        optionBtns[optionIndex].classList.add('correct');
        appState.quizState.score++;
    } else {
        optionBtns[optionIndex].classList.add('incorrect');
        optionBtns[question.correct].classList.add('correct');
    }
    
    // Store answer
    appState.quizState.answers[currentQuestionIndex] = optionIndex;
    
    // Enable next button
    document.getElementById('next-question-btn').disabled = false;
    document.getElementById('finish-quiz-btn').disabled = false;
    
    // Disable all options
    optionBtns.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    appState.quizState.currentQuestionIndex++;
    loadQuestion();
}

function finishQuiz() {
    const { score, questions } = appState.quizState;
    const percentage = Math.round((score / questions.length) * 100);
    
    // Save quiz result
    appState.currentUser.completedQuizzes.push({
        topic: appState.quizState.currentTopic.name,
        score: score,
        total: questions.length,
        percentage: percentage,
        date: new Date().toISOString()
    });
    saveUserData();
    
    // Show results
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('quiz-results').classList.remove('hidden');
    
    document.getElementById('score-value').textContent = score;
    document.getElementById('total-score').textContent = questions.length;
    document.getElementById('percentage-value').textContent = percentage;
}

function showQuizTopics() {
    document.getElementById('quiz-topics').classList.remove('hidden');
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
}

// User Data Management
function saveUserData() {
    if (appState.currentUser) {
        localStorage.setItem(`user_${appState.currentUser.phone}`, JSON.stringify(appState.currentUser));
        localStorage.setItem('englishWala10User', JSON.stringify(appState.currentUser));
    }
}

function loadUserProgress() {
    // User progress is already loaded from localStorage
    console.log('User progress loaded:', appState.currentUser);
}