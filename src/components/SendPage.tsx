import * as React from 'react';
import "../styles/send-page.scss";


export class SendPage extends React.Component {

    render() {
        return <div>
            <form className={'send-form'}>
                <div className={'address-input'}>
                    <input
                        required={true}
                        type="text"
                        className="send-input"
                        placeholder="Recipient address"/>
                </div>
                <div className={'amount-input'}>
                    <input
                        required={true}
                        type="text"
                        className="send-input"
                        placeholder="Amount"/>
                </div>
                <div className={'button-block'}>
                <text className={'button-send-submit'} type="submit">Send</text>
                </div>
            </form>
        </div>
    }
}
