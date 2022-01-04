import React, { useState } from 'react';
import axios from 'axios';

import PageHeader from '../../components/PageHeader';
import PageFooter from "../../components/PageFooter";
import Select from 'react-select'

import './styles.css';

 
const planos = [
    { value: '30', label: 'FaleMais 30' },
    { value: '60', label: 'FaleMais 60' },
    { value: '120', label: 'FaleMais 120' },
]




function Simulator() {

    const [dddAvaiablesOrigin, setDDDAvaiablesOrigin] = useState([
        { value: '11', label: '11' },
        { value: '16', label: '16' },
        { value: '17', label: '17' },
        { value: '18', label: '18' }
      ]);

      const [dddAvaiablesDestiny, setDDDAvaiablesDestiny] = useState([{ value: '', label: '' }]);

    const [minutes, setMinutes] = useState("");
    const [origin, setOrigin] = useState("");
    const [destiny, setDestiny] = useState("");
    const [plan, setPlan] = useState("");
    const [valorComPlano, setValorComPlano] = useState("0.00");
    const [valorSemPlano, setValorSemPlano] = useState("0.00");
    
    const getCosts = async (e:  React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const response = await axios({
            url :`http://127.0.0.1:3333/cost/source=${origin}&destiny=${destiny}&minutes=${minutes}&plan=${plan}`,
            method: 'get'
        });
    
        const {custoSemPlano, custoComPlano} = response.data;

        setValorSemPlano(custoSemPlano);
        setValorComPlano(custoComPlano);

        };


    return (
        <div>
            <PageHeader />
            
            <div className="containerSimulator">
                <h3>Simulador</h3>
                <form onSubmit={getCosts}>

                <div className="containerInputValues">
                    <div className='field'>
                        <label>Origem</label>         
                        <Select 
                        options={dddAvaiablesOrigin} 
                        placeholder="DDD" 
                        id="from"
                        onChange={async (e) => {
                            if(e){
                                
                                const DDDOrigin = e.value;
                                const response = await axios({
                                    url :`http://127.0.0.1:3333/avaiables/source=${DDDOrigin}`,
                                    method: 'get'
                                });
                        
                                const results = response.data;
                                setDestiny("");
                                setDDDAvaiablesDestiny(results);      
                                setOrigin(DDDOrigin)
                            }

                        }}/>              
                    </div>

                    <div className='field'>
                        <label>Destino</label>         
                        <Select options={dddAvaiablesDestiny} 
                        placeholder="DDD" 
                        value={{value:destiny, label:destiny}}
                        id="to"
                        onChange={e => {
                            if(e){
                                setDestiny(e.value)
                            }
                            }}/>               
                    </div>

                    <div className='field'>
                        <label>Duração</label>         
                        <input 
                        type="number"
                        min= "0" 
                        name="minutes" 
                        id="minutes" 
                        placeholder='Minutos'
                        onChange={e => setMinutes(e.target.value) }
                        />
                    </div>

                    <div className='field'>
                        <label>Plano</label>         
                        <Select options={planos} 
                        placeholder="FaleMais" 
                        id="plan"
                        onChange={e => {
                            if(e){
                                setPlan(e.value)
                            }
                            }}/>   
                                   
                    </div>
                </div>
                <button id="BtnCalculateValue" type="submit">Calcular</button>
                </form>


                <div id="resultsContainer">
                    <div id="SemPlano" className='plano'>
                        <label>Sem FaleMais</label>
                        <label className='outputValues'> $ {valorSemPlano}</label>
                    </div>

                    <div id="ComPlano" className='plano'>
                        <label>Com FaleMais</label>
                        <label className='outputValues'> $ <span id="valorComPlano">{valorComPlano}</span></label>
                    </div>
                </div>
            </div>

            <PageFooter/>
       </div>    
    );
}

export default Simulator;