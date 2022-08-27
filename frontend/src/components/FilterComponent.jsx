import React from 'react'

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
        <div className="row">
            <div className="col-12">
                <div className="row justify-content-end">
                    <div className="col-6">
                        <input
                            className='form-control'
                            id="search"
                            type="text"
                            placeholder="Buscar..."
                            value={filterText}
                            onChange={onFilter}
                        />
                    </div>
                    <div className="col-3">
                        <button className='btn btn-black' onClick={onClear}>X</button>
                    </div>
                </div>

            </div>
        </div>

    </>
)

export default FilterComponent
