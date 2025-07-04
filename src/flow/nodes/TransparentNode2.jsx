import React from 'react';
import './TransparentNode2.css';

export default function TransparentNode2({ data }) {
    return (
        <div className="transparent-node2">
            <div className="orange-box">
                <span className="number-part">{data.Number}</span>
                <span className="unit-part"> m³/h</span>
            </div>
        </div>
    );
}
