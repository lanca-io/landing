import '../src/styles/index.css'
import About from './components/about'
import Benefits from './components/benefits'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import Integration from './components/integration'
import useToggleModal from './hooks/useOpenModal'

function App() {
	const { isModalOpen, toggleModal } = useToggleModal()
	return (
		<>
			<Header toggleModal={toggleModal} />
			<Hero />
			<About />
			<Benefits />
			<Integration toggleModal={toggleModal}/>
			<Footer toggleModal={toggleModal}/>
			<Contact isOpen={isModalOpen} toggleOpen={toggleModal}/>
		</>
	)
}

export default App
