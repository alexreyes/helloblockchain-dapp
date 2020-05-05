import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import RequestPage from './blockchain/RequestPage';
import ResponsePage from './blockchain/ResponsePage';
import PropTypes from 'prop-types';

class App extends React.Component {
    state = { loading: true, drizzleState: null };

    componentDidMount() {
        const { drizzle } = this.props;
        this.unsubscribe = drizzle.store.subscribe(() => {
            const drizzleState = drizzle.store.getState();
            if (drizzleState.drizzleStatus.initialized) {
                this.setState({ loading: false, drizzleState });
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        if (this.state.loading) return "Loading Drizzle...";
        return (
            <div className="container-fluid">
                <Header />
                <Switch>
                    <Route exact path="/" render={() => <HomePage />} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/request" render={() => <RequestPage drizzle={this.props.drizzle} drizzleState={this.state.drizzleState} />} />
                    <Route path="/response" render={() => <ResponsePage drizzle={this.props.drizzle} drizzleState={this.state.drizzleState} />} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        )
    }
}

App.propTypes = {
    drizzle: PropTypes.object.isRequired
}

export default App;