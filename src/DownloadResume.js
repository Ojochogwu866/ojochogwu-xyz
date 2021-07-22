import React from 'react'

function DownloadResume() {
    

fetch('https://cors-anywhere.herokuapp.com/',{
    method: 'GET',
    headers: {
        'Content-Type': 'application/pdf',
    },
})
.then((response) => response.blob())
.then((blob) => {
    const url = window.URL.createObjectURL(
        new Blob([blob]),
    );
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
        'download',
        'OjochogwuRsm.pdf'
    );

    document.body.appendChild(link);

    link.click();

    link.parentNode.removeChild(link);
})
    return (
        <div>
            
        </div>
    )
}

export default DownloadResume

