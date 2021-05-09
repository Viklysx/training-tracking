import TrackingModel from './TrackingModel';
import {nanoid} from 'nanoid';
import {useState} from 'react';

export default function FormAdd({ inputValue }) {
    const [dataInput, setData] = useState({
        date: '',
        distance: ''
    });

    const handleSubmit = evt => {
        evt.preventDefault();          
        const values = new TrackingModel(nanoid(), dataInput.date, dataInput.distance);
        inputValue(values);
        setData(prevForm => ({...prevForm, date: '', distance: ''}));
        
    };

    const handleDataChange = evt => {     
        const value = evt.target.value;
        const name = evt.target.name;
        setData(prevForm => ({...prevForm, [name]:value}));
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                <input 
                    id="date" 
                    type="date" 
                    name="date"
                    value={dataInput.date}
                    onChange={handleDataChange} />
            </div>
            <div>
                <label htmlFor="distance">Пройдено км</label>
                <input 
                    id="distance" 
                    type="text" 
                    name="distance" 
                    value={dataInput.distance}
                    onChange={handleDataChange} />
            </div>
            <button type="submit">OK</button>
        </form>
    );
}