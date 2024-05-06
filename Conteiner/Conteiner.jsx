import './Conteiner.css'

import Button from '../Button/Button'


const Container = ()=>{
    
    
    return(
        <>
        
    <div className='Container-principal'>
    <div className='star'>
            <img src="../../classificacao-interativa/images/icon-star.svg" alt="" />
        </div>
        <div className='container-title'>
        <h1 className='title'>How did we do?</h1>
        <p>Plese let us know how we didi your support request. All feedback is appreciated to help us improve out offering</p>
        </div>
        <div className='num'> 1 2 3 4 5</div>
        <Button nome='Subbimit'></Button>
    </div>
    
    </>
    )
}

export default Container