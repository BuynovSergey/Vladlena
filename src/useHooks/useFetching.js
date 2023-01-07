import {useState} from 'react';

const Fetching = (callback) => {
    let [loader, setLoader] = useState(false);
    let [error, setError] = useState('');

    const fetching = async () => {
        try { 
            setLoader(true);
            await callback();
        } catch(e){
            setError(e.message);
        } finally {
            setTimeout(() => {
                setLoader(false);
            }, 1000);
        }
    }

    return [fetching, loader, error];
}

export default Fetching;