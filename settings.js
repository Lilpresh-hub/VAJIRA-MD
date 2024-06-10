const _0x248f32 = (function () {
  let _0x3be8f6 = true
  return function (_0x1360d2, _0x13c12d) {
    const _0xc092c0 = _0x3be8f6
      ? function () {
          if (_0x13c12d) {
            const _0x45a988 = _0x13c12d.apply(_0x1360d2, arguments)
            return (_0x13c12d = null), _0x45a988
          }
        }
      : function () {}
    return (_0x3be8f6 = false), _0xc092c0
  }
})()
const _0xb4446b = _0x248f32(this, function () {
  return _0xb4446b
    .toString()
    .search('(((.+)+)+)+$')
    .toString()
    .constructor(_0xb4446b)
    .search('(((.+)+)+)+$')
})
_0xb4446b()
;(function () {
  let _0x3884fb
  try {
    const _0x4dedee = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x3884fb = _0x4dedee()
  } catch (_0x1552a7) {
    _0x3884fb = window
  }
  _0x3884fb.setInterval(_0x43c870, 4000)
})()
const _0x40a109 = (function () {
  let _0x48c75f = true
  return function (_0x275b25, _0x123897) {
    const _0x18d62b = _0x48c75f
      ? function () {
          if (_0x123897) {
            const _0x19ada3 = _0x123897.apply(_0x275b25, arguments)
            return (_0x123897 = null), _0x19ada3
          }
        }
      : function () {}
    return (_0x48c75f = false), _0x18d62b
  }
})()
;(function () {
  _0x40a109(this, function () {
    const _0x554ef7 = new RegExp('function *\\( *\\)'),
      _0x1d289f = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x110c02 = _0x43c870('init')
    if (
      !_0x554ef7.test(_0x110c02 + 'chain') ||
      !_0x1d289f.test(_0x110c02 + 'input')
    ) {
      _0x110c02('0')
    } else {
      _0x43c870()
    }
  })()
})()
const { tlang, cmd, sck } = require('../lib'),
  { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const Config = require('../config'),
  axios = require('axios')
const url =
    'https://gist.github.com/prabathLK/fbd8017006fc4000dc82403d443ecd9b/raw',
  _0x35ec4a = {}
_0x35ec4a.on = 'text'
cmd(
  _0x35ec4a,
  async (_0x2e2553, _0x21610e, _0x55ce08, { isCreator: _0x1c958d }) => {
    let { data: _0x3f5759 } = await axios.get(url)
    for (const _0x1e1c6d in _0x3f5759) {
      if (new RegExp('\\b' + _0x1e1c6d + '\\b', 'gi').test(_0x21610e.text)) {
        const {
            Sequelize: _0x18bb5a,
            Model: _0x47d9a1,
            DataTypes: _0x2997a3,
          } = require('sequelize'),
          _0x19fdb5 = Config.database_url,
          _0x2096b0 = { ssl: true }
        const _0x4f8a6e = { underscored: true }
        const _0x49d5d1 = {
          dialect: 'postgres',
          dialectOptions: _0x2096b0,
          define: _0x4f8a6e,
          logging: false,
        }
        let _0x1f06dc = new _0x18bb5a(_0x19fdb5, _0x49d5d1)
        class _0xcccca2 extends _0x47d9a1 {}
        const _0x22054d = {
          type: _0x2997a3.STRING,
          defaultValue:
            process.env.ALIVE_MSJ ||
            'made by prabath and sachintha \uD83D\uDE03',
        }
        const _0x204d55 = {
          type: _0x2997a3.STRING,
          defaultValue:
            process.env.ALIVE_IMG ||
            'https://telegra.ph/file/3b3ba529c9e6054dbfbc7.jpg',
        }
        const _0x1b5ae5 = {
          type: _0x2997a3.STRING,
          defaultValue: process.env.OWNER_NAME || 'Prabath Kumara',
        }
        const _0xb97c5a = {
          type: _0x2997a3.INTEGER,
          defaultValue: process.env.DL_SIZE || '70',
        }
        const _0x7c43a0 = {
          type: _0x2997a3.STRING,
          defaultValue: process.env.SUDO || '94762280384',
        }
        const _0x1b1bc2 = {
          type: _0x2997a3.STRING,
          defaultValue: process.env.ANTILINK_VALUS || 'chat.whatsapp.com',
        }
        const _0x4592ea = {
          type: _0x2997a3.STRING,
          defaultValue: process.env.PREFIX || '.',
        }
        const _0x3e38b3 = {
          type: _0x2997a3.STRING,
          defaultValue: process.env.OWNER_NUMBER || '94762280384',
        }
        const _0x4ad74a = {
          type: _0x2997a3.STRING,
          defaultValue: process.env.AUTO_VOICE || 'false',
        }
        const _0x5d1820 = {
          type: _0x2997a3.STRING,
          defaultValue: process.env.AUTO_STICKER || 'false',
        }
        const _0x2f77b5 = {
          type: _0x2997a3.STRING,
          defaultValue: process.env.AUTO_RESTART || 'true',
        }
        const _0x34cd09 = {
          type: _0x2997a3.STRING,
          defaultValue: process.env.AUTO_READ_STATUS || 'false',
        }
        const _0x57625c = {
          type: _0x2997a3.STRING,
          defaultValue: process.env.BOT_STATUS || 'true',
        }
        const _0x26b394 = {
          type: _0x2997a3.STRING,
          defaultValue: process.env.READ_MESSAGE || 'true',
        }
        const _0x269134 = {
          type: _0x2997a3.STRING,
          defaultValue: process.env.WORK_TYPE || 'false',
        }
        const _0x3a5e82 = {
          type: _0x2997a3.STRING,
          defaultValue: process.env.DISABLE_DM || 'false',
        }
        const _0x2d2f22 = {
          type: _0x2997a3.STRING,
          defaultValue:
            process.env.OPENAI_API_KEY ||
            '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',
        }
        const _0x1caf47 = {
          type: _0x2997a3.STRING,
          defaultValue:
            process.env.ANTI_BAD_WORD ||
            'hutththa,paka,hukanna,ponnaya,kariya,ponnayaa.hukanawa,pako,pakoo,ponna,huththi,huththaa,huth',
        }
        const _0x442d3b = {
          alive_msj: _0x22054d,
          alive_img: _0x204d55,
          owner_name: _0x1b5ae5,
          dl_size: _0xb97c5a,
          sudo: _0x7c43a0,
          antilink_valus: _0x1b1bc2,
          prefix: _0x4592ea,
          owner_number: _0x3e38b3,
          auto_voice: _0x4ad74a,
          auto_sticker: _0x5d1820,
          auto_restart: _0x2f77b5,
          auto_read_status: _0x34cd09,
          bot_status: _0x57625c,
          read_message: _0x26b394,
          work_type: _0x269134,
          disable_dm: _0x3a5e82,
          openai_api_key: _0x2d2f22,
          anti_bad_word: _0x1caf47,
        }
        const _0x136f46 = {
          sequelize: _0x1f06dc,
          modelName: 'database_env',
          timestamps: false,
        }
        _0xcccca2.init(_0x442d3b, _0x136f46)
        await _0x1f06dc.authenticate()
        const _0x4c2362 = await _0xcccca2.findOne(),
          _0x54385e = _0x4c2362.auto_sticker
        if (_0x54385e === 'true') {
          const _0x406d19 = { url: _0x3f5759[_0x1e1c6d] }
          const _0x3766f9 = {
            sticker: _0x406d19,
            package: 'made by prabath',
          }
          await _0x2e2553.sendMessage(_0x21610e.chat, _0x3766f9, {
            quoted: _0x21610e,
          })
        }
      }
    }
  }
)
function _0x43c870(_0x27afcf) {
  function _0x14cd42(_0x91f3cc) {
    if (typeof _0x91f3cc === 'string') {
      return function (_0x1b7ecd) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x91f3cc / _0x91f3cc).length !== 1 || _0x91f3cc % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    _0x14cd42(++_0x91f3cc)
  }
  try {
    if (_0x27afcf) {
      return _0x14cd42
    } else {
      _0x14cd42(0)
    }
  } catch (_0x7a96ce) {}
          }
