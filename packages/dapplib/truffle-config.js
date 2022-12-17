require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stool deny night upgrade inflict arch metal gauge'; 
let testAccounts = [
"0x47e54c5c0945a835a77601581552b64fe6f15f3bc3803dca2215376991955658",
"0x009f2fb6b6632ac5284e56b4505dadbbccd805e9739dae25b80aaeb7613692ba",
"0xb75a9e838b006edd9bef6821d0932d0ba2856734ba12fee56c14b3ac27123c99",
"0x11f267fa7b1640f45d341a40d21d58edcfaee031145e293f3c382f3f7eec2686",
"0x44293848ebb47f94c0cd954c37892ee9cd0c6489f2f2358f76d009acff7b399b",
"0xd9ce58002ccc5902d70f8249770175eaf09322e802d38230f0bbed1571e5368f",
"0x4d7442b88c43591bfd1bfe9b7d50fbeb50e2940fe7005a16f816879d5215a1ad",
"0x103ec5474fc306bcc50bc0d72d5ec7ce1eabe4e5e7233233a0b71c68456dc58d",
"0x6f5a31cdd6592ed09e5f7aecdaf1caa13f7a0727ca479c5713916d6cef753a05",
"0xafb43ab6e7deb08e2cedbd82e21d063af5651cbd701e1c8a80cb19fdebd82945"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


