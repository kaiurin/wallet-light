import * as React from 'react';
import "../styles/wallets-list.scss";

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
interface walletsProps {
    setPage: (page, walletName) => void
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