import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import sedan from '/images/sedan-1.png'
import classic from '/images/classic.png'
import sports from '/images/sports-1.png'
import truck from '/images/truck.gif'
import ToyCardHome from './ToyCardHome';

const CategoryTab = () => {
    const [toys, setToys] = useState([]);
    const [category, setCategory] = useState('Classic Car');
    useEffect(() => {
        fetch(`http://localhost:5000/toys?category=${category}`)
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(error => console.log(error.message))
    }, [category])
    return (
        <section className='container mx-auto px-2 md:px-0 lg:px-10 py-16'>
            <h2 className='heading text-[36px] text-center'>Shop By Category</h2>
            <div className="divider w-4/12 mx-auto mb-16">
                <img src={truck} className='w-[65px] h-[65px]' alt="" />
            </div>
            <Tabs>
                <TabList>
                    <Tab>
                        <button onClick={() => setCategory('Classic Car')} className=' py-1 px-2 rounded-md flex items-center gap-2'>
                            <img src={classic} className='w-[40px]' alt="" />
                            <span>Classic</span>
                        </button>
                    </Tab>
                    <Tab>
                        <button onClick={() => setCategory('Sedan')} className=' py-1 px-2 rounded-md flex items-center gap-2'>
                            <img src={sedan} className='w-[40px]' alt="" />
                            <span>Sedan</span>
                        </button>
                    </Tab>
                    <Tab>
                        <button onClick={() => setCategory('Sports Car')} className=' py-1 px-2 rounded-md flex items-center gap-2'>
                            <img src={sports} className='w-[40px]' alt="" />
                            <span>Sports</span>
                        </button>
                    </Tab>
                </TabList>

                <TabPanel>
                    <div>
                        {
                            category === 'Classic Car' ?
                                toys.map(toy => <ToyCardHome key={toy._id} toy={toy}></ToyCardHome>)
                                :
                                ''
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        {
                            category === 'Sedan' ?
                                toys.map(toy => <ToyCardHome key={toy._id} toy={toy}></ToyCardHome>)
                                :
                                ''
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        {
                            category === 'Sports Car' ?
                                toys.map(toy => <ToyCardHome key={toy._id} toy={toy}></ToyCardHome>)
                                :
                                ''
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </section>
    );
};

export default CategoryTab;