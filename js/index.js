const key = "ae5eabc0812752543ad39093d9431bca";

//Primeiro, vamos pegar a informação que está dentro do input e detectar o clique no botão;
//Segundo, vamos buscar informações no servidor;


//"async" é utilizado para funções que acessam servidores;
async function searchCity(city) {
    //"await" diz ao código para que ele aguarde a próxima instrução ser concluída para seguir com a interpretação do restante do código;
    //"fetch()" é utilizado para acessar o servidor;
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then(response => response.json())
}


//Eu havia tentado utilizar o nome "click" antes para a função abaixo, porém não funcionou ao chamá-la no "onclick" do button no HTML, então troquei o nome e funcionou
function buttonClick() {
    const city = document.querySelector(".box__input").value; //Para acessar o HTML utilizamos o atributo "document" e o querySelector nos permite selecionar um elemento de dentro do documento;

    searchCity(city); //"city" está sendo usado como parâmetro para a função;
}