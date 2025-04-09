(function (_0x713b87, _0x2cc703) {
  const _0x34513e = _0x713b87();
  while (true) {
    try {
      const _0xd2be8d = parseInt(_0x5deb(380, 0x2a4)) / 0x1 * (parseInt(_0x5deb(342, "0x2f7")) / 0x2) + parseInt(_0x5deb(312, "0x2c1")) / 0x3 * (-parseInt(_0x5deb(382, "0x314")) / 0x4) + parseInt(_0x5deb(296, 0x2bd)) / 0x5 + parseInt(_0x5deb(391, "0x2c6")) / 0x6 * (-parseInt(_0x5deb(375, "0x2c8")) / 0x7) + parseInt(_0x5deb(372, 0x2c9)) / 0x8 + parseInt(_0x5deb(366, 0x2b5)) / 0x9 + -parseInt(_0x5deb(318, "0x2d5")) / 0xa * (-parseInt(_0x5deb(383, 0x2d9)) / 0xb);
      if (_0xd2be8d === _0x2cc703) {
        break;
      } else {
        _0x34513e.push(_0x34513e.shift());
      }
    } catch (_0x1bac7f) {
      _0x34513e.push(_0x34513e.shift());
    }
  }
})(_0xfb47, 0xdf9cd);
function _0x1c129b(_0x50e05f, _0x4eaf34) {
  return _0x437f(_0x50e05f - 0x66, _0x4eaf34);
}
function _0x5deb(_0x2e5d4b, _0x1df8a8) {
  const _0xfb4784 = _0xfb47();
  _0x5deb = function (_0x5debe0, _0x22cb1d) {
    _0x5debe0 = _0x5debe0 - 0x11e;
    let _0x1aacbc = _0xfb4784[_0x5debe0];
    return _0x1aacbc;
  };
  return _0x5deb(_0x2e5d4b, _0x1df8a8);
}
function _0x4800b9(_0xd35276, _0x44619e) {
  return _0x5deb(_0x44619e + 0x243, _0xd35276);
}
(function (_0x273a71, _0x7e26f4) {
  const _0x5e6dce = _0x273a71();
  while (true) {
    try {
      const _0x44e4b6 = -parseInt(_0x437f(277, "0x317")) / 0x1 * (-parseInt(_0x437f(261, "0x30b")) / 0x2) + -parseInt(_0x437f(268, 0x310)) / 0x3 * (-parseInt(_0x437f(255, "0x306")) / 0x4) + -parseInt(_0x437f(248, "0x303")) / 0x5 + parseInt(_0x437f(271, 0x31c)) / 0x6 + parseInt(_0x437f(278, 0x335)) / 0x7 * (parseInt(_0x437f(247, 0x303)) / 0x8) + parseInt(_0x437f(283, 0x31a)) / 0x9 + -parseInt(_0x437f(267, "0x31e")) / 0xa;
      if (_0x44e4b6 === _0x7e26f4) {
        break;
      } else {
        _0x5e6dce.push(_0x5e6dce.shift());
      }
    } catch (_0x1fdefc) {
      _0x5e6dce.push(_0x5e6dce.shift());
    }
  }
})(_0x4c27, 0x956b5);
module.exports.config = {
  "name": "autopending",
  "version": "31.7.2",
  "hasPermssion": 0x2,
  "credits": "John Lester",
  "description": "Autopending Group Chat",
  "commandCategory": "System",
  "usages": "on/off",
  "cooldowns": 0x2
};
module.exports.run = async function ({
  api: _0x8e2d8,
  event: _0x5716b8,
  args: _0x501384
}) {
  if (global.config.AutoPendingGroupChat.toLowerCase().includes("disable")) {
    const _0x4942ed = require("fs-extra");
    var _0x94e2f2 = "/home/runner/" + process.env.REPL_SLUG + "/config.json";
    let _0x7a7d90 = JSON.parse(_0x4942ed.readFileSync(_0x94e2f2));
    _0x7a7d90.AutoPendingGroupChat = "enable";
    _0x4942ed.writeFileSync(_0x94e2f2, JSON.stringify(_0x7a7d90, null, 0x4), "utf8");
    return _0x8e2d8.sendMessage("Autopending enable", _0x5716b8.threadID, () => {
      process.exit(0x1);
    }, _0x5716b8.messageID);
    return;
  }
  if (global.config.AutoPendingGroupChat.toLowerCase().includes("enable")) {
    const _0x2307f8 = require("fs-extra");
    var _0x94e2f2 = "/home/runner/" + process.env.REPL_SLUG + "/config.json";
    let _0x2cd8e6 = JSON.parse(_0x2307f8.readFileSync(_0x94e2f2));
    _0x2cd8e6.AutoPendingGroupChat = "disable";
    _0x2307f8.writeFileSync(_0x94e2f2, JSON.stringify(_0x2cd8e6, null, 0x4), "utf8");
    return _0x8e2d8.sendMessage("Autopending disable", _0x5716b8.threadID, () => {
      process.exit(0x1);
    }, _0x5716b8.messageID);
    return;
  }
};
function _0x437f(_0x354a0a, _0x3f2222) {
  const _0x2e2213 = _0x4c27();
  _0x437f = function (_0x397692, _0x5bac71) {
    _0x397692 = _0x397692 - 0xf6;
    let _0x4e8600 = _0x2e2213[_0x397692];
    return _0x4e8600;
  };
  return _0x437f(_0x354a0a, _0x3f2222);
}
function _0x4c27() {
  const _0x830a90 = [" Group Chat", "REPL_SLUG", "AutoPending", "sendMessage", "226066ZEdCTN", "97426ivKsSJ", "exit", "autopending", "readFileSyn", "stringify", "5441301FIASCU", "GroupChat", "fs-extra", " enable", "disable", "200mICvIR", "5098105JGpNAk", "run", "enable", " disable", "includes", "toLowerCase", "env", "164ojhAGC", "writeFileSy", "31.7.2", "Autopending", "/config.jso", "/home/runne", "8rAwfIZ", "utf8", "messageID", "config", "on/off", "threadID", "9470640MalrKk", "21381YauFCY", "exports", "parse", "2578176DkowiD", "John Lester"];
  _0x4c27 = function () {
    return _0x830a90;
  };
  return _0x4c27();
}
function _0xfb47() {
  const _0x3d4670 = ["0x30b", "0x48e", "31.7.2", "0x4ad", "_0x5b0505", "toLowerCase", "8rAwfIZ", "_0x26847d", "_0x36e3a5", " Group Chat", "/config.jso", "0x4a4", "_0x32130d", "200DBhDIg", "0x48f", "_0x1676a3", "0x4bf", "5098105JGpN", "parse", "_0x4243e1", "_0x170d06", "fs-extra", "_0x491d7b", "5441301FIAS", "_0x2d89ba", "_0x306ba0", "0x4aa", "autopending", "0x317", "0x4cb", "shift", "System", "0x4a2", "0x49d", "_0x1900eb", "_0x28d06e", "messageID", "12595428mLIkDw", "_0x378300", "_0x46aa4a", "0x4b6", "run", "_0x50e33", "1628104klMIUU", "0x48c", "0x4a6", "3395TbHjAW", "0x173", "0x4c0", "0x328", "stringify", "10792eLlJOI", "0x4d2", "4HoNEmC", "81411gqIcWG", "2578176Dkow", "9470640Malr", "0x17a", "0x4b3", "Autopending", "0x4b4", "0x31e", "11910QoOLgn", "on/off", "_0x13f2a1", "_0x680f93", "_0x482dc7", "164ojhAGC", "0x447", "disable", "exit", "_0x1dab0a", "0x7f", "0x306", "_0x4d06e2", "threadID", "0x312", "REPL_SLUG", "_0x44bac2", "0x4fa", "_0x135053", "exports", "_0x2bd57b", "0x4ed", "_0x11fc5a", "env", "config", "0x4d1", "enable", "John Lester", "_0x37e210", "0x31c", "0x4cf", "0x499", "3430790wEKtsr", "writeFileSy", "0x49f", "_0x29f498", "97426ivKsSJ", "_0x3eb7fc", "0x495", "AutoPending", "226066ZEdCT", "push", "0x40", "utf8", "_0x3dde76", "0x4a1", " disable", "_0x150895", "5157456KtGAbE", "0x30c", "0x16e", "_0x5aefcf", "0x4b7", "0x4c1", "310rtVbMi", "_0x225974", "0x4b2", "_0x1b0c92", "_0x2b0b36", "sendMessage", "0x15b", "_0xf20500", "21381YauFCY", "_0x5cca35", "_0x2e89fb"];
  _0xfb47 = function () {
    return _0x3d4670;
  };
  return _0xfb47();
}