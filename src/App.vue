<template>
  <body id="app" class="d-flex flex-column h-100 taxcom">
    <div class="jumbotron text-white bg-primary">
      <div class="container">
        <div class="row">
            <div class="col-md-9">
              <h1 class="display-4">Дизайн система</h1>
              <p>Готовые элементы интерфейса помогают ускорить процесс разработки и выдержать проект в едином стиле. Данный набор будет мостом между разрабатываемым в Figma UI-китом и готовым проектом.</p>
              <div class="form-row">
                <div class="col-6">
                  <select class="custom-select outline-light" id="color">
                    <option value="taxcom">Такском</option>
                    <option value="dossier">Досье</option>
                    <option value="otchetnost">Отчетность</option>
                    <option value="sprinter">Онлайн Спринтер</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-md-3 text-md-right pt-4">
              <svg class="taxcom logo"><use class="light" xlink:href="#taxcom"></use></svg>
            </div>
        </div>

      </div>
    </div>
    <IconsDemo msg="Welcome to Your Vue.js App"/>

    <footer class="mt-auto py-3">
    <div class="container">
        <div class="row">
            <div class="col-md-5 text-center text-md-left my-auto pb-2 pb-md-0">
                © ООО «Такском», 2000-2019
            </div>
            <div class="col-md-7 text-center text-md-right">

            </div>
        </div>
    </div>
</footer>
  </body>

</template>

<script>
import IconsDemo from './components/IconsDemo.vue'
import './assets/js/img-common'
import './assets/js/showcode'

export default {
  name: 'app',
  components: {
    IconsDemo
  }
}
</script>

<style lang="scss">
@import "./assets/scss/custom_variables.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "./assets/scss/custom_components.scss";
@import "./assets/scss/select_outline.scss";

@import "./assets/scss/icons.scss";
@import "../node_modules/highlight.js/styles/vs.css";

</style>
