let question = document.getElementById('poll__title');
    let item = document.querySelector('.item');
    (async () => {
    let response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
    if (response.ok) { 
        let json = await response.json();
        json = JSON.stringify(json);
        let object = JSON.parse(json);
        let img = document.getElementById('loader')
        img.remove('loader_active')
        for (let valutes in object.response.Valute){
            let valuta = object.response.Valute[valutes]
            let divCod = document.createElement('div');
            let divVal = document.createElement('div')
            let divCurrency = document.createElement('div')
            divCod.className = 'item__code';
            divVal.className = 'item__value';
            divCurrency.className = 'item__currency';
            divCod.textContent = valuta.CharCode;
            divVal.textContent = valuta.Value;
            divCurrency.textContent = 'руб.'
            item.append(divCod);
            item.append(divVal);
            item.append(divCurrency);

            
            
        }

    } else {
    alert("Ошибка HTTP: " + response.status);
    }
    })()