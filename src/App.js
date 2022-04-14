import './scss/style.scss';
import { Route, Switch } from 'react-router-dom';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Popup from './components/common/Popup';

//sub
import Aboutus from './components/sub/Aboutus';
import Community from './components/sub/Community';
import Contactus from './components/sub/Contactus';
import Member from './components/sub/Member';
import Join from './components/sub/Join';
import Product from './components/sub/Product';
import Youtube from './components/sub/Youtube';
import Gallery from './components/sub/Gallery';
//main
import Visual from './components/main/Visual';
import Content from './components/main/Content';

const path = process.env.PUBLIC_URL;

function App() {
	return (
		<>
			<Switch>
				<Header />
				<Visual />
				<Content />

				<Route exact path='/'>
					<Visual />
					<Content />
				</Route>
			</Switch>
			<Route path='/aboutus' component={Aboutus} />
			<Route path='/community' component={Community} />

			<Route path='/contactus' component={Contactus} />

			<Route path='/member' component={Member} />

			<Route path='/join' component={Join} />

			<Route path='/product' component={Product} />

			<Route path='/youtube' component={Youtube} />

			<Route path='/gallery' component={Gallery} />

			<Footer />
		</>
	);
}
export default App;
