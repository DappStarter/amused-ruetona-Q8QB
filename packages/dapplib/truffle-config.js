require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rice stereo purse hunt indoor equal gift'; 
let testAccounts = [
"0x55e76f9cb0d83c20f8eafde164f20a88fe6e54643e10022bed7c900dc5082108",
"0x79528fde1bbbddc0ba8de89f273d367b258fcaec5be618cf205a3509b9c8fc94",
"0xa82c5cfa5ae990873eb365270495363fa01500e5008b51cea4d3dab03e62d10c",
"0xbec6f91bb5ecce5d2f925e40edd7d30580e5b4318bfa5086d4d3b64e363585ce",
"0xd44d61dbab46634acba9677983817aa6d2f328e5f61141199a363b0879d4ba6c",
"0x34ce3d0335a530b6bc4c951fb24dcce06bcc80fe316bcc0228b4c32b61220d2a",
"0xb9f4ed651e17cf08a6456e3ef6031a46202e6928daf53ef124b09de49ae39de2",
"0xf4286dae06eb6d5aa500e338e8b59d68adda7500e01b4399572e30ea80a4e45b",
"0x73c5eb5e4cb93d1c41d983575cde0224b38ea5c0982882d869f45050251d07f8",
"0xefc8c0d33193e9e97d0e1e7de806c3adff65a1563583882c5b63a4edb8b68b3b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

