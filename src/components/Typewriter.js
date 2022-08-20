import React, { useState } from 'react';
import { Typography } from "@mui/material";

export default class Typewriter extends React.Component {
    constructor(props) {
        super(props);
        
        this.text = 'undefined';
        this.currentTextIndex = 0;

        this.childlessProps = { ...props }
        if ('children' in props) {
            delete this.childlessProps.children;
            this.text = props.children;
        };

        this.state = {
            currentIndex: 0
        };

        this.interval = null;
    }

    incrementIndex() {
        this.currentTextIndex += 1;
        if (this.currentTextIndex === this.text.length) {
            this.currentTextIndex = 0;
        }
    }

    componentDidMount() {
        let goingUp = true;
        this.interval = setInterval(() => {
            if (this.state.currentIndex === this.text[this.currentTextIndex].length) {
                setTimeout(() => {goingUp = false}, 400)
            } else if (this.state.currentIndex === 0) {
                this.incrementIndex();
                setTimeout(() => {goingUp = true}, 400)
            }
            if (goingUp) {
                this.setState({currentIndex: this.state.currentIndex + 1});
            } else {
                this.setState({currentIndex: this.state.currentIndex - 1});
            }
        }, 200)
    }

    componentWillUnmount() {
        this.onUnmount();
    }

    onUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <>
            <Typography {...this.childlessProps}>{this.text[this.currentTextIndex].substring(0, this.state.currentIndex)}</Typography>
            <div className='min-h-full w-0.5 ml-1 bg-lsg animate-in-out'>
                <p>&nbsp;</p>
            </div>
        </>
    }
}
