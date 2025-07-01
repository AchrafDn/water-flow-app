import React from 'react';
import './TransparentNode.css';

export default function TransparentNode({ data }) {
    return (
        <div className="transparent-node">
            <div className="number-box orange">
                {data.Number} m³/h
            </div>
        </div>
    );
}
