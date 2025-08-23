function getFreqOfQords(sentence){
    if (sentence == null || undefined) return undefined;

    const words = sentence.toLowerCase().split(" ");
    freq = {}

    for (let word of words) {
        freq[word] = freq[word] ? freq[word] + 1 :1
    }
    return freq
}

console.log(getFreqOfQords('Today is present and present is your gift'));

// Chalenge ส่งพารามิเตอร์ได้หลายๆจน.
const sum = (...args) => {
    return args.reduce((acc, curr) => acc + curr, 0); //reduce รวมค่า
};
console.log(sum(2,2,3))
