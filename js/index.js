const key = "ae5eabc0812752543ad39093d9431bca";

//Primeiro, vamos pegar a informação que está dentro do input e detectar o clique no botão;
//Segundo, vamos buscar informações no servidor;
//Terceiro, vamos colocar os dados na tela;

function dataOnScreen(data) {
    document.querySelector(".medium-box__city").innerHTML = "Tempo em " + data.name;
    document.querySelector(".medium-box__temp").innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector(".small-box__weather").innerHTML = data.weather[0].description;
    document.querySelector(".humidity").innerHTML = "Umidade: " + data.main.humidity + "%";
    document.querySelector(".small-box__img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

//"async" é utilizado para funções que acessam servidores;

async function searchCity(city) {
    //"await" diz ao código para que ele aguarde a próxima instrução ser concluída para seguir com a interpretação do restante do código;
    //"fetch()" é utilizado para acessar o servidor;
    //"then()" coloca o nome do resultado dos dados do servidor como "response" e em seguida transforma num arquivo tipo JSON;
    //"&lang=pt_br" define que a língua dos atributos deve ser português brasileiro
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());

    dataOnScreen(data);
}


//Eu havia tentado utilizar o nome "click" antes para a função abaixo, porém não funcionou ao chamá-la no "onclick" do button no HTML, então troquei o nome e funcionou;

function buttonClick() {
    //Para acessar o HTML utilizamos o atributo "document" e o querySelector nos permite selecionar um elemento de dentro do documento;
    const city = document.querySelector(".box__input").value; 

    //"city" está sendo usado como parâmetro para a função;
    searchCity(city); //"city" está sendo usado como parâmetro para a função;
}