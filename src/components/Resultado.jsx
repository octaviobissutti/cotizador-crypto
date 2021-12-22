import styled from "@emotion/styled"

const Resultado = ({resultado}) => {
    console.log('RESULTADO: ', resultado)
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;
    

    const Contenedor = styled.div ` 
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: start;
    gap: 3rem;
    margin-top: 30px;
    
    `
    const Imagen = styled.img ` 
    display: block;
    width: 150px;

    `

 
    const Texto = styled.p ` 
     font-size: 18px;
      span {
          font-weight: 700;
      }
    `

    const Precio = styled.p ` 
     font-size: 24px;
       span {
     font-weight: 700;
      }
`

    return (
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
            <div>
              <Precio>El precio es: <span>{PRICE}</span></Precio>
              <Texto>El precio más alto del día: <span>{HIGHDAY}</span></Texto>
              <Texto>El precio más bajo del día: <span>{LOWDAY}</span></Texto>
              <Texto>Variación últimas 24hs: <span>{CHANGEPCT24HOUR}</span></Texto>
              <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
      
        </Contenedor>
    )
}

export default Resultado
