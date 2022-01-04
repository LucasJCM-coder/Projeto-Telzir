import axios from 'axios';

test('tests if it return values correct', async () => {
    const response = await axios({
        url :"http://127.0.0.1:3333/cost/source=11&destiny=17&minutes=5&plan=30",
        method: 'get'
    });

    const jsonResults = response.data;

    expect(jsonResults["custoComPlano"]).toEqual("0.00");
    expect(jsonResults["custoSemPlano"]).toEqual("8.50");
    });


test('tests if it return values null when plan not exists ', async () => {
    const response = await axios({
        url :"http://127.0.0.1:3333/cost/source=11&destiny=17&minutes=50&plan=5",
        method: 'get'
    });

    const jsonResults = response.data;

    expect(jsonResults["custoComPlano"]).toBeNull();
    expect(jsonResults["custoSemPlano"]).toBeNull();
    });


test('tests if it return values null when origem and destino not exists ', async () => {
    const response = await axios({
        url :"http://127.0.0.1:3333/cost/source=2&destiny=1&minutes=50&plan=5",
        method: 'get'
    });

    const jsonResults = response.data;

    expect(jsonResults["custoComPlano"]).toBeNull();
    expect(jsonResults["custoSemPlano"]).toBeNull();
    });