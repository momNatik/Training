function Solution(text, markers) {
    const linesDelimiter = '\n';

    console.log('Input: ', text);

    const lines = SplitToLines(text, linesDelimiter);
    console.log("Lines: ", lines);
    const cleanLines = lines.map(line => StripLine(line, markers));
    console.log("CleanLines: ", cleanLines);
    const result = cleanLines.join(linesDelimiter);

    return result;
}

function SplitToLines(text, linesDilimiter) {
    return text.split(linesDilimiter);
}

function StripLine(line, markers) {
    const markerPos = IndexOf(line, markers);
    console.log("MarkerPos: ", markerPos);
    const noCommentLine = markerPos != -1 ? line.substring(0, markerPos) : line;
    return noCommentLine.trimRight();
}

function IndexOf(text, substrings) {
    const result = substrings
        .map(substring => text.indexOf(substring))
        .filter(index => index != -1);

    return result.length > 0 ? Math.min(...result) : -1;
}


// console.log(Solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));

console.log(Solution("p@f/gX gpbH*", ["$","+","*","^","/","-","~","@","\\","#"]));
