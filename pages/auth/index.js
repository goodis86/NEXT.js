import React from 'react';
import Link from 'next/link';

import User from '../../components/User';

const authIndexPage = () => (
    
        <div>
            <h1>The Auth Page</h1>  
            <p>Go to <Link href="/"><a>Main</a></Link></p>        
            <User name="Phil" age={34} />
        </div>
    
);

export default authIndexPage;

// use of a regular component is the same as in react
// only special treatment gets folder *pages* that works as a router for us and does lazy loading as well!!!!!!!!!!!!