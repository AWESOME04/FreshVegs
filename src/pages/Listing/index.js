import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Product from '../../components/product';
import { Button } from '@mui/material';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

import { MyContext } from '../../App';

const Listing = (props) => {
    const [isOpenDropDown, setisOpenDropDown] = useState(false);
    const [isOpenDropDown2, setisOpenDropDown2] = useState(false);
    const [showPerPage, setHhowPerPage] = useState(3);

    const [data, setData] = useState([]);

    const context = useContext(MyContext);

    let { id } = useParams();

    var itemsData = [];

    useEffect(() => {
        const fetchData = () => {
            props.data.length !== 0 &&
            props.data.map((item, index) => {
                if (props.single === true) {
                    if (item.cat_name.toLowerCase() === id.toLowerCase()) {
                        item.items.length !== 0 &&
                        item.items.map((item_) => {
                            item_.products.map((item__, index__) => {
                                itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })
                            })
                        })
                    }
                } else {
                    item.items.length !== 0 &&
                    item.items.map((item_, index_) => {
                        if (item_.cat_name.split(' ').join('-').toLowerCase() === id.split(' ').join('-').toLowerCase()) {
                            item_.products.map((item__, index__) => {
                                itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })
                            })
                        }
                    })
                }
            })

            const list2 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);
            setData(list2);
            window.scrollTo(0, 0);
        }

        fetchData();
    }, [id])

    const filterByBrand = (keyword) => {
        itemsData = [];

        props.data.length !== 0 &&
        props.data.map((item, index) => {
            if (props.single === true) {
                item.items.length !== 0 &&
                item.items.map((item_) => {
                    item_.products.map((item__, index__) => {
                        if (item__.brand.toLowerCase() === keyword.toLowerCase()) {
                            itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })
                        }
                    })
                })
            } else {
                item.items.length !== 0 &&
                item.items.map((item_, index_) => {
                    if (item_.cat_name.split(' ').join('-').toLowerCase() === id.split(' ').join('-').toLowerCase()) {
                        item_.products.map((item__, index__) => {
                            if (item__.brand.toLowerCase() === keyword.toLowerCase()) {
                                itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })
                            }
                        })
                    }
                })
            }
        })

        const list2 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);
        setData(list2);
        window.scrollTo(0, 0)
    }

    const filterByPrice = (minValue, maxValue) => {
        itemsData = [];

        props.data.length !== 0 &&
        props.data.map((item, index) => {
            if (props.single === true) {
                if (id === item.cat_name.toLowerCase()) {
                    item.items.length !== 0 &&
                    item.items.map((item_) => {
                        item_.products.length !== 0 &&
                        item_.products.map((product, prodIndex) => {
                            let price = parseInt(product.price.toString().replace(/,/g, ""))
                            if (minValue <= price && maxValue >= price) {
                                itemsData.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
                            }
                        })
                    })
                }
            } else {
                item.items.length !== 0 &&
                item.items.map((item_, index_) => {
                    if (item_.cat_name.split(' ').join('-').toLowerCase() === id.split(' ').join('-').toLowerCase()) {
                        item_.products.map((product) => {
                            let price = parseInt(product.price.toString().replace(/,/g, ""))
                            if (minValue <= price && maxValue >= price) {
                                itemsData.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
                            }
                        })
                    }
                })
            }
        })

        const list2 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);
        setData(list2);
    }

    const filterByRating = (keyword) => {
        itemsData = [];

        const fetchData = () => {
            props.data.length !== 0 &&
            props.data.map((item, index) => {
                if (props.single === true) {
                    if (item.cat_name.toLowerCase() === id.toLowerCase()) {
                        item.items.length !== 0 &&
                        item.items.map((item_) => {
                            item_.products.map((item__, index__) => {
                                itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })
                            })
                        })
                    }
                } else {
                    item.items.length !== 0 &&
                    item.items.map((item_, index_) => {
                        if (item_.cat_name.split(' ').join('-').toLowerCase() === id.split(' ').join('-').toLowerCase()) {
                            item_.products.map((item__, index__) => {
                                itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })
                            })
                        }
                    })
                }
            })
        }

        fetchData();

        const list2 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);

        const filteredData = data.filter(item => item.rating === keyword);
        const mergedData = [...list2, ...filteredData];
        const uniqueData = mergedData.filter((item, index) => mergedData.indexOf(item) === index);

        setData(uniqueData);
        window.scrollTo(0, 0)
    }

    return (
        <>
            {
                context.windowWidth < 992 &&
                <>
                    {
                        context.isopenNavigation === false &&
                        <Button className='btn-g btn-lg w-100 filterBtn' onClick={() => context.openFilters()}>Filters</Button>
                    }
                </>

            }

            <section className='listingPage'>

                <div className='container-fluid'>

                    {
                        <div className='breadcrumb flex-column'>
                            <h1 className="text-capitalize">{id.split('-').join(' ')}</h1>
                            <ul className='list list-inline mb-0'>
                                <li className='list-inline-item'>
                                    <Link to={''}>Home </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to={`/cat/${sessionStorage.getItem('cat')}`} className='text-capitalize'>{sessionStorage.getItem('cat')} </Link>
                                </li>
                                {
                                    props.single === false &&
                                    <li className='list-inline-item'>
                                        <Link to={''} class="text-capitalize">{id.split('-').join(' ')}</Link>
                                    </li>
                                }
                            </ul>
                        </div>
                    }

                    <div className='listingData'>
                        <div className='row'>
                            <div className={`col-md-3 sidebarWrapper ${context.isOpenFilters === true && 'click'}`}>
                                {
                                    data.length !== 0 && <Sidebar data={props.data} currentCatData={data} filterByBrand={filterByBrand} filterByPrice={filterByPrice} filterByRating={filterByRating} />
                                }
                            </div>

                            <div className='col-md-9 rightContent homeProducts pt-0'>
                                <div className='topStrip d-flex align-items-center'>
                                    <p className='mb-0'>We found <span className='text-success'>{data.length}</span> items for you!</p>
                                    <div className='ml-auto d-flex align-items-center'>
                                        <div className='tab_ position-relative'>
                                            <Button className='btn_' onClick={() => setisOpenDropDown(!isOpenDropDown)}><GridViewOutlinedIcon /> Show: {showPerPage * 5}</Button>
                                            {
                                                isOpenDropDown !== false &&
                                                <ul className='dropdownMenu'>
                                                    <li>
                                                        <Button className='align-items-center'
                                                                onClick={() => {
                                                                    setisOpenDropDown(false)
                                                                    setHhowPerPage(1);
                                                                }}
                                                        >
                                                            5
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button className='align-items-center'
                                                                onClick={() => {
                                                                    setisOpenDropDown(false)
                                                                    setHhowPerPage(2);
                                                                }}
                                                        >
                                                            10
                                                        </Button>
                                                    </li>

                                                    <li>
                                                        <Button className='align-items-center'
                                                                onClick={() => {
                                                                    setisOpenDropDown(false)
                                                                    setHhowPerPage(3);
                                                                }}
                                                        >
                                                            15
                                                        </Button>
                                                    </li>

                                                    <li>
                                                        <Button className='align-items-center'
                                                                onClick={() => {
                                                                    setisOpenDropDown(false)
                                                                    setHhowPerPage(4);
                                                                }}
                                                        >
                                                            20
                                                        </Button>
                                                    </li>
                                                </ul>
                                            }
                                        </div>
                                        <div className='tab_ ml-3 position-relative'>
                                            <Button className='btn_' onClick={() => setisOpenDropDown2(!isOpenDropDown2)}><FilterListOutlinedIcon /> Sort by: Featured </Button>
                                            {
                                                isOpenDropDown2 !== false &&
                                                <ul className='dropdownMenu'>
                                                    <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}>Featured</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}> Price: Low to High</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}> Price: High to Low</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}> Release Date</Button></li>
                                                    <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}> Avg. Rating</Button></li>
                                                </ul>
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className='productRow pl-4 pr-3'>
                                    {
                                        data.length !== 0 &&
                                        data.map((item, index) => {
                                            return (
                                                <div className='item' key={index}>
                                                    <Product tag={item.type} item={item} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing;