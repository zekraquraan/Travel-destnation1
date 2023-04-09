import  Header from "../Header/Header";
import Tours from "../Tours/Tours";
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';

function Home(props)
{ const tours = props.tours;
    return (
    <>

        <Header/>
            
          <div>
      <h1 style ={{color:"green"}} > Hello visitor you can watch our Tours</h1>
      <Tours tours={props.tours} />

    </div> 
    
    <div>
      <h2>Tours</h2>
      <div className="tours">
        {tours.map((tour) => (
          <Link to={`/city/${tour.id}`} elemnts={tour.id}>
            <div className="tour">
              <img src={tour.image} alt={tour.name} />
              <h3>{tour.name}</h3>
              <p>{tour.info}</p>
            </div>
          </Link>
        ))}
      </div>
    </div> <Footer/>
        </>
    )
      
}
export default Home;