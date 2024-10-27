<?php

$pageTitle = "Iri Ra - digital art";
$imageDir = __DIR__ . '/../img/digital_art';
$images = printImagesFolder($imageDir);

$pageContent = <<<PAGE
<section className="digital-art">
    <h1>Digital art</h1>
    <div className="images big">{$images}</div>
  </section>
PAGE;
