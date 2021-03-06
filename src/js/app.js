App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    // Load users.
    
     /*$.getJSON("users.json", function(data) {
      var user_data = '';
      
      $.each(data, function(key, value){
        user_data += '<tr>';
        user_data += '<td>'+value.id+'</td>';
        user_data += '<td>'+value.name+'</td>';
        user_data += '<td>'+value.points+'</td>';
        user_data += '</tr>';
      });
      $('#user_table').append(user_data);
    });*/

    return App.initWeb3();
  },

  initWeb3: function() {
    App.web3Provider = new Web3.providers.HttpProvider("http://127.0.0.1:22001");
    var MyContract = TruffleContract({
      "contractName": "Users",
      "abi": [
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "users",
          "outputs": [
            {
              "name": "id",
              "type": "uint256"
            },
            {
              "name": "name",
              "type": "bytes32"
            },
            {
              "name": "point",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "userName",
              "type": "bytes32"
            },
            {
              "name": "userPoint",
              "type": "uint256"
            }
          ],
          "name": "addUser",
          "outputs": [
            {
              "name": "userID",
              "type": "uint256"
            },
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getUsers",
          "outputs": [
            {
              "name": "",
              "type": "uint256[]"
            },
            {
              "name": "",
              "type": "bytes32[]"
            },
            {
              "name": "",
              "type": "uint256[]"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "plusFive",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x6060604052341561000f57600080fd5b6105e38061001e6000396000f300606060405260043610610061576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168062ce8e3e14610066578063365b98b214610160578063a8293c28146101ad578063b69ea684146101e8575b600080fd5b341561007157600080fd5b610079610237565b60405180806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156100c45780820151818401526020810190506100a9565b50505050905001848103835286818151815260200191508051906020019060200280838360005b838110156101065780820151818401526020810190506100eb565b50505050905001848103825285818151815260200191508051906020019060200280838360005b8381101561014857808201518184015260208101905061012d565b50505050905001965050505050505060405180910390f35b341561016b57600080fd5b61018160048080359060200190919050506103cf565b604051808481526020018360001916600019168152602001828152602001935050505060405180910390f35b34156101b857600080fd5b6101ce6004808035906020019091905050610408565b604051808215151515815260200191505060405180910390f35b34156101f357600080fd5b61021660048080356000191690602001909190803590602001909190505061045b565b60405180838152602001821515151581526020019250505060405180910390f35b61023f610501565b610247610515565b61024f610501565b6000610259610501565b610261610515565b610269610501565b6000610273610529565b6000805490509550856040518059106102895750595b90808252806020026020018201604052509450856040518059106102aa5750595b90808252806020026020018201604052509350856040518059106102cb5750595b90808252806020026020018201604052509250600091505b6000805490508210156103bb576000828154811015156102ff57fe5b9060005260206000209060030201606060405190810160405290816000820154815260200160018201546000191660001916815260200160028201548152505090508060000151858381518110151561035457fe5b90602001906020020181815250508060200151848381518110151561037557fe5b906020019060200201906000191690816000191681525050806040015183838151811015156103a057fe5b906020019060200201818152505081806001019250506102e3565b848484985098509850505050505050909192565b6000818154811015156103de57fe5b90600052602060002090600302016000915090508060000154908060010154908060020154905083565b6000600560008381548110151561041b57fe5b9060005260206000209060030201600201540160008381548110151561043d57fe5b90600052602060002090600302016002018190555060019050919050565b600080610466610529565b6001600081548092919060010191905055925082816000018181525050848160200190600019169081600019168152505083816040018181525050600080548060010182816104b5919061054e565b9160005260206000209060030201600083909190915060008201518160000155602082015181600101906000191690556040820151816002015550505082600192509250509250929050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b6060604051908101604052806000815260200160008019168152602001600081525090565b81548183558181151161057b5760030281600302836000526020600020918201910161057a9190610580565b5b505050565b6105b491905b808211156105b0576000808201600090556001820160009055600282016000905550600301610586565b5090565b905600a165627a7a72305820f1cbd7caf6901f4bf52f5b24d540fbf34a8dbd423929c458b3cacade1566a9720029",
      "deployedBytecode": "0x606060405260043610610061576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168062ce8e3e14610066578063365b98b214610160578063a8293c28146101ad578063b69ea684146101e8575b600080fd5b341561007157600080fd5b610079610237565b60405180806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156100c45780820151818401526020810190506100a9565b50505050905001848103835286818151815260200191508051906020019060200280838360005b838110156101065780820151818401526020810190506100eb565b50505050905001848103825285818151815260200191508051906020019060200280838360005b8381101561014857808201518184015260208101905061012d565b50505050905001965050505050505060405180910390f35b341561016b57600080fd5b61018160048080359060200190919050506103cf565b604051808481526020018360001916600019168152602001828152602001935050505060405180910390f35b34156101b857600080fd5b6101ce6004808035906020019091905050610408565b604051808215151515815260200191505060405180910390f35b34156101f357600080fd5b61021660048080356000191690602001909190803590602001909190505061045b565b60405180838152602001821515151581526020019250505060405180910390f35b61023f610501565b610247610515565b61024f610501565b6000610259610501565b610261610515565b610269610501565b6000610273610529565b6000805490509550856040518059106102895750595b90808252806020026020018201604052509450856040518059106102aa5750595b90808252806020026020018201604052509350856040518059106102cb5750595b90808252806020026020018201604052509250600091505b6000805490508210156103bb576000828154811015156102ff57fe5b9060005260206000209060030201606060405190810160405290816000820154815260200160018201546000191660001916815260200160028201548152505090508060000151858381518110151561035457fe5b90602001906020020181815250508060200151848381518110151561037557fe5b906020019060200201906000191690816000191681525050806040015183838151811015156103a057fe5b906020019060200201818152505081806001019250506102e3565b848484985098509850505050505050909192565b6000818154811015156103de57fe5b90600052602060002090600302016000915090508060000154908060010154908060020154905083565b6000600560008381548110151561041b57fe5b9060005260206000209060030201600201540160008381548110151561043d57fe5b90600052602060002090600302016002018190555060019050919050565b600080610466610529565b6001600081548092919060010191905055925082816000018181525050848160200190600019169081600019168152505083816040018181525050600080548060010182816104b5919061054e565b9160005260206000209060030201600083909190915060008201518160000155602082015181600101906000191690556040820151816002015550505082600192509250509250929050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b6060604051908101604052806000815260200160008019168152602001600081525090565b81548183558181151161057b5760030281600302836000526020600020918201910161057a9190610580565b5b505050565b6105b491905b808211156105b0576000808201600090556001820160009055600282016000905550600301610586565b5090565b905600a165627a7a72305820f1cbd7caf6901f4bf52f5b24d540fbf34a8dbd423929c458b3cacade1566a9720029",
      "sourceMap": "93:1466:0:-;;;;;;;;;;;;;;;;;",
      "deployedSourceMap": "93:1466:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;751:615;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;309:26:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1424:132;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;383:325;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;751:615;796:6;;:::i;:::-;804:9;;:::i;:::-;815:6;;:::i;:::-;833:11;874:21;;:::i;:::-;926:26;;:::i;:::-;986:24;;:::i;:::-;1055:6;1104:27;;:::i;:::-;847:5;:12;;;;833:26;;909:6;898:18;;;;;;;;;;;;;;;;;;;;;;;;874:42;;969:6;955:21;;;;;;;;;;;;;;;;;;;;;;;;926:50;;1024:6;1013:18;;;;;;;;;;;;;;;;;;;;;;;;986:45;;1064:1;1055:10;;1050:262;1071:5;:12;;;;1067:1;:16;1050:262;;;1156:5;1162:1;1156:8;;;;;;;;;;;;;;;;;;;;1145:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1204:8;:11;;;1191:7;1199:1;1191:10;;;;;;;;;;;;;;;;;:24;;;;;1244:8;:13;;;1229:9;1239:1;1229:12;;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;1287:8;:14;;;1271:10;1282:1;1271:13;;;;;;;;;;;;;;;;;:30;;;;;1085:3;;;;;;;1050:262;;;1328:7;1337:9;1348:10;1321:38;;;;;;751:615;;;;;;;;;:::o;309:26::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1424:132::-;1467:12;1527:1;1509:5;1515:2;1509:9;;;;;;;;;;;;;;;;;;;;:15;;;:19;1491:5;1497:2;1491:9;;;;;;;;;;;;;;;;;;;;:15;;:37;;;;1545:4;1538:11;;1424:132;;;:::o;383:325::-;450:11;463:12;518:26;;:::i;:::-;496:9;;:11;;;;;;;;;;;;487:20;;567:6;554:7;:10;;:19;;;;;598:8;583:7;:12;;:23;;;;;;;;;;;;;632:9;616:7;:13;;:25;;;;;652:5;:19;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;663:7;652:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;688:6;696:4;681:20;;;;383:325;;;;;;:::o;93:1466::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
      "source": "// Define la versión de compilación\npragma solidity ^0.4.15;\n\n\n// Definición del contrato\ncontract Users {\n    \n\n    // Creación de la estructura con sus atributos\n    struct Participant {\n        uint id;\n        bytes32 name;\n        uint point;\n    }\n\n    // Definición de las variables de estado\n    Participant[] public users;\n    uint userCount;\n\n    // Nuevo usuario\n    function addUser(bytes32 userName, uint userPoint) public returns (uint userID, bool success) {\n        userID = userCount++;\n\n        Participant memory newUser;\n        newUser.id = userID;\n        newUser.name = userName;\n        newUser.point = userPoint;\n\n        users.push(newUser);\n        return(userID, true);\n    }\n\n    // Obtener una lista de usuarios\n    function getUsers() public constant returns (uint[], bytes32[], uint[]) {\n        uint length = users.length;\n    \n        uint[] memory usersID = new uint[](length);\n        bytes32[] memory userNames = new bytes32[](length);\n        uint[] memory userPoints = new uint[](length);\n        \n        for (uint i = 0; i < users.length; i++) {\n            Participant memory showUser;\n            showUser = users[i];\n            \n            usersID[i] = showUser.id;\n            userNames[i] = showUser.name;\n            userPoints[i] = showUser.point;\n        }\n        return(usersID, userNames, userPoints);\n    }\n    \n    // Cambiamos el total de puntos por usuario\n    function plusFive(uint id) public returns (bool success) {\n        users[id].point = users[id].point + 5;\n        return true;\n    }\n\n}",
      "sourcePath": "/home/marcos/Escritorio/scoreboard/contracts/Users.sol",
      "ast": {
        "attributes": {
          "absolutePath": "/home/marcos/Escritorio/scoreboard/contracts/Users.sol",
          "exportedSymbols": {
            "Users": [
              180
            ]
          }
        },
        "children": [
          {
            "attributes": {
              "literals": [
                "solidity",
                "^",
                "0.4",
                ".15"
              ]
            },
            "id": 1,
            "name": "PragmaDirective",
            "src": "38:24:0"
          },
          {
            "attributes": {
              "baseContracts": [
                null
              ],
              "contractDependencies": [
                null
              ],
              "contractKind": "contract",
              "documentation": null,
              "fullyImplemented": true,
              "linearizedBaseContracts": [
                180
              ],
              "name": "Users",
              "scope": 181
            },
            "children": [
              {
                "attributes": {
                  "canonicalName": "Users.Participant",
                  "name": "Participant",
                  "scope": 180,
                  "visibility": "public"
                },
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "id",
                      "scope": 8,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2,
                        "name": "ElementaryTypeName",
                        "src": "201:4:0"
                      }
                    ],
                    "id": 3,
                    "name": "VariableDeclaration",
                    "src": "201:7:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "name",
                      "scope": 8,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4,
                        "name": "ElementaryTypeName",
                        "src": "218:7:0"
                      }
                    ],
                    "id": 5,
                    "name": "VariableDeclaration",
                    "src": "218:12:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "point",
                      "scope": 8,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 6,
                        "name": "ElementaryTypeName",
                        "src": "240:4:0"
                      }
                    ],
                    "id": 7,
                    "name": "VariableDeclaration",
                    "src": "240:10:0"
                  }
                ],
                "id": 8,
                "name": "StructDefinition",
                "src": "172:85:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "users",
                  "scope": 180,
                  "stateVariable": true,
                  "storageLocation": "default",
                  "type": "struct Users.Participant storage ref[] storage ref",
                  "value": null,
                  "visibility": "public"
                },
                "children": [
                  {
                    "attributes": {
                      "length": null,
                      "type": "struct Users.Participant storage ref[] storage pointer"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Participant",
                          "referencedDeclaration": 8,
                          "type": "struct Users.Participant storage pointer"
                        },
                        "id": 9,
                        "name": "UserDefinedTypeName",
                        "src": "309:11:0"
                      }
                    ],
                    "id": 10,
                    "name": "ArrayTypeName",
                    "src": "309:13:0"
                  }
                ],
                "id": 11,
                "name": "VariableDeclaration",
                "src": "309:26:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "userCount",
                  "scope": 180,
                  "stateVariable": true,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 12,
                    "name": "ElementaryTypeName",
                    "src": "341:4:0"
                  }
                ],
                "id": 13,
                "name": "VariableDeclaration",
                "src": "341:14:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "implemented": true,
                  "isConstructor": false,
                  "modifiers": [
                    null
                  ],
                  "name": "addUser",
                  "payable": false,
                  "scope": 180,
                  "stateMutability": "nonpayable",
                  "superFunction": null,
                  "visibility": "public"
                },
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "userName",
                          "scope": 61,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 14,
                            "name": "ElementaryTypeName",
                            "src": "400:7:0"
                          }
                        ],
                        "id": 15,
                        "name": "VariableDeclaration",
                        "src": "400:16:0"
                      },
                      {
                        "attributes": {
                          "constant": false,
                          "name": "userPoint",
                          "scope": 61,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 16,
                            "name": "ElementaryTypeName",
                            "src": "418:4:0"
                          }
                        ],
                        "id": 17,
                        "name": "VariableDeclaration",
                        "src": "418:14:0"
                      }
                    ],
                    "id": 18,
                    "name": "ParameterList",
                    "src": "399:34:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "userID",
                          "scope": 61,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 19,
                            "name": "ElementaryTypeName",
                            "src": "450:4:0"
                          }
                        ],
                        "id": 20,
                        "name": "VariableDeclaration",
                        "src": "450:11:0"
                      },
                      {
                        "attributes": {
                          "constant": false,
                          "name": "success",
                          "scope": 61,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bool",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bool",
                              "type": "bool"
                            },
                            "id": 21,
                            "name": "ElementaryTypeName",
                            "src": "463:4:0"
                          }
                        ],
                        "id": 22,
                        "name": "VariableDeclaration",
                        "src": "463:12:0"
                      }
                    ],
                    "id": 23,
                    "name": "ParameterList",
                    "src": "449:27:0"
                  },
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "=",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 20,
                                  "type": "uint256",
                                  "value": "userID"
                                },
                                "id": 24,
                                "name": "Identifier",
                                "src": "487:6:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "++",
                                  "prefix": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 13,
                                      "type": "uint256",
                                      "value": "userCount"
                                    },
                                    "id": 25,
                                    "name": "Identifier",
                                    "src": "496:9:0"
                                  }
                                ],
                                "id": 26,
                                "name": "UnaryOperation",
                                "src": "496:11:0"
                              }
                            ],
                            "id": 27,
                            "name": "Assignment",
                            "src": "487:20:0"
                          }
                        ],
                        "id": 28,
                        "name": "ExpressionStatement",
                        "src": "487:20:0"
                      },
                      {
                        "attributes": {
                          "assignments": [
                            null
                          ],
                          "initialValue": null
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "newUser",
                              "scope": 61,
                              "stateVariable": false,
                              "storageLocation": "memory",
                              "type": "struct Users.Participant memory",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "contractScope": null,
                                  "name": "Participant",
                                  "referencedDeclaration": 8,
                                  "type": "struct Users.Participant storage pointer"
                                },
                                "id": 29,
                                "name": "UserDefinedTypeName",
                                "src": "518:11:0"
                              }
                            ],
                            "id": 30,
                            "name": "VariableDeclaration",
                            "src": "518:26:0"
                          }
                        ],
                        "id": 31,
                        "name": "VariableDeclarationStatement",
                        "src": "518:26:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "=",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "member_name": "id",
                                  "referencedDeclaration": 3,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 30,
                                      "type": "struct Users.Participant memory",
                                      "value": "newUser"
                                    },
                                    "id": 32,
                                    "name": "Identifier",
                                    "src": "554:7:0"
                                  }
                                ],
                                "id": 34,
                                "name": "MemberAccess",
                                "src": "554:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 20,
                                  "type": "uint256",
                                  "value": "userID"
                                },
                                "id": 35,
                                "name": "Identifier",
                                "src": "567:6:0"
                              }
                            ],
                            "id": 36,
                            "name": "Assignment",
                            "src": "554:19:0"
                          }
                        ],
                        "id": 37,
                        "name": "ExpressionStatement",
                        "src": "554:19:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "=",
                              "type": "bytes32"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "member_name": "name",
                                  "referencedDeclaration": 5,
                                  "type": "bytes32"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 30,
                                      "type": "struct Users.Participant memory",
                                      "value": "newUser"
                                    },
                                    "id": 38,
                                    "name": "Identifier",
                                    "src": "583:7:0"
                                  }
                                ],
                                "id": 40,
                                "name": "MemberAccess",
                                "src": "583:12:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15,
                                  "type": "bytes32",
                                  "value": "userName"
                                },
                                "id": 41,
                                "name": "Identifier",
                                "src": "598:8:0"
                              }
                            ],
                            "id": 42,
                            "name": "Assignment",
                            "src": "583:23:0"
                          }
                        ],
                        "id": 43,
                        "name": "ExpressionStatement",
                        "src": "583:23:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "=",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "member_name": "point",
                                  "referencedDeclaration": 7,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 30,
                                      "type": "struct Users.Participant memory",
                                      "value": "newUser"
                                    },
                                    "id": 44,
                                    "name": "Identifier",
                                    "src": "616:7:0"
                                  }
                                ],
                                "id": 46,
                                "name": "MemberAccess",
                                "src": "616:13:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 17,
                                  "type": "uint256",
                                  "value": "userPoint"
                                },
                                "id": 47,
                                "name": "Identifier",
                                "src": "632:9:0"
                              }
                            ],
                            "id": 48,
                            "name": "Assignment",
                            "src": "616:25:0"
                          }
                        ],
                        "id": 49,
                        "name": "ExpressionStatement",
                        "src": "616:25:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_struct$_Participant_$8_memory_ptr",
                                      "typeString": "struct Users.Participant memory"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "push",
                                  "referencedDeclaration": null,
                                  "type": "function (struct Users.Participant storage ref) returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 11,
                                      "type": "struct Users.Participant storage ref[] storage ref",
                                      "value": "users"
                                    },
                                    "id": 50,
                                    "name": "Identifier",
                                    "src": "652:5:0"
                                  }
                                ],
                                "id": 52,
                                "name": "MemberAccess",
                                "src": "652:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 30,
                                  "type": "struct Users.Participant memory",
                                  "value": "newUser"
                                },
                                "id": 53,
                                "name": "Identifier",
                                "src": "663:7:0"
                              }
                            ],
                            "id": 54,
                            "name": "FunctionCall",
                            "src": "652:19:0"
                          }
                        ],
                        "id": 55,
                        "name": "ExpressionStatement",
                        "src": "652:19:0"
                      },
                      {
                        "attributes": {
                          "functionReturnParameters": 23
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "tuple(uint256,bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 20,
                                  "type": "uint256",
                                  "value": "userID"
                                },
                                "id": 56,
                                "name": "Identifier",
                                "src": "688:6:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "74727565",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "true"
                                },
                                "id": 57,
                                "name": "Literal",
                                "src": "696:4:0"
                              }
                            ],
                            "id": 58,
                            "name": "TupleExpression",
                            "src": "687:14:0"
                          }
                        ],
                        "id": 59,
                        "name": "Return",
                        "src": "681:20:0"
                      }
                    ],
                    "id": 60,
                    "name": "Block",
                    "src": "477:231:0"
                  }
                ],
                "id": 61,
                "name": "FunctionDefinition",
                "src": "383:325:0"
              },
              {
                "attributes": {
                  "constant": true,
                  "implemented": true,
                  "isConstructor": false,
                  "modifiers": [
                    null
                  ],
                  "name": "getUsers",
                  "payable": false,
                  "scope": 180,
                  "stateMutability": "view",
                  "superFunction": null,
                  "visibility": "public"
                },
                "children": [
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 62,
                    "name": "ParameterList",
                    "src": "768:2:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "",
                          "scope": 157,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256[] memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "length": null,
                              "type": "uint256[] storage pointer"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 63,
                                "name": "ElementaryTypeName",
                                "src": "796:4:0"
                              }
                            ],
                            "id": 64,
                            "name": "ArrayTypeName",
                            "src": "796:6:0"
                          }
                        ],
                        "id": 65,
                        "name": "VariableDeclaration",
                        "src": "796:6:0"
                      },
                      {
                        "attributes": {
                          "constant": false,
                          "name": "",
                          "scope": 157,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32[] memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "length": null,
                              "type": "bytes32[] storage pointer"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "bytes32",
                                  "type": "bytes32"
                                },
                                "id": 66,
                                "name": "ElementaryTypeName",
                                "src": "804:7:0"
                              }
                            ],
                            "id": 67,
                            "name": "ArrayTypeName",
                            "src": "804:9:0"
                          }
                        ],
                        "id": 68,
                        "name": "VariableDeclaration",
                        "src": "804:9:0"
                      },
                      {
                        "attributes": {
                          "constant": false,
                          "name": "",
                          "scope": 157,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256[] memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "length": null,
                              "type": "uint256[] storage pointer"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 69,
                                "name": "ElementaryTypeName",
                                "src": "815:4:0"
                              }
                            ],
                            "id": 70,
                            "name": "ArrayTypeName",
                            "src": "815:6:0"
                          }
                        ],
                        "id": 71,
                        "name": "VariableDeclaration",
                        "src": "815:6:0"
                      }
                    ],
                    "id": 72,
                    "name": "ParameterList",
                    "src": "795:27:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            74
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "length",
                              "scope": 157,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint256",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 73,
                                "name": "ElementaryTypeName",
                                "src": "833:4:0"
                              }
                            ],
                            "id": 74,
                            "name": "VariableDeclaration",
                            "src": "833:11:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 11,
                                  "type": "struct Users.Participant storage ref[] storage ref",
                                  "value": "users"
                                },
                                "id": 75,
                                "name": "Identifier",
                                "src": "847:5:0"
                              }
                            ],
                            "id": 76,
                            "name": "MemberAccess",
                            "src": "847:12:0"
                          }
                        ],
                        "id": 77,
                        "name": "VariableDeclarationStatement",
                        "src": "833:26:0"
                      },
                      {
                        "attributes": {
                          "assignments": [
                            81
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "usersID",
                              "scope": 157,
                              "stateVariable": false,
                              "storageLocation": "memory",
                              "type": "uint256[] memory",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "length": null,
                                  "type": "uint256[] storage pointer"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "uint",
                                      "type": "uint256"
                                    },
                                    "id": 79,
                                    "name": "ElementaryTypeName",
                                    "src": "874:4:0"
                                  }
                                ],
                                "id": 80,
                                "name": "ArrayTypeName",
                                "src": "874:6:0"
                              }
                            ],
                            "id": 81,
                            "name": "VariableDeclaration",
                            "src": "874:21:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256[] memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "function (uint256) pure returns (uint256[] memory)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "length": null,
                                      "type": "uint256[] storage pointer"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "name": "uint",
                                          "type": "uint256"
                                        },
                                        "id": 82,
                                        "name": "ElementaryTypeName",
                                        "src": "902:4:0"
                                      }
                                    ],
                                    "id": 83,
                                    "name": "ArrayTypeName",
                                    "src": "902:6:0"
                                  }
                                ],
                                "id": 84,
                                "name": "NewExpression",
                                "src": "898:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 74,
                                  "type": "uint256",
                                  "value": "length"
                                },
                                "id": 85,
                                "name": "Identifier",
                                "src": "909:6:0"
                              }
                            ],
                            "id": 86,
                            "name": "FunctionCall",
                            "src": "898:18:0"
                          }
                        ],
                        "id": 87,
                        "name": "VariableDeclarationStatement",
                        "src": "874:42:0"
                      },
                      {
                        "attributes": {
                          "assignments": [
                            91
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "userNames",
                              "scope": 157,
                              "stateVariable": false,
                              "storageLocation": "memory",
                              "type": "bytes32[] memory",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "length": null,
                                  "type": "bytes32[] storage pointer"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "bytes32",
                                      "type": "bytes32"
                                    },
                                    "id": 89,
                                    "name": "ElementaryTypeName",
                                    "src": "926:7:0"
                                  }
                                ],
                                "id": 90,
                                "name": "ArrayTypeName",
                                "src": "926:9:0"
                              }
                            ],
                            "id": 91,
                            "name": "VariableDeclaration",
                            "src": "926:26:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes32[] memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "function (uint256) pure returns (bytes32[] memory)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "length": null,
                                      "type": "bytes32[] storage pointer"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "name": "bytes32",
                                          "type": "bytes32"
                                        },
                                        "id": 92,
                                        "name": "ElementaryTypeName",
                                        "src": "959:7:0"
                                      }
                                    ],
                                    "id": 93,
                                    "name": "ArrayTypeName",
                                    "src": "959:9:0"
                                  }
                                ],
                                "id": 94,
                                "name": "NewExpression",
                                "src": "955:13:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 74,
                                  "type": "uint256",
                                  "value": "length"
                                },
                                "id": 95,
                                "name": "Identifier",
                                "src": "969:6:0"
                              }
                            ],
                            "id": 96,
                            "name": "FunctionCall",
                            "src": "955:21:0"
                          }
                        ],
                        "id": 97,
                        "name": "VariableDeclarationStatement",
                        "src": "926:50:0"
                      },
                      {
                        "attributes": {
                          "assignments": [
                            101
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "userPoints",
                              "scope": 157,
                              "stateVariable": false,
                              "storageLocation": "memory",
                              "type": "uint256[] memory",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "length": null,
                                  "type": "uint256[] storage pointer"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "uint",
                                      "type": "uint256"
                                    },
                                    "id": 99,
                                    "name": "ElementaryTypeName",
                                    "src": "986:4:0"
                                  }
                                ],
                                "id": 100,
                                "name": "ArrayTypeName",
                                "src": "986:6:0"
                              }
                            ],
                            "id": 101,
                            "name": "VariableDeclaration",
                            "src": "986:24:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256[] memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "function (uint256) pure returns (uint256[] memory)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "length": null,
                                      "type": "uint256[] storage pointer"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "name": "uint",
                                          "type": "uint256"
                                        },
                                        "id": 102,
                                        "name": "ElementaryTypeName",
                                        "src": "1017:4:0"
                                      }
                                    ],
                                    "id": 103,
                                    "name": "ArrayTypeName",
                                    "src": "1017:6:0"
                                  }
                                ],
                                "id": 104,
                                "name": "NewExpression",
                                "src": "1013:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 74,
                                  "type": "uint256",
                                  "value": "length"
                                },
                                "id": 105,
                                "name": "Identifier",
                                "src": "1024:6:0"
                              }
                            ],
                            "id": 106,
                            "name": "FunctionCall",
                            "src": "1013:18:0"
                          }
                        ],
                        "id": 107,
                        "name": "VariableDeclarationStatement",
                        "src": "986:45:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                109
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "i",
                                  "scope": 157,
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "type": "uint256",
                                  "value": null,
                                  "visibility": "internal"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "uint",
                                      "type": "uint256"
                                    },
                                    "id": 108,
                                    "name": "ElementaryTypeName",
                                    "src": "1055:4:0"
                                  }
                                ],
                                "id": 109,
                                "name": "VariableDeclaration",
                                "src": "1055:6:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 110,
                                "name": "Literal",
                                "src": "1064:1:0"
                              }
                            ],
                            "id": 111,
                            "name": "VariableDeclarationStatement",
                            "src": "1055:10:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 109,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 112,
                                "name": "Identifier",
                                "src": "1067:1:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "length",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 11,
                                      "type": "struct Users.Participant storage ref[] storage ref",
                                      "value": "users"
                                    },
                                    "id": 113,
                                    "name": "Identifier",
                                    "src": "1071:5:0"
                                  }
                                ],
                                "id": 114,
                                "name": "MemberAccess",
                                "src": "1071:12:0"
                              }
                            ],
                            "id": 115,
                            "name": "BinaryOperation",
                            "src": "1067:16:0"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "++",
                                  "prefix": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 109,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 116,
                                    "name": "Identifier",
                                    "src": "1085:1:0"
                                  }
                                ],
                                "id": 117,
                                "name": "UnaryOperation",
                                "src": "1085:3:0"
                              }
                            ],
                            "id": 118,
                            "name": "ExpressionStatement",
                            "src": "1085:3:0"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "assignments": [
                                    null
                                  ],
                                  "initialValue": null
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "constant": false,
                                      "name": "showUser",
                                      "scope": 157,
                                      "stateVariable": false,
                                      "storageLocation": "memory",
                                      "type": "struct Users.Participant memory",
                                      "value": null,
                                      "visibility": "internal"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "contractScope": null,
                                          "name": "Participant",
                                          "referencedDeclaration": 8,
                                          "type": "struct Users.Participant storage pointer"
                                        },
                                        "id": 119,
                                        "name": "UserDefinedTypeName",
                                        "src": "1104:11:0"
                                      }
                                    ],
                                    "id": 120,
                                    "name": "VariableDeclaration",
                                    "src": "1104:27:0"
                                  }
                                ],
                                "id": 121,
                                "name": "VariableDeclarationStatement",
                                "src": "1104:27:0"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "=",
                                      "type": "struct Users.Participant memory"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 120,
                                          "type": "struct Users.Participant memory",
                                          "value": "showUser"
                                        },
                                        "id": 122,
                                        "name": "Identifier",
                                        "src": "1145:8:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct Users.Participant storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 11,
                                              "type": "struct Users.Participant storage ref[] storage ref",
                                              "value": "users"
                                            },
                                            "id": 123,
                                            "name": "Identifier",
                                            "src": "1156:5:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 109,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 124,
                                            "name": "Identifier",
                                            "src": "1162:1:0"
                                          }
                                        ],
                                        "id": 125,
                                        "name": "IndexAccess",
                                        "src": "1156:8:0"
                                      }
                                    ],
                                    "id": 126,
                                    "name": "Assignment",
                                    "src": "1145:19:0"
                                  }
                                ],
                                "id": 127,
                                "name": "ExpressionStatement",
                                "src": "1145:19:0"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "=",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": true,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 81,
                                              "type": "uint256[] memory",
                                              "value": "usersID"
                                            },
                                            "id": 128,
                                            "name": "Identifier",
                                            "src": "1191:7:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 109,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 129,
                                            "name": "Identifier",
                                            "src": "1199:1:0"
                                          }
                                        ],
                                        "id": 130,
                                        "name": "IndexAccess",
                                        "src": "1191:10:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "id",
                                          "referencedDeclaration": 3,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 120,
                                              "type": "struct Users.Participant memory",
                                              "value": "showUser"
                                            },
                                            "id": 131,
                                            "name": "Identifier",
                                            "src": "1204:8:0"
                                          }
                                        ],
                                        "id": 132,
                                        "name": "MemberAccess",
                                        "src": "1204:11:0"
                                      }
                                    ],
                                    "id": 133,
                                    "name": "Assignment",
                                    "src": "1191:24:0"
                                  }
                                ],
                                "id": 134,
                                "name": "ExpressionStatement",
                                "src": "1191:24:0"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "=",
                                      "type": "bytes32"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": true,
                                          "type": "bytes32"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 91,
                                              "type": "bytes32[] memory",
                                              "value": "userNames"
                                            },
                                            "id": 135,
                                            "name": "Identifier",
                                            "src": "1229:9:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 109,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 136,
                                            "name": "Identifier",
                                            "src": "1239:1:0"
                                          }
                                        ],
                                        "id": 137,
                                        "name": "IndexAccess",
                                        "src": "1229:12:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "name",
                                          "referencedDeclaration": 5,
                                          "type": "bytes32"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 120,
                                              "type": "struct Users.Participant memory",
                                              "value": "showUser"
                                            },
                                            "id": 138,
                                            "name": "Identifier",
                                            "src": "1244:8:0"
                                          }
                                        ],
                                        "id": 139,
                                        "name": "MemberAccess",
                                        "src": "1244:13:0"
                                      }
                                    ],
                                    "id": 140,
                                    "name": "Assignment",
                                    "src": "1229:28:0"
                                  }
                                ],
                                "id": 141,
                                "name": "ExpressionStatement",
                                "src": "1229:28:0"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "=",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": true,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 101,
                                              "type": "uint256[] memory",
                                              "value": "userPoints"
                                            },
                                            "id": 142,
                                            "name": "Identifier",
                                            "src": "1271:10:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 109,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 143,
                                            "name": "Identifier",
                                            "src": "1282:1:0"
                                          }
                                        ],
                                        "id": 144,
                                        "name": "IndexAccess",
                                        "src": "1271:13:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "point",
                                          "referencedDeclaration": 7,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 120,
                                              "type": "struct Users.Participant memory",
                                              "value": "showUser"
                                            },
                                            "id": 145,
                                            "name": "Identifier",
                                            "src": "1287:8:0"
                                          }
                                        ],
                                        "id": 146,
                                        "name": "MemberAccess",
                                        "src": "1287:14:0"
                                      }
                                    ],
                                    "id": 147,
                                    "name": "Assignment",
                                    "src": "1271:30:0"
                                  }
                                ],
                                "id": 148,
                                "name": "ExpressionStatement",
                                "src": "1271:30:0"
                              }
                            ],
                            "id": 149,
                            "name": "Block",
                            "src": "1090:222:0"
                          }
                        ],
                        "id": 150,
                        "name": "ForStatement",
                        "src": "1050:262:0"
                      },
                      {
                        "attributes": {
                          "functionReturnParameters": 72
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "tuple(uint256[] memory,bytes32[] memory,uint256[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 81,
                                  "type": "uint256[] memory",
                                  "value": "usersID"
                                },
                                "id": 151,
                                "name": "Identifier",
                                "src": "1328:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 91,
                                  "type": "bytes32[] memory",
                                  "value": "userNames"
                                },
                                "id": 152,
                                "name": "Identifier",
                                "src": "1337:9:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 101,
                                  "type": "uint256[] memory",
                                  "value": "userPoints"
                                },
                                "id": 153,
                                "name": "Identifier",
                                "src": "1348:10:0"
                              }
                            ],
                            "id": 154,
                            "name": "TupleExpression",
                            "src": "1327:32:0"
                          }
                        ],
                        "id": 155,
                        "name": "Return",
                        "src": "1321:38:0"
                      }
                    ],
                    "id": 156,
                    "name": "Block",
                    "src": "823:543:0"
                  }
                ],
                "id": 157,
                "name": "FunctionDefinition",
                "src": "751:615:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "implemented": true,
                  "isConstructor": false,
                  "modifiers": [
                    null
                  ],
                  "name": "plusFive",
                  "payable": false,
                  "scope": 180,
                  "stateMutability": "nonpayable",
                  "superFunction": null,
                  "visibility": "public"
                },
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "id",
                          "scope": 179,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 158,
                            "name": "ElementaryTypeName",
                            "src": "1442:4:0"
                          }
                        ],
                        "id": 159,
                        "name": "VariableDeclaration",
                        "src": "1442:7:0"
                      }
                    ],
                    "id": 160,
                    "name": "ParameterList",
                    "src": "1441:9:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "success",
                          "scope": 179,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bool",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bool",
                              "type": "bool"
                            },
                            "id": 161,
                            "name": "ElementaryTypeName",
                            "src": "1467:4:0"
                          }
                        ],
                        "id": 162,
                        "name": "VariableDeclaration",
                        "src": "1467:12:0"
                      }
                    ],
                    "id": 163,
                    "name": "ParameterList",
                    "src": "1466:14:0"
                  },
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "=",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "member_name": "point",
                                  "referencedDeclaration": 7,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct Users.Participant storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 11,
                                          "type": "struct Users.Participant storage ref[] storage ref",
                                          "value": "users"
                                        },
                                        "id": 164,
                                        "name": "Identifier",
                                        "src": "1491:5:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 159,
                                          "type": "uint256",
                                          "value": "id"
                                        },
                                        "id": 165,
                                        "name": "Identifier",
                                        "src": "1497:2:0"
                                      }
                                    ],
                                    "id": 166,
                                    "name": "IndexAccess",
                                    "src": "1491:9:0"
                                  }
                                ],
                                "id": 167,
                                "name": "MemberAccess",
                                "src": "1491:15:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "+",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "point",
                                      "referencedDeclaration": 7,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct Users.Participant storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 11,
                                              "type": "struct Users.Participant storage ref[] storage ref",
                                              "value": "users"
                                            },
                                            "id": 168,
                                            "name": "Identifier",
                                            "src": "1509:5:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 159,
                                              "type": "uint256",
                                              "value": "id"
                                            },
                                            "id": 169,
                                            "name": "Identifier",
                                            "src": "1515:2:0"
                                          }
                                        ],
                                        "id": 170,
                                        "name": "IndexAccess",
                                        "src": "1509:9:0"
                                      }
                                    ],
                                    "id": 171,
                                    "name": "MemberAccess",
                                    "src": "1509:15:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "35",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 5",
                                      "value": "5"
                                    },
                                    "id": 172,
                                    "name": "Literal",
                                    "src": "1527:1:0"
                                  }
                                ],
                                "id": 173,
                                "name": "BinaryOperation",
                                "src": "1509:19:0"
                              }
                            ],
                            "id": 174,
                            "name": "Assignment",
                            "src": "1491:37:0"
                          }
                        ],
                        "id": 175,
                        "name": "ExpressionStatement",
                        "src": "1491:37:0"
                      },
                      {
                        "attributes": {
                          "functionReturnParameters": 163
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 176,
                            "name": "Literal",
                            "src": "1545:4:0"
                          }
                        ],
                        "id": 177,
                        "name": "Return",
                        "src": "1538:11:0"
                      }
                    ],
                    "id": 178,
                    "name": "Block",
                    "src": "1481:75:0"
                  }
                ],
                "id": 179,
                "name": "FunctionDefinition",
                "src": "1424:132:0"
              }
            ],
            "id": 180,
            "name": "ContractDefinition",
            "src": "93:1466:0"
          }
        ],
        "id": 181,
        "name": "SourceUnit",
        "src": "38:1521:0"
      },
      "legacyAST": {
        "attributes": {
          "absolutePath": "/home/marcos/Escritorio/scoreboard/contracts/Users.sol",
          "exportedSymbols": {
            "Users": [
              180
            ]
          }
        },
        "children": [
          {
            "attributes": {
              "literals": [
                "solidity",
                "^",
                "0.4",
                ".15"
              ]
            },
            "id": 1,
            "name": "PragmaDirective",
            "src": "38:24:0"
          },
          {
            "attributes": {
              "baseContracts": [
                null
              ],
              "contractDependencies": [
                null
              ],
              "contractKind": "contract",
              "documentation": null,
              "fullyImplemented": true,
              "linearizedBaseContracts": [
                180
              ],
              "name": "Users",
              "scope": 181
            },
            "children": [
              {
                "attributes": {
                  "canonicalName": "Users.Participant",
                  "name": "Participant",
                  "scope": 180,
                  "visibility": "public"
                },
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "id",
                      "scope": 8,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2,
                        "name": "ElementaryTypeName",
                        "src": "201:4:0"
                      }
                    ],
                    "id": 3,
                    "name": "VariableDeclaration",
                    "src": "201:7:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "name",
                      "scope": 8,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4,
                        "name": "ElementaryTypeName",
                        "src": "218:7:0"
                      }
                    ],
                    "id": 5,
                    "name": "VariableDeclaration",
                    "src": "218:12:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "point",
                      "scope": 8,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 6,
                        "name": "ElementaryTypeName",
                        "src": "240:4:0"
                      }
                    ],
                    "id": 7,
                    "name": "VariableDeclaration",
                    "src": "240:10:0"
                  }
                ],
                "id": 8,
                "name": "StructDefinition",
                "src": "172:85:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "users",
                  "scope": 180,
                  "stateVariable": true,
                  "storageLocation": "default",
                  "type": "struct Users.Participant storage ref[] storage ref",
                  "value": null,
                  "visibility": "public"
                },
                "children": [
                  {
                    "attributes": {
                      "length": null,
                      "type": "struct Users.Participant storage ref[] storage pointer"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Participant",
                          "referencedDeclaration": 8,
                          "type": "struct Users.Participant storage pointer"
                        },
                        "id": 9,
                        "name": "UserDefinedTypeName",
                        "src": "309:11:0"
                      }
                    ],
                    "id": 10,
                    "name": "ArrayTypeName",
                    "src": "309:13:0"
                  }
                ],
                "id": 11,
                "name": "VariableDeclaration",
                "src": "309:26:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "userCount",
                  "scope": 180,
                  "stateVariable": true,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 12,
                    "name": "ElementaryTypeName",
                    "src": "341:4:0"
                  }
                ],
                "id": 13,
                "name": "VariableDeclaration",
                "src": "341:14:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "implemented": true,
                  "isConstructor": false,
                  "modifiers": [
                    null
                  ],
                  "name": "addUser",
                  "payable": false,
                  "scope": 180,
                  "stateMutability": "nonpayable",
                  "superFunction": null,
                  "visibility": "public"
                },
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "userName",
                          "scope": 61,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 14,
                            "name": "ElementaryTypeName",
                            "src": "400:7:0"
                          }
                        ],
                        "id": 15,
                        "name": "VariableDeclaration",
                        "src": "400:16:0"
                      },
                      {
                        "attributes": {
                          "constant": false,
                          "name": "userPoint",
                          "scope": 61,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 16,
                            "name": "ElementaryTypeName",
                            "src": "418:4:0"
                          }
                        ],
                        "id": 17,
                        "name": "VariableDeclaration",
                        "src": "418:14:0"
                      }
                    ],
                    "id": 18,
                    "name": "ParameterList",
                    "src": "399:34:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "userID",
                          "scope": 61,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 19,
                            "name": "ElementaryTypeName",
                            "src": "450:4:0"
                          }
                        ],
                        "id": 20,
                        "name": "VariableDeclaration",
                        "src": "450:11:0"
                      },
                      {
                        "attributes": {
                          "constant": false,
                          "name": "success",
                          "scope": 61,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bool",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bool",
                              "type": "bool"
                            },
                            "id": 21,
                            "name": "ElementaryTypeName",
                            "src": "463:4:0"
                          }
                        ],
                        "id": 22,
                        "name": "VariableDeclaration",
                        "src": "463:12:0"
                      }
                    ],
                    "id": 23,
                    "name": "ParameterList",
                    "src": "449:27:0"
                  },
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "=",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 20,
                                  "type": "uint256",
                                  "value": "userID"
                                },
                                "id": 24,
                                "name": "Identifier",
                                "src": "487:6:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "++",
                                  "prefix": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 13,
                                      "type": "uint256",
                                      "value": "userCount"
                                    },
                                    "id": 25,
                                    "name": "Identifier",
                                    "src": "496:9:0"
                                  }
                                ],
                                "id": 26,
                                "name": "UnaryOperation",
                                "src": "496:11:0"
                              }
                            ],
                            "id": 27,
                            "name": "Assignment",
                            "src": "487:20:0"
                          }
                        ],
                        "id": 28,
                        "name": "ExpressionStatement",
                        "src": "487:20:0"
                      },
                      {
                        "attributes": {
                          "assignments": [
                            null
                          ],
                          "initialValue": null
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "newUser",
                              "scope": 61,
                              "stateVariable": false,
                              "storageLocation": "memory",
                              "type": "struct Users.Participant memory",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "contractScope": null,
                                  "name": "Participant",
                                  "referencedDeclaration": 8,
                                  "type": "struct Users.Participant storage pointer"
                                },
                                "id": 29,
                                "name": "UserDefinedTypeName",
                                "src": "518:11:0"
                              }
                            ],
                            "id": 30,
                            "name": "VariableDeclaration",
                            "src": "518:26:0"
                          }
                        ],
                        "id": 31,
                        "name": "VariableDeclarationStatement",
                        "src": "518:26:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "=",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "member_name": "id",
                                  "referencedDeclaration": 3,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 30,
                                      "type": "struct Users.Participant memory",
                                      "value": "newUser"
                                    },
                                    "id": 32,
                                    "name": "Identifier",
                                    "src": "554:7:0"
                                  }
                                ],
                                "id": 34,
                                "name": "MemberAccess",
                                "src": "554:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 20,
                                  "type": "uint256",
                                  "value": "userID"
                                },
                                "id": 35,
                                "name": "Identifier",
                                "src": "567:6:0"
                              }
                            ],
                            "id": 36,
                            "name": "Assignment",
                            "src": "554:19:0"
                          }
                        ],
                        "id": 37,
                        "name": "ExpressionStatement",
                        "src": "554:19:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "=",
                              "type": "bytes32"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "member_name": "name",
                                  "referencedDeclaration": 5,
                                  "type": "bytes32"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 30,
                                      "type": "struct Users.Participant memory",
                                      "value": "newUser"
                                    },
                                    "id": 38,
                                    "name": "Identifier",
                                    "src": "583:7:0"
                                  }
                                ],
                                "id": 40,
                                "name": "MemberAccess",
                                "src": "583:12:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15,
                                  "type": "bytes32",
                                  "value": "userName"
                                },
                                "id": 41,
                                "name": "Identifier",
                                "src": "598:8:0"
                              }
                            ],
                            "id": 42,
                            "name": "Assignment",
                            "src": "583:23:0"
                          }
                        ],
                        "id": 43,
                        "name": "ExpressionStatement",
                        "src": "583:23:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "=",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "member_name": "point",
                                  "referencedDeclaration": 7,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 30,
                                      "type": "struct Users.Participant memory",
                                      "value": "newUser"
                                    },
                                    "id": 44,
                                    "name": "Identifier",
                                    "src": "616:7:0"
                                  }
                                ],
                                "id": 46,
                                "name": "MemberAccess",
                                "src": "616:13:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 17,
                                  "type": "uint256",
                                  "value": "userPoint"
                                },
                                "id": 47,
                                "name": "Identifier",
                                "src": "632:9:0"
                              }
                            ],
                            "id": 48,
                            "name": "Assignment",
                            "src": "616:25:0"
                          }
                        ],
                        "id": 49,
                        "name": "ExpressionStatement",
                        "src": "616:25:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_struct$_Participant_$8_memory_ptr",
                                      "typeString": "struct Users.Participant memory"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "push",
                                  "referencedDeclaration": null,
                                  "type": "function (struct Users.Participant storage ref) returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 11,
                                      "type": "struct Users.Participant storage ref[] storage ref",
                                      "value": "users"
                                    },
                                    "id": 50,
                                    "name": "Identifier",
                                    "src": "652:5:0"
                                  }
                                ],
                                "id": 52,
                                "name": "MemberAccess",
                                "src": "652:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 30,
                                  "type": "struct Users.Participant memory",
                                  "value": "newUser"
                                },
                                "id": 53,
                                "name": "Identifier",
                                "src": "663:7:0"
                              }
                            ],
                            "id": 54,
                            "name": "FunctionCall",
                            "src": "652:19:0"
                          }
                        ],
                        "id": 55,
                        "name": "ExpressionStatement",
                        "src": "652:19:0"
                      },
                      {
                        "attributes": {
                          "functionReturnParameters": 23
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "tuple(uint256,bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 20,
                                  "type": "uint256",
                                  "value": "userID"
                                },
                                "id": 56,
                                "name": "Identifier",
                                "src": "688:6:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "74727565",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "true"
                                },
                                "id": 57,
                                "name": "Literal",
                                "src": "696:4:0"
                              }
                            ],
                            "id": 58,
                            "name": "TupleExpression",
                            "src": "687:14:0"
                          }
                        ],
                        "id": 59,
                        "name": "Return",
                        "src": "681:20:0"
                      }
                    ],
                    "id": 60,
                    "name": "Block",
                    "src": "477:231:0"
                  }
                ],
                "id": 61,
                "name": "FunctionDefinition",
                "src": "383:325:0"
              },
              {
                "attributes": {
                  "constant": true,
                  "implemented": true,
                  "isConstructor": false,
                  "modifiers": [
                    null
                  ],
                  "name": "getUsers",
                  "payable": false,
                  "scope": 180,
                  "stateMutability": "view",
                  "superFunction": null,
                  "visibility": "public"
                },
                "children": [
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 62,
                    "name": "ParameterList",
                    "src": "768:2:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "",
                          "scope": 157,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256[] memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "length": null,
                              "type": "uint256[] storage pointer"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 63,
                                "name": "ElementaryTypeName",
                                "src": "796:4:0"
                              }
                            ],
                            "id": 64,
                            "name": "ArrayTypeName",
                            "src": "796:6:0"
                          }
                        ],
                        "id": 65,
                        "name": "VariableDeclaration",
                        "src": "796:6:0"
                      },
                      {
                        "attributes": {
                          "constant": false,
                          "name": "",
                          "scope": 157,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32[] memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "length": null,
                              "type": "bytes32[] storage pointer"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "bytes32",
                                  "type": "bytes32"
                                },
                                "id": 66,
                                "name": "ElementaryTypeName",
                                "src": "804:7:0"
                              }
                            ],
                            "id": 67,
                            "name": "ArrayTypeName",
                            "src": "804:9:0"
                          }
                        ],
                        "id": 68,
                        "name": "VariableDeclaration",
                        "src": "804:9:0"
                      },
                      {
                        "attributes": {
                          "constant": false,
                          "name": "",
                          "scope": 157,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256[] memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "length": null,
                              "type": "uint256[] storage pointer"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 69,
                                "name": "ElementaryTypeName",
                                "src": "815:4:0"
                              }
                            ],
                            "id": 70,
                            "name": "ArrayTypeName",
                            "src": "815:6:0"
                          }
                        ],
                        "id": 71,
                        "name": "VariableDeclaration",
                        "src": "815:6:0"
                      }
                    ],
                    "id": 72,
                    "name": "ParameterList",
                    "src": "795:27:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            74
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "length",
                              "scope": 157,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint256",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 73,
                                "name": "ElementaryTypeName",
                                "src": "833:4:0"
                              }
                            ],
                            "id": 74,
                            "name": "VariableDeclaration",
                            "src": "833:11:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 11,
                                  "type": "struct Users.Participant storage ref[] storage ref",
                                  "value": "users"
                                },
                                "id": 75,
                                "name": "Identifier",
                                "src": "847:5:0"
                              }
                            ],
                            "id": 76,
                            "name": "MemberAccess",
                            "src": "847:12:0"
                          }
                        ],
                        "id": 77,
                        "name": "VariableDeclarationStatement",
                        "src": "833:26:0"
                      },
                      {
                        "attributes": {
                          "assignments": [
                            81
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "usersID",
                              "scope": 157,
                              "stateVariable": false,
                              "storageLocation": "memory",
                              "type": "uint256[] memory",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "length": null,
                                  "type": "uint256[] storage pointer"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "uint",
                                      "type": "uint256"
                                    },
                                    "id": 79,
                                    "name": "ElementaryTypeName",
                                    "src": "874:4:0"
                                  }
                                ],
                                "id": 80,
                                "name": "ArrayTypeName",
                                "src": "874:6:0"
                              }
                            ],
                            "id": 81,
                            "name": "VariableDeclaration",
                            "src": "874:21:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256[] memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "function (uint256) pure returns (uint256[] memory)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "length": null,
                                      "type": "uint256[] storage pointer"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "name": "uint",
                                          "type": "uint256"
                                        },
                                        "id": 82,
                                        "name": "ElementaryTypeName",
                                        "src": "902:4:0"
                                      }
                                    ],
                                    "id": 83,
                                    "name": "ArrayTypeName",
                                    "src": "902:6:0"
                                  }
                                ],
                                "id": 84,
                                "name": "NewExpression",
                                "src": "898:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 74,
                                  "type": "uint256",
                                  "value": "length"
                                },
                                "id": 85,
                                "name": "Identifier",
                                "src": "909:6:0"
                              }
                            ],
                            "id": 86,
                            "name": "FunctionCall",
                            "src": "898:18:0"
                          }
                        ],
                        "id": 87,
                        "name": "VariableDeclarationStatement",
                        "src": "874:42:0"
                      },
                      {
                        "attributes": {
                          "assignments": [
                            91
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "userNames",
                              "scope": 157,
                              "stateVariable": false,
                              "storageLocation": "memory",
                              "type": "bytes32[] memory",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "length": null,
                                  "type": "bytes32[] storage pointer"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "bytes32",
                                      "type": "bytes32"
                                    },
                                    "id": 89,
                                    "name": "ElementaryTypeName",
                                    "src": "926:7:0"
                                  }
                                ],
                                "id": 90,
                                "name": "ArrayTypeName",
                                "src": "926:9:0"
                              }
                            ],
                            "id": 91,
                            "name": "VariableDeclaration",
                            "src": "926:26:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes32[] memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "function (uint256) pure returns (bytes32[] memory)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "length": null,
                                      "type": "bytes32[] storage pointer"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "name": "bytes32",
                                          "type": "bytes32"
                                        },
                                        "id": 92,
                                        "name": "ElementaryTypeName",
                                        "src": "959:7:0"
                                      }
                                    ],
                                    "id": 93,
                                    "name": "ArrayTypeName",
                                    "src": "959:9:0"
                                  }
                                ],
                                "id": 94,
                                "name": "NewExpression",
                                "src": "955:13:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 74,
                                  "type": "uint256",
                                  "value": "length"
                                },
                                "id": 95,
                                "name": "Identifier",
                                "src": "969:6:0"
                              }
                            ],
                            "id": 96,
                            "name": "FunctionCall",
                            "src": "955:21:0"
                          }
                        ],
                        "id": 97,
                        "name": "VariableDeclarationStatement",
                        "src": "926:50:0"
                      },
                      {
                        "attributes": {
                          "assignments": [
                            101
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "userPoints",
                              "scope": 157,
                              "stateVariable": false,
                              "storageLocation": "memory",
                              "type": "uint256[] memory",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "length": null,
                                  "type": "uint256[] storage pointer"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "uint",
                                      "type": "uint256"
                                    },
                                    "id": 99,
                                    "name": "ElementaryTypeName",
                                    "src": "986:4:0"
                                  }
                                ],
                                "id": 100,
                                "name": "ArrayTypeName",
                                "src": "986:6:0"
                              }
                            ],
                            "id": 101,
                            "name": "VariableDeclaration",
                            "src": "986:24:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256[] memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "function (uint256) pure returns (uint256[] memory)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "length": null,
                                      "type": "uint256[] storage pointer"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "name": "uint",
                                          "type": "uint256"
                                        },
                                        "id": 102,
                                        "name": "ElementaryTypeName",
                                        "src": "1017:4:0"
                                      }
                                    ],
                                    "id": 103,
                                    "name": "ArrayTypeName",
                                    "src": "1017:6:0"
                                  }
                                ],
                                "id": 104,
                                "name": "NewExpression",
                                "src": "1013:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 74,
                                  "type": "uint256",
                                  "value": "length"
                                },
                                "id": 105,
                                "name": "Identifier",
                                "src": "1024:6:0"
                              }
                            ],
                            "id": 106,
                            "name": "FunctionCall",
                            "src": "1013:18:0"
                          }
                        ],
                        "id": 107,
                        "name": "VariableDeclarationStatement",
                        "src": "986:45:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                109
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "i",
                                  "scope": 157,
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "type": "uint256",
                                  "value": null,
                                  "visibility": "internal"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "uint",
                                      "type": "uint256"
                                    },
                                    "id": 108,
                                    "name": "ElementaryTypeName",
                                    "src": "1055:4:0"
                                  }
                                ],
                                "id": 109,
                                "name": "VariableDeclaration",
                                "src": "1055:6:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 110,
                                "name": "Literal",
                                "src": "1064:1:0"
                              }
                            ],
                            "id": 111,
                            "name": "VariableDeclarationStatement",
                            "src": "1055:10:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 109,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 112,
                                "name": "Identifier",
                                "src": "1067:1:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "length",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 11,
                                      "type": "struct Users.Participant storage ref[] storage ref",
                                      "value": "users"
                                    },
                                    "id": 113,
                                    "name": "Identifier",
                                    "src": "1071:5:0"
                                  }
                                ],
                                "id": 114,
                                "name": "MemberAccess",
                                "src": "1071:12:0"
                              }
                            ],
                            "id": 115,
                            "name": "BinaryOperation",
                            "src": "1067:16:0"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "++",
                                  "prefix": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 109,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 116,
                                    "name": "Identifier",
                                    "src": "1085:1:0"
                                  }
                                ],
                                "id": 117,
                                "name": "UnaryOperation",
                                "src": "1085:3:0"
                              }
                            ],
                            "id": 118,
                            "name": "ExpressionStatement",
                            "src": "1085:3:0"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "assignments": [
                                    null
                                  ],
                                  "initialValue": null
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "constant": false,
                                      "name": "showUser",
                                      "scope": 157,
                                      "stateVariable": false,
                                      "storageLocation": "memory",
                                      "type": "struct Users.Participant memory",
                                      "value": null,
                                      "visibility": "internal"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "contractScope": null,
                                          "name": "Participant",
                                          "referencedDeclaration": 8,
                                          "type": "struct Users.Participant storage pointer"
                                        },
                                        "id": 119,
                                        "name": "UserDefinedTypeName",
                                        "src": "1104:11:0"
                                      }
                                    ],
                                    "id": 120,
                                    "name": "VariableDeclaration",
                                    "src": "1104:27:0"
                                  }
                                ],
                                "id": 121,
                                "name": "VariableDeclarationStatement",
                                "src": "1104:27:0"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "=",
                                      "type": "struct Users.Participant memory"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 120,
                                          "type": "struct Users.Participant memory",
                                          "value": "showUser"
                                        },
                                        "id": 122,
                                        "name": "Identifier",
                                        "src": "1145:8:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct Users.Participant storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 11,
                                              "type": "struct Users.Participant storage ref[] storage ref",
                                              "value": "users"
                                            },
                                            "id": 123,
                                            "name": "Identifier",
                                            "src": "1156:5:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 109,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 124,
                                            "name": "Identifier",
                                            "src": "1162:1:0"
                                          }
                                        ],
                                        "id": 125,
                                        "name": "IndexAccess",
                                        "src": "1156:8:0"
                                      }
                                    ],
                                    "id": 126,
                                    "name": "Assignment",
                                    "src": "1145:19:0"
                                  }
                                ],
                                "id": 127,
                                "name": "ExpressionStatement",
                                "src": "1145:19:0"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "=",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": true,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 81,
                                              "type": "uint256[] memory",
                                              "value": "usersID"
                                            },
                                            "id": 128,
                                            "name": "Identifier",
                                            "src": "1191:7:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 109,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 129,
                                            "name": "Identifier",
                                            "src": "1199:1:0"
                                          }
                                        ],
                                        "id": 130,
                                        "name": "IndexAccess",
                                        "src": "1191:10:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "id",
                                          "referencedDeclaration": 3,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 120,
                                              "type": "struct Users.Participant memory",
                                              "value": "showUser"
                                            },
                                            "id": 131,
                                            "name": "Identifier",
                                            "src": "1204:8:0"
                                          }
                                        ],
                                        "id": 132,
                                        "name": "MemberAccess",
                                        "src": "1204:11:0"
                                      }
                                    ],
                                    "id": 133,
                                    "name": "Assignment",
                                    "src": "1191:24:0"
                                  }
                                ],
                                "id": 134,
                                "name": "ExpressionStatement",
                                "src": "1191:24:0"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "=",
                                      "type": "bytes32"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": true,
                                          "type": "bytes32"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 91,
                                              "type": "bytes32[] memory",
                                              "value": "userNames"
                                            },
                                            "id": 135,
                                            "name": "Identifier",
                                            "src": "1229:9:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 109,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 136,
                                            "name": "Identifier",
                                            "src": "1239:1:0"
                                          }
                                        ],
                                        "id": 137,
                                        "name": "IndexAccess",
                                        "src": "1229:12:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "name",
                                          "referencedDeclaration": 5,
                                          "type": "bytes32"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 120,
                                              "type": "struct Users.Participant memory",
                                              "value": "showUser"
                                            },
                                            "id": 138,
                                            "name": "Identifier",
                                            "src": "1244:8:0"
                                          }
                                        ],
                                        "id": 139,
                                        "name": "MemberAccess",
                                        "src": "1244:13:0"
                                      }
                                    ],
                                    "id": 140,
                                    "name": "Assignment",
                                    "src": "1229:28:0"
                                  }
                                ],
                                "id": 141,
                                "name": "ExpressionStatement",
                                "src": "1229:28:0"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "=",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": true,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 101,
                                              "type": "uint256[] memory",
                                              "value": "userPoints"
                                            },
                                            "id": 142,
                                            "name": "Identifier",
                                            "src": "1271:10:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 109,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 143,
                                            "name": "Identifier",
                                            "src": "1282:1:0"
                                          }
                                        ],
                                        "id": 144,
                                        "name": "IndexAccess",
                                        "src": "1271:13:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "point",
                                          "referencedDeclaration": 7,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 120,
                                              "type": "struct Users.Participant memory",
                                              "value": "showUser"
                                            },
                                            "id": 145,
                                            "name": "Identifier",
                                            "src": "1287:8:0"
                                          }
                                        ],
                                        "id": 146,
                                        "name": "MemberAccess",
                                        "src": "1287:14:0"
                                      }
                                    ],
                                    "id": 147,
                                    "name": "Assignment",
                                    "src": "1271:30:0"
                                  }
                                ],
                                "id": 148,
                                "name": "ExpressionStatement",
                                "src": "1271:30:0"
                              }
                            ],
                            "id": 149,
                            "name": "Block",
                            "src": "1090:222:0"
                          }
                        ],
                        "id": 150,
                        "name": "ForStatement",
                        "src": "1050:262:0"
                      },
                      {
                        "attributes": {
                          "functionReturnParameters": 72
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "tuple(uint256[] memory,bytes32[] memory,uint256[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 81,
                                  "type": "uint256[] memory",
                                  "value": "usersID"
                                },
                                "id": 151,
                                "name": "Identifier",
                                "src": "1328:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 91,
                                  "type": "bytes32[] memory",
                                  "value": "userNames"
                                },
                                "id": 152,
                                "name": "Identifier",
                                "src": "1337:9:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 101,
                                  "type": "uint256[] memory",
                                  "value": "userPoints"
                                },
                                "id": 153,
                                "name": "Identifier",
                                "src": "1348:10:0"
                              }
                            ],
                            "id": 154,
                            "name": "TupleExpression",
                            "src": "1327:32:0"
                          }
                        ],
                        "id": 155,
                        "name": "Return",
                        "src": "1321:38:0"
                      }
                    ],
                    "id": 156,
                    "name": "Block",
                    "src": "823:543:0"
                  }
                ],
                "id": 157,
                "name": "FunctionDefinition",
                "src": "751:615:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "implemented": true,
                  "isConstructor": false,
                  "modifiers": [
                    null
                  ],
                  "name": "plusFive",
                  "payable": false,
                  "scope": 180,
                  "stateMutability": "nonpayable",
                  "superFunction": null,
                  "visibility": "public"
                },
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "id",
                          "scope": 179,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 158,
                            "name": "ElementaryTypeName",
                            "src": "1442:4:0"
                          }
                        ],
                        "id": 159,
                        "name": "VariableDeclaration",
                        "src": "1442:7:0"
                      }
                    ],
                    "id": 160,
                    "name": "ParameterList",
                    "src": "1441:9:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "success",
                          "scope": 179,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bool",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bool",
                              "type": "bool"
                            },
                            "id": 161,
                            "name": "ElementaryTypeName",
                            "src": "1467:4:0"
                          }
                        ],
                        "id": 162,
                        "name": "VariableDeclaration",
                        "src": "1467:12:0"
                      }
                    ],
                    "id": 163,
                    "name": "ParameterList",
                    "src": "1466:14:0"
                  },
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "=",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "member_name": "point",
                                  "referencedDeclaration": 7,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct Users.Participant storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 11,
                                          "type": "struct Users.Participant storage ref[] storage ref",
                                          "value": "users"
                                        },
                                        "id": 164,
                                        "name": "Identifier",
                                        "src": "1491:5:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 159,
                                          "type": "uint256",
                                          "value": "id"
                                        },
                                        "id": 165,
                                        "name": "Identifier",
                                        "src": "1497:2:0"
                                      }
                                    ],
                                    "id": 166,
                                    "name": "IndexAccess",
                                    "src": "1491:9:0"
                                  }
                                ],
                                "id": 167,
                                "name": "MemberAccess",
                                "src": "1491:15:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "+",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "point",
                                      "referencedDeclaration": 7,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct Users.Participant storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 11,
                                              "type": "struct Users.Participant storage ref[] storage ref",
                                              "value": "users"
                                            },
                                            "id": 168,
                                            "name": "Identifier",
                                            "src": "1509:5:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 159,
                                              "type": "uint256",
                                              "value": "id"
                                            },
                                            "id": 169,
                                            "name": "Identifier",
                                            "src": "1515:2:0"
                                          }
                                        ],
                                        "id": 170,
                                        "name": "IndexAccess",
                                        "src": "1509:9:0"
                                      }
                                    ],
                                    "id": 171,
                                    "name": "MemberAccess",
                                    "src": "1509:15:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "35",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 5",
                                      "value": "5"
                                    },
                                    "id": 172,
                                    "name": "Literal",
                                    "src": "1527:1:0"
                                  }
                                ],
                                "id": 173,
                                "name": "BinaryOperation",
                                "src": "1509:19:0"
                              }
                            ],
                            "id": 174,
                            "name": "Assignment",
                            "src": "1491:37:0"
                          }
                        ],
                        "id": 175,
                        "name": "ExpressionStatement",
                        "src": "1491:37:0"
                      },
                      {
                        "attributes": {
                          "functionReturnParameters": 163
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 176,
                            "name": "Literal",
                            "src": "1545:4:0"
                          }
                        ],
                        "id": 177,
                        "name": "Return",
                        "src": "1538:11:0"
                      }
                    ],
                    "id": 178,
                    "name": "Block",
                    "src": "1481:75:0"
                  }
                ],
                "id": 179,
                "name": "FunctionDefinition",
                "src": "1424:132:0"
              }
            ],
            "id": 180,
            "name": "ContractDefinition",
            "src": "93:1466:0"
          }
        ],
        "id": 181,
        "name": "SourceUnit",
        "src": "38:1521:0"
      },
      "compiler": {
        "name": "solc",
        "version": "0.4.19+commit.c4cbbb05.Emscripten.clang"
      },
      "networks": {
        "91584648519": {
          "events": {},
          "links": {},
          "address": "0xf27fa378e65dfee546445e610caf88ca7c123e47",
          "transactionHash": "0xf1361ccdc73520e0e5b8433d65c97000c4dcb7e110fb188703049817189f8ad6"
        }
      },
      "schemaVersion": "2.0.0",
      "updatedAt": "2018-03-20T16:08:02.573Z"
    });
    MyContract.network_id = "9535753591";
    MyContract.address = "0xf27fa378e65dfee546445e610caf88ca7c123e47";
    MyContract.web3.eth.defaultAccount = "0x0defda53d6e0ba7627a4891b43737c5889e280cc";
    MyContract.setProvider(App.web3Provider);
    App.contracts["Users"] = MyContract;

    return App.initContract();
  },

  initContract: function() {
    
    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-addpoints', App.handlePoints);
    return App.updateTable();
  },

  updateTable: function() {
    users = App.contracts["Users"];
    
    users.deployed().then(function(instance) {
      
      instance.getUsers().then(function(retorno) {
        
        var usersID = retorno[0], userNames = retorno[1], userPoints = retorno[2];
        var user_data = `<table class="table table-bordered table-striped table-hover" id="user_table">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Points</th>
        </tr>` ;
        for (var cont = 0; cont < usersID.length; cont++) {
          user_data += '<tr>';
          user_data += '<td>'+web3.toBigNumber(usersID[cont])+'</td>';
          user_data += '<td>'+web3.toUtf8(userNames[cont])+'</td>';
          user_data += '<td>'+web3.toBigNumber(userPoints[cont])+'</td>';
          user_data += '</tr>';
        }
        user_data += '  </table>';
        $('#user_table').replaceWith(user_data);
      });
    });
  },

  handlePoints: function() {
    event.preventDefault();

    var userId = parseInt($("div .form-group input").val());
    
    users = App.contracts["Users"];

    users.web3.personal.unlockAccount("0x0defda53d6e0ba7627a4891b43737c5889e280cc", "Passw0rd", 1000, function(response) {
      
      users.deployed().then( 
        function(instance) { 
          return instance.plusFive(userId); 
        }
      ).then(
        function(result) {
          return App.updateTable();
        }
      );
    });    
  },

  givePoints: function(id, amount) {
    users = App.contracts["Users"];

    users.web3.personal.unlockAccount("0x0defda53d6e0ba7627a4891b43737c5889e280cc", "Passw0rd", 1000, function(response) {

      users.deployed().then( 
        function(instance) { 
          return instance.addUser(id,amount); 
        }
      ).then(function(result) {
          debugger;
          var userID = result[0], success = result[1];
          if (!success) {
            console.log("Someone goes wrong adding " + id + ".");
          }
        }
      );
    }); 
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
