<template>

<div class="container">
    <h3>Общие иконки</h3>
    <p class="text-secondary small pb-3">&lt;script src="assets/js/img-common.js"&gt;&lt;/script&gt;</p>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Size</th>
                <th scope="col" class="text-right">Code</th>
              </tr>
            </thead>
            <tbody>
              <tr class="test">
                <th scope="row">home</th>
                <td><svg class="icon"><use xlink:href="#home"></use></svg></td>
                <td>24 x 24</td>
                <td class="text-right"><a href="#" class="card-link" data-toggle="modal" data-target="#codeModal">HTML</a> <a href="#" class="card-link">XAML</a></td>
              </tr>
              <tr>
                <th scope="row">more-vertical</th>
                <td><svg class="icon"><use xlink:href="#more-vertical"></use></svg></td>
                <td>24 x 24</td>
                <td class="text-right"><a href="#" class="card-link">HTML</a> <a href="#" class="card-link">XAML</a></td>
              </tr>
              <tr>
                <th scope="row">map-pin</th>
                <td><svg class="icon"><use xlink:href="#map-pin"></use></svg></td>
                <td>24 x 24</td>
                <td class="text-right"><a href="#" class="card-link">HTML</a> <a href="#" class="card-link">XAML</a></td>
              </tr>
              <tr>
                <th scope="row">date</th>
                <td><svg class="icon"><use xlink:href="#date"></use></svg></td>
                <td>24 x 24</td>
                <td class="text-right"><a href="#" class="card-link">HTML</a> <a href="#" class="card-link">XAML</a></td>
              </tr>
              <tr>
                <th scope="row">phone</th>
                <td><svg class="icon"><use xlink:href="#phone"></use></svg></td>
                <td>24 x 24</td>
                <td class="text-right"><a href="#" class="card-link">HTML</a> <a href="#" class="card-link">XAML</a></td>
              </tr>
              <tr>
                <th scope="row">search</th>
                <td><svg class="icon"><use xlink:href="#search"></use></svg></td>
                <td>24 x 24</td>
                <td class="text-right"><a href="#" class="card-link">HTML</a> <a href="#" class="card-link">XAML</a></td>
              </tr>
              <tr>
                <th scope="row">user</th>
                <td><svg class="icon"><use xlink:href="#user"></use></svg></td>
                <td>24 x 24</td>
                <td class="text-right"><a href="#" class="card-link">HTML</a> <a href="#" class="card-link">XAML</a></td>
              </tr>
              <tr>
                <th scope="row">menu</th>
                <td><svg class="icon"><use xlink:href="#menu"></use></svg></td>
                <td>24 x 24</td>
                <td class="text-right"><a href="#" class="card-link">HTML</a> <a href="#" class="card-link">XAML</a></td>
              </tr>
              <tr>
                <th scope="row">close</th>
                <td><svg class="icon"><use xlink:href="#close"></use></svg></td>
                <td>24 x 24</td>
                <td class="text-right"><a href="#" class="card-link">HTML</a> <a href="#" class="card-link">XAML</a></td>
              </tr>
              <tr>
                <th scope="row">plus</th>
                <td><svg class="icon"><use xlink:href="#plus"></use></svg></td>
                <td>24 x 24</td>
                <td class="text-right"><a href="#" class="card-link">HTML</a> <a href="#" class="card-link">XAML</a></td>
              </tr>
              <tr>
                <th scope="row">minus</th>
                <td><svg class="icon"><use xlink:href="#minus"></use></svg></td>
                <td>24 x 24</td>
                <td class="text-right"><a href="#" class="card-link">HTML</a> <a href="#" class="card-link">XAML</a></td>
              </tr>
              <tr>
                <th scope="row">done</th>
                <td><svg class="icon"><use xlink:href="#done"></use></svg></td>
                <td>24 x 24</td>
                <td class="text-right"><a href="#" class="card-link">HTML</a> <a href="#" class="card-link">XAML</a></td>
              </tr>
            </tbody>
          </table>

          <!-- Modal -->
<div class="modal fade bd-example-modal-lg" id="codeModal" tabindex="-1" role="dialog" aria-labelledby="codeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">home</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"><svg class="icon"><use xlink:href="#close"></use></svg></span>
          </button>
        </div>
        <div class="modal-body">
          <pre><code class="html" id="codeholder" ><svg class="icon"><use xlink:href="#home"></use></svg></code></pre>
        </div>
        <div class="modal-footer">
          <button id="copy" type="button" data-clipboard-target="#codeholder" class="btn btn-primary">Copy</button>
          <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'IconsDemo',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
