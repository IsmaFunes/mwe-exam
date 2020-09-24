const testButton = document.getElementById('testBtn');
const testResultsContainer = document.getElementById('testResults');

testButton.addEventListener("click", () => {
    const numberOfTests = parseInt(prompt('Please input the number of tests'));
    //Reset test results container text
    testResultsContainer.innerText = '';
    for(let i = 1; i<= numberOfTests; i++){
        const phrase = prompt(`Insert test #${i}`);
        const reversedPhrase = getReversedWords(phrase);
        testResultsContainer.innerText += `\nCase #${i}: ${reversedPhrase}`;
    }

});