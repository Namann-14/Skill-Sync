// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import "../src/CryptoAuth.sol";

contract DeployCryptoAuth is Script {
    function run() external {
        vm.startBroadcast();
        new CryptoAuth();
        vm.stopBroadcast();
    }
}
