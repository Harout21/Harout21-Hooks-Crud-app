import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from 'react-redux';

import './style.css'
import {getDataAction} from "./redux/actions";
import {editCarAction} from "./redux/actions";
import {deleteCarAction} from "./redux/actions";

const Cars = () => {
    const [body, setBody] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [activeRow,setActive] = useState(null);

    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars);

    const deleteCar = (carId) => {
        dispatch(deleteCarAction(carId));
    };
    const handleClick = (car) => {
        setBody(car);
        setShowModal(true)
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        setShowModal(false);
        dispatch(editCarAction(body))
    };
    const handleChange = ({target: {name, value}}) => {
        setBody((prev) => ({...prev, [name]: value}));
    };
    const handleActiveRow = (data) => {
     setActive(data.id)
    };

    useEffect(() => {
        dispatch(getDataAction());
    }, []);

    return (
        <div>
            {
                showModal && <div className='modal'>
                    <form onSubmit={handleSubmit}>
                        <input name="brand" onChange={handleChange} value={body.brand}/>
                        <input name="Origin" onChange={handleChange} value={body.Origin}/>
                        <input name="Horsepower" onChange={handleChange} value={body.Horsepower}/>
                        <button>submit</button>
                    </form>
                </div>
            }
            <h1 id='title'>Cars Crud</h1>
            <table id='cars'>
                <tbody>
                <td>Brand</td>
                <td>Origin</td>
                <td>Horsepower</td>
                {cars.map(car => <tr key={car.id} className={car.id === activeRow ? 'active':''} onClick={()=>handleActiveRow(car)}>
                        <td>{car.brand}</td>
                        <td>{car.Origin}</td>
                        <td>{car.Horsepower}
                                <button onClick={() => handleClick(car)}>EDIT</button>
                                <button onClick={() => deleteCar(car.id)}>DELETE</button>
                        </td>
                    </tr>
                )}

                </tbody>
            </table>
        </div>
    )
};

export default Cars;