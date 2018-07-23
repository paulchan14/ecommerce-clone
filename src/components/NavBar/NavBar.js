import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return(
            <div>
                <h1>NavBar</h1>
                <svg className="nav-logo">
                    <path d="M96.6 36.2h28.2v5.2h-22.2v7.1h19.1v5.2h-19.1v13.2h-6zm32.4 0h6v30.7h-6zm10.4 0h6.4l20.5 22.2V36.2h5.7v30.7h-5.5L145.2 44v22.9h-5.8zm37.1 0h27.4v5.2h-21.5v7.1H201v5.2h-18.6v8.1h22.1v5.1h-28zm60.9 18.5L231 41l-6.4 13.7h12.8zm-9.8-18.5h6.8l14.9 30.7H243l-3.2-7h-17.7l-3.2 7h-6.4l15.1-30.7zm42.1 13.7c4.9 0 7.4-.7 7.4-4.3 0-3.6-2.5-4.3-7.4-4.3h-11.6v8.6h11.6zm-17.6-13.7h18.4c7.3 0 12.5 1.6 12.5 9.2 0 5.7-4 8.8-8.6 9l9.4 12.5h-7.4l-8.9-12.1H258v12.1h-6V36.2zm47.7 5.2h-13.7v-5.2h33.4v5.2h-13.7v25.5h-6zM6.3 75.3h69v-69h-69v69zm75.4 6.4H0V0h81.7v81.7zm-20-45.3h5v6.3H34.8v-6.3h18.5l-9.8-8.1v-7l9.4 7.8 13.9-8.6V28l-8.6 5.4 3.5 3zm5 18.4h-5.8v-6.4h5.8v6.4zm-9.3 0h-19v-6.4h19v6.4zm9.3 12.1H34.8v-6.3h31.9v6.3z" class="st0"></path>
                </svg>
            </div>
        )
    }
}

export default NavBar;