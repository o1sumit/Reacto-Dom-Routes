import { FC } from 'react'

const Contact: FC = () => {
    return (
        <h1>This is Contact Page</h1>
    )
}

export default Contact;


// import React, { useEffect } from 'react';

// function Contact() {
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             console.log(new Date().toLocaleString());

//         }, 4000);

//         return () => {
//             clearInterval(intervalId);
//         };
//     }, []); // Empty dependency array ensures it runs once on mount

//     return <div>Your component content</div>;
// }

// export default Contact;
