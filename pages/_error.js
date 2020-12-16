import React from 'react';
import Link from 'next/link';


const ErrorPage = () => (
    
        <div>
            <h1>OOPs, wrong way</h1>
            <p>Go back <Link href="/"><a>to 1st base</a></Link></p>
        </div>
    
);

export default ErrorPage;

// custom error page handling and functionality!!!!!!!!!