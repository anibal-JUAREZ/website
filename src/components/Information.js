import React from 'react';
import classes from './Information.module.css';
import Title from './Title';
const Information=() =>{
    return (
        <div className={classes.my_information} id="information">
            <Title title="a propos de moi"/>
            <p>
                Ingénieur de système, j'ai toujours été attiré par le domaine des interfaces web ainsi que par
                la programmation. Ainsi, lors de ma dernière année à l’université, j’avais participé à une
                “foire des systèmes”, où j’avais imaginé et développé un logiciel de facturation utilisable par
                n’importe quel commerce. J’ai obtenu la deuxième place mais, surtout, j’ai adoré travailler
                avec des bases de données.
            </p>
            <p>
                En France, une fois acquise une bonne maîtrise écrite et parlée de la langue à l'Alliance
                Française, j’ai souhaité renforcer mes compétences à travers une formation intensive, axée
                sur les métiers du Développement Web.
            </p>
            <p>
                Elle m’a notamment permis de progresser au niveau de la pratique, car la pédagogie
                déployée s'est faite principalement autour de projets concrets. J'ai également découvert
                d’autres langages de programmation, dont le JavaScript, React.js et Node.js, avec lesquels je
                me sens très à l’aise.
            </p>
            <p>
                J’ai également su développer des compétences transverses comme la veille autour de la
                programmation et de sujets, plus vastes autour du web. Aujourd'hui, je possède une solide expérience pratique dans l'analyse et la résolution de
                problèmes.
            </p>
            <p>
                En parallèle de l’acquisition de compétences techniques, j’ai renforcé certaines qualités
                telles que ma curiosité d'esprit et ma capacité d’adaptation. Appréciant le travail en équipe,
                je sais m'investir dans un projet innovant, où je suis généralement apprécié pour mon
                autonomie, mon aptitude à me documenter, ma rigueur et ma motivation.
            </p>
            <p>Anibal Juarez</p>

        </div>
    );
}

export default Information;