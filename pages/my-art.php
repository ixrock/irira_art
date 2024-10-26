<?php

$allContent = '';

include "oil-painting.php";
$allContent .= $pageContent;

include "eco-art.php";
$allContent .= $pageContent;

include "eco-jewellery.php";
$allContent .= $pageContent;

include "digital-art.php";
$allContent .= $pageContent;

$pageTitle = "Iri Ra - my art";
$pageContent = $allContent;