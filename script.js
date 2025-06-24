const questions = [
  {
    question: "What makes your heart skip a beat?",
    answers: [
      { text: "A smile", line: "A smile like that could light up a thousand hearts ❤️" },
      { text: "A kind word", line: "Your love story begins with every gentle word 💌" },
      { text: "A surprise gift", line: "Unexpected moments make the sweetest memories 🎁❤️" }
    ]
  },
  {
    question: "How do you show love?",
    answers: [
      { text: "Hugs and cuddles", line: "Warmth is your love language 🫂❤️" },
      { text: "Words and poetry", line: "Your love speaks in verses and echoes in hearts 💘" },
      { text: "Little acts of service", line: "You love through every thoughtful deed 💗" }
    ]
  },
  {
    question: "What's your dream romantic date?",
    answers: [
      { text: "Stargazing", line: "Your heart belongs to the stars ✨❤️" },
      { text: "Beach walk", line: "With every wave, your love story grows 🌊💖" },
      { text: "Candlelight dinner", line: "Romance flickers like candlelight in your eyes 🕯️❤️" }
    ]
  },
  {
    question: "Which word describes your ideal partner?",
    answers: [
      { text: "Loyal", line: "A loyal heart is the truest treasure ❤️‍🔥" },
      { text: "Romantic", line: "You deserve a love that's filled with passion 💞" },
      { text: "Funny", line: "Laughter is your favorite love language 😂❤️" }
    ]
  },
  {
    question: "What does true love feel like to you?",
    answers: [
      { text: "Like peace", line: "You bring calm to the wildest storms 🕊️❤️" },
      { text: "Like fire", line: "Your passion ignites every heartbeat 🔥💓" },
      { text: "Like home", line: "With you, I have found my forever place 🏡💖" }
    ]
  },
  {
    question: "What kind of love do you crave?",
    answers: [
      { text: "Soul-touching", line: "You connect hearts beyond words 💫❤️" },
      { text: "Forever kind", line: "Your love is timeless and gentle 💞" },
      { text: "Raw and real", line: "You embrace every truth with love 💗" }
    ]
  },
  {
    question: "What's your favorite kind of hug?",
    answers: [
      { text: "From behind", line: "Your hugs are a safe place to rest 🫂❤️" },
      { text: "Long and silent", line: "In your arms, silence speaks volumes 🤫💖" },
      { text: "Tight and warm", line: "Your embrace melts away all fears 🔥💞" }
    ]
  },
  {
    question: "When do you feel most loved?",
    answers: [
      { text: "When I'm truly seen", line: "Your love sees me for who I am 🌟❤️" },
      { text: "When someone listens", line: "You hold my words like precious gems 💎💓" },
      { text: "When I can be vulnerable", line: "You cradle my heart with gentle hands 🤍" }
    ]
  },
  {
    question: "What’s the most romantic promise?",
    answers: [
      { text: "I’ll never give up on us", line: "Your loyalty is my guiding light 🕯️❤️" },
      { text: "You can always count on me", line: "Reliability is your love's foundation 🤝💖" },
      { text: "Even your scars are beautiful", line: "You love me for all that I am, flaws and all 🌹💗" }
    ]
  },
  {
    question: "What’s love in one word?",
    answers: [
      { text: "Magic", line: "You believe in fairy tale romance ✨❤️" },
      { text: "Home", line: "Your love brings peace and belonging 🏠💘" },
      { text: "Adventure", line: "Love is your favorite journey 🌍💖" }
    ]
  },
  {
    question: "Your favorite type of couple activity?",
    answers: [
      { text: "Cooking together", line: "You spice up love with every meal 🍝❤️" },
      { text: "Dancing in the rain", line: "Your heart moves to the rhythm of love 💃🌧️" },
      { text: "Late-night talks", line: "You connect heart to heart under the stars 🌌💗" }
    ]
  },
  {
    question: "What does your heart crave?",
    answers: [
      { text: "Deep connection", line: "You love with soul, not just words ❤️‍🩹" },
      { text: "Romantic surprises", line: "Every day with you is a new page of love 💌" },
      { text: "Emotional safety", line: "Your love is a safe haven 🛡️❤️" }
    ]
  },
  {
    question: "Which love quote speaks to you?",
    answers: [
      { text: "Love conquers all", line: "No obstacle stands before your heart 💘🛡️" },
      { text: "You are my person", line: "True love feels like home 🏡❤️" },
      { text: "To the moon and back", line: "Your love knows no limits 🌙💞" }
    ]
  },
  {
    question: "What kind of lover are you?",
    answers: [
      { text: "Hopeless romantic", line: "You wear your heart on rose-colored sleeves 🌹💘" },
      { text: "Caring and calm", line: "You love like a steady sunrise 🌅❤️" },
      { text: "Spontaneous and wild", line: "You bring adventure to every heartbeat 🌪️🔥" }
    ]
  },
  {
    question: "What’s the best kind of love?",
    answers: [
      { text: "Unconditional", line: "You give love without limits 💖💯" },
      { text: "Playful and fun", line: "You love with giggles and grins 😄❤️" },
      { text: "Soul-deep", line: "Your love is eternal, beyond this world 💫❤️" }
    ]
  },
  {
    question: "How do you express a crush?",
    answers: [
      { text: "Sweet messages", line: "Every text from you is a spark 💬❤️" },
      { text: "Shy glances", line: "Your eyes speak volumes of love 👀💞" },
      { text: "Gifts and surprises", line: "You're the master of secret romance 🎁💘" }
    ]
  },
  {
    question: "What’s your biggest romantic dream?",
    answers: [
      { text: "A forever soulmate", line: "Somewhere, your forever is waiting ❤️" },
      { text: "A fairy-tale wedding", line: "Your happily ever after is coming 💍💖" },
      { text: "Traveling the world together", line: "Every passport stamp holds a piece of your love 🌍❤️" }
    ]
  },
  {
    question: "What’s your favorite love symbol?",
    answers: [
      { text: "Hearts", line: "Your heart is full of love to give ❤️" },
      { text: "Roses", line: "Romance blooms wherever you go 🌹" },
      { text: "Letters", line: "Your love is written in timeless words 💌" }
    ]
  },
  {
    question: "Which love song speaks to you?",
    answers: [
      { text: "A soft ballad", line: "You find magic in every quiet moment 💖" },
      { text: "A fiery pop hit", line: "Your love is bold and unforgettable 🔥❤️" },
      { text: "A classic oldie", line: "Your heart beats in timeless rhythm 🎶💘" }
    ]
  },
  {
    question: "Which type of kiss is the best?",
    answers: [
      { text: "Forehead kiss", line: "You love with quiet tenderness 💗" },
      { text: "Hand kiss", line: "Romance flows through every touch 💋" },
      { text: "Surprise kiss", line: "You live for unexpected sparks 🔥" }
    ]
  },
  {
    question: "What’s most important in a relationship?",
    answers: [
      { text: "Trust", line: "Your love is built on solid ground 🤝❤️" },
      { text: "Passion", line: "Every heartbeat is a firework with you 💓🔥" },
      { text: "Laughter", line: "Joy is at the heart of your love 💕😂" }
    ]
  },
  {
    question: "Which season feels most romantic to you?",
    answers: [
      { text: "Winter", line: "Love keeps you warm through every storm ❄️❤️" },
      { text: "Spring", line: "Your heart blooms with every petal 🌸💘" },
      { text: "Autumn", line: "Falling leaves, rising love 🍂❤️" }
    ]
  },
  {
    question: "What’s the best way to say 'I love you'?",
    answers: [
      { text: "With actions", line: "Your love is shown in every thoughtful deed 💕" },
      { text: "With words", line: "Your voice carries the sweetest melodies 💖" },
      { text: "With silence", line: "Your presence speaks louder than words 🤫❤️" }
    ]
  },
  {
    question: "How do you keep love alive?",
    answers: [
      { text: "Through communication", line: "Your love grows stronger with every conversation 🗣️💞" },
      { text: "With surprises", line: "You keep the spark burning bright 🔥🎁" },
      { text: "By forgiving", line: "Your heart holds space for grace and healing 💗" }
    ]
  },
  {
    question: "What’s your love language?",
    answers: [
      { text: "Words of affirmation", line: "Your love lifts souls with every word 💬❤️" },
      { text: "Physical touch", line: "Your touch heals and comforts 🤗💖" },
      { text: "Quality time", line: "You treasure every shared moment ⏳💞" }
    ]
  },
  {
    question: "What’s your favorite romantic movie moment?",
    answers: [
      { text: "The big confession", line: "Your heart speaks loudly when it matters most ❤️🎬" },
      { text: "The grand gesture", line: "You love with bold and fearless moves 🎁💘" },
      { text: "The quiet moment", line: "Your love is in the simple silences 🤫💗" }
    ]
  },
  {
    question: "What’s your love superpower?",
    answers: [
      { text: "Listening", line: "Your heart hears what words cannot say 👂❤️" },
      { text: "Empathy", line: "You feel love from the depths of your soul 💞" },
      { text: "Patience", line: "You let love grow in its own time ⏳💖" }
    ]
  },
  {
    question: "How do you want to be remembered in love?",
    answers: [
      { text: "As someone who loved deeply", line: "Your love leaves an eternal mark 💘" },
      { text: "As someone who was kind", line: "Your heart is remembered for its warmth 💞" },
      { text: "As someone who was true", line: "You loved without regrets or doubts 💯❤️" }
    ]
  },
  {
    question: "What’s your favorite love memory?",
    answers: [
      { text: "First kiss", line: "That moment changed everything 💋❤️" },
      { text: "A heartfelt letter", line: "Words that live forever on paper 💌💖" },
      { text: "A surprise visit", line: "You turn ordinary days into magic ✨💞" }
    ]
  },
  {
    question: "What’s your love mantra?",
    answers: [
      { text: "Love is patient", line: "Your heart waits with endless grace 🕊️❤️" },
      { text: "Love is kind", line: "Your actions speak louder than words 💖" },
      { text: "Love never fails", line: "You believe in love’s infinite power ♾️💗" }
    ]
  },
  {
    question: "What’s your favorite thing about love?",
    answers: [
      { text: "The way it transforms", line: "Love turns the ordinary into the extraordinary ✨❤️" },
      { text: "The way it heals", line: "Your heart mends in the glow of love 💞🩹" },
      { text: "The way it grows", line: "Every day, your love blossoms more 🌸💖" }
    ]
  },
  {
    question: "What’s the best advice about love?",
    answers: [
      { text: "Always be honest", line: "Truth builds a love that lasts forever 🤝❤️" },
      { text: "Never stop trying", line: "Love is a journey, not a destination 🚶‍♂️💘" },
      { text: "Love yourself first", line: "You can only give what you have inside 💗✨" }
    ]
  },
  {
    question: "What’s your favorite love symbol?",
    answers: [
      { text: "Infinity", line: "Your love is boundless and eternal ♾️❤️" },
      { text: "Heart", line: "You wear your heart on your sleeve ❤️" },
      { text: "Dove", line: "Your love brings peace and hope 🕊️💞" }
    ]
  },
  {
    question: "What’s your love story's soundtrack?",
    answers: [
      { text: "Soft acoustic", line: "Your love is gentle and sincere 🎸❤️" },
      { text: "Passionate orchestra", line: "Your heart beats in grand symphony 🎻💘" },
      { text: "Upbeat pop", line: "You love with energy and joy 💃💞" }
    ]
  },
  {
    question: "What’s the first thing you notice in a partner?",
    answers: [
      { text: "Eyes", line: "Your gaze reveals what words can’t say 👀❤️" },
      { text: "Smile", line: "Their smile lights up your soul 🌟💖" },
      { text: "Kindness", line: "A loving heart shines through actions 💗" }
    ]
  },
  {
    question: "What’s your favorite way to say 'I miss you'?",
    answers: [
      { text: "A handwritten note", line: "Your words carry love across miles 💌❤️" },
      { text: "A midnight call", line: "Your voice is the sweetest lullaby 🌙💞" },
      { text: "A surprise visit", line: "You bring love when it’s needed most 💖" }
    ]
  }
];

  
  let currentQuestion;

function showRandomQuestion() {
  const qIndex = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[qIndex];

  document.getElementById("questionText").textContent = currentQuestion.question;

  const options = document.getElementById("answerOptions");
  options.innerHTML = "";

  currentQuestion.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.onclick = () => showLoveLine(answer.line);
    options.appendChild(btn);
  });
}

function showLoveLine(line) {
  document.getElementById("loveLine").textContent = line;
  document.getElementById("love-line-box").classList.remove("hidden");
  document.getElementById("question-box").classList.add("hidden");
}

function reset() {
  document.getElementById("love-line-box").classList.add("hidden");
  document.getElementById("question-box").classList.remove("hidden");
  showRandomQuestion();
}

function createHearts() {
  const heartContainer = document.querySelector('.heart-container');

  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 5) + "s";
    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000);
  }, 400);
}

window.onload = function () {
  showRandomQuestion();
  createHearts();
};