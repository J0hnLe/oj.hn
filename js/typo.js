const titles = ["oj.hn|", "oj.h|", "oj.|", "oj|", "o|", "|", "j|", "jo|", "joh|", "john|", "john", "john|"];
let index = 0;
function cycleTitle() {
    document.title = titles[index];
    index = (index + 1) % titles.length;
}
setInterval(cycleTitle, 250);