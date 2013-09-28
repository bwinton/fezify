'use strict';

angular.module('fezifyApp')
  .directive('fezish', function () {

    // corner, wide, u, snake, b, cross
    // 1, 2, 3, 4
    var glyphmap = {
      'a': 'glyph-wide-1',
      'b': 'glyph-b-4',
      'c': 'glyph-u-2',
      'd': 'glyph-corner-4',
      'e': 'glyph-snake-1',
      'f': 'glyph-cross-4',
      'g': 'glyph-wide-2',
      'h': 'glyph-b-3',
      'i': 'glyph-u-1',
      'j': 'glyph-corner-3',
      'k': 'glyph-snake-4',
      'l': 'glyph-cross-3',
      'm': 'glyph-wide-3',
      'n': 'glyph-b-2',
      'o': 'glyph-u-4',
      'p': 'glyph-corner-2',
      'q': 'glyph-snake-2',
      'r': 'glyph-cross-2',
      's': 'glyph-wide-4',
      't': 'glyph-b-1',
      'u': 'glyph-u-3',
      'v': 'glyph-u-3',
      'w': 'glyph-corner-1',
      'x': 'glyph-snake-2',
      'y': 'glyph-cross-1',
      'z': 'glyph-snake-3',
      ' ': 'glyph-blank',
    };

    // Pre-munge the glyphmap, to make the lookup faster.
    for (var glyph in glyphmap) {
      glyphmap[glyph] = '<span class="' + glyphmap[glyph] + '"></span>';
    }
    glyphmap['\n'] = '<br>';

    return {
      template: '<div></div>',
      restrict: 'E',
      require: 'ngModel',
      link: function postLink($scope, $element, $attrs, ngModel) {
        $element.addClass($attrs['class']);
        ngModel.$render = function () {
          var value = ngModel.$viewValue || '';
          var out = value.toLowerCase().replace(/.|\n/g, function (match) {
            return glyphmap[match] || '';
          });
          $element.html(out);
        };
      }
    };
  });
