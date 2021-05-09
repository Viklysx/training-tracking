export default function TrainingList({dataInput, deleteItem}) {
    const deleteItemForm = (dataDateValue) => {
        deleteItem(dataDateValue)
    };

    return(
        <div className="wrapper-block">
            <div className="block-list">
                <p className="block-list-title">Дата (ДД.ММ.ГГ)</p>
                <p className="block-list-title">Пройдено км</p>
                <p className="block-list-title">Действия</p>
            </div>
            <div className="block-list-wrapper">
                {
                    dataInput.sort((a,b) => new Date(b.date) - new Date(a.date))
                    .map((data) => 
                        <div key={data.id} className="list">
                            <div className="list-item">
                                <p>{data.date}</p>
                            </div>
                            <div className="list-item">
                                <p>{data.distance}</p>
                            </div>
                            <div className="list-item">
                                <span>&#9998;</span>
                                <span onClick={evt => deleteItemForm(data.id)}>&#10006;</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}