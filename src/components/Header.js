import React from 'react';
import './header.css';

function Header() {
    return (
        <div className="Header-Box">
            <div className="Header-Top">
                <span id="span-black">Curl&Read</span>
            </div>
            <p className="Header-Bottom">
                <span id="span-black">Short Stories</span>
                || Academic || Poetry
            </p>
        </div>
    );
}
export default Header;
