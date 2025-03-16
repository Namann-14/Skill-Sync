// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";

contract CryptoAuth is Ownable {
    constructor() Ownable(msg.sender) {}
    
    struct User {
        string firstName;
        string lastName;
        string email;
        string github;
        string portfolio;
        string resume;
    }

    mapping(address => User) private users;
    address[] public userAddresses;

    event UserRegistered(address indexed user, string firstName, string lastName);
function registerUser(
    string memory _firstName,
    string memory _lastName,
    string memory _email,
    string memory _github,
    string memory _portfolio,
    string memory _resume
) public {
    // Check if the user already exists
    if (bytes(users[msg.sender].email).length > 0) {
        // Instead of reverting, update their info
        users[msg.sender] = User(_firstName, _lastName, _email, _github, _portfolio, _resume);
    } else {
        // New user registration
        users[msg.sender] = User(_firstName, _lastName, _email, _github, _portfolio, _resume);
        userAddresses.push(msg.sender);
    }

    emit UserRegistered(msg.sender, _firstName, _lastName);
}


    function getUser(address _user) public view returns (User memory) {
        require(bytes(users[_user].email).length > 0, "User not registered");
        return users[_user];
    }

    function getAllUsers() public view returns (address[] memory) {
        return userAddresses;
    }
}
