import '../../App.css';
import HomepageTop from '../HomepageTop';
import Cards from '../Cards';
import Footer from '../Footer';
import About from '../About';
import Overview from '../Overview';
import Accommodation from '../Accommodation';
import Activities from '../Activities';
import Attractions from '../Attractions';
import LocationFull from '../LocationFull';
import Testimonials from '../Testimonials';
import Booking from '../Booking';


function Home() {
  return (
    <>
      <HomepageTop />
      <Overview />
      <Cards />
     <Testimonials />
     <Booking />
      <Footer />
    </>
  );
}

export default Home;