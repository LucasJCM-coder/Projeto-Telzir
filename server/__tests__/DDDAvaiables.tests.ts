import axios from 'axios';

test('check if it return a type array when ddd in the input is valid', async () => {
    const response = await axios({
        url :"http://127.0.0.1:3333/avaiables/source=11",
        method: 'get'
    });

    const DDDsAvaiables = response.data;

    expect(Array.isArray(DDDsAvaiables)).toBeTruthy();
});

test('check if it return array values when ddd is 11', async () => {
    const response = await axios({
        url :"http://127.0.0.1:3333/avaiables/source=11",
        method: 'get'
    });

    const DDDsAvaiables = response.data;
    const correct_return = [
        {"label": "16", "value": "16"}, 
        {"label": "17", "value": "17"}, 
        {"label": "18", "value": "18"}, 
    ]
        
    expect(DDDsAvaiables).toEqual(correct_return);
});

test('check if it return a array values when ddd not exists', async () => {
    const response = await axios({
        url :"http://127.0.0.1:3333/avaiables/source=21",
        method: 'get'
    });

    const DDDsAvaiables = response.data;
    
    expect(Array.isArray(DDDsAvaiables)).toBeTruthy();
});

test('check if it return a array values when ddd is 16', async () => {
    const response = await axios({
        url :"http://127.0.0.1:3333/avaiables/source=16",
        method: 'get'
    });

    const DDDsAvaiables = response.data;
    const correct_return = [
        {"label": "11", "value": "11"}, 
    ]

    expect(DDDsAvaiables).toEqual(correct_return);
});