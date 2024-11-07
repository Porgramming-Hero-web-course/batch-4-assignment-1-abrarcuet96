{
  const countWordOccurrences = (sentence: string, word: string): number => {
    return sentence
      .split(" ")
      .filter((w) => w.toLowerCase() === word.toLowerCase()).length;
  };
  console.log(countWordOccurrences("I love  typescript", "typescript"));
}
