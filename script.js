  // ===== Jokes Array =====
        const jokes = [
            "Why did Beethoven get rid of his chickens? All they ever said was, \"Bach, Bach, Bach!\"",
            "What did 20 do when it was hungry? Twenty-eight.",
            "Why is grass so dangerous? Because it's full of blades!",
            "Why are mountains so funny? They're hill areas.",
            "Why wasn't the cactus invited to hang out with the mushrooms? He wasn't a fungi.",
            "Why shouldn't you fundraise for marathons? They just take the money and run.",
            "Why does it take pirates a long time to learn the alphabet? Because they can spend years at C!",
            "Why can't a nose be 12 inches long? Because then it would be a foot.",
            "Why can't you put two half-dollars in your pocket? Because two halves make a hole, and your money will fall out!",
            "Why does a moon rock taste better than an Earth rock? It's a little meteor.",
            "How much do rainbows weigh? Not much. They're actually pretty light.",
            "A slice of apple pie costs $2.50 in Jamaica, $3.75 in Bermuda, and $3 in the Bahamas. Those are the pie-rates of the Caribbean.",
            "Why did the football coach yell at the vending machine? He wanted his quarter back!",
            "What kind of job can you get at a bicycle factory? A spokesperson",
            "What does a condiment wizard perform? Saucery",
            "What's the difference between spring rolls and summer rolls? Their seasoning.",
            "What's the difference between a poorly dressed man on a unicycle and a well-dressed man on a bicycle? Attire.",
            "What's the difference between a $20 steak and a $55 steak? February 14th.",
            "What's the best thing about Switzerland? The flag is a big plus.",
            "What do you call a happy cowboy? A jolly rancher.",
            "What word can you make shorter by adding two letters? Short.",
            "What falls, but never needs a bandage? The rain.",
            "Which is faster, hot or cold? Hot, because you can catch cold.",
            "What does a pickle say when he wants to play cards? 'Dill me in!'",
            "How much money does a pirate pay for corn? A buccaneer.",
            "Where do young trees go to learn? Elementree school.",
            "Why do bees have sticky hair? Because they use a honeycomb.",
            "How did the student feel when he learned about electricity? Totally shocked.",
            "What do you call a bee that can't make up its mind? A Maybe.",
            "Why was six afraid of seven? Because 7-8-9.",
            "How do you organize a space party? You planet.",
            "Why couldn't the bicycle stand up by itself? It was two tired.",
            "Why did the student eat his homework? Because his teacher told him it was a piece of cake.",
            "What did one hat say to the other? You wait here, I'll go on ahead.",
            "What's a cat's favorite instrument? Purr-cussion.",
            "Why did the crab cross the road? It didn't—it used the sidewalk.",
            "What's the difference between the bird flu and the swine flu? One requires tweetment and the other an oinkment.",
            "What is the most popular fish in the ocean? The starfish.",
            "What's the difference between ducks and dine-and-dashers? Ducks take care of their bills.",
            "I found a lion in my closet the other day! When I asked what it was doing there, it said \"Narnia business.\"",
            "What's the difference in an alligator and a crocodile? You'll see one later and one in a while.",
            "I went to the aquarium this weekend, but I didn't stay long. There's something fishy about that place.",
            "Why did the snail paint a giant S on his car? So when he drove by, people could say: \"Look at that S car go!\"",
            "What subject do cats like best in school? Hiss-tory.",
            "Why can't you make a dinosaur omelet? Because they're egg-stinct.",
            "How many goats does it take to change a lightbulb? Just one, but you have to goat them into it.",
            "Did you hear about the new squirrel diet? It's just nuts.",
            "When does a hippo have a tusk? After some rhino-plasty.",
            "What did the snail who was riding on the turtle's back say? Wheeeee!",
            "What do you call a lazy kangaroo? A pouch potato.",
            "What does a pig put on dry skin? Oinkment.",
            "How do you open a banana? With a mon-key.",
            "What do you call a pony with a sore throat? A little horse.",
            "How did the pig get to the hogspital? In a hambulance.",
            "Why did the cow jump over the moon? The farmer had cold hands.",
            "A termite walks into a bar and says, 'So, is the bar tender here?'",
            "How does an octopus go into battle? Well-armed.",
            "What do you get when you mix a cocker spaniel, a poodle, and a ghost? A cocker-poodle boo.",
            "Why don't sharks eat clowns? Because they taste funny.",
            "A horse walks into a bar. The bartender says, 'Why the long face?'",
            "What's black and white and goes round and round? A penguin in the washing machine.",
            "What do you call a dinosaur that crashes his car? Tyrannosaurus Wrecks.",
            "How do you stop a bull from charging? Cancel its credit card.",
            "Why don't we see elephants hiding in trees? Because they're really good at it.",
            "What's the difference between a hippo and a zippo? One's pretty heavy and the other's a little lighter.",
            "How do you make holy water? You boil the hell out of it.",
            "I couldn't figure out why the baseball kept getting larger. Then it hit me.",
            "What do you call a boomerang that won't come back? A stick.",
            "What did the full glass say to the empty glass? You look drunk.",
            "Justice is a dish best served cold. Otherwise, it's just water.",
            "What do call a criminal landing an airplane? Condescending.",
            "Why should you never throw grandpa's false teeth at a vehicle? You might denture car.",
            "Why are Christmas trees bad at knitting? They always drop their needles.",
            "What did the lunch box say to the refrigerator? Don't hate me because I'm a little cooler.",
            "Did you hear about the fragile myth? It was busted.",
            "I can always tell when someone is lying. I can tell when they're standing too.",
            "Why did the egg hide? It was a little chicken.",
            "What did the dirt say to the rain? If you keep this up, my name will be mud!",
            "Why couldn't the sunflower ride its bike? It lost its petals.",
            "What's the coolest element in the periodic table? Ber-yllium",
            "I used to be afraid of speed bumps. I'm trying to get over it.",
            "If your house is cold, just stand in the corner. It's always 90 degrees there.",
            "I don't recommend entering a wormhole. You might get stuck in the apple."
        ];

        // ===== Emoji Array for Animation =====
        const emojis = ['😂', '🤣', '😆', '😄', '😁', '🤪', '😜'];

        /**
         * Generates a random joke and displays it with animation
         */
        function generateJoke() {
            const randomIndex = Math.floor(Math.random() * jokes.length);
            const jokeBox = document.getElementById('jokeBox');
            
            // Apply animation by resetting it
            jokeBox.style.animation = 'none';
            setTimeout(() => {
                jokeBox.style.animation = 'fadeIn 0.5s ease-in-out';
                jokeBox.innerText = jokes[randomIndex];
            }, 10);

            // Update emoji with random one
            const emojiElement = document.getElementById('emoji');
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            emojiElement.innerText = randomEmoji;
        }

        
        /**
         * Toggles dark mode theme
         */
        function toggleDarkMode() {
            const body = document.body;
            const themeToggle = document.getElementById('themeToggle');
            
            body.classList.toggle('dark-mode');
            
            // Save preference to localStorage
            const isDarkMode = body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
            
            // Update button emoji
            themeToggle.innerText = isDarkMode ? '☀️' : '🌙';
        }

        /**
         * Initialize dark mode from localStorage
         */
        function initializeDarkMode() {
            const isDarkMode = localStorage.getItem('darkMode') === 'true';
            const themeToggle = document.getElementById('themeToggle');
            
            if (isDarkMode) {
                document.body.classList.add('dark-mode');
                themeToggle.innerText = '☀️';
            }
        }

        // ===== Event Listeners =====
        document.getElementById('themeToggle').addEventListener('click', toggleDarkMode);

        // Initialize app
        initializeDarkMode();