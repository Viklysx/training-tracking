export default function FormAdd({ props }) {
    const handleSubmit = evt => {
        evt.preventDefault();
    };

    const handleDataChange = evt => {

    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                <input 
                    id="date" 
                    type="date" 
                    onChange={handleDataChange} />
            </div>
            <div>
                <label htmlFor="distance">Пройдено км</label>
                <input 
                    id="distance" 
                    type="text" 
                    onChange={handleDataChange} />
            </div>
            <button type="submit">OK</button>
        </form>
    );
}