const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary checking for valid respons and parsing
    const prophets = jsonObject['prophets'];
     for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement('section');
       let h2 = document.createElement('h2');
       h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
       card.appendChild(h2);
       let ul = document.createElement('ul');
       let li1 = document.createElement('li1');
       li1.textContent = 'Date of birth:' + ' ' + prophets[i].birthdate + ' ';
       card.appendChild(li1);
       document.querySelector('div.cards').appendChild(card);
       let li2 = document.createElement('li2');
       li2.textContent = 'Place of birth:' + ' ' + prophets[i].birthplace + ' ';
       card.appendChild(li2);
       document.querySelector('div.cards').appendChild(card);
    }
    });