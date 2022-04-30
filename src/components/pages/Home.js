import style from '../styles/Home.module.css'
import Abas from './abas'
function Home(){
    return(
        <div>
        <Abas/>
        <div className={style.Home}>
            <div>
            <h1>Juliano Silva de Almeida</h1>
            <hr />
        <div>
            <h1>Bem vindo ao Canário</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, magni harum, animi obcaecati distinctio iure illo minima corporis id maiores quis delectus atque, sint aut aliquam omnis commodi libero quasi?</p>
        </div>
        <button>Comece já</button>
        </div>
        </div>
        </div>
    )
}
export default Home