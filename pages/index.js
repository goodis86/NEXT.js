import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const indexPage = () => (
    
        <div>
            <h1>The main Page</h1>
            <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
            <button onClick = {() => Router.push('/auth')}>Go to Auth as well</button> 
        </div>
    
);

export default indexPage;

//next has it's own link component as well, has to be wrapped in <a>


// the main idea behind next.js is file and folder structure that lets us navigate and avoid using routes at all,
// it does it for us!!!!
// here we have 2 pages with indes.js file in each and if we type /auth - it shows us the index.js inside our auth folder right away!
