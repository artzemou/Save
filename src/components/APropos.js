// hello-world.jsx

import React, { Component } from 'react';


export default class Apropos extends Component {
  render() {
    return (
      <div>
        <A_propos />
        <Since_30_years />
        <Coverage />
        <Distribution />
        <HappyAtWork />
      </div>
    );
  }
}


class A_propos extends React.Component{
        constructor() {
          super();
        }
        render(){
            return(
              <div className="container_A_propos container_a_propos clearfix">
                <ul>
                  <li>
                    <p>&Eacute;diteur  fran&ccedil;ais et acteur historique sur le march&eacute; des logiciels de gestion, nous accompagnons les TPE et PME depuis 1984. Nos solutions couvrent les fonctions cl&eacute;s de l&rsquo;entreprise : la comptabilit&eacute;, la gestion commerciale et la paye. Nous accompagnons plus de 500 000 entreprises, certaines depuis leur cr&eacute;ation et tout au long de leur d&eacute;veloppement.</p>
                  </li>
                </ul>
              </div>
            )
        }
      }



      class Since_30_years extends React.Component{
        constructor() {
          super();
        }
        render(){
            return(
              <div className=" container_a_propos clearfix">
                <ul className="tab">
                  <li>
                    <iframe className="embed-responsive-item" src="https://www.dailymotion.com/embed/video/x50a2mr" allowFullScreen="true"></iframe>
                  </li>
                  <li>
                    <p>Arriv&eacute;s en 1984 dans l&rsquo;informatique de gestion, nous avons particip&eacute; &agrave; la construction du march&eacute; notamment en d&eacute;mocratisant l&rsquo;usage des logiciels de gestion. Peu abordable &agrave; cette &eacute;poque, nous avons &eacute;t&eacute; les premiers &agrave; proposer des solutions accessibles aux entrepreneurs fran&ccedil;ais. </p>
                    <p>Aujourd&rsquo;hui, l&rsquo;usage du logiciel de gestion est compl&egrave;tement rentr&eacute; dans les m&oelig;urs. Notre m&eacute;tier a &eacute;volu&eacute; et va au del&agrave; &agrave; l&rsquo;&eacute;dition de logiciels, nous sommes un vrai partenaire au service des PME. En trente ans notre expertise nous a permis d&rsquo;apporter des logiciels aux TPE mais aussi d&rsquo;adresser des PME ayant des besoins de plus en plus pointus.</p>
                  </li>
                </ul>

              </div>
            )
        }
      }


      class Coverage extends React.Component{
        constructor() {
          super();
        }
        render(){
            return(
              <div className="container_a_propos clearfix">

                <ul className="tab">
                  <li>
                    <img alt="" src="img/a-votre-service.png" />
                  </li>
                  <li>
                    <p>Nous &eacute;quipons &agrave; la fois les cr&eacute;ateurs d&rsquo;entreprises, les artisans, les commer&ccedil;ants, les professions ind&eacute;pendantes mais aussi les PME jusqu&rsquo;&agrave; 250 salari&eacute;s. Notre service R&D au fait des &eacute;volutions technologiques propose une gamme unique de logiciels puissants et personnalisables. Nos solutions r&eacute;pondent &agrave; tous les besoins gr&acirc;ce &agrave; un large &eacute;ventail de fonctionnalit&eacute;s ainsi qu&rsquo;une approche modulaire &eacute;volutive et collaborative. Notre expertise nous permet de r&eacute;pondre aux cahiers des charges d&rsquo;ETI et d&rsquo;apporter des d&eacute;veloppements sp&eacute;cifiques pouss&eacute;s. </p>
                    <p>Nous nous adressons &eacute;galement aux Experts-Comptables et &agrave; l&rsquo;Education &agrave; travers une gamme de logiciels d&eacute;di&eacute;s. </p>
                    <p>Les solutions sont &eacute;galement d&eacute;clin&eacute;es pour le b&acirc;timent, l&rsquo;automobile, le commerce, l&rsquo;immobilier, et la restauration. </p>
                    <p><b>L&rsquo;innovation est le c&oelig;ur de notre m&eacute;tier. Nous mettons notre savoir-faire au service de nos clients !</b></p>
                  </li>
                </ul>

              </div>
            )
        }
      }







      class Distribution extends React.Component{
        constructor() {
          super();
        }
        render(){
            return(
              <div className="container_a_propos clearfix">

                <ul className="tab">
                  <li>
                    <img alt="" src="img/a-propos.png" />
                  </li>
                  <li>
                    <p>Pour faciliter l&rsquo;int&eacute;gration de nos logiciels dans les entreprises, nous nous appuyons sur un r&eacute;seau de 5000 revendeurs, dont 500 partenaires certifi&eacute;s. Ils d&eacute;ploient nos solutions dans toute la France.</p>
                    <p>Cette collaboration a une nouvelle fois &eacute;t&eacute; r&eacute;compens&eacute;e par les Troph&eacute;es de la Distribution Distributique-IT Partners en 2016. Pour la 5&egrave;me ann&eacute;e nous avons &eacute;t&eacute; &eacute;lus &laquo; Meilleure Marque &raquo;, dans la cat&eacute;gorie &laquo; Smart Office &raquo;.</p>
                    <p>Notre r&eacute;seau de partenaires constitue pour les entreprises un pr&eacute;cieux vivier de comp&eacute;tences, de conseils et de services dans leur croissance. Nos certifications segmentent ce r&eacute;seau pour s&rsquo;adresser d&rsquo;une part aux PE et d&rsquo;autre part aux plus grandes entreprises &agrave; travers les Centres Agr&eacute;&eacute;s Ligne PME. </p>
                    <p>Nos solutions sont &eacute;galement disponibles en grande distribution, sur notre boutique en ligne ou directement en nous contactant au si&egrave;ge.</p>
                    <p>Elles sont distribu&eacute;es en France, en Belgique, en Suisse et en Espagne.</p>
                    <p><b>Notre p&eacute;rennit&eacute; et notre croissance continue fait de nous une v&eacute;ritable r&eacute;f&eacute;rence sur le march&eacute; fran&ccedil;ais des logiciels de gestion.</b></p>
                  </li>
                </ul>

              </div>
            )
        }
      }



      class HappyAtWork extends React.Component{
        constructor() {
          super();
        }
        render(){
            return(
              <div className="container_a_propos clearfix">

                <ul className="tab">
                  <li>
                    <img alt="" src="img/happy-at-work.jpg" />
                  </li>
                  <li>
                    <p>Le c&oelig;ur de l&rsquo;entreprise r&eacute;side dans les hommes qui la compose. Pass&eacute;e de l&rsquo;&eacute;chelle de la TPE &agrave; la PME, avec pr&egrave;s de 500 collaborateurs EBP fait aujourd&rsquo;hui partie des 0,2% d&rsquo;ETI fran&ccedil;aises. Apporter &agrave; ses collaborateurs une cadre motivant et dynamique a toujours &eacute;t&eacute; une des priorit&eacute;s de l&rsquo;entreprise. Ainsi, elle s&rsquo;est vue d&eacute;cerner le label <a href="https://www.ebp.com/fr-FR/Groupe-EBP/Recrutement/Happy-At-Work">HappyAtWork</a> qui r&eacute;compense l&rsquo;excellence dans le management et la motivation des salari&eacute;s.</p>

                  </li>

                </ul>
                <ul className="capacity">
                  <li>Notre capacit&eacute; d&rsquo;innovation, notre stabilit&eacute; et l&rsquo;enti&egrave;re ma&icirc;trise de nos capitaux sont autant de leviers pour assurer notre p&eacute;rennit&eacute; sur le march&eacute;.</li>
                </ul>


              </div>
            )
        }
      }
