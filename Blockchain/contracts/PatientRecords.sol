// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PatientRecords
{
       struct Patient 
       {
            string name;

            uint256 age;

            string ipfsHash;
       }
       mapping(address=>Patient) public patients;

       event RecordAdded(address indexed patientAddress,string name,string ipfsHash);

       function addPatientRecord(string memory _name,uint256 _age,string memory _ipfsHash) public
       {
          patients[msg.sender]=Patient(_name,_age,_ipfsHash);
          emit RecordAdded(msg.sender,_name, _ipfsHash);  
       }

       function  getPatientRecord(address _patientAddress) public view returns (string memory, uint256,string memory )
       {


          Patient memory p=patients[_patientAddress];

          return (p.name,p.age,p.ipfsHash);
       }
      
}