import React, { useCallback } from 'react';
import './Delete.css';

function Delete({onClick}) {
    const handleUnsave = useCallback((e) => {
        e.preventDefault();
        onClick(e);
    }, [onClick]);

    return (
        <button type="button" className="news-card__delete" onClick={handleUnsave}></button>
    );
}

export default Delete;