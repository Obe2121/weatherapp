addCityField();
addSubmitButton();
createRacerTable();

function addCityField(){
    input1 = document.createElement('input');
    input1.placeholder="Enter City";
    input1.name='city';
    input1.classList.add('form-control');
    document.body.appendChild(input1);
};

function handleSubmit(){
    city=document.getElementsByName("city")[0].value;
    console.log(city);
    doAPICall(city);

};

function addSubmitButton(){
    button=document.createElement('button');
    button.innerText="Search";
    button.classList.add('btn', 'btn-primary');
    button.addEventListener('click',()=>handleSubmit());
    document.body.appendChild(button);

};

function creatTableHeaderEntry(label) {
    th = document.createElement("th");
    th.innerText = label;
    th.scope = 'col'
    tr.appendChild(th)
}


function createRacerTable(){
    table = document.createElement('table');
    table.classList.add("table", "table-striped");
    document.body.appendChild(table)

        thead=document.createElement("thead");
        table.appendChild(thead);

        tr=document.createElement("tr");
        thead.appendChild(tr);

        creatTableHeaderEntry("City");
        creatTableHeaderEntry("High");
        creatTableHeaderEntry("Low");
        creatTableHeaderEntry("Forcast");
        creatTableHeaderEntry("Humidity");

        tbody=document.createElement("tbody");
        table.appendChild(tbody)

};



async function doAPICall(city) {
    result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e555d3cb8ee23f1ecb314779c9bdbab8
    `).catch((e)=>{console.error(e); alert('Please try again')}).finally(console.log("API Request is over"))
    console.log(result)
    console.log(result.data)


    result=result.data

    tbody = document.getElementsByTagName('tbody')[0];

    tr = document.createElement('tr')
    tbody.appendChild(tr);

        th= document.createElement("th");
        th.scope = "row";
        th.innerHTML = result.name;
        tr.appendChild(th)

        td = document.createElement("td");
        td.innerText = ((result.main.temp_max-273.15)*1.8)+32;
        tr.appendChild(td)

        td = document.createElement("td");
        td.innerText = ((result.main.temp_min-273.15)*1.8)+32;
        tr.appendChild(td)

        td = document.createElement("td");
        td.innerText = result.weather[0].main;
        tr.appendChild(td)

        td = document.createElement("td");
        td.innerText = result.main.humidity;
        tr.appendChild(td)

}