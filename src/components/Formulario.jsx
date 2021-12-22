import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas'
import Error from './Error';

const InputSubmit = styled.input `
background-color: #9497FF;
border: none;
width: 100%;
padding: 10px;
color: #FFF;
font-weight: 700;
text-transform: uppercase;
font-size: 20px;
border-radius: 5px;
transition: background-color .3s ease;
margin-top: 30px;

&:hover {
    background-color: #7A7DFE;
    cursor: pointer;

}
`;



const Formulario = ({setMonedas}) => {

   
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);
    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas);
    const [ criptoMoneda, SelectCriptomoneda ] = useSelectMonedas('Elige tu criptomoneda', criptos);

    useEffect(() => {
     const llamadoApi = async () => {
       const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
       const response = await fetch(url);
       const result = await response.json();
    
       const arrayCriptos = result.Data.map(cripto => {
           
           const objCripto = {
               id: cripto.CoinInfo.Name,
               nombre: cripto.CoinInfo.FullName
           }
        
           return objCripto;
       })
       setCriptos(arrayCriptos);
     }
     llamadoApi();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        //Validar
        if([moneda, criptoMoneda].includes('')) {
            setError(true);
            return;
        }
        setError(false);
        setMonedas({
            moneda,
            criptoMoneda
        })
    }
    
    return (
            <form onSubmit={handleSubmit}>
                {error ? <Error>Todos los campos son obligatorios</Error> : null}
                <SelectMonedas />
                <SelectCriptomoneda />
                
              
                <InputSubmit type="submit" value="Cotizar" />
            </form>
            
       
    )
}

export default Formulario
