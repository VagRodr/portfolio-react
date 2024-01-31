import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'

function Presentation(){
    return(
        <div className={styles.presentation} id='Presentation'>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou Vagner Rodrigues!</h1>
            <p>
                Profissional proativo, concentrado, com facilidade para trabalhar em equipe.<br/> 
                Estou em transição de carreira para a área de tecnologia.<br/>
                Comecei minha formação por meio do Programa ONE - Oracle Next Education,<br/> 
                desenvolvimento back-end com a linguagem de programação Java e Banco de Dados SQL com MySQL.<br/> 
                Atualmente estou cursando a Formação Full-Stack na Escola DNC,<br/> 
                utilizando a linguagem de programação JavaScript e o React.<br/>
            </p>
            <ButtonA link='https://github.com/VagRodr' text='Conecte-se comigo'/>
            
            
        </div>
    )
}

export default Presentation