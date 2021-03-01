import React, {useCallback} from 'react';
import './Save.css';

function SaveButton({ isUserLoggedIn, onSave, onUnsave, isItSaved }) {
    const [isSaved, setIsSaved] = React.useState(isItSaved);

    const handleSaveClick = useCallback((e) => {
        e.preventDefault();
        onSave(e);
        setIsSaved(!isSaved);
    }, [onSave, isSaved]);

    const handleUnsaveClick = useCallback((e) => {
        e.preventDefault();
        onUnsave(e);
        setIsSaved(!isSaved);
    }, [onUnsave, isSaved]);

    React.useEffect(() => {
        setIsSaved(isItSaved);
    }, [isItSaved]);

    return (
        <>
        {
            isUserLoggedIn ? 
            <button type="button" onClick={isSaved ? handleUnsaveClick : handleSaveClick} 
                    className={isSaved ? 
                                "news-card__save news-card__save_loggedin news-card__save_blue" 
                                : "news-card__save news-card__save_loggedin"}></button> 
            :
            <button type="button" className="news-card__save" disabled={true}></button>
        }
        </>
    );
}

export default SaveButton;