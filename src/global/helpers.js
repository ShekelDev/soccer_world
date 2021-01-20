export const toInitials = (name) => {
    const splitName = name.split(" ");
    if (splitName.length > 1) {
        return getInitialsOfMultipleWords(splitName).toUpperCase();
    } else {
        return getFirstTwoLettersOfWord(splitName[0]).toUpperCase();
    }
};

const getInitialsOfMultipleWords = (words) => {
    return `${words[0][0]}${words[1][0]}`;
};

const getFirstTwoLettersOfWord = (word) => {
    if (word.length > 1) {
        return `${word[0]}${word[1]}`;
    } else {
        return `${word[0]}`;
    }
};
