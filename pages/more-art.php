<?php

$pageTitle = "Iri Ra - more art";
$graphicsImg = printImagesFolder(__DIR__ . '/../img/more_art/graphics');
$ceramicsImg = printImagesFolder(__DIR__ . '/../img/more_art/ceramics');
$dragonImg = printImagesFolder(__DIR__ . '/../img/more_art/dragon');
$scorpionImg = printImagesFolder(__DIR__ . '/../img/more_art/scorpion');

$pageContent = <<<PAGE
<section class="more-art">
  <h1>More art</h1>

  <h3>Graphics and watercolor art</h3>
  <div class="images">{$graphicsImg}</div>

  <h3>A Dragon</h3>
  <div class="images">{$dragonImg}</div>

  <h3>A scorpion from avocado seeds</h3>
  <div class="images">{$scorpionImg}</div>

  <h3>Ceramics</h3>
  <div class="images">{$ceramicsImg}</div>
</section>
PAGE;
