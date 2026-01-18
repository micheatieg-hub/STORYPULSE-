let currentChapter = 0;
const chapterContent = `<h2>Chapter 1: The Day Everything Changed</h2>
<p><strong>Written by TIEG</strong></p>

<p>The morning John left home did not feel special at first. The sky was pale, the air calm, and the town moved slowly as it always had. Yet deep inside him, something heavy stirred — a feeling he could not name, but one he knew meant change.</p>

<p>John stood by the window of his small room, staring at the road outside. He had walked that road every day of his life. To school. To work. To nowhere in particular. But today, he would walk it for the last time.</p>

<p>He turned and looked around the room. The cracked wall, the wooden table, the old chair — everything carried memories. Laughter. Anger. Silence. Dreams that never came true. For years, he had told himself that one day he would leave, that one day his life would be more than survival.</p>

<p>That day had finally arrived.</p>

<p>John packed slowly, carefully. He placed his clothes into a small bag, then paused when he reached for a worn notebook. It was filled with thoughts he never shared with anyone — plans, fears, and ideas about a life beyond the town. He slid it into the bag and zipped it closed.</p>

<p>Outside, the town was waking up. Vendors opened their shops. Children ran barefoot along the street. Neighbors greeted one another without realizing that one of their own was about to disappear from their lives.</p>

<p>John stepped out of the house and locked the door behind him. He did not look back. He knew that if he did, he might lose the courage he had fought so hard to build.</p>

<p>The road ahead stretched far into the distance. Forests. Hills. Cities he had only heard about in stories. Opportunities that scared him as much as they excited him. Every step felt heavier than the last, yet also freer.</p>

<p>As the sun climbed higher, John felt the weight of doubt press against him. What if he failed? What if the world beyond the town was crueler than the life he left behind? His hands tightened around the strap of his bag.</p>

<p>Then he remembered the nights he had gone to bed hungry. The days he had worked without purpose. The dreams he had buried to survive. Failure, he realized, was staying.</p>

<p>Hours later, the road led him to the edge of a forest. Tall trees stood like silent guards, their shadows stretching across the path. John hesitated. This was the point of no return. Once he entered the forest, there would be no easy way back.</p>

<p>A sudden sound broke the silence — a rustle in the bushes. John froze. His heart raced. Slowly, a small animal emerged, stared at him briefly, then disappeared into the trees. John let out a breath and laughed quietly at himself.</p>

<p>Still, the forest felt alive. Watching. Waiting.</p>

<p>John stepped forward and crossed into the shade of the trees. The air grew cooler, heavier. With every step, the world he knew faded further behind him.</p>

<p>As night fell, John made a small fire and sat beside it, staring into the flames. The fire crackled softly, as if whispering secrets of the journey ahead. He felt fear, yes — but also something stronger.</p>

<p>Hope.</p>

<p>John lay down under the open sky, his eyes fixed on the stars. Somewhere out there, his future waited. He did not know what form it would take — success or struggle, victory or loss — but he knew one thing with absolute certainty.</p>

<p>This journey had begun.</p>

<p style="text-align:center; font-weight:bold; margin-top:25px;">
— End of Chapter 1 —<br>
Tap <em>Next</em> to continue to Chapter 2
</p>`

// Load first chapter
chapterContent.innerHTML = chapters[currentChapter];

// Next button
document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentChapter < chapters.length - 1) {
    currentChapter++;
    chapterContent.innerHTML = chapters[currentChapter];
  }
});

// Previous button
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentChapter > 0) {
    currentChapter--;
    chapterContent.innerHTML = chapters[currentChapter];
  }
});