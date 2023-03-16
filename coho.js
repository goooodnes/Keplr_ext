window.onload = async () => {
    if (!window.keplr) {
        alert("Please install keplr extension");
    } else 
    await window.keplr.experimentalSuggestChain({
    chainId: "atlantic-2",
    chainName: "Sei-Testnet",
    rpc: "https://sei-testnet-2-rpc-2.brocha.in", // replace with your rpc url
    rest: "https://sei-testnet-2-rest-2.brocha.in", // replace with your rest api url
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "sei",
        bech32PrefixAccPub: "sei" + "pub",
        bech32PrefixValAddr: "sei" + "valoper",
        bech32PrefixValPub: "sei" + "valoperpub",
        bech32PrefixConsAddr: "sei" + "valcons",
        bech32PrefixConsPub: "sei" + "valconspub",
    },
    currencies: [ 
        { 
            coinDenom: "SEI", 
            coinMinimalDenom: "usei", 
            coinDecimals: 6, 
            coinGeckoId: "sei", 
        }, 
    ],
    feeCurrencies: [
        {
            coinDenom: "SEI",
            coinMinimalDenom: "usei",
            coinDecimals: 6,
            coinGeckoId: "sei",
        },
    ],
    stakeCurrency: {
        coinDenom: "SEI",
        coinMinimalDenom: "usei",
        coinDecimals: 6,
        coinGeckoId: "sei",
    },
    coinType: 118,
    gasPriceStep: {
		low: 0.01,
		average: 0.025,
		high: 0.03
    },  
        features: [
        "cosmwasm", "ibc-transfer", "ibc-go", "wasmd_0.24+"
    ],
    
});
}
