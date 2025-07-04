import React from 'react';
import './TransparentNode.css';

export default function TransparentNode({ data }) {
    return (
        <div className="transparent-node">
            <div className="number-box blue">
                <span className="number-part">{data.Number}</span>
                <span className="unit-part"> m³/h</span>
            </div>
        </div>
    );
}
