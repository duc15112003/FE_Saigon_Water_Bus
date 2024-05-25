import Footer from '../DefaulLayout/Footer/index.js';
import Header from '../DefaulLayout/Header/header.js';
import Carousel from '../DefaulLayout/Carosel/carosel.js';
const DefaultLayout = ({ children }) => {
    const images = [
        'https://saigonwaterbus.com/wp-content/uploads/2022/06/home-slide-6.jpg',
        'https://www.thaiboatguide.com/wp-content/uploads/2023/07/EJjCifaUYAA3q2h.jpg',
        'https://cdn.anvui.vn/upload/web/2021/10/15/1634318654_w2.jpg.jpg',
    ];
    return (
        <div>
            <Header/>
            <div className="carosel">
                <Carousel images={images} width="w-full" height="h-128"/>
            </div>
            <div>{children}</div>
            <Footer/>
        </div>
    );
}

export {DefaultLayout};