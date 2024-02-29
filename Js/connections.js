let user;
let web3;
let result = '';
var balancesBUSD;
var balancesEVL;
let userAccount;

let numberoftoken = 1;

let connectingx = false;


// testnet
const bnbtest = "https://data-seed-prebsc-1-s1.binance.org:8545";

// const bnbtest = "https://rinkeby.infura.io/v3/4c84ccb8dc7049aebf66a4dbd06a75e7"
//mainnet
// const bnbtest = "https://bsc-dataseed.binance.org";




let contractaddress = '0x29131Da8cad95140A5F063874436c3f43B091Da7'
let abicontract = [{"inputs":[{"internalType":"address","name":"_token_address","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountCap","type":"uint256"}],"name":"EndPreSaleEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"Owneraddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawtoOwnerEvent","type":"event"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"}],"name":"AddAddressestoWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"BalanceofContract","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Buypresale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"CPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token_address","type":"address"}],"name":"ChangeTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"EachUserToken","outputs":[{"internalType":"uint256","name":"TokenisBuy","type":"uint256"},{"internalType":"bool","name":"permis","type":"bool"},{"internalType":"bool","name":"exist","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PaytokentoUsers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"PreSale_END","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"RemoveAddressfromWhitelist","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TokeninSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IBEP20","name":"token","type":"address"}],"name":"WithdrawERC20","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"WithdrawToOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allusers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"itoken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxcap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberOfUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"tokengive","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"}];
let contract;

let tokenEVLaddress = '0x33A12CEe993da069BF7EBAB3D7423e25278acf61'
let tokenBUSDaddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
let abitoken = [{
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [{
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getOwner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
let busdtoken;
let bulctoken;


// testnet
// const serverUrl = "https://2vavz6z6d7dn.usemoralis.com:2053/server";
// const appId = "579VJ2i50gF0OtXD2k2EcBvp0Egl1wWYiTUhvKYR";
// rpcURL = "https://data-seed-prebsc-1-s1.binance.org:8545/";

// chainidx = 97;
// chainidHexChecker = "0x61";

// mainnet
const serverUrl = "https://ov1alvsfs9iq.usemoralis.com:2053/server"
const appId = "DDPZaLakmGZNhX5OZU6V4MJ6OWBOrKJJmQDS7kU2"
chainidx = 56;
chainidHexChecker = "0x38";


Moralis.start({
    serverUrl,
    appId
});




const loginMetamaskBT = document.getElementById('btn-wallet');
const logoutBT = document.getElementById('logout_btn');
const buytokenBT = document.getElementById('buy_token_btn');


loginMetamaskBT.addEventListener('click', event => {
    loginMetamask();
});

logoutBT.addEventListener('click', event => {
    logout();
});

buytokenBT.addEventListener('click', event => {
    buytokenf();
});

// wallet connecting Functions
async function CheckloginStart() {
    await chainIDChecker();
    user = await Moralis.User.current();
    if (user) {
        userAccount = await user.get('ethAddress');
        //             await GetBalanceFromWallet();
        // web3 = await Moralis.enableWeb3();
        let Web3Storage = localStorage.getItem("web3Storage");
        if (Web3Storage === "metamask") {
            web3 = await Moralis.enableWeb3({
                provider: "metamask",
                signingMessage: "EVL Contract",
                chainId: chainidx
            });
            connectingx = true;
            console.log(connectingx);
            await showhiddenbutton();
            localStorage.setItem('useraddress', userAccount);
            // uiUpdatef();
        }
        if (Web3Storage === "walletconnect") {
            web3 = await Moralis.enableWeb3({
                provider: "walletconnect",
                signingMessage: "EVL Contract",
                chainId: chainidx
            });
            connectingx = true;
            console.log(connectingx);
            await showhiddenbutton();
            localStorage.setItem('useraddress', userAccount);
            // uiUpdatef();
        }
        // contract = new web3.eth.Contract(abicontract, contractaddress);
        // await getHistory2(userAccount);
    } else {
        connectingx = false;
        try {
            await Moralis.User.logOut();
            console.log('LogOut');
            user = null;
            localStorage.setItem('web3Storage', "");
            localStorage.setItem('useraddress', "");
            await showhiddenbutton();
        } catch (error) {
            console.log('logOut failed', error);
            await showhiddenbutton();
        }
        // uiUpdatef();

    }

}

async function showhiddenbutton() {
    if (connectingx) {
        document.getElementById('logout_btn').style.display = "block";
        document.getElementById("btn-wallet").style.display = "none";
        document.getElementById("buy_token_btn").disabled = false;
        document.getElementById("buy_token_btn").style = "cursor: pointer";
        document.getElementById("swap_field_1").disabled = false;
        getBalancef();
    } else {
        document.getElementById('logout_btn').style.display = "none";
        document.getElementById("btn-wallet").style.display = "block";
        // document.getElementById("balance_busd").innerHTML = "--";
        document.getElementById("balance_EVL").innerHTML = "--";
        document.getElementById("buy_token_btn").disabled = true;
        document.getElementById("buy_token_btn").style = "cursor: not-allowed";
        document.getElementById("swap_field_1").disabled = true;



        // document.getElementById("buy-ticket-btn").disabled = true;
    }
}


async function loginMetamask() {
    await chainIDChecker();
    user = Moralis.User.current();
    if (!user) {
        try {
            user = await Moralis.Web3.authenticate({
                provider: "metamask",
                signingMessage: "EVL Contract",
                chainId: chainidx
            });
            web3 = await Moralis.enableWeb3({
                provider: "metamask",
                signingMessage: "EVL Contract",
                chainId: chainidx
            });
            localStorage.setItem('web3Storage', "metamask");
            userAccount = await user.get('ethAddress');
            console.log(userAccount);
            localStorage.setItem('useraddress', userAccount);

            connectingx = true;

            // await GetBalanceFromWallet();
        } catch (error) {
            console.log('authenticate failed', error);
        }
    } else {
        userAccount = await user.get('ethAddress');
        web3 = await Moralis.enableWeb3({
            provider: "metamask",
            signingMessage: "EVL Contract",
            chainId: chainidx
        });
        console.log(userAccount);
        localStorage.setItem('useraddress', userAccount);

        connectingx = true;

        //             await GetBalanceFromWallet();
    }
    // contract = new web3.eth.Contract(abicontract, contractaddress);
    await showhiddenbutton();
}

async function loginWalletConnect() {
    user = Moralis.User.current();
    if (!user) {
        try {
            user = await Moralis.Web3.authenticate({
                provider: "walletconnect",
                signingMessage: "EVL Contract",
                chainId: chainidx
            });
            web3 = await Moralis.enableWeb3({
                provider: "walletconnect",
                signingMessage: "EVL Contract",
                chainId: chainidx
            });
            localStorage.setItem('web3Storage', "walletconnect");
            userAccount = await user.get('ethAddress');
            console.log(userAccount);
            localStorage.setItem('useraddress', userAccount);

            connectingx = true;

            //                 await GetBalanceFromWallet();
        } catch (error) {
            console.log('authenticate failed', error);
        }
    } else {
        userAccount = await user.get('ethAddress');
        web3 = await Moralis.enableWeb3({
            provider: "walletconnect",
            signingMessage: "EVL Contract",
            chainId: chainidx
        });
        console.log(userAccount);
        localStorage.setItem('useraddress', userAccount);

        connectingx = true;

        //             await GetBalanceFromWallet();
    }
    await showhiddenbutton();
    // contract = new web3.eth.Contract(abicontract, contractaddress);
    // await getHistory2(userAccount);
}

async function chainIDChecker() {
    if (typeof ethereum !== 'undefined') {
        ethereum.on('chainChanged', (chainId) => {
            console.log(chainId);
        });
        try {
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                    chainId: chainidHexChecker
                }],
            });
        } catch (switchError) {
            console.log(switchError);
            if (switchError.code === 4902) {
                try {
                    await ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: chainidHexChecker,
                            rpcURL
                        }],
                    });
                } catch (addError) {
                    console.log(addError);
                }
            }
        }
    } else {
        return false;
    }
}


if (typeof window.ethereum !== 'undefined' ||
    (typeof window.web3 !== 'undefined')) {
    window.ethereum.on('accountsChanged', function (accounts) {
        let account = web3.eth.accounts[0];
        console.log(account);
        logout();
        loginMetamask();
        uiUpdatef();
        // ChangeButtonlogin();
    });

    if (!ethereum.isConnected()) {
        logout();
        uiUpdatef();
        // ChangeButtonlogin();
    }
    ethereum.on('disconnect', () => {
        logout();
        uiUpdatef();
        // ChangeButtonlogin();
    });
}

async function logout() {
    try {
        await Moralis.User.logOut();
        console.log('LogOut');
        localStorage.setItem('web3Storage', "");
        localStorage.setItem('useraddress', "");
        user = null;
        result = '';
        balances = '0';
        userAccount = '';
        connectingx = false;
        showhiddenbutton()
        // DisconnectViewButtonWallet();
    } catch (error) {
        console.log('logOut failed', error);
    }
}


async function buytokenf() {
    let payx = BigInt(numberoftoken);
    if (balancesBUSD >= payx) {
        contract = await new web3.eth.Contract(abicontract, contractaddress);
        if (user) {
            try {
                // console.log(BigInt(Howmuchtoken))
                contract.methods.Buypresale_busd(BigInt(numberoftoken)).send({
                        from: userAccount
                    })
                    .then(function (resp) {
                        console.log(resp);
                        uiUpdatef();
                    })
                    .catch(function (error) {
                        console.log(error);
                        uiUpdatef();
                    });
            } catch (error) {
                console.log(error);
                // alert(error);
            }
        } else {
            logout();
        }
    } else {
        alert("Your Balance is not Enough !");
        return false;
    }
}

let tokengive;
async function tokengivef(amount) {
    let web3 = new Web3(bnbtest);
    contract = new web3.eth.Contract(abicontract, contractaddress);
    contract.methods.tokengive(amount).call(async (err, result) => {
        tokengive = result;
        console.log(tokengive);
        document.getElementById("swap_field_2").innerHTML = (String(((tokengive / 10 ** 18))));
    });
}


// async function balancesBUSDf() {
//     let web3 = new Web3(bnbtest);
//     contract = new web3.eth.Contract(abitoken, tokenBUSDaddress);
//     await contract.methods.balanceOf(userAccount).call(async (err, result) => {
//         balancesBUSD = (result);
//     });
//     return await (balancesBUSD);
// }


// async function balancesEVLf() {
//     let web3 = new Web3(bnbtest);
//     contract = new web3.eth.Contract(abitoken, tokenEVLaddress);
//     await contract.methods.balanceOf(userAccount).call(async (err, result) => {
//         balancesEVL = (result);
//     });
//     return await (balancesEVL);
// }

async function getBalancef() {
    // let balanceBUSD = await balancesBUSDf();
    // let balanceBULC = await balancesEVLf();
    // document.getElementById("balance_busd").innerHTML = await String((balanceBUSD) / (10 ** 18));
    // document.getElementById("balance_EVL").innerHTML = await String((balanceBULC) / (10 ** 18));

    // await getHistory2(userAccount);
}


const inputv = document.getElementById('swap_field_1');
inputv.addEventListener('change', updateValue);

function updateValue(e) {
    ChangeNumberofToken();
}

async function ChangeNumberofToken() {
    numberoftoken = document.getElementById("swap_field_1").value;
    numberoftoken = await (web3.utils.toWei((numberoftoken), "ether"))
    console.log(numberoftoken);
    await tokengivef(numberoftoken);
}



uiUpdatef();
async function uiUpdatef() {

    await CheckloginStart();
    setTimeout(function () {
    }, 5000);

    await showhiddenbutton();

}


setInterval(() => {
    uiUpdatef();
    // if ((Allowx) >= (BigInt(numberoftoken))) {
    //     document.getElementById("approve_btn").style.display = "none";
    //     document.getElementById("buy_token_btn").disabled = false;
    //     document.getElementById("buy_token_btn").style = "cursor: pointer";

    // } else {
    //     document.getElementById("approve_btn").style.display = "block";
    //     document.getElementById("buy_token_btn").disabled = true;
    //     document.getElementById("buy_token_btn").style = "cursor: not-allowed";

    // }

}, 5000);