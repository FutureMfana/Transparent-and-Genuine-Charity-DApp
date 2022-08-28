// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 19;

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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc1, ctc1]
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
export async function _Donors_Donates4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Donors_Donates4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Donors_Donates4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1]);
  const ctc3 = stdlib.T_Null;
  
  
  const [v202, v203, v215] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1]);
  const v229 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:36:41:application call to [unknown function] (defined at: ./index.rsh:36:41:function exp)', 'at ./index.rsh:36:41:application call to [unknown function] (defined at: ./index.rsh:36:41:function exp)'],
    msg: 'in',
    who: 'Donors_Donates'
    });
  const v230 = v229[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  
  const txn1 = await (ctc.sendrecv({
    args: [v202, v203, v215, v229],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [v230, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v239], secs: v241, time: v240, didSend: v146, from: v238 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Donors_Donates"
        });
      const v243 = v239[stdlib.checkedBigNumberify('./index.rsh:36:14:spread', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v243,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v250 = null;
      const v251 = await txn1.getOutput('Donors_Donates', 'v250', ctc3, v250);
      
      const v257 = stdlib.add(v215, v243);
      const v327 = v257;
      const v329 = stdlib.lt(v257, v203);
      if (v329) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v202,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v239], secs: v241, time: v240, didSend: v146, from: v238 } = txn1;
  undefined /* setApiDetails */;
  const v243 = v239[stdlib.checkedBigNumberify('./index.rsh:36:14:spread', stdlib.UInt_max, '0')];
  ;
  const v250 = null;
  const v251 = await txn1.getOutput('Donors_Donates', 'v250', ctc3, v250);
  if (v146) {
    stdlib.protect(ctc3, await interact.out(v239, v251), {
      at: './index.rsh:36:15:application',
      fs: ['at ./index.rsh:36:15:application call to [unknown function] (defined at: ./index.rsh:36:15:function exp)', 'at ./index.rsh:39:24:application call to "resolve" (defined at: ./index.rsh:38:41:function exp)', 'at ./index.rsh:38:41:application call to [unknown function] (defined at: ./index.rsh:38:41:function exp)'],
      msg: 'out',
      who: 'Donors_Donates'
      });
    }
  else {
    }
  
  const v257 = stdlib.add(v215, v243);
  const v327 = v257;
  const v329 = stdlib.lt(v257, v203);
  if (v329) {
    return;
    }
  else {
    ;
    return;
    }
  
  
  };
export async function Needy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Needy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Needy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc1]);
  
  
  const v198 = stdlib.protect(ctc0, interact.DonationCause, 'for Needy\'s interact field DonationCause');
  const v199 = stdlib.protect(ctc1, interact.DonationNeeded, 'for Needy\'s interact field DonationNeeded');
  
  const txn1 = await (ctc.sendrecv({
    args: [v199, v198],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:23:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:23:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v203, v204], secs: v206, time: v205, didSend: v29, from: v202 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v203, v204], secs: v206, time: v205, didSend: v29, from: v202 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v211], secs: v213, time: v212, didSend: v38, from: v210 } = txn2;
  ;
  stdlib.protect(ctc3, await interact.StartDonations(), {
    at: './index.rsh:30:34:application',
    fs: ['at ./index.rsh:30:34:application call to [unknown function] (defined at: ./index.rsh:30:34:function exp)', 'at ./index.rsh:30:34:application call to "liftedInteract" (defined at: ./index.rsh:30:34:application)'],
    msg: 'StartDonations',
    who: 'Needy'
    });
  
  let v215 = stdlib.checkedBigNumberify('./index.rsh:33:22:decimal', stdlib.UInt_max, '0');
  let v216 = v212;
  
  while (await (async () => {
    const v226 = stdlib.lt(v215, v203);
    
    return v226;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v239], secs: v241, time: v240, didSend: v146, from: v238 } = txn3;
    undefined /* setApiDetails */;
    const v243 = v239[stdlib.checkedBigNumberify('./index.rsh:36:14:spread', stdlib.UInt_max, '0')];
    ;
    const v250 = null;
    await txn3.getOutput('Donors_Donates', 'v250', ctc3, v250);
    const v257 = stdlib.add(v215, v243);
    const cv215 = v257;
    const cv216 = v240;
    
    v215 = cv215;
    v216 = cv216;
    
    continue;
    
    }
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc0]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v203, v204], secs: v206, time: v205, didSend: v29, from: v202 } = txn1;
  ;
  const v209 = stdlib.protect(ctc2, await interact.ApproveDonation(), {
    at: './index.rsh:27:63:application',
    fs: ['at ./index.rsh:26:18:application call to [unknown function] (defined at: ./index.rsh:26:22:function exp)'],
    msg: 'ApproveDonation',
    who: 'Verifier'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v202, v203, v209],
    evt_cnt: 1,
    funcNum: 1,
    lct: v205,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:29:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v211], secs: v213, time: v212, didSend: v38, from: v210 } = txn2;
      
      ;
      const v215 = stdlib.checkedBigNumberify('./index.rsh:33:22:decimal', stdlib.UInt_max, '0');
      const v216 = v212;
      
      if (await (async () => {
        const v226 = stdlib.lt(v215, v203);
        
        return v226;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v202,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v211], secs: v213, time: v212, didSend: v38, from: v210 } = txn2;
  ;
  let v215 = stdlib.checkedBigNumberify('./index.rsh:33:22:decimal', stdlib.UInt_max, '0');
  let v216 = v212;
  
  while (await (async () => {
    const v226 = stdlib.lt(v215, v203);
    
    return v226;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v239], secs: v241, time: v240, didSend: v146, from: v238 } = txn3;
    undefined /* setApiDetails */;
    const v243 = v239[stdlib.checkedBigNumberify('./index.rsh:36:14:spread', stdlib.UInt_max, '0')];
    ;
    const v250 = null;
    await txn3.getOutput('Donors_Donates', 'v250', ctc4, v250);
    const v257 = stdlib.add(v215, v243);
    const cv215 = v257;
    const cv216 = v240;
    
    v215 = cv215;
    v216 = cv216;
    
    continue;
    
    }
  ;
  return;
  
  
  
  
  };
export async function Donors_Donates(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Donors_Donates expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Donors_Donates expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Donors_Donates4(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Donors_Donates(uint64)byte[0]`],
    pure: [],
    sigs: [`Donors_Donates(uint64)byte[0]`]
    },
  appApproval: `BiAFAAEDBCAmAgEAACI1ADEYQQGrKWRJIls1AYEIWzUCNhoAF0lBABQiNQQjNQaB+5/ohwsSRDYaAUIAHDYaAhc1BDYaAzYaARdJIwxAAJZJJAxAAFUkEkQlNAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gATXkLTdNP9QsDT/FzX+NP6IAViACAAAAAAAAAD6sCk1BzQDVwAgNAMhBFs0A4EoWzT+CDIGQgCGIxJEIzQBEkQ0BEkiEkw0AhIRRChkNQNJNQUXNf+ABA+/xjQ0/xZRBwhQsDQDVwAgNAMhBFsiMgZCAEtIgaCNBogA8CI0ARJENARJIhJMNAISEURJNQVJIls1/1cIgDX+gATjOOqdNP8WUDT+ULAxADT/FlAoSwFXAChnSCM1ATIGNQJCAFs1/zX+Nf01/DT+NP0MQQAcNPw0/RZQNP4WUChLAVcAMGdIJTUBMgY1AkIAL7EisgE0/rIII7IQNPyyB7NCAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 48,
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
                "name": "v203",
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
                "name": "v204",
                "type": "tuple"
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
                "name": "v203",
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
                "name": "v204",
                "type": "tuple"
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
                "name": "v211",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T9",
                "name": "v239",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v250",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Donors_Donates",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
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
                "name": "v211",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T9",
                "name": "v239",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000e1038038062000e10833981016040819052620000269162000249565b60008055436003556040805133815282516020808301919091528084015180518385015281015180516060808501919091529181015160808401528084015160a0840152015160c082015290517f7c79f20d5ee496d2605fc345f3436dcb2853df6518ed78425e2c1495dd9e05899181900360e00190a1620000ab3415600762000111565b6040805180820182526000602080830182815233808552868301515182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926200010892600292909101906200013b565b50505062000328565b81620001375760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200014990620002eb565b90600052602060002090601f0160209004810192826200016d5760008555620001b8565b82601f106200018857805160ff1916838001178555620001b8565b82800160010185558215620001b8579182015b82811115620001b85782518255916020019190600101906200019b565b50620001c6929150620001ca565b5090565b5b80821115620001c65760008155600101620001cb565b604080519081016001600160401b03811182821017156200021257634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b03811182821017156200021257634e487b7160e01b600052604160045260246000fd5b600081830360c08112156200025d57600080fd5b62000267620001e1565b8351815260a0601f19830112156200027e57600080fd5b62000288620001e1565b602085015181526080603f1984011215620002a257600080fd5b620002ac62000218565b925060408501518352606085015160208401526080850151604084015260a0850151606084015282602082015280602083015250809250505092915050565b600181811c908216806200030057607f821691505b602082108114156200032257634e487b7160e01b600052602260045260246000fd5b50919050565b610ad880620003386000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632772eddc1461008357806383230757146100965780639a3e3912146100ab578063ab53f2c6146100be578063cfa4077e146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100913660046107cc565b610104565b3480156100a257600080fd5b50600154610070565b61005d6100b93660046107cc565b61012f565b3480156100ca57600080fd5b506100d3610156565b60405161007a9291906107ef565b6100f46100ef36600461084c565b6101f3565b604051901515815260200161007a565b60408051602081019091526000815261012b610125368490038401846108cd565b82610226565b5050565b60408051602081019091526000815261012b61015036849003840184610924565b826103e3565b60006060600054600280805461016b90610983565b80601f016020809104026020016040519081016040528092919081815260200182805461019790610983565b80156101e45780601f106101b9576101008083540402835291602001916101e4565b820191906000526020600020905b8154815290600101906020018083116101c757829003601f168201915b50505050509050915091509091565b60006101fd610674565b602080820151518490526040805191820190526000815261021e8282610226565b519392505050565b610236600460005414600c610544565b815161025190158061024a57508251600154145b600d610544565b60008080556002805461026390610983565b80601f016020809104026020016040519081016040528092919081815260200182805461028f90610983565b80156102dc5780601f106102b1576101008083540402835291602001916102dc565b820191906000526020600020905b8154815290600101906020018083116102bf57829003601f168201915b50505050508060200190518101906102f491906109d4565b60408051338152855160208083019190915286015151518183015290519192507f7d66d73ff83563156ca4ecd3b15e845da66b8d82f7da365588d378ce806c89ae919081900360600190a160208301515151610353903414600b610544565b604051600081527f32835f446085e5f25e7f08a28386cff770071922f489b1278c9254080f0efaa39060200160405180910390a1600082526103936106a6565b815181516001600160a01b0390911690526020808301518251820152840151515160408301516103c39190610a43565b60208083018051929092529051439101526103dd81610569565b50505050565b6103f36001600054146009610544565b815161040e90158061040757508251600154145b600a610544565b60008080556002805461042090610983565b80601f016020809104026020016040519081016040528092919081815260200182805461044c90610983565b80156104995780601f1061046e57610100808354040283529160200191610499565b820191906000526020600020905b81548152906001019060200180831161047c57829003601f168201915b50505050508060200190518101906104b19190610a69565b6040805133815285516020808301919091528601515115158183015290519192507fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f4915919081900360600190a161050934156008610544565b6105116106a6565b815181516001600160a01b039091169052602080830151825182015280820180516000905251439101526103dd81610569565b8161012b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b80516020908101519082015151101561061b576105a9604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b031680825282516020908101518184019081528185015151604080860191825260046000554360015580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516106169260029201906106e5565b505050565b8051516020820151516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561065a573d6000803e3d6000fd5b506000808055600181905561067190600290610769565b50565b6040518060400160405280600081526020016106a160408051808201909152600060208201908152815290565b905290565b604080516080810182526000918101828152606082019290925290819081526020016106a1604051806040016040528060008152602001600081525090565b8280546106f190610983565b90600052602060002090601f0160209004810192826107135760008555610759565b82601f1061072c57805160ff1916838001178555610759565b82800160010185558215610759579182015b8281111561075957825182559160200191906001019061073e565b5061076592915061079f565b5090565b50805461077590610983565b6000825580601f10610785575050565b601f01602090049060005260206000209081019061067191905b5b8082111561076557600081556001016107a0565b6000604082840312156107c657600080fd5b50919050565b6000604082840312156107de57600080fd5b6107e883836107b4565b9392505050565b82815260006020604081840152835180604085015260005b8181101561082357858101830151858201606001528201610807565b81811115610835576000606083870101525b50601f01601f191692909201606001949350505050565b60006020828403121561085e57600080fd5b5035919050565b6040805190810167ffffffffffffffff8111828210171561089657634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561089657634e487b7160e01b600052604160045260246000fd5b600081830360408112156108e057600080fd5b6108e8610865565b833581526020601f19830112156108fe57600080fd5b61090661089c565b915061091061089c565b602094850135815282529283015250919050565b6000818303604081121561093757600080fd5b61093f610865565b833581526020601f198301121561095557600080fd5b61095d61089c565b91506020840135801515811461097257600080fd5b825260208101919091529392505050565b600181811c9082168061099757607f821691505b602082108114156107c657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146109cf57600080fd5b919050565b6000606082840312156109e657600080fd5b6040516060810181811067ffffffffffffffff82111715610a1757634e487b7160e01b600052604160045260246000fd5b604052610a23836109b8565b815260208301516020820152604083015160408201528091505092915050565b60008219821115610a6457634e487b7160e01b600052601160045260246000fd5b500190565b600060408284031215610a7b57600080fd5b610a83610865565b610a8c836109b8565b815260208301516020820152809150509291505056fea2646970667358221220085fe746ef30d0cffed20e463362f19070a36ab8b416c2aa0997a2bc793c264664736f6c634300080c0033`,
  BytecodeLen: 3600,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:24:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:44:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:33:19:after expr stmt semicolon',
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
  "Donors_Donates": Donors_Donates,
  "Needy": Needy,
  "Verifier": Verifier
  };
export const _APIs = {
  Donors: {
    Donates: Donors_Donates
    }
  };
