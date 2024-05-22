import Footer from '../DefaulLayout/Footer/index.js';
import Header from '../DefaulLayout/Header/header.js';
const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
}

export {DefaultLayout};