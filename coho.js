window.onload = async () => {
    if (!window.keplr) {
        alert("Please install keplr extension");
    } else 
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
        low: 0.03,
        average: 0.03,
        high: 0.03,
    },   
});
}
