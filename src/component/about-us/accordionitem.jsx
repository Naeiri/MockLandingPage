import React from 'react';

const AccordionItem = ({ title, children, isOpen, toggle }) => (
    <div className="accordion-item">
        <h2 className="accordion-header">
            <button
                className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                type="button"
                onClick={toggle}
            >
                {title}
            </button>
        </h2>
        <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}>
            <div className="accordion-body">
                <p className='fs'>{children}</p>
            </div>
        </div>
    </div>
);

export default AccordionItem