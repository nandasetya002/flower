document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "Oh, I know I'm",
        "probably much too late",
        "To try and apologize",
        "for my mistakes",
        "But I just want you to know"
    ];

    const delay = 50; // adjust the speed here
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

        setTimeout(function () {
            window.location.href = "bunga.html"; //set here your next target html
        }, 700);
    }
    
    displayLyrics();
});
