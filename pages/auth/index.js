import React from 'react';
import Link from 'next/link';

import User from '../../components/User';

const authIndexPage = (props) => (
    
        <div>
            <h1>The Auth Page - {props.appName}</h1>  
            <p>Go to <Link href="/"><a>Main</a></Link></p>        
            <User name="Phil" age={34} />
        </div>
    
);

authIndexPage.getInitialProps = (context) => {      // example of our getInitialProps working with functional compoenent as welll!!!!!
    const promise = new Promise((resolse, reject) => {
        setTimeout(() => {
            resolse({appName: "super man Phil Authorization"});
        }, 1000);
    });
    return promise;
}

export default authIndexPage;

// use of a regular component is the same as in react
// only special treatment gets folder *pages* that works as a router for us and does lazy loading as well!!!!!!!!!!!!

// getinitial props - very usefull lifecycle that works in class based and functional components!!!
//helps initialize our props before the page is actually loaded...