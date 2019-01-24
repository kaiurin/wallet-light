import * as React from 'react';
import "../styles/send-page.scss";


export class SendPage extends React.Component {

    render() {
        return <div>
            <form>
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
                <button className={'button-send-submit'} type="submit">Send</button>
            </form>
        </div>
    }
}
