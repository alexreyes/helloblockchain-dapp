import React from 'react';
import PropTypes from 'prop-types';

class RequestPage extends React.Component {
    state = { dataKey: null };

    handleKeyDown = e => {
        if (e.keyCode === 13) {
            this.setValue(e.target.value);
        }
    };

    setValue = value => {
        const { drizzle, drizzleState } = this.props;
        const contract = drizzle.contracts.HelloBlockchain;

        const stackId = contract.methods["SendRequest"].cacheSend(value, {
            from: drizzleState.accounts[0]
        });

        this.setState({ stackId });
    }

    getTxStatus = () => {
        const { transactions, transactionStack } = this.props.drizzleState;
        const txHash = transactionStack[this.state.stackId];
        if (!txHash) return null;
        return `Transaction status: ${transactions[txHash] && transactions[txHash].status}`;
    }

    componentDidMount() {
        const { drizzle } = this.props;
        const contract = drizzle.contracts.HelloBlockchain;

        const dataKey = contract.methods["RequestMessage"].cacheCall();

        this.setState({ dataKey });
    }

    render() {
        const { HelloBlockchain } = this.props.drizzleState.contracts;
        const requestMessage = HelloBlockchain.RequestMessage[this.state.dataKey];
        return (
            <>
                <input type="text" className="form-control" onKeyDown={this.handleKeyDown} />
                <div>{this.getTxStatus()}</div>
                <p>Request message: {requestMessage && requestMessage.value}</p>
            </>
        )
    }
}

RequestPage.propTypes = {
    drizzle: PropTypes.object.isRequired,
    drizzleState: PropTypes.object.isRequired
}

export default RequestPage;