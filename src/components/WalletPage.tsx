import * as React from 'react';
import "../styles/wallet-page.scss";

interface ITransactions {
    name: string;
    id: number;
    transaction: string;
    balance: number
}

interface IChannels {
    name: string;
    id: number;
    coin: string;
    balance: number
}


export class Wallet extends React.Component {

    state = {
        balance: 0,
        list: 'transactions',
        transactions: [
            {
                id: 1,
                name: 'UTUZJCXSMNSPAIUVEYTHKVIYDJGJJAKR',
                transaction: 'send',
                balance: 0
            },
            {
                id: 2,
                name: 'UTUZJCXSMNSPAIUVEYTHKVIYDJGJJAKR',
                transaction: 'receive',
                balance: 0
            },
            {
                id: 3,
                name: 'UTUZJCXSMNSPAIUVEYTHKVIYDJGJJAKR',
                transaction: 'receive',
                balance: 0
            },
            {
                id: 4,
                name: 'UTUZJCXSMNSPAIUVEYTHKVIYDJGJJAKR',
                transaction: 'receive',
                balance: 0
            },
            {
                id: 5,
                name: 'UTUZJCXSMNSPAIUVEYTHKVIYDJGJJAKR',
                transaction: 'receive',
                balance: 0
            },
            {
                id: 6,
                name: 'UTUZJCXSMNSPAIUVEYTHKVIYDJGJJAKR',
                transaction: 'send',
                balance: 0
            },
            {
                id: 7,
                name: 'UTUZJCXSMNSPAIUVEYTHKVIYDJGJJAKR',
                transaction: 'receive',
                balance: 0
            },
            {
                id: 8,
                name: 'Test',
                transaction: 'receive',
                balance: 0
            },
            {
                id: 9,
                name: 'Test',
                transaction: 'send',
                balance: 0
            }
        ],
        channels: [
            {
                id: 1,
                name: 'Test',
                coin: 'Byteball',
                balance: 0
            },
            {
                id: 2,
                name: 'Test',
                coin: 'Byteball',
                balance: 0
            },
            {
                id: 3,
                name: 'Test',
                coin: 'Byteball',
                balance: 0
            },
            {
                id: 4,
                name: 'Test',
                coin: 'Byteball',
                balance: 0
            },
            {
                id: 5,
                name: 'Test',
                coin: 'Byteball',
                balance: 0
            },
            {
                id: 6,
                name: 'Test',
                coin: 'Byteball',
                balance: 0
            },
            {
                id: 7,
                name: 'Test',
                coin: 'Byteball',
                balance: 0
            },
            {
                id: 8,
                name: 'Test',
                coin: 'Byteball',
                balance: 0
            },
            {
                id: 9,
                name: 'Test',
                coin: 'Byteball',
                balance: 0
            },
            {
                id: 10,
                name: 'Test',
                coin: 'Byteball',
                balance: 0
            }
        ]
    };

    showTransactions = () => {
        return this.state.transactions.map((transactions: ITransactions) => {
            return (
                <div key={transactions.id} className={'list-body'}>
                    <div className={transactions.transaction}>
                    </div>
                    <div className={'list-body-name'}>{transactions.name}</div>
                    <div className={'list-body-balance'}>{transactions.balance} GByte</div>
                </div>
            );
        });
    };

    showChannels = () => {
        return this.state.channels.map((channels: IChannels) => {
            return (
                <div key={channels.id} className={'channels-list-body'}>
                    <div className={'channels-list-body-name'}>{channels.name}</div>
                    <div className={'channels-list-body-balance'}>{channels.balance} / {channels.balance}</div>
                </div>
            );
        });
    };

    render() {
        if (this.state.list == 'transactions') {
            return (
                <div>
                    <div className={'balance'}>
                        <div className={'balance-title-block'}>
                        <text className={'balance-title'}>Total balance</text>
                        </div>
                        <div className={'balance-text-block'}>
                        <text className={'balance-text'}>{this.state.balance} GByte</text>
                        </div>
                    </div>

                    <div onClick={() => this.setState({list: 'transactions'})} className={'transactions-button-active'}> <text>Transactions</text> </div>
                    <div onClick={() => this.setState({list: 'channels'})} className={'channels-button'}> <text>Channels</text> </div>

                    <div className={'transactions'}>
                        {this.showTransactions()}
                    </div>
                </div>
            )
        } else if (this.state.list == 'channels') {
            return (
                <div>
                    <div className={'balance'}>
                        <div className={'balance-title-block'}>
                            <text className={'balance-title'}>Total balance</text>
                        </div>
                        <div className={'balance-text-block'}>
                            <text className={'balance-text'}>{this.state.balance} GByte</text>
                        </div>
                    </div>
                    <div onClick={() => this.setState({list: 'transactions'})} className={'transactions-button'}> <text>Transactions</text></div>
                    <div onClick={() => this.setState({list: 'channels'})} className={'channels-button-active'}> <text>Channels</text></div>
                    <div className={'channels'}>
                        {this.showChannels()}
                    </div>
                </div>);
        }
    }
}