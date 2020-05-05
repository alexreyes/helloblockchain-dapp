import React from 'react';
import PropTypes from 'prop-types';

class ResponsePage extends React.Component {
    state = { dataKey: null };

    handleKeyDown = e => {
        if (e.keyCode === 13) {
            this.setValue(e.target.value);
        }
    };

    setValue = value => {
        const { drizzle, drizzleState } = this.props;
        const contract = drizzle.contracts.HelloBlockchain;

        const stackId = contract.methods["SendResponse"].cacheSend(value, {
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

        const dataKey = contract.methods["ResponseMessage"].cacheCall();

        this.setState({ dataKey });
    }

    render() {
        const { HelloBlockchain } = this.props.drizzleState.contracts;
        const responseMessage = HelloBlockchain.ResponseMessage[this.state.dataKey];
        return (
            <>
                <input type="text" className="form-control" onKeyDown={this.handleKeyDown} />
                <div>{this.getTxStatus()}</div>
                <p>Response message: {responseMessage && responseMessage.value}</p>
            </>
        )
    }
}

ResponsePage.propTypes = {
    drizzle: PropTypes.object.isRequired,
    drizzleState: PropTypes.object.isRequired
}

export default ResponsePage;