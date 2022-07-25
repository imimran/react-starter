import React from 'react';

class Clock extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date() };
    // }
    state = { date: new Date() };

    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        const { local } = this.props;
        const { date } = this.state;
        return (
            <div>
                <p>Hello Imran</p>
                <span> {date.toLocaleTimeString(local)} </span>
            </div>
        );
    }
}

export default Clock;
