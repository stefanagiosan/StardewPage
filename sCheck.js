const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const errorMessages = document.getElementById('error');
const form = document.getElementById('registerForm')


const selectCountry = document.getElementById('countrySel')
const selectCity = document.getElementById('citySel')
const countries = ["Romania", "Germany"];
const citiesRo = ["Timisoara", "Cluj", "Bucuresti", "Brasov", "Sibiu", "Oradea", "Iasi", "Constanta", "Craiova", "Baia Mare", "Alba Iulia"]
const citiesGer = ["Munchen", "Berlin", "Frankfurt", "Hamburg", "Koln", "Nurnberg", "Dresda", "Stuttgart"]



form.addEventListener('submit', (e) => {
    let messages = []

    if(username.value === '' || username.value == null) {
        messages.push('Username required')
    }

    if(password.value === '' || password.value == null ) {
        messages.push('Password is required')
    }

    if(!valiEmail(email)) {
        messages.push('Email is invalid');
    }

    if (messages.length > 0) {
        e.preventDefault() 
        alert(messages.join(', '));
    }
})

function valiEmail(msg) {
    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(emailformat.test(msg.value))
    if(emailformat.test(msg.value)) {
        return error;
    }
}

function populatDropdown(tara) {
    for(var i = 0; i < countries.length; i++) {
        var opt = countries[i];
        var el = document.createElement("option")
        el.textContent = opt;
        el.value = opt;
        tara.add(el);
    }
}

function populateCities() {
    
    clearDropBox(selectCity);

    if (formBig.countrySel.selectedIndex === 1) { //selected Romania
        for(var i = 0; i < citiesRo.length; i++) {
            var opt = citiesRo[i];
            var el = document.createElement("option")
            el.textContent = opt;
            el.value = opt;
            selectCity.add(el);
        }
    };
    
    if (formBig.countrySel.selectedIndex === 2) { //selected Romania
        for(var i = 0; i < citiesGer.length; i++) {
            var opt = citiesGer[i];
            var el = document.createElement("option")
            el.textContent = opt;
            el.value = opt;
            selectCity.add(el);
        }
    };
}

function clearDropBox(comboBox) {
    while (comboBox.options.length > 0) {                
        comboBox.remove(0);
    };        
}


populatDropdown(selectCountry);



