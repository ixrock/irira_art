<?php

$pageTitle = "Iri Ra - digital art";
$imageDir = __DIR__ . '/../img/digital_art';
$images = printImagesFolder($imageDir);

$pageContent = <<<PAGE
<section class="digital-art">
    <h1>Digital art</h1>
    <div class="images big">{$images}</div>
  </section>
PAGE;
