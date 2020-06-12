import React, { Component } from 'react';
import {Tabs,Tab} from 'react-mdl';
import Android from '../Tabs/android';
class projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCatagories(){

        if(this.state.activeTab==0)
        {
            return(
                <div>
                   <Android/>
                </div>
            )
        }
        else if(this.state.activeTab==1)
        {
            return(
                <div>
                     <Android/>
                </div>
            )
        }
        else if(this.state.activeTab==2)
        {
            return(
                <div>
                    <Android/>
                </div>
            )
        }

    }
    render() {
        return (
            <div >
                <Tabs className="header-color" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab className="demo-tabs" >Android</Tab>
                    <Tab className="demo-tabs">Web Design</Tab>
                    <Tab className="demo-tabs">React JS</Tab>
                </Tabs>
                <section>
                    <div className="content">{this.toggleCatagories()}</div>
                </section>
            </div>    
        );
    }
}

export default projects;