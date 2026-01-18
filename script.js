let currentChapter = 0;
const chapterContent = document.getElementById("chapter-content");

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