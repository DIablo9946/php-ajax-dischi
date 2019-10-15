<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Ajax php music</title>
    <link rel="stylesheet" href="css/style.css">
    <script type="text/javascript" src="js/action.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.4.2/handlebars.js" integrity="sha256-hSzapznWRy/aOZkctlN03an9DxCLlN8ZCQS0lxntiHg=" crossorigin="anonymous"></script>
    <?php include "api.php"; ?>
  </head>
  <body>
    <div class="container">
      <?php echo $data["title"]; ?>
    </div>

    <script id="template" type="text/x-handlebars-template">
      <div class="cont">
        <ul class="entry">
          <li><h1>{{title}}</h1></li>
          <li>{{author}}</li>
          <li>{{genre}}</li>
          <li>{{year}}</li>
        </ul>
        <img src="{{poster}}">
      </div>
    </script>
  </body>
</html>
