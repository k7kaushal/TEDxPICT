import React from 'react';
import './PastEvents.css'

class TabNav extends React.Component {
    render() {
        return (
            <div  className="container container-3">
                <ul className="nav nav-tabs nav-1 ">
                    {
                        this.props.tabs.map(tab => {
                            const active = (tab === this.props.selected ? 'active ' : '');
                            return (
                                <li className="nav-item nav-item-1 " key={tab}>
                                    <a className={"nav-link nav-link-1 active-1 " + active +tab} onClick={() => this.props.setSelected(tab)}>
                                        {tab}
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
                {this.props.children}
            </div>
        );
    }
}
export default TabNav;