const getQuote = async () => {
    let response = await fetch('/api/get');
    return await response.json();
};

const quote = () => {
    getQuote().then(response => {
        updateQuote({ ...response.quote });
        updateError({ text: '' });
    }).catch(err => {
        updateQuote({ author: '...', text: '...' });
        updateError({ text: err });
    });
};

let quoteElement = document.querySelector('.quote');
let errorElement = document.querySelector('#error');

const updateQuote = ({ text, author }) => {
    quoteElement.querySelector('.quote--text').innerText = text;
    quoteElement.querySelector('.quote--author').innerText = author;
};

const updateError = ({ text }) => {
    errorElement.innerText = text;
    errorElement.style.display = text ? 'block' : 'none';
};

// initial quote
document.addEventListener('DOMContentLoaded', quote);

// new quote button
document.querySelector('#refresh').addEventListener('click', quote);