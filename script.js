    const apiUrl = 'https://example.com/api/data';
    const apiKey = 'ac2300d8c03ad70a7b5be854fa5eb798685673b8';
    const contactForm = document.getElementById('contactForm');
    const postcodeInput = document.getElementById('postcode');
    const prefectureInput = document.getElementById('prefecture');
    const cityInput = document.getElementById('city');
    const townInput = document.getElementById('town');
    const clearButton = document.getElementById('clearButton');

    postcodeInput.addEventListener('input', () => {
      const inputValue = postcodeInput.value;
      if (inputValue.length === 7) {
        // Zipserver APIを使って郵便番号から都道府県、市町村、町等の情報を取得する
        const
        fetch(`https://sandbox.zamzar.com/api/data?zipcode=${inputValue}`)
          .then(response => response.json())
          .then(data => {
            prefectureInput.value = data.prefecture;
            cityInput.value = data.city;
            townInput.value = data.town;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      } else {
        prefectureInput.value = '';
        cityInput.value = '';
        townInput.value = '';
      }
    });

    clearButton.addEventListener('click', () => {
      postcodeInput.value = '';
      prefectureInput.value = '';
      cityInput.value = '';
      townInput.value = '';
    });