import { LightningElement } from 'lwc';

export default class TradingViewWidget extends LightningElement {
    renderedCallback() {
        this.loadTradingViewWidget();
    }

    loadTradingViewWidget() {
        const script = document.createElement('script');
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
        script.async = true;
        script.type = 'text/javascript';
        script.innerHTML = JSON.stringify({
            "symbols": [
                {
                    "description": "Apple",
                    "proName": "NASDAQ:AAPL"
                },
                {
                    "description": "Google",
                    "proName": "NASDAQ:GOOGL"
                },
                {
                    "description": "Microsoft",
                    "proName": "NASDAQ:MSFT"
                }
            ],
            "colorTheme": "light",
            "isTransparent": false,
            "showSymbolLogo": true,
            "locale": "ja"
        });
        this.template.querySelector('#tradingview-widget').appendChild(script);
    }
}