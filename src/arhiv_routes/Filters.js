import React from 'react';
import Select from './fildset/Select';

function Filters({filter, setFilter}){
    return (
        <fieldset className="filter-box">
            <legend>Форма сортировки</legend>
            <div className="inp-text">{filter.search}</div>
            <input type="text" value={filter.search} onChange={e => setFilter({...filter, search: e.target.value})} />
            <Select props={[{value: 'title', name: 'По заголовку'},{value: 'description', name: 'По описанию'}]} value={filter.sort} onChange={selectValue => setFilter({...filter, sort: selectValue})} />
        </fieldset>
    );
}

export default Filters;