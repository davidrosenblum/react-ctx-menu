import React from "react";
import { CtxMenu } from "./CtxMenu";

export class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            ctx: null
        };
    }

    onCtxMenu = evt => {
        evt.preventDefault();

        let {clientX=0, clientY=0} = evt;

        let ctx = this.state.ctx ? null : {
            x: clientX,
            y: clientY
        };
        
        this.setState({ctx});      
    }

    onClick = () => {
        this.setState({ctx: null});
    }

    render(){
        return (
            <div onClick={this.onClick} onContextMenu={this.onCtxMenu} width={500} height={300} style={{border: "1px solid black", padding: 50}}>
                I'm the component with a context menu!
                <CtxMenu ctx={this.state.ctx}/>
            </div>
        )
    }
}