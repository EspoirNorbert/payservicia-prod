<template>

    <div class="docs-page">
      <div class="docs-wrapper">
        <div id="docs-sidebar" class="docs-sidebar">
          <div class="top-search-box d-lg-none p-3">
            <form class="search-form">
              <input
                type="text"
                placeholder="Search the docs..."
                name="search"
                class="form-control search-input"
              />
              <button type="submit" class="btn search-btn" value="Search">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
          <nav id="docs-nav" class="docs-nav navbar">
            <ul class="section-items list-unstyled nav flex-column pb-3">
              <li class="nav-item section-title">
                <a class="nav-link scrollto active" href="#section-1">
                  <span class="theme-icon-holder me-2"></span>
                  Introduction</a
                >
              </li>
              <li class="nav-item section-title">
                <a class="nav-link scrollto active" href="#section-1">
                  <span class="theme-icon-holder me-2"></span>
                  Introduction</a
                >
              </li>
            </ul>
          </nav>
          <!--//docs-nav-->
        </div>
        <!--//docs-sidebar-->
        <div class="docs-content">
          <div class="container">
            <article class="docs-article" id="section-1">
              <header class="docs-header">
                <h1 class="docs-heading">
                  Introduction
                  <span class="docs-time">Last updated: 2019-06-01</span>
                </h1>
                <section class="docs-intro">
                  <p>
                    Section intro goes here. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Quisque finibus condimentum
                    nisl id vulputate. Praesent aliquet varius eros interdum
                    suscipit. Donec eu purus sed nibh convallis bibendum quis
                    vitae turpis. Duis vestibulum diam lorem, vitae dapibus nibh
                    facilisis a. Fusce in malesuada odio.
                  </p>
                </section>
                <!--//docs-intro-->

                <!--//docs-code-block-->

                <!--//docs-code-block-->
              </header>
              <section class="docs-section" id="item-1-1">
                <h2 class="section-heading">Section Item 1.1</h2>
                <p>
                  Vivamus efficitur fringilla ullamcorper. Cras condimentum
                  condimentum mauris, vitae facilisis leo. Aliquam sagittis
                  purus nisi, at commodo augue convallis id.
                </p>
                <p>Code Example: <code>npm install &lt;package&gt;</code></p>
                <h5>Unordered List Examples:</h5>
                <ul>
                  <li>
                    <strong class="me-1">HTML5:</strong>
                    <code>&lt;div id="foo"&gt;</code>
                  </li>
                  <li>
                    <strong class="me-1">CSS:</strong>
                    <code>#foo { color: red }</code>
                  </li>
                  <li>
                    <strong class="me-1">JavaScript:</strong>
                    <code>console.log(&#x27;#foo\bar&#x27;);</code>
                  </li>
                </ul>
                <h5>Ordered List Examples:</h5>
                <ol>
                  <li>Download lorem ipsum dolor sit amet.</li>
                  <li>Click ipsum faucibus venenatis.</li>
                  <li>Configure fermentum malesuada nunc.</li>
                  <li>Deploy donec non ante libero.</li>
                </ol>
                <h5>Callout Examples:</h5>
                <div class="callout-block callout-block-info">
                  <div class="content">
                    <h4 class="callout-title">
                      <span class="callout-icon-holder me-1">
                        <i class="fas fa-info-circle"></i>
                      </span>
                      <!--//icon-holder-->
                      Note
                    </h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium <code>&lt;code&gt;</code> , Nemo
                      enim ipsam voluptatem quia voluptas
                      <a href="#">link example</a> sit aspernatur aut odit aut
                      fugit.
                    </p>
                  </div>
                  <!--//content-->
                </div>
                <!--//callout-block-->

                <div class="callout-block callout-block-warning">
                  <div class="content">
                    <h4 class="callout-title">
                      <span class="callout-icon-holder me-1">
                        <i class="fas fa-bullhorn"></i>
                      </span>
                      <!--//icon-holder-->
                      Warning
                    </h4>
                    <p>
                      Nunc hendrerit odio quis dignissim efficitur. Proin ut
                      finibus libero. Morbi posuere fringilla felis eget
                      sagittis. Fusce sem orci, cursus in tortor
                      <a href="#">link example</a> tellus vel diam viverra
                      elementum.
                    </p>
                  </div>
                  <!--//content-->
                </div>
                <!--//callout-block-->

                <div class="callout-block callout-block-success">
                  <div class="content">
                    <h4 class="callout-title">
                      <span class="callout-icon-holder me-1">
                        <i class="fas fa-thumbs-up"></i>
                      </span>
                      <!--//icon-holder-->
                      Tip
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      <a href="#">Link example</a> aenean commodo ligula eget
                      dolor.
                    </p>
                  </div>
                  <!--//content-->
                </div>
                <!--//callout-block-->

                <div class="callout-block callout-block-danger me-1">
                  <div class="content">
                    <h4 class="callout-title">
                      <span class="callout-icon-holder">
                        <i class="fas fa-exclamation-triangle"></i>
                      </span>
                      <!--//icon-holder-->
                      Danger
                    </h4>
                    <p>
                      Morbi eget interdum sapien. Donec sed turpis sed nulla
                      lacinia accumsan vitae ut tellus. Aenean vestibulum
                      <a href="#">Link example</a> maximus ipsum vel dignissim.
                      Morbi ornare elit sit amet massa feugiat, viverra dictum
                      ipsum pellentesque.
                    </p>
                  </div>
                  <!--//content-->
                </div>
                <!--//callout-block-->

                <h5 class="mt-5">Alert Examples:</h5>
                <div class="alert alert-primary" role="alert">
                  This is a primary alert—check it out!
                </div>
                <div class="alert alert-secondary" role="alert">
                  This is a secondary alert—check it out!
                </div>
                <div class="alert alert-success" role="alert">
                  This is a success alert—check it out!
                </div>
                <div class="alert alert-danger" role="alert">
                  This is a danger alert—check it out!
                </div>
                <div class="alert alert-warning" role="alert">
                  This is a warning alert—check it out!
                </div>
                <div class="alert alert-info" role="alert">
                  This is a info alert—check it out!
                </div>
                <div class="alert alert-light" role="alert">
                  This is a light alert—check it out!
                </div>
                <div class="alert alert-dark" role="alert">
                  This is a dark alert—check it out!
                </div>
              </section>
              <!--//section-->
              <!--//section-->
            </article>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "DocsView",
  components: {
    //HelloWorld,
  },
};
</script>
<style scoped>

</style>
