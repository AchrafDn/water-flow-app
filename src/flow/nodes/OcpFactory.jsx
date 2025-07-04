import React from 'react';
import { Handle, Position } from '@xyflow/react';
import OcpIcon from "../../assets/ocp-factory.svg";

export default function OcpFactory({ data }) {
    return (
        <div
            className="ocp-factory"
            style={{
                background: "white",
                borderRadius: "10px",
                height: "100px",
                width: "160px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "2px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                padding: "4px",
                border: "2px dashed Green",
            }}
        >
            <div
                className="node-label"
                style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#333",
                    textAlign: "center",
                }}
            >
                {data.label}
            </div>

            <img
                src={OcpIcon}
                alt="Factory Icon"
                style={{ width: "55px", height: "55px" }} // increased size
            />

            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#2563eb' }}
            />
        </div>
    );
}
