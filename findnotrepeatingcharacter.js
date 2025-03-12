function firstNonRepeatingChar(str){
    const charCount = {};

    for (let char of str){
        charCount[char] = (charCount[char]||0)+1;
        console.log(`Counting: '${char}' appears ${charCount[char]} time(s)`);
    }

    for (let char of str){
        if(charCount[char]===1){
            console.log(`First non repeating charater found: '${char}'`);
        }
    }

}

console.log(firstNonRepeatingChar("swiss"));
