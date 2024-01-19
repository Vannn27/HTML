const letter = document.querySelectorAll('#_letters #_letter');

letter.forEach((letter) => {
    let activated = false; // flag to track activation

    letter.addEventListener('click', () => {
        if (!activated) {
            switch (letter.textContent) {
                case 'M':
                    letter.textContent = 'L';
                    break;
                case 'A':
                    letter.textContent = 'U';
                    break;
                case 'R':
                    letter.textContent = 'I';
                    break;
                case 'I':
                    letter.textContent = 'G';
                    break;
                case 'O':
                    letter.textContent = 'l';
                    break;
            }
            letter.classList.add('active');
            activated = true; // mark letter as activated
        } else {
            // Reset the letter to its original value
            switch (letter.textContent) {
                case 'L':
                    letter.textContent = 'M';
                    break;
                case 'U':
                    letter.textContent = 'A';
                    break;
                case 'I':
                    letter.textContent = 'R';
                    break;
                case 'G':
                    letter.textContent = 'I';
                    break;
                case 'l':
                    letter.textContent = 'O';
                    break;
            }
            letter.classList.remove('active');
            activated = false; // mark letter as deactivated
        }
    });
});