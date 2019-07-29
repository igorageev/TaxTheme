import $ from 'jquery'
import hljs from 'highlight.js'
import ClipboardJS from 'clipboard'

$(document).ready(function () {
  var codeholder = $('#codeholder')
  var modalLabel = $('#modalLabel')
  var copyBtn = $('#copy')
  var currentColor = 'taxcom'
  var clipboard = new ClipboardJS('#copy')

  clipboard.on('success', function (e) {
    copyBtn.attr('class', 'btn btn-link')
    e.clearSelection()
  })

  $('#color').on('change', function () {
    console.log($(this).val())
    $('body').toggleClass(currentColor)
    currentColor = $(this).val()
    $('body').toggleClass(currentColor)
  })

  $('a.card-link').on('click', function (event) {
    event.preventDefault()
    var symbol = $(this).parent().parent().find('th').text()
    copyBtn.attr('class', 'btn btn-primary')
    var code

    if ($(this).text() === 'HTML') {
      code = $(this).parent().parent().find('svg').parent().html()
      code = code.replace(/</g, '&lt')
      code = code.replace(/>/g, '&gt')
      code = code.replace(/ data-v-.*?=""/g, '')
      codeholder.html(code)
    } else {
      var size = $('#' + symbol).attr('viewBox')
      // size = size.replace(/ /g, ',')
      var angles = size.split(' ')
      // <GeometryDrawing Brush="#00FFFFFF" Geometry="F1 M 0,0L 24,0L 24,24L 0,24L 0,0 Z "/>
      code = '\n                    <GeometryDrawing Geometry="F1 M ' + angles[0] + ',' + angles[1] + 'L ' + angles[2] + ',' + angles[1] + 'L ' + angles[2] + ',' + angles[3] + 'L ' + angles[0] + ',' + angles[3] + 'L ' + angles[0] + ',' + angles[1] + ' Z" Brush="#00FFFFFF" />' + $('#' + symbol).html()
      //code = '\n                    <GeometryDrawing Brush="#00FFFFFF" ><GeometryDrawing.Geometry><RectangleGeometry Rect="' + size + '" /></GeometryDrawing.Geometry></GeometryDrawing>' + $('#' + symbol).html()
      // code = '\n                    <RectangleGeometry Brush="#00FFFFFF" Rect="' + size + '" />' + $('#' + symbol).html()
      code = `<?xml version="1.0" encoding="utf-8"?>
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
    <DrawingBrush x:Key="` + symbol + `" Stretch="None">
        <DrawingBrush.Drawing>
            <DrawingGroup>
                <DrawingGroup.Children>` + code + `
                </DrawingGroup.Children>
            </DrawingGroup>
        </DrawingBrush.Drawing>
    </DrawingBrush>
</ResourceDictionary>
`
      code = code.replace(/<path/g, '\n                    <GeometryDrawing')
      code = code.replace(/><\/path>/g, ' />')
      code = code.replace(/d="/g, 'Geometry="F1 ')
      code = code.replace(/<circle cx="([\d.]+)" cy="([\d.]+)" r="([\d.]+)" fill="#([\w.]+)" \/>/g, '\n                    <GeometryDrawing Brush="#$4" ><GeometryDrawing.Geometry><EllipseGeometry Center="$1,$2" RadiusX="$3" RadiusY="$3" /></GeometryDrawing.Geometry></GeometryDrawing>')
      code = code.replace(/fill="/g, 'Brush="')
      code = code.replace(/ class=".*?"/g, '')
      code = code.replace(/><\/circle>/g, ' />')
      // code = code.replace(/fill-rule="evenodd"/g, 'FillRule="EvenOdd"')
      code = code.replace(/fill-rule="evenodd" /g, '')
      code = code.replace(/clip-rule="evenodd" /g, '')
      var codeEscaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

      codeholder.html(codeEscaped)
    }
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block)
    })
    modalLabel.text(symbol)
    $('#codeModal').modal('show')
  })
})
