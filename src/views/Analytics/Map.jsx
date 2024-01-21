import React, { useState, useEffect } from "react";
import {
    ComposableMap, Geographies, Geography, Marker,
} from "react-simple-maps";
const Maps = () => {
    const [geographies, setGeographies] = useState([]);

    useEffect(() => {
        fetch('/features.json')
            .then(response => {
                console.log(response); // Log the entire response object
                return response.json();
            })
            .then(data => {
                console.log(data); // Log the parsed JSON data
                setGeographies(data.features);
            })
            .catch(error => {
                console.error('Error fetching features.json:', error);
            });
    }, []);
    const markers = [
        { code: "USA", coordinates: [-95.7129, 37.0902], fill: "#ec407a", stroke: "#f48fb1" }, // Example coordinates for the USA
        { code: "CAN", coordinates: [-106.3468, 56.1304], fill: "#ec407a", stroke: "#f48fb1" }, // Example coordinates for Canada
        { code: "EGY", coordinates: [31.2357, 30.0444], fill: "#ec407a", stroke: "#f48fb1" }, // Example coordinates for Egypt
        // Add australia, brazil, china, and india here
        { code: "AUS", coordinates: [133.7751, -25.2744], fill: "#000", stroke: "darkgray" }, // Example coordinates for Australia
        { code: "BRA", coordinates: [-51.9253, -14.2350], fill: "#000", stroke: "darkgray" }, // Example coordinates for Brazil
        { code: "CHN", coordinates: [104.1954, 35.8617], fill: "#000", stroke: "darkgray" }, // Example coordinates for China



    ];

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px 0" }}>

            <ComposableMap projection="geoMercator" projectionConfig={{
                rotate: [0, 0, 0],
                scale: 100,
            }} className="h-[400px]">

                < Geographies geography={geographies}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                style={{
                                    default: {
                                        fill: "#dee2e8",
                                        stroke: "#f3f4f6",
                                        strokeWidth: 1,
                                        outline: "none",        // Stroke width

                                    },
                                    hover: {
                                        fill: "#E8EDEF",
                                        outline: "none",
                                    },
                                    pressed: {
                                        fill: "#E8EDEF",
                                        outline: "none",
                                    },
                                }}
                            />
                        ))
                    }
                </Geographies>
                {
                    markers.map((marker) => (
                        <Marker key={marker.code} coordinates={marker.coordinates}>
                            <circle r={10} fill={marker.fill} stroke={marker.stroke} strokeWidth={3} />
                        </Marker>
                    ))
                }
            </ComposableMap >
        </div>
    );
};

export default Maps;
