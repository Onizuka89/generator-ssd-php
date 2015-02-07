<!DOCTYPE>
<html>
  <head>
    <title>Welcome to <%= appname %></title>
    <meta charset="utf-8" />
    <!-- remove in dist -->
    <% if (options.bootstrap) { %><link rel="stylesheet" type="text/css" href="<%= paths.bower_components %>/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="<%= paths.bower_components %>/bootstrap/dist/css/bootstrap-theme.css">
    <% }%>
    
    <!-- end remove in dist -->
  </head>
  <body>
    <div<% if(options.bootstrap) { %> class="container-fluid"<% } %>>
      <h1>Welcome to <%= appname %></h1>
      <p>Welcome to the php scaffold of the app <%= appname %></p>

      <!-- remove in dist -->
      <% if (options.jquery || options.bootstrap || options.ember ) { %><script src="<%= paths.bower_components %>/jquery/dist/jquery.js"></script>
      <% } if (options.bootstrap) { %><script src="<%= paths.bower_components %>/bootstrap/dist/js/bootstrap.js"></script>
      <% } if (options.ember) {  %><script src="<%= paths.bower_components %>/handlebars/handlebars.js"></script>
      <script src="<%= paths.bower_components %>/ember/ember.js"></script>
      <script src="<%= paths.bower_components %>/ember-data/ember-data.js></script>
      <% } %>
      
      <!-- end remove in dist -->
    </div>
  </body>
</html>
