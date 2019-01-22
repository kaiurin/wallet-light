import * as React from 'react';


import "../styles/style.scss";
import {WalletsList} from "./WalletsList";
import {Wallet} from "./WalletPage";

interface IPage {
    page: string;
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



