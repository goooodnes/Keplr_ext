window.onload = async () => {
    if (!window.keplr) {
        alert("Please install keplr extension");
    } else 
    await window.keplr.experimentalSuggestChain({
    chainId: "atlantic-1",
    chainName: "Sei-Testnet",
    rpc: "http://138.201.136.49:26657", // replace with your rpc url
    rest: "http://138.201.136.49:1517", // replace with your rest api url
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
        low: 0.03,
        average: 0.03,
        high: 0.03,
    },  
        features: [
        "cosmwasm", "ibc-transfer", "ibc-go", "wasmd_0.24+"
    ],
    
});
}
