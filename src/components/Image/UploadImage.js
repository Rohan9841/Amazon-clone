import React from 'react'
import { useState } from 'react';

function UploadImage() {

    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (image != null) {
            const fd = new FormData();
            fd.append('myFile', image, image.name);

            fetch('http://172.18.14.97:9342/upload', {
                method: 'POST',
                // headers: { "Content-Type": 'multipart/form-data' },
                body: fd
            }).then(res => {
                console.log(res);
                return res.json();
            }).then(d => {
                console.log(d);
            }).catch(err => {
                console.log(err.message);
            })
        }
        else console.log("image is null");
    }

    const handleInputChange = (e) => {
        setImage(e.target.files[0]);
        console.log(image);
    }
    return (
        <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
        >
            <input type="file" name="myFile" onChange={handleInputChange} />
            <input type="submit" value="upload" />
        </form>
    )
}

export default UploadImage;


