const url = 'data.json';
const symbols = ['BTC', 'ETH', 'XRP', 'LTC', 'BCH'];

fetch(url)
  .then(response => response.json())
  .then(data => {
    const filteredData = data.data.filter(item => symbols.includes(item.symbol));
    const cardContainer = document.querySelector('.card-container');

    filteredData.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.id = item.symbol.toLowerCase();

      const cardHeader = document.createElement('div');
      cardHeader.classList.add('card__header');

      const cardImage = document.createElement('div');
      cardImage.classList.add('card__image');

      const image = document.createElement('img');
      image.src = `img/${item.nameid}.png`;
      image.alt = item.name;
      cardImage.appendChild(image);

      const cardSymbol = document.createElement('div');
      cardSymbol.classList.add('card__symbol');
      cardSymbol.textContent = item.symbol;

      const cardName = document.createElement('div');
      cardName.classList.add('card__name');
      cardName.textContent = item.name;

      cardHeader.appendChild(cardImage);
      cardHeader.appendChild(cardSymbol);
      cardHeader.appendChild(cardName);

      const cardHr = document.createElement('hr');
      cardHr.classList.add('card__hr');

      const cardFooter = document.createElement('div');
      cardFooter.classList.add('card__footer');

      const cardPrice = document.createElement('div');
      cardPrice.classList.add('card__price');
      cardPrice.textContent = `$${item.price_usd}`;

      const cardChange = document.createElement('span');
      cardChange.classList.add('card__change');

      if (item.percent_change_24h < 0) {
        cardChange.innerHTML = `<i class="fa fa-solid fa-circle-chevron-down"></i> ${item.percent_change_24h}%`;
        cardChange.classList.add('card__change--negative');
      } else {
        cardChange.innerHTML = `<i class="fa fa-solid fa-circle-chevron-up"></i> ${item.percent_change_24h}%`;
        cardChange.classList.add('card__change--positive');
      }

      cardFooter.appendChild(cardPrice);
      cardFooter.appendChild(cardChange);

      card.appendChild(cardHeader);
      card.appendChild(cardHr);
      card.appendChild(cardFooter);

      cardContainer.appendChild(card);
    });
  });
