import React from 'react';

function Structure(props) {
    const [isZoomed, setIsZoomed] = React.useState(false);

    const handleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div>
                    <img src={props.url} alt="Image" onClick={handleZoom} style={{ cursor: 'zoom-in' }} />
                </div>
                <div>
                    <h2>{props.head}</h2>
                    <p>{props.text}</p>
                </div>
            </div>
            {isZoomed && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={props.url} alt="Zoomed Image" onClick={handleZoom} style={{ maxWidth: '90%', maxHeight: '90%', cursor: 'zoom-out' }} />
                </div>
            )}
        </div>
    );
}

export default Structure;