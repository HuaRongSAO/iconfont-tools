'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Match = void 0
var base_css = function(prefixIcon, size) {
  return (
    '\n.' +
    prefixIcon +
    ' {\n    display: inline-block;\n    width: ' +
    size +
    '; \n    height: ' +
    size +
    ';\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100%;\n}\n\n\n'
  )
}
var generateStyleClass = function(name, svg) {
  return '\n.' + name + ' {\n    background: url(' + svg + ');\n}\n'
}
var Match = /** @class */ (function() {
  function Match(prefixIcon, size) {
    if (prefixIcon === void 0) {
      prefixIcon = 't-icon'
    }
    if (size === void 0) {
      size = '16px'
    }
    this.content = ''
    this.icons = []
    this.svgs = []
    this.prefixIcon = prefixIcon
    this.css = base_css(prefixIcon, size)
  }
  Match.prototype.matchesContent = function(data) {
    var reg = /(\<svg(.|\s)*?\<\/svg\>)/gim
    var content = data.match(reg) || []
    this.content = content.toString()
    return this
  }
  Match.prototype.matchesIcon = function() {
    var _a = this,
      content = _a.content,
      prefixIcon = _a.prefixIcon
    var reg = /(\<symbol(.|\s)*?\<\/symbol\>)/gim
    var icons = content.match(reg) || []
    this.icons = icons.map(function(s) {
      s = s.replace('icon-', prefixIcon + '-')
      var ids = s.match(/id\=\"(.*?)\"/)
      var name = (ids && ids[1]) || ''
      var icon = s.replace(/symbol/gi, 'svg')
      return { name: name, icon: icon }
    })
    return this
  }
  Match.prototype.generateCss = function() {
    var _this = this
    this.svgs.forEach(function(_a) {
      var name = _a.name,
        svg = _a.svg
      _this.css += generateStyleClass(name, svg)
    })
    return this
  }
  Match.prototype.setContent = function(content) {
    this.matchesContent(content)
    return this
  }
  Match.prototype.svg2DataUrl = function(svgStr) {
    svgStr = svgStr.replace(
      /\<svg/,
      '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" width=\'100%\' height=\'100%\' xmlns="http://www.w3.org/2000/svg"',
    )
    var encoded = encodeURIComponent(svgStr)
      .replace(/'/g, '%27')
      .replace(/"/g, '%22')
    return 'data:image/svg+xml,' + encoded
  }
  Match.prototype.generateSvg = function() {
    var _a = this,
      svg2DataUrl = _a.svg2DataUrl,
      icons = _a.icons
    this.svgs = icons.map(function(_a) {
      var name = _a.name,
        icon = _a.icon
      return { name: name, svg: svg2DataUrl(icon) }
    })
    return this
  }
  return Match
})()
exports.Match = Match
