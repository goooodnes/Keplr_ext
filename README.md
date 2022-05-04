## Cosmic Horizon darkenergy-1 keplr wallet integration
<!--
#### Requirements 
[keplr wallet extension](https://google.com)
-->
### Auto installation
1) Just visit this link. Once the keplr window popup press the approve button.  
2) In the network section choose Cosmic Horizon network  
3) That's it. Have fun:)  

### Manual installation

Open the developer console:

- Chromium based browsers: View> Developer>Developer Tools(ctrl-shift-j)

- Copy paste the code and press enter. Do not forget to edit rpc and rest api urls in the code! :


```markdown
await window.keplr.experimentalSuggestChain({
    chainId: "darkenergy-1",
    chainName: "Cosmic Horizon",
    rpc: "http://195.3.221.12:26557", // replace with your rpc url
    rest: "http://195.3.221.12:1517", // replace with your rest api url
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "coho",
        bech32PrefixAccPub: "coho" + "pub",
        bech32PrefixValAddr: "coho" + "valoper",
        bech32PrefixValPub: "coho" + "valoperpub",
        bech32PrefixConsAddr: "coho" + "valcons",
        bech32PrefixConsPub: "coho" + "valconspub",
    },
    currencies: [ 
        { 
            coinDenom: "COHO", 
            coinMinimalDenom: "ucoho", 
            coinDecimals: 6, 
            coinGeckoId: "coho", 
        }, 
    ],
    feeCurrencies: [
        {
            coinDenom: "COHO",
            coinMinimalDenom: "ucoho",
            coinDecimals: 6,
            coinGeckoId: "coho",
        },
    ],
    stakeCurrency: {
        coinDenom: "COHO",
        coinMinimalDenom: "ucoho",
        coinDecimals: 6,
        coinGeckoId: "coho",
    },
    coinType: 118,
    gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03,
    },
});
```
