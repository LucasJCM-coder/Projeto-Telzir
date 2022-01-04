
const CalculateCostsCall =  (costsStr:string, minutesStr:string, planStr:string)=>{

    const validateStringNumber = (StrNumber:string) => !isNaN(parseFloat(StrNumber));

    const validateIfAllIsNumber = validateStringNumber(minutesStr) && 
                                   validateStringNumber(planStr) && 
                                   validateStringNumber(costsStr);

    if(!validateIfAllIsNumber) {
        return {
            custoSemPlano: NaN,
            custoComPlano: NaN
        }
    }

    const minutes = parseInt(minutesStr);
    const plan = parseInt(planStr);
    const cost = parseFloat(costsStr);
    
    const isMinuteNegative = minutes < 0;
    const isPlanKnown = (plan == 30 || plan == 60 || plan == 120);

    if(isMinuteNegative || !isPlanKnown) {
        return {
            custoSemPlano: NaN,
            custoComPlano: NaN
        }
    }

    const SemPlano = cost * minutes;

    const ComPlanoSemTarifa = (cost * (minutes - plan))
    const ValorDoAcrescimo = ComPlanoSemTarifa/10;
    const ComPlanoTarifado = ComPlanoSemTarifa + ValorDoAcrescimo;
    
    return {
        custoSemPlano: Math.max(SemPlano, 0).toFixed(2),
        custoComPlano: Math.max(ComPlanoTarifado, 0).toFixed(2)   
    }
}

export default CalculateCostsCall;