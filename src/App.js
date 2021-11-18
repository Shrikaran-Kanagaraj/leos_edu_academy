import Header from './components/header/header'
import CardContainer from './components/card/card.container';
import ContactForm from './components/contactForm/contactForm';

function App() {
  return (
    <div className="font-mono dark:bg-blue-50">
      <Header/>
      <CardContainer/>
      <ContactForm/>
    </div>
      
  );
}

export default App;
