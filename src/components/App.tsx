import * as React from 'react';

import "../styles/style.scss";


interface IPage {
    page: string;
}

interface IState {
    currentWallet: string;
    coin: string;
    wallets: Array<IWallet>;
    balance: number
}

interface IWallet {
    name: string;
    id: number;
    coin: string;
    balance: number
}

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

export class CreateWallet extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            balance: 0,
            currentWallet: "",
            coin: "Byteball",
            wallets: []
        };
    }

    public handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        this.props.addWallet(this.state.currentWallet, this.state.coin, this.state.balance);
    }

    public render(): JSX.Element {
        console.log(this.state);
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                        required={true}
                        type="text"
                        className="tdl-input"
                        placeholder="Wallet name"
                        value={this.state.currentWallet}
                        onChange={e => this.setState({currentWallet: e.target.value})}
                    /><br>
                </br>
                    <button className={'button-submit'} type="submit">Add</button>
                </form>
            </div>
        );
    }

}


export class Menu extends React.Component<any, IPage> {

    constructor(props: any) {
        super(props);

        this.state = {page: "qrScanner"};
    }

    render() {
        return (
            <div className={'menu'}>
                <a onClick={() => {
                    this.props.setPage(this.state.page)
                }} className={'qr-scanner'}>
                </a>
            </div>
        )
    }
}

interface walletsProps {
    setPage: (page, walletName) => void
}

export class WalletsList extends React.Component<walletsProps, any> {


    state = {show: false, wallets: [], page: 'wallet'};


    showModal = () => {
        this.setState({show: true});
    };
    hideModal = () => {
        this.setState({show: false});
    };

    addWallet = (walletName, coin, balance) => {
        this.setState({show: false});
        this.setState({
            wallets: [
                ...this.state.wallets,
                {
                    id: Date.now(),
                    name: walletName,
                    coin: coin,
                    balance: balance
                }
            ]
        });
    };

    showWallets = () => {
        return this.state.wallets.map((wallets: IWallet) => {
            return (
                <div onClick={() => {
                    this.props.setPage(this.state.page, wallets.name)
                }} key={wallets.id} className={'wallets-list-body'}>
                    <div className={wallets.coin}>
                    </div>
                    <div className={'wallets-list-body-name'}>{wallets.name}</div>
                    <div className={'wallets-list-body-balance'}>{wallets.balance} GByte</div>
                </div>
            );
        });
    };

    render() {
        return <div>
            <div className={'wallets-list'}>
                <text className={'wallets-list-text'}>Your wallets</text>
                <a className={'add-wallet-button'} onClick={this.showModal}/>
            </div>
            <div className={'state-wallets'}>
                {this.showWallets()}
            </div>
            <Modal show={this.state.show} handleClose={this.hideModal}>
                <p className={'modal-title'}>Add new wallet</p>
                <p><CreateWallet addWallet={this.addWallet}/></p>
            </Modal>
        </div>

    }
}

const Modal = ({handleClose, show, children}) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    return (
        <div className={showHideClassName}>
            <div className={'modal-background'} onClick={handleClose}> </div>
            <section className='modal-main'>
                {children}
            </section>
        </div>
    );
};


export class QRScanner extends React.Component<any, IPage> {

    render() {
        return (
            <div className = {'top-bar'}>
                <text className={'qrScanner-title'}>QR Scanner</text>
                <a onClick={() => this.props.setPage('index')} className={'back-button'}> </a>
            </div>
        )
    }
}

export class Wallet extends React.Component {


    state = {
        balance: 0,
        list: 'transactions',
        transactions: [
            {
                id: 1,
                name: 'Test',
                transaction: 'send',
                balance: 0
            },
            {
                id: 2,
                name: 'Test',
                transaction: 'receive',
                balance: 0
            },
            {
                id: 3,
                name: 'Test',
                transaction: 'receive',
                balance: 0
            },
            {
                id: 4,
                name: 'Test',
                transaction: 'receive',
                balance: 0
            },
            {
                id: 5,
                name: 'Test',
                transaction: 'receive',
                balance: 0
            },
            {
                id: 6,
                name: 'Test',
                transaction: 'send',
                balance: 0
            },
            {
                id: 7,
                name: 'Test',
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
                    <div className={'list-body-balance'}>{channels.balance} / {channels.balance}</div>
                </div>
            );
        });
    };

    render() {
        if (this.state.list == 'transactions') {
            return (
                <div>
                <div className={'balance'}>

                    <text className={'balance-title'}>Total balance</text>
                    <text className={'balance-text'}>{this.state.balance} GByte</text>
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
                    <text className={'balance-title'}>Total balance</text>
                    <text className={'balance-text'}>{this.state.balance} GByte</text>
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


export class App extends React.Component {

    state = {
        page: 'index',      //qrScanner , wallet
        walletName: ''
    };

    setPage = (page, walletName) => {
        this.setState({page: page, walletName: walletName})
    };


    render() {
        if (this.state.page == 'index') {
            return <div className={'app-body'}>
                <WalletsList setPage={this.setPage}/>
                <Menu setPage={this.setPage}/>
            </div>
        } else if (this.state.page == 'qrScanner') {
            return <div>
                <QRScanner setPage={this.setPage}/>
            </div>
        } else if (this.state.page == 'wallet') {
            return <div>
                <div className = {'top-bar'}>
                <text className={'wallet-title'}>{this.state.walletName}</text>
                <a onClick={() => this.setState({page: 'index'})} className={'back-button'}> </a>
                </div>
                <Wallet/>
            </div>
        }
    }
}



