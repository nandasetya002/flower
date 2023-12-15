document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "I hope he buys you flowers",
        "I hope he holds your hand",
        "Give you all his hours",
        "When he has the chance",
    ];

    const delay = 90; // adjust the speed here
    const lyricsElement = document.getElementById("lyrics");

    async function displayLyrics() {
        for (const line of lyrics) {
            for (const char of line) {
                const charElement = document.createElement("span"); 
                charElement.textContent = char;
                charElement.style.animation = "glow 2s ease-in-out"; 
                lyricsElement.appendChild(charElement); 

                await new Promise((resolve) => setTimeout(resolve, delay));

                
                charElement.style.animation = "";
            }

            lyricsElement.appendChild(document.createElement("br")); 

            await new Promise((resolve) => setTimeout(resolve, delay * 10));

            lyricsElement.textContent = "";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));
        }
    }
    
    displayLyrics();
});
