import Analytics from './Analytics';
import Collaborate from './Collaborate';
import Features from './Features';
import Footer from './Footer';
import Header from './Header';
import './index.css'
import MoreFeatures from './MoreFeatures';
import Pricing from './Pricing';
import Testimonial from './Testimonial';

function App() {
  return (
    <div id="App"  >

        <Header/>
        <Features />
        <Analytics />
        <MoreFeatures />
        <Collaborate />
        <Testimonial />
        <Pricing/>
        <Footer/>

    </div>
   
  );
}

export default App;
