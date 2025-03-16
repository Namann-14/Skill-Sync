// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../src/CryptoAuth.sol";

contract CryptoAuthTest is Test {
    CryptoAuth cryptoAuth;
    address testUser = address(0x123);

    function setUp() public {
        cryptoAuth = new CryptoAuth();
    }

    function testRegisterUser() public {
        vm.prank(testUser);
        cryptoAuth.registerUser("Jatin", "Sharma", "jatin@example.com", "github.com/jatin", "portfolio.com", "resume.pdf");

        CryptoAuth.User memory user = cryptoAuth.getUser(testUser);

        assertEq(user.firstName, "Jatin");
        assertEq(user.lastName, "Sharma");
        assertEq(user.email, "jatin@example.com");
        assertEq(user.github, "github.com/jatin");
        assertEq(user.portfolio, "portfolio.com");
        assertEq(user.resume, "resume.pdf");
    }
}
