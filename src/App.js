import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import { Header, MainContainer, CreateContainer } from './components';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/FirebaseFunctions';
import { actionType } from './context/reducer';
import AboutDeveloper from './components/AboutDeveloper';

const App = () => {

    const [{ foodItems }, dispatch] = useStateValue();
    const fetchData = async () => {
        await getAllFoodItems().then(data => {
            dispatch({
                type: actionType.SET_FOOD_ITEMS,
                foodItems: data,
            })
        });
    };

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <AnimatePresence exitBeforeEnter>
            <div className='w-screen h-auto flex flex-col bg-primary'>
                <Header />
                <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>

                    <Routes>
                        <Route path='/*' element={<MainContainer />} />
                        <Route path='/createItem' element={<CreateContainer />} />
                        <Route path='/aboutDeveloper' element={<AboutDeveloper />} />
                    </Routes>
                </main>
            </div>
        </AnimatePresence>

    )
}

export default App;
