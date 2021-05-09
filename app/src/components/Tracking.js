import { useState } from 'react';
import FormAdd from './FormAdd';
import TrainingList from './TrainingList';

export default function Tracking({ props }) {
    const [dataInputs, setDataForm] = useState([]);

    const inputValue = values => {
        setDataForm(prevValues => {
            prevValues.map((elem) => {
                if (elem.date ===  values.date) {
                    values.distance = ((+elem.distance) + (+values.distance)).toFixed(1);
                    prevValues.splice(prevValues.indexOf(elem), 1);
                }
            })
            return([...prevValues, values]);
        });
    };

    const deleteItem = id => {
        setDataForm(prevValues => {
            return prevValues.filter(elem => elem.id !== id)
        });
    };

    return ( 
        <div>
            <FormAdd inputValue={inputValue} />
            <TrainingList dataInput={dataInputs} deleteItem={deleteItem} />
        </div>
    )
}