// Core
import React from 'react';

import avatar from '../theme/assets/images/nasa';

export default class Profile extends React.Component {
    render () {
        return (
             <div className = 'profile'>
                <img src = { avatar } />
                <div>
                    <div className = 'nickname'>
                        <span>nasa</span>
                    </div>
                    <div className = "stats">
                        <span>
                            <span>2.398&nbsp;</span>
                            <span>posts</span>
                        </span>
                        <span>
                            <span>33.6 millions&nbsp;</span>
                            <span>followers</span>
                        </span>
                        <span>
                            <span>69&nbsp;</span>
                            <span>following</span>
                        </span>
                    </div>
                    <div className = "name">NASA</div>
                </div>
            </div>
        );
    }
}
