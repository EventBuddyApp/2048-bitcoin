var _0x394124=_0x45b6;(function(_0x35327f,_0xaa8c39){var _0x5808a4=_0x45b6,_0x2d9957=_0x35327f();while(!![]){try{var _0x2c6d58=parseInt(_0x5808a4(0x1e3))/0x1*(parseInt(_0x5808a4(0x1e2))/0x2)+-parseInt(_0x5808a4(0x1fe))/0x3*(-parseInt(_0x5808a4(0x1e1))/0x4)+-parseInt(_0x5808a4(0x1fb))/0x5*(parseInt(_0x5808a4(0x1ea))/0x6)+-parseInt(_0x5808a4(0x1f4))/0x7+-parseInt(_0x5808a4(0x204))/0x8+parseInt(_0x5808a4(0x1fd))/0x9+-parseInt(_0x5808a4(0x1e6))/0xa*(-parseInt(_0x5808a4(0x1f9))/0xb);if(_0x2c6d58===_0xaa8c39)break;else _0x2d9957['push'](_0x2d9957['shift']());}catch(_0x1252aa){_0x2d9957['push'](_0x2d9957['shift']());}}}(_0xa41e,0x24b11),window[_0x394124(0x1e7)]={'_data':{},'setItem':function(_0x4f7e8d,_0x3b6fae){var _0x4d3905=_0x394124;return this[_0x4d3905(0x1f1)][_0x4f7e8d]=String(_0x3b6fae);},'getItem':function(_0x5a9a11){var _0x11fe0b=_0x394124;return this[_0x11fe0b(0x1f1)][_0x11fe0b(0x1f7)](_0x5a9a11)?this['_data'][_0x5a9a11]:undefined;},'removeItem':function(_0x4e77a3){var _0x2ab00c=_0x394124;return delete this[_0x2ab00c(0x1f1)][_0x4e77a3];},'clear':function(){var _0x1381fa=_0x394124;return this[_0x1381fa(0x1f1)]={};}});function _0x45b6(_0x31c164,_0x1c3e6f){var _0xa41e87=_0xa41e();return _0x45b6=function(_0x45b65e,_0x3be038){_0x45b65e=_0x45b65e-0x1dd;var _0x38fd48=_0xa41e87[_0x45b65e];return _0x38fd48;},_0x45b6(_0x31c164,_0x1c3e6f);}function LocalStorageManager(){var _0x478744=_0x394124;this[_0x478744(0x1f5)]=_0x478744(0x1f8),this['satoshisScoreHMACKey']='satoshisScore_hmac',this[_0x478744(0x1e0)]=_0x478744(0x201),this[_0x478744(0x1fc)]=_0x478744(0x1fa),this['secretKey']=Math[_0x478744(0x1f0)]()[_0x478744(0x1df)](0x24)[_0x478744(0x1ef)](0x2,0xf)+Math[_0x478744(0x1f0)]()[_0x478744(0x1df)](0x24)[_0x478744(0x1ef)](0x2,0xf);var _0x2ff8b9=this[_0x478744(0x1ed)]();this[_0x478744(0x1ec)]=_0x2ff8b9?window[_0x478744(0x202)]:window[_0x478744(0x1e7)];}function _0xa41e(){var _0x3ed1a8=['satoshisScoreKey','getItem','hasOwnProperty','satoshisScore','135344KdbQnw','gameState_hmac','5LKZLGn','gameStateHMACKey','1409202oQulyW','12uwETbx','secretKey','removeItem','gameState','localStorage','HmacSHA256','2130352awPGUF','prototype','satoshisScoreHMACKey','setItem','toString','gameStateKey','59944vVOfbd','2gKujbb','147557OKEhuN','getSatoshisScore','stringify','300PjhifN','fakeStorage','setGameState','clear','342438RVCYdO','test','storage','localStorageSupported','verifyHmac','substring','random','_data','parse','getGameState','1816801rEuSco'];_0xa41e=function(){return _0x3ed1a8;};return _0xa41e();}LocalStorageManager['prototype'][_0x394124(0x1ed)]=function(){var _0x3e3b86=_0x394124,_0x1b0041=_0x3e3b86(0x1eb);try{var _0x3509d2=window[_0x3e3b86(0x202)];return _0x3509d2[_0x3e3b86(0x1de)](_0x1b0041,'1'),_0x3509d2[_0x3e3b86(0x200)](_0x1b0041),!![];}catch(_0x1a8c60){return![];}},LocalStorageManager['prototype'][_0x394124(0x1e4)]=function(){var _0x172e88=_0x394124,_0x5ea69c=this[_0x172e88(0x1ec)][_0x172e88(0x1f6)](this[_0x172e88(0x1f5)]),_0x1fa716=this[_0x172e88(0x1ec)][_0x172e88(0x1f6)](this['satoshisScoreHMACKey']);if(!_0x5ea69c||!_0x1fa716)return null;var _0x1c0074=CryptoJS[_0x172e88(0x203)](_0x5ea69c,this['secretKey'])[_0x172e88(0x1df)]();if(_0x1c0074!==_0x1fa716)return null;return _0x5ea69c;},LocalStorageManager[_0x394124(0x205)]['setSatoshisScore']=function(_0x53fa64){var _0x15d165=_0x394124,_0x5887b7=CryptoJS[_0x15d165(0x203)](_0x53fa64,this[_0x15d165(0x1ff)])[_0x15d165(0x1df)]();this[_0x15d165(0x1ec)]['setItem'](this['satoshisScoreKey'],_0x53fa64),this['storage'][_0x15d165(0x1de)](this[_0x15d165(0x1dd)],_0x5887b7);},LocalStorageManager[_0x394124(0x205)][_0x394124(0x1f3)]=function(){var _0x22ceaf=_0x394124,_0x1eea5d=this['storage'][_0x22ceaf(0x1f6)](this[_0x22ceaf(0x1e0)]),_0x2d1dc8=this['storage'][_0x22ceaf(0x1f6)](this[_0x22ceaf(0x1fc)]);if(!_0x1eea5d||!_0x2d1dc8)return null;var _0x569170=CryptoJS[_0x22ceaf(0x203)](_0x1eea5d,this['secretKey'])[_0x22ceaf(0x1df)]();if(_0x569170!==_0x2d1dc8)return null;return JSON[_0x22ceaf(0x1f2)](_0x1eea5d);},LocalStorageManager[_0x394124(0x205)][_0x394124(0x1e8)]=function(_0x2724c6){var _0x33fae5=_0x394124,_0x2678f8=JSON[_0x33fae5(0x1e5)](_0x2724c6),_0x38f16e=CryptoJS[_0x33fae5(0x203)](_0x2678f8,this[_0x33fae5(0x1ff)])[_0x33fae5(0x1df)]();this[_0x33fae5(0x1ec)]['setItem'](this['gameStateKey'],_0x2678f8),this['storage'][_0x33fae5(0x1de)](this[_0x33fae5(0x1fc)],_0x38f16e);},LocalStorageManager[_0x394124(0x205)]['clearGameState']=function(){var _0x2404da=_0x394124;this[_0x2404da(0x1ec)][_0x2404da(0x200)](this[_0x2404da(0x1e0)]);},LocalStorageManager[_0x394124(0x205)][_0x394124(0x1ee)]=function(_0x39719f,_0x932218){var _0x1378db=_0x394124,_0x4aa26f=CryptoJS[_0x1378db(0x203)](_0x39719f,this['secretKey'])[_0x1378db(0x1df)]();return _0x4aa26f===_0x932218;},LocalStorageManager[_0x394124(0x205)]['clearAll']=function(){var _0x94f181=_0x394124;this[_0x94f181(0x1ec)][_0x94f181(0x1e9)]();};
