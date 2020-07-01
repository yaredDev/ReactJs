import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


class App extends React.Component {

    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        console.log('componentDidMount method is called/ Component was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({errorMessage: err.message})
        )
    }

    componentDidUpdate() {
        console.log('componentDidUpdate is called/ Component was rerendered');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount is called')
    }


    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error : <p>{this.state.errorMessage}</p></div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request" />
    }


    render() {

        return (
            <div className="border red">
                {this.renderContent( )}
            </div>
        )
        
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
)