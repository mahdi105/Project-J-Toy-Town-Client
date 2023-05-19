import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import sedan from '/images/sedan-1.png'
import classic from '/images/classic.png'
import sports from '/images/sports-1.png'
import truck from '/images/truck.gif'

const CategoryTab = () => {
    const [toys, setToys] = useState('Tab 1');
    return (
        <section className='container mx-auto px-2 md:px-0 lg:px-10 py-16'>
            <h2 className='heading text-[36px] text-center'>Shop By Category</h2>
            <div className="divider w-4/12 mx-auto mb-16">
                <img src={truck} className='w-[65px] h-[65px]' alt="" />
            </div>
            <Tabs>
                <TabList>
                    <Tab>
                        <button onClick={() => setToys('Tab 1')} className=' py-1 px-2 rounded-md flex items-center gap-2'>
                            <img src={classic} className='w-[40px]' alt="" />
                            <span>Classic</span>
                        </button>
                    </Tab>
                    <Tab>
                        <button onClick={() => setToys('Tab 2')} className=' py-1 px-2 rounded-md flex items-center gap-2'>
                            <img src={sedan} className='w-[40px]' alt="" />
                            <span>Sedan</span>
                        </button>
                    </Tab>
                    <Tab>
                        <button onClick={() => setToys('Tab 3')} className=' py-1 px-2 rounded-md flex items-center gap-2'>
                            <img src={sports} className='w-[40px]' alt="" />
                            <span>Sports</span>
                        </button>
                    </Tab>
                </TabList>

                <TabPanel>
                    <h2>{toys}</h2>
                </TabPanel>
                <TabPanel>
                    <h2>{toys}</h2>
                </TabPanel>
                <TabPanel>
                    <h2>{toys}</h2>
                </TabPanel>
            </Tabs>
        </section>
    );
};

export default CategoryTab;