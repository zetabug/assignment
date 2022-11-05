import './App.css';

function App() {
  return (
    <div className="container">
      <div className="leftSection">
        <div className="overlayText">
            Enregistrez <br />
            <span>votre œuvre</span> <br />
            en quelques  étapes
        </div>
          <div className="smallText">
            ART SHORTLIST
          </div>
      </div>

      <div className="rightSection">
      <div className="textDiv">
        <div className='textBox'>
          <span className='title'>Important</span>
          <div className='desc'>
            <p>Remplissez avec <span className='bold'>précision</span>  toutes les sections de ce formulaire et donnez le maximum d’informations sur votre œuvre. <br /> <br /> Les champs marqués d’un <span className='bold'>astérisque (*)</span>  sont obligatoires.</p>
          </div>
        </div>

        <div className='textBox'>
          <span className='title'>Besoin d’aide ?</span>
          <div className='desc'>
            <p>Nous sommes à <span className='bold'>votre disposition</span>  pour vous conseiller afin d’inscrire votre œuvre à notre catalogue dans les meilleures conditions. <br /> <br /> Contactez-nous par <span className='bold'>email</span> , via le <span className='bold'>chat</span>  ou directement par téléphone. </p>
          </div>
        </div>

        <div>
        Si vous n’arrivez pas à remplir l’intégralité des champs obligatoires du formulaire, n’hésitez pas à faire <span className="bold">une demande d’expertise</span> , elle est totalement <span className="bold">gratuite.</span> 
        </div>
      </div>
      <div className="buttonDiv">
          <button className='btnFirst'>&larr; RETOUR</button>
          <button className='btnSecond'>Renseigner mon œuvre</button>
      </div>
      </div>
    </div>
  );
}

export default App;
