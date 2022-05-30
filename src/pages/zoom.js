import { useEffect, useState } from "react";

const Zoom = ({ mapRef }) => {
    const [value, setValue] = useState(7)
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.setZoom(value)
        }
    }, [value])
    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.on('zoomend', function (e) {
                setValue(mapRef.current.getZoom())
            });
        }
    }, [mapRef.current])
    return (
        <div className="zoom">
            <input
                onChange={handleChange} value={value}
                min="7" max="20" step="0.01" type="range" />
        </div>
    )
}

export default Zoom;