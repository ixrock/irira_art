<?php

$pageTitle = "Iri Ra - eco jewellery";
$images = printImagesFolder(__DIR__ . "/../img/eco_jewellery/main");
$forestImages = printImagesFolder(__DIR__ . "/../img/eco_jewellery/forest");

$pageContent = <<<PAGE
<section className="eco-jewellery">
  <h1>Eco jewellery from avocado seeds</h1>
  <br>
  <p>
    Every ornament of an avocado pendant is unique, designed and carved by me with love.
    All stones used here are natural gemstones.
  </p>
  <br>
  <br>
  <div className="images small">{$images}</div>

  <h3>Photos from the forest</h3>
  <div className="images small">{$forestImages}</div>
</section>
PAGE;
