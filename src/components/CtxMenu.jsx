import React from "react";

const COLORS = ["white", "red", "royalblue"];

export class CtxMenu extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            clicks: 0
        };
    }

    onClick = () => {
        let clicks = this.state.clicks + 1;

        if(clicks >= COLORS.length){
            clicks = 0;
        }

        this.setState({clicks});
    }

    render(){
        if(this.props.ctx){
            let {x, y} = this.props.ctx;
            let {clicks=0} = this.state;
            
            return  (
                <div width={100} height={100} style={{left: x, top: y, position: "absolute", background: COLORS[clicks], border: "1px solid black", padding: 25, boxShadow: "1px 1px 1px black"}}>
                    <button onClick={this.onClick}>Click</button>
                </div>
            )
        }

        return null;
    }
}