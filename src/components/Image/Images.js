import { Button } from '@material-ui/core';
import { useState } from 'react';

const Images = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleFetch = () => {
        fetch('http://172.18.14.97:9342/getImages', {
        }).then(res => {
            console.log(res);
            return res.json();
        }).then(d => {
            console.log(d);
            setData(d);
            setError(null);
        }).catch(err => {
            setError(err.message);
            setData(null);
            console.log(err.message);
        })
    }

    return (
        <div>
            <Button onClick={handleFetch} style={{ background: 'red' }}>Fetch Pictures</Button>
            {data && data.map(d => (
                <div key={d.ImageId}>
                    {d.ImageName}
                    (<img src={`data:image/jpeg;base64,${d.ImageFile}`} styles={{ width: '90%' }} />)
                </div>
            ))}
            {error && (<div>{error}</div>)}
        </div>
    );
}

export default Images;