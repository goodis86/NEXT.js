import React from 'react';


const user = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
        <style jsx>{`
            div {
                border: 5px solid #eee;
                box-shadow: 0 2px 3px #fff;
                padding: 28 px;
                text-align: center;
            }
        `}</style>
    </div>
);

export default user;

// components in next.js are styled by using a package styled-jsx!!!
// styling this way is scoped to our given component!!!!!!
// more info in official docs