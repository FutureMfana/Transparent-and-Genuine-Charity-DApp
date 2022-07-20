// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;

  return {
    infos: {
      },
    views: {
      1: []
      }
    };

  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Donor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Donor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Donor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;


  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 6,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc2, ctc2, ctc1, ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v77, v78, v79, v80, v81, v82], secs: v84, time: v83, didSend: v41, from: v76 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc3, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v88, v89], secs: v91, time: v90, didSend: v50, from: v87 } = txn2;
  ;
  return;




  };
export async function Needy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Needy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Needy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;


  const v64 = stdlib.protect(ctc0, interact.ApproverID, 'for Needy\'s interact field ApproverID');
  const v65 = stdlib.protect(ctc1, interact.DonationCause, 'for Needy\'s interact field DonationCause');
  const v66 = stdlib.protect(ctc2, interact.DonationNeeded, 'for Needy\'s interact field DonationNeeded');
  const v67 = stdlib.protect(ctc1, interact.Name, 'for Needy\'s interact field Name');
  const v68 = stdlib.protect(ctc0, interact.WalletID, 'for Needy\'s interact field WalletID');

  const v75 = stdlib.protect(ctc3, await interact.RequestApproval(v66, v65, v68, v64, v67), {
    at: './index.rsh:34:69:application',
    fs: ['at ./index.rsh:28:15:application call to [unknown function] (defined at: ./index.rsh:28:19:function exp)'],
    msg: 'RequestApproval',
    who: 'Needy'
    });

  const txn1 = await (ctc.sendrecv({
    args: [v66, v65, v68, v64, v67, v75],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:36:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc1, ctc0, ctc0, ctc1, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };


      const {data: [v77, v78, v79, v80, v81, v82], secs: v84, time: v83, didSend: v41, from: v76 } = txn1;

      ;
      sim_r.isHalt = false;

      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc1, ctc0, ctc0, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v77, v78, v79, v80, v81, v82], secs: v84, time: v83, didSend: v41, from: v76 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc3, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v88, v89], secs: v91, time: v90, didSend: v50, from: v87 } = txn2;
  ;
  return;




  };
export async function Verifier(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Verifier expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Verifier expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc4 = stdlib.T_Null;


  const v69 = stdlib.protect(ctc0, interact.IsApproved, 'for Verifier\'s interact field IsApproved');
  const v70 = stdlib.protect(ctc1, interact.VerifierID, 'for Verifier\'s interact field VerifierID');

  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 6,
    funcNum: 0,
    out_tys: [ctc2, ctc3, ctc1, ctc1, ctc3, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v77, v78, v79, v80, v81, v82], secs: v84, time: v83, didSend: v41, from: v76 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v69, v70],
    evt_cnt: 2,
    funcNum: 1,
    lct: v83,
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };


      const {data: [v88, v89], secs: v91, time: v90, didSend: v50, from: v87 } = txn2;

      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;

      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v88, v89], secs: v91, time: v90, didSend: v50, from: v87 } = txn2;
  ;
  stdlib.protect(ctc4, await interact.ApproveDonation(v88, v89), {
    at: './index.rsh:47:33:application',
    fs: ['at ./index.rsh:46:18:application call to [unknown function] (defined at: ./index.rsh:46:22:function exp)'],
    msg: 'ApproveDonation',
    who: 'Verifier'
    });

  return;




  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEBGihkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAADYjEkQjNAESRDQESSISTDQCEhFESTUFSVcAARc1/1cBIDX+gATcQ5vvNP8WUQcIUDT+ULBCAGZIgaCNBogAyyI0ARJENARJIhJMNAISEURJNQVJSkoiWzX/VwiANf5XiCA1/VeoIDX8V8iANfuByAIjWBc1+oAEy81/PTT/FlA0/lA0/VA0/FA0+1A0+hZRBwhQsCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v77",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v78",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v79",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v80",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v81",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v82",
                "type": "bool"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v77",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v78",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v79",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v80",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v81",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v82",
                "type": "bool"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v88",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v89",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v88",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v89",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161088238038061088283398101604081905261002291610265565b60008055436003556040517ff188a3c04db02bbc85c20e0e203d874f032e2076b5421908671e37bb70de452f9061005c9033908490610316565b60405180910390a1610070341560076100ae565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100a69260029201906100d7565b50505061040b565b816100d35760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100e3906103d0565b90600052602060002090601f016020900481019282610105576000855561014b565b82601f1061011e57805160ff191683800117855561014b565b8280016001018555821561014b579182015b8281111561014b578251825591602001919060010190610130565b5061015792915061015b565b5090565b5b80821115610157576000815560010161015c565b604080519081016001600160401b03811182821017156101a057634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156101a057634e487b7160e01b600052604160045260246000fd5b6000608082840312156101e857600080fd5b604051608081016001600160401b038111828210171561021857634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b80516001600160a01b038116811461026057600080fd5b919050565b60008183036101a081121561027957600080fd5b610281610170565b8351815261018080601f198401121561029957600080fd5b6102a16101a6565b9250602085015183526102b786604087016101d6565b60208401526102c860c08601610249565b60408401526102d960e08601610249565b60608401526102ec8661010087016101d6565b6080840152840151801515811461030257600080fd5b60a083015260208101919091529392505050565b60006101c08201905060018060a01b0380851683528351602084015260208401518051604085015260208101516103716060860182805182526020810151602083015260408101516040830152606081015160608301525050565b50604081810151831660e0860152606080830151909316610100860152608082015180516101208701526020810151610140870152908101516101608601529182015161018085015260a081015115156101a085015250509392505050565b600181811c908216806103e457607f821691505b6020821081141561040557634e487b7160e01b600052602260045260246000fd5b50919050565b6104688061041a6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780634897e4c21461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b3660046102fe565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa6101e6565b604051610064929190610316565b6100c86001600054146009610283565b6100e2813515806100db57506001548235145b600a610283565b6000808055600280546100f490610373565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610373565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103b6565b90507fd94ad147b1928ff9df5bf1b95c68d563c0e7d813058284e2f092b0809d2d744633836040516101b89291906103da565b60405180910390a16101cc34156008610283565b600080805560018190556101e2906002906102a8565b5050565b6000606060005460028080546101fb90610373565b80601f016020809104026020016040519081016040528092919081815260200182805461022790610373565b80156102745780601f1061024957610100808354040283529160200191610274565b820191906000526020600020905b81548152906001019060200180831161025757829003601f168201915b50505050509050915091509091565b816101e25760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102b490610373565b6000825580601f106102c4575050565b601f0160209004906000526020600020908101906102e291906102e5565b50565b5b808211156102fa57600081556001016102e6565b5090565b60006060828403121561031057600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561034a5785810183015185820160600152820161032e565b8181111561035c576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061038757607f821691505b6020821081141561031057634e487b7160e01b600052602260045260246000fd5b80151581146102e257600080fd5b6000602082840312156103c857600080fd5b81516103d3816103a8565b9392505050565b6001600160a01b0383811682528235602080840191909152608083019190840135610404816103a8565b8015156040850152506040840135818116915081811461042357600080fd5b5080606084015250939250505056fea26469706673582212208eb7a50d2a8844e00ec58f400324490346c03d2107a8d45ca4f2c9923f18585064736f6c634300080c0033`,
  BytecodeLen: 2178,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:37:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:44:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Donor": Donor,
  "Needy": Needy,
  "Verifier": Verifier
  };
export const _APIs = {
  };
ubuntu@ip-172-31-94-217:~/reach/transparent-and-genuine-charity-dapp$
ubuntu@ip-172-31-94-217:~/reach/transparent-and-genuine-charity-dapp$ c
Display all 100 possibilities? (y or n)
ubuntu@ip-172-31-94-217:~/reach/transparent-and-genuine-charity-dapp$ code
code           code-insiders  codepage
ubuntu@ip-172-31-94-217:~/reach/transparent-and-genuine-charity-dapp$ code
code           code-insiders  codepage
ubuntu@ip-172-31-94-217:~/reach/transparent-and-genuine-charity-dapp$ code .
/usr/share/code/bin/../code: error while loading shared libraries: libasound.so.2: cannot open shared object file: No such file or directory
ubuntu@ip-172-31-94-217:~/reach/transparent-and-genuine-charity-dapp$
ubuntu@ip-172-31-94-217:~/reach/transparent-and-genuine-charity-dapp$ cat ./build/index.main.mjs
// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;

  return {
    infos: {
      },
    views: {
      1: []
      }
    };

  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Donor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Donor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Donor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;


  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 6,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc2, ctc2, ctc1, ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v77, v78, v79, v80, v81, v82], secs: v84, time: v83, didSend: v41, from: v76 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc3, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v88, v89], secs: v91, time: v90, didSend: v50, from: v87 } = txn2;
  ;
  return;




  };
export async function Needy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Needy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Needy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;


  const v64 = stdlib.protect(ctc0, interact.ApproverID, 'for Needy\'s interact field ApproverID');
  const v65 = stdlib.protect(ctc1, interact.DonationCause, 'for Needy\'s interact field DonationCause');
  const v66 = stdlib.protect(ctc2, interact.DonationNeeded, 'for Needy\'s interact field DonationNeeded');
  const v67 = stdlib.protect(ctc1, interact.Name, 'for Needy\'s interact field Name');
  const v68 = stdlib.protect(ctc0, interact.WalletID, 'for Needy\'s interact field WalletID');

  const v75 = stdlib.protect(ctc3, await interact.RequestApproval(v66, v65, v68, v64, v67), {
    at: './index.rsh:34:69:application',
    fs: ['at ./index.rsh:28:15:application call to [unknown function] (defined at: ./index.rsh:28:19:function exp)'],
    msg: 'RequestApproval',
    who: 'Needy'
    });

  const txn1 = await (ctc.sendrecv({
    args: [v66, v65, v68, v64, v67, v75],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:36:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc1, ctc0, ctc0, ctc1, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };


      const {data: [v77, v78, v79, v80, v81, v82], secs: v84, time: v83, didSend: v41, from: v76 } = txn1;

      ;
      sim_r.isHalt = false;

      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc1, ctc0, ctc0, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v77, v78, v79, v80, v81, v82], secs: v84, time: v83, didSend: v41, from: v76 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc3, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v88, v89], secs: v91, time: v90, didSend: v50, from: v87 } = txn2;
  ;
  return;




  };
export async function Verifier(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Verifier expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Verifier expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc4 = stdlib.T_Null;


  const v69 = stdlib.protect(ctc0, interact.IsApproved, 'for Verifier\'s interact field IsApproved');
  const v70 = stdlib.protect(ctc1, interact.VerifierID, 'for Verifier\'s interact field VerifierID');

  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 6,
    funcNum: 0,
    out_tys: [ctc2, ctc3, ctc1, ctc1, ctc3, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v77, v78, v79, v80, v81, v82], secs: v84, time: v83, didSend: v41, from: v76 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v69, v70],
    evt_cnt: 2,
    funcNum: 1,
    lct: v83,
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };


      const {data: [v88, v89], secs: v91, time: v90, didSend: v50, from: v87 } = txn2;

      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;

      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v88, v89], secs: v91, time: v90, didSend: v50, from: v87 } = txn2;
  ;
  stdlib.protect(ctc4, await interact.ApproveDonation(v88, v89), {
    at: './index.rsh:47:33:application',
    fs: ['at ./index.rsh:46:18:application call to [unknown function] (defined at: ./index.rsh:46:22:function exp)'],
    msg: 'ApproveDonation',
    who: 'Verifier'
    });

  return;




  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEBGihkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAADYjEkQjNAESRDQESSISTDQCEhFESTUFSVcAARc1/1cBIDX+gATcQ5vvNP8WUQcIUDT+ULBCAGZIgaCNBogAyyI0ARJENARJIhJMNAISEURJNQVJSkoiWzX/VwiANf5XiCA1/VeoIDX8V8iANfuByAIjWBc1+oAEy81/PTT/FlA0/lA0/VA0/FA0+1A0+hZRBwhQsCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v77",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v78",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v79",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v80",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v81",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v82",
                "type": "bool"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v77",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v78",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v79",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v80",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v81",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v82",
                "type": "bool"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v88",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v89",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v88",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v89",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161088238038061088283398101604081905261002291610265565b60008055436003556040517ff188a3c04db02bbc85c20e0e203d874f032e2076b5421908671e37bb70de452f9061005c9033908490610316565b60405180910390a1610070341560076100ae565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100a69260029201906100d7565b50505061040b565b816100d35760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100e3906103d0565b90600052602060002090601f016020900481019282610105576000855561014b565b82601f1061011e57805160ff191683800117855561014b565b8280016001018555821561014b579182015b8281111561014b578251825591602001919060010190610130565b5061015792915061015b565b5090565b5b80821115610157576000815560010161015c565b604080519081016001600160401b03811182821017156101a057634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156101a057634e487b7160e01b600052604160045260246000fd5b6000608082840312156101e857600080fd5b604051608081016001600160401b038111828210171561021857634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b80516001600160a01b038116811461026057600080fd5b919050565b60008183036101a081121561027957600080fd5b610281610170565b8351815261018080601f198401121561029957600080fd5b6102a16101a6565b9250602085015183526102b786604087016101d6565b60208401526102c860c08601610249565b60408401526102d960e08601610249565b60608401526102ec8661010087016101d6565b6080840152840151801515811461030257600080fd5b60a083015260208101919091529392505050565b60006101c08201905060018060a01b0380851683528351602084015260208401518051604085015260208101516103716060860182805182526020810151602083015260408101516040830152606081015160608301525050565b50604081810151831660e0860152606080830151909316610100860152608082015180516101208701526020810151610140870152908101516101608601529182015161018085015260a081015115156101a085015250509392505050565b600181811c908216806103e457607f821691505b6020821081141561040557634e487b7160e01b600052602260045260246000fd5b50919050565b6104688061041a6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780634897e4c21461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b3660046102fe565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa6101e6565b604051610064929190610316565b6100c86001600054146009610283565b6100e2813515806100db57506001548235145b600a610283565b6000808055600280546100f490610373565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610373565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103b6565b90507fd94ad147b1928ff9df5bf1b95c68d563c0e7d813058284e2f092b0809d2d744633836040516101b89291906103da565b60405180910390a16101cc34156008610283565b600080805560018190556101e2906002906102a8565b5050565b6000606060005460028080546101fb90610373565b80601f016020809104026020016040519081016040528092919081815260200182805461022790610373565b80156102745780601f1061024957610100808354040283529160200191610274565b820191906000526020600020905b81548152906001019060200180831161025757829003601f168201915b50505050509050915091509091565b816101e25760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102b490610373565b6000825580601f106102c4575050565b601f0160209004906000526020600020908101906102e291906102e5565b50565b5b808211156102fa57600081556001016102e6565b5090565b60006060828403121561031057600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561034a5785810183015185820160600152820161032e565b8181111561035c576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061038757607f821691505b6020821081141561031057634e487b7160e01b600052602260045260246000fd5b80151581146102e257600080fd5b6000602082840312156103c857600080fd5b81516103d3816103a8565b9392505050565b6001600160a01b0383811682528235602080840191909152608083019190840135610404816103a8565b8015156040850152506040840135818116915081811461042357600080fd5b5080606084015250939250505056fea26469706673582212208eb7a50d2a8844e00ec58f400324490346c03d2107a8d45ca4f2c9923f18585064736f6c634300080c0033`,
  BytecodeLen: 2178,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:37:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:44:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Donor": Donor,
  "Needy": Needy,
  "Verifier": Verifier
  };
export const _APIs = {
  };
