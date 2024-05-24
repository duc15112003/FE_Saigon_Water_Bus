import Footer from '../DefaulLayout/Footer/index.js';
import Header from '../DefaulLayout/Header/header.js';
const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </div>
    );
}

export {DefaultLayout};