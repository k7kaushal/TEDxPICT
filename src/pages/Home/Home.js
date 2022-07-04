import './Home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from './components/Cards';
import Startpg from './components/Startpg';
import Statistics from './components/Statistics';
import Speakers from './components/Speakers';
import OurBlog from './components/OurBlog';
import Testimonials from './components/Testimonials';



function Home() {
    return (
        <>
            <Startpg />
            <Cards />
            <Statistics />
            <Speakers />
            <OurBlog />
            <Testimonials />
        </>
    )
}

export default Home
