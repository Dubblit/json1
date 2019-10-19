class MyData
{
    constructor()
    {

        this.divoutput = document.querySelector("#output");
        this.dataRates
        this.getData()

    }

    getData() {
        fetch('https://apiv2.bitcoinaverage.com/constants/exchangerates/global')
            .then((element) =>  element.json())
            .then((data) => {
            this.dataRates =  Object.keys(data.rates);
            let output = "<h2> Posts </h2>";

            this.dataRates.forEach(element => {
                output +=`
                <h5>Currency: ${data.rates[element].name} Rate: ${data.rates[element].rate} </h5>
                `
            });
            this.divoutput.innerHTML = output;
            })         
    }

}

export default MyData
