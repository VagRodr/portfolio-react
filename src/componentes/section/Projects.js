import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../image/lpdnc.svg'
import portvag from '../../image/portfolio-vagner.svg'

function Projects(){
    return(
        <div className={styles.projects} id='Projects'>
            <h1>Projetos</h1>
            <Card
            img={lpdnc} 
            title="LP - DNC" 
            tech="HTML, CSS e JS" 
            description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia" 
            repo="https://github.com/VagRodr/projeto-landing-page" 
            site="https://testelandingpage.netlify.app/"
            />
            <Card
            img={portvag}
            title="Portfolio"
            tech="HTML, CSS, JS e REACT"
            description="Desenvolvimento de uma página de portfólio utilizando React"
            repo="https://github.com/VagRodr/projeto-landing-page" //falta alterar//
            site="https://testelandingpage.netlify.app/" //falta alterar//
            />

            <ButtonB text='Acesse meu repositório' link='https://github.com/VagRodr?tab=repositories'/>
        </div>
    )
}

export default Projects