import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';

function App() {

  return (
    <div className='main'>
      <Header title="Adopta un perrito" />
      <div className='cardsContainer'>
        <MyCard
          cardImg={'https://cdn.pixabay.com/photo/2019/05/21/05/07/animal-4218265_1280.jpg'}
          cardName={'Maxi'}
          cardDesc={'Un siberiano que te hará reir con sus locuras. Muy juguetón y buen amigo, invítalo a vivir contigo.'}
          tagText={'Husky'}
          tagBackgroundColor={'success'}
        />
        <MyCard
          cardImg={'https://cdn.pixabay.com/photo/2017/08/29/20/47/dog-2694848_640.jpg'}
          cardName={'Fede'}
          cardDesc={'Un perrito muy sociable y obediente, le gusta jugar con niños. No lo pienses más y adóptalo!'}
          tagText={'Bobtail'}
          tagBackgroundColor={'primary'}
        />
        <MyCard
          cardImg={'https://cdn.pixabay.com/photo/2017/01/10/20/50/dog-1970192_640.jpg'}
          cardName={'Comilón'}
          cardDesc={'Un perrito que le encanta comer y jugar. Está esperando por ti para ir al parque a correr y pasar un buen rato juntos.'}
          tagText={'Shar Pei'}
          tagBackgroundColor={'danger'}
        />
        <MyCard
          cardImg={'https://cdn.pixabay.com/photo/2016/03/18/10/53/dog-1264667_640.jpg'}
          cardName={'Selena'}
          cardDesc={'Estará contigo hasta el final, muy cariñosa y bien portada dentro de casa. Ayúdala a encontrar un hogar.'}
          tagText={'Beagle'}
          tagBackgroundColor={'warning'}
        />
      </div>
      <Footer textFooter={'Revisa todos nuestros perritos que están esperando tu adopción. Estos animalitos están disponibles para recibir amor y cariño, muy felices y espectantes para ser tu nuevo compañer@ y mejor amig@ para siempre. Comparte este sitio para que más personas puedan encontrar un perrito para hacer el match perfecto.'} />
    </div>
  )
}

export default App;
