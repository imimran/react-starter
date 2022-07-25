import React from 'react';

class Clock extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date() };
    // }
    state = { date: new Date(), local: 'en-US' };

    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    handleClick(e) {
        e.preventDefault();
        console.log('click me');
        this.setState({
            local: 'bn-BD',
        });
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        const { date, local } = this.state;
        return (
            <div>
                <p>Hello Imran</p>
                <span> {date.toLocaleTimeString(local)} </span> <br />
                <button type="button" onClick={this.handleClick.bind(this)}>
                    Click here
                </button>
            </div>
        );
    }
}

export default Clock;
