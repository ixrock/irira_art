<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><?= $pageTitle ?></title>
  <link href="https://fonts.googleapis.com/css?family=Lato:400,700&amp;subset=latin-ext" rel="stylesheet">
  <link rel="stylesheet" href="/css/index.css"/>
</head>
<body>

<main>
  <header>
    <div class="social-icons">
      <a href="https://vk.com/uniqueartcreations" target="_blank">
        <img src="/icons/vk.svg" alt="Vk.com">
      </a>
      <a href="https://www.facebook.com/Mudra-Unique-Art-Creations-By-Iri-262591347114916/" target="_blank">
        <img src="/icons/facebook.svg" alt="Facebook">
      </a>
      <a href="https://www.instagram.com/iri_ra/" target="_blank">
        <img src="/icons/instagram.svg" alt="Instagram">
      </a>
    </div>
    <div class="logo"></div>
  </header>

    <? include_once "menu.php" ?>
    <?= $pageContent ?>
</main>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-100107354-1', 'auto');
  ga('send', 'pageview');
</script>

</body>
</html>