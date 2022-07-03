import './Loader.css';

export const Loader = (props) => {
    const loaderText = props && props.text;
    
    return (
        <div className='loader_container'>
        <div className='loader'>
            <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            {loaderText &&
                <h4 className='loader_text' data-testid='loader_text'>{loaderText}</h4>
            }
        </div>
        </div>
    );
}

