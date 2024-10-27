<?php

$pageTitle = "Iri Ra - oil painting";
$imageDir = __DIR__ . '/../img/oil_painting';
$images = printImagesFolder($imageDir);

$pageContent = <<<PAGE
<section className="oil-painting">
    <h1>Oil painting</h1>
    <div className="images">{$images}</div>
  </section>
PAGE;
