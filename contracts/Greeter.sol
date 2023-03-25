// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.17;

contract Greeter {
  string private greeting;
  constructor(string memory _greeting) {
    greeting = _greeting;
  }
  function greet() public view returns (string memory) {
    return greeting;
  }
  function setGreeting(string memory _greeting) public {
    greeting = _greeting;
  }
}