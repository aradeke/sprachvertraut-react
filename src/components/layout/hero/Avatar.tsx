import React from 'react';

export default function Avatar({fixed}: {fixed:boolean}) {
    return (
        <div id="avatar" className={`avatar${fixed ? '--fixed':''}`} >Avatar</div>
    );
}