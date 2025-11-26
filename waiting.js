document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const originalUrl = urlParams.get("original");
  const timerElement = document.getElementById("timer");
  const continueButton = document.getElementById("continue");
  const cancelButton = document.getElementById("cancel");
  const message1Element = document.getElementById("message1");
  const message2Element = document.getElementById("message2");
  const titleElement = document.getElementById("title");
  const timerMessageElement = document.getElementById("timerMessage");

  let timeLeft = 10;
  let countdown;

  // Nihilistic message arrays
  const titles = [
    "⏳ Existential Crisis Pending",
    "💀 Moment of Truth",
    "🌌 Cosmic Interruption",
    "🔄 Reality Check",
    "📉 Productivity Plunge",
    "🌀 Time-Suck Vortex",
    "🤡 Clown World Access",
  ];

  const messages1 = [
    "You're about to enter another time-sucking vortex of despair",
    "Congratulations! You're moments away from another productivity black hole",
    "Your future self will definitely thank you for visiting this site",
    "This website promises to make your life marginally worse",
    "Another brick in the wall of your digital procrastination",
    "You're about to sacrifice precious life moments to another digital void",
    "Welcome to another chapter in 'How I Wasted My Potential'",
    "This site: because your dreams weren't going to fulfill themselves anyway",
  ];

  const messages2 = [
    "In the grand cosmic joke, is this really your punchline?",
    "The universe is infinite and you're choosing to look at this?",
    "Your limited time on this dying planet... and you're clicking here?",
    "Future archaeologists will study these browser histories and weep",
    "This is a finite life and you're spending it on infinite scroll",
    "In 100 years, will this click have mattered? (Spoiler: no)",
    "The heat death of the universe approaches, but first... this website",
    "Your ancestors survived plagues and wars for this moment",
  ];

  const timerMessages = [
    "Seconds ticking away... just like your youth",
    "Time: the one resource you can't get back (but sure, spend it here)",
    "10... 9... 8... moments you'll never get back",
    "Each second brings us closer to the void",
    "Tick tock... your life clock mocks you",
    "The sands of time fall while you contemplate memes",
    "Moments until your dreams fade a little more",
  ];

  const continueTexts = [
    "Yes, Waste My Time",
    "I Enjoy Disappointment",
    "Proceed to Regret",
    "My Dreams Can Wait",
    "Embrace the Void",
    "Continue the Descent",
    "Sure, Why Not",
  ];

  const cancelTexts = [
    "Actually, I Value My Life",
    "Return to Reality",
    "I Choose Hope",
    "Maybe I'll Be Productive",
    "Fight the Impulse",
    "Reclaim My Time",
    "Touch Grass Instead",
  ];

  // Random selection function
  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // Set random messages
  function setRandomMessages() {
    titleElement.textContent = getRandomItem(titles);
    message1Element.textContent = getRandomItem(messages1);
    message2Element.textContent = getRandomItem(messages2);
    timerMessageElement.textContent = getRandomItem(timerMessages);
    cancelButton.textContent = getRandomItem(cancelTexts);

    // Update continue button text later when timer ends
    continueButton.textContent = `Continue (${timeLeft}s)`;
  }

  function updateTimer() {
    timerElement.textContent = timeLeft;
    continueButton.textContent = `Continue (${timeLeft}s)`;

    // Update timer message occasionally for extra nihilism
    if (timeLeft % 3 === 0) {
      timerMessageElement.textContent = getRandomItem(timerMessages);
    }

    if (timeLeft <= 0) {
      clearInterval(countdown);
      continueButton.textContent = getRandomItem(continueTexts);
      continueButton.disabled = false;
    }
    timeLeft--;
  }

  // Initialize with random messages
  setRandomMessages();

  // Start countdown
  countdown = setInterval(updateTimer, 1000);

  continueButton.addEventListener("click", function () {
    if (!continueButton.disabled) {
      window.location.href = originalUrl;
    }
  });

  cancelButton.addEventListener("click", function () {
    window.history.back();
  });
});
