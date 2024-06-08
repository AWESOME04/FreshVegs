import React, { useState, useEffect, useRef, useContext } from 'react';
import SliderBanner from './slider/index';
import ClientTestimonial from '../../components/clientTestimonials/index';
import CatSlider from '../../components/catSlider';
import Stats from "./stats/index";
import Partners from "./partners/index";
import './style.css';
import Product from '../../components/product';
import Slider from "react-slick";
import TopProducts from './TopProducts';
import { MyContext } from '../../App';


const Home = (props) => {
    const [prodData, setProdData] = useState([]);
    const [catArray, setCatArray] = useState([]);
    const [activeTab, setActiveTab] = useState('');
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [activeTabData, setActiveTabData] = useState([]);
    const [bestSells, setBestSells] = useState([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(false);

    const productRow = useRef();
    const context = useContext(MyContext);

    const settings = {
        dots: false,
        infinite: context.windowWidth < 992,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        arrows: context.windowWidth < 992,
    };

    const nonFoodCategories = ["Mobiles & Tablets", "TV & Speaker", "Men Western Wear", "Women Western Wear"];

    useEffect(() => {
        const filteredProdData = props.data.map(category => {
            const filteredItems = category.items.filter(item => !nonFoodCategories.includes(item.cat_name));
            return { ...category, items: filteredItems };
        });

        setProdData(filteredProdData);

        const catArr = [];
        filteredProdData.forEach(category => {
            category.items.forEach(item => {
                catArr.push(item.cat_name);
            });
        });

        const uniqueCategories = [...new Set(catArr)];
        setCatArray(uniqueCategories);
        setActiveTab(uniqueCategories[0]);
        window.scrollTo(0, 0);
    }, [props.data]);

    useEffect(() => {
        const arr = [];
        setActiveTabData(arr);
        prodData.forEach(category => {
            category.items.forEach(item => {
                if (item.cat_name === activeTab) {
                    item.products.forEach(product => {
                        arr.push({ ...product, parentCatName: category.cat_name, subCatName: item.cat_name });
                    });
                }
            });
        });
        setActiveTabData(arr);
        setTimeout(() => {
            setIsLoadingProducts(false);
        }, 1000);
    }, [activeTab, prodData]);

    return (
        <div style={{display: 'block'}}>
            <SliderBanner/>
            <CatSlider data={prodData}/>

            <section className='homeProducts homeProductWrapper'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center homeProductsTitleWrap'>
                        <h2 className='hd mb-0 mt-0 res-full'>Popular Products</h2>
                        <ul className='list list-inline ml-auto filterTab mb-0 res-full'>
                            {catArray.map((cat, index) => (
                                <li className="list list-inline-item" key={index}>
                                    <a
                                        className={`cursor text-capitalize ${activeTabIndex === index ? 'act' : ''}`}
                                        onClick={() => {
                                            setActiveTab(cat);
                                            setActiveTabIndex(index);
                                            productRow.current.scrollLeft = 0;
                                            setIsLoadingProducts(true);
                                        }}
                                    >
                                        {cat}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`productRow ${isLoadingProducts ? 'loading' : ''}`} ref={productRow}>
                        {activeTabData.map((item, index) => (
                            <div className='item' key={index}>
                                <Product tag={item.type} item={item}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='homeProducts homeProductsRow2 pt-0'>
                <div className='container-fluid'>
                    <br className='res-hide'/><br className='res-hide'/>
                    <div className='row'>
                        <div className='col-md-9'>
                            <Slider {...settings} className='prodSlider'>
                                {bestSells.map((item, index) => (
                                    <div className='item' key={index}>
                                        <Product tag={item.type} item={item}/>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section className='topProductsSection'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <TopProducts title="Top Selling"/>
                        </div>
                        <div className='col'>
                            <TopProducts title="Trending Products"/>
                        </div>
                        <div className='col'>
                            <TopProducts title="Recently added"/>
                        </div>
                        <div className='col'>
                            <TopProducts title="Top Rated"/>
                        </div>

                    </div>
                </div>
            </section>
            <div className="client-testimonial">
                <ClientTestimonial/>
            </div>
            <div className="stats">
                <Stats/>
            </div>
            <div>
                <Partners/>
            </div>
            <br/>
        </div>
    );
};

export default Home;
