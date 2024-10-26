<?php

$pageTitle = "Iri Ra - contact me";
$email = "artofirira@gmail.com";

// handling form
$messageSent = false;
$user = $_POST['username'];
$message = $_POST['message'];
$antiSpamFilterOk = substr_count($_SERVER['HTTP_REFERER'], $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']) > 0;
$antiSpamFilterOk = $antiSpamFilterOk && !$_POST['email'];

if ($antiSpamFilterOk && $user && $message) {
  $mailSent = mb_send_mail($email, "Message from $user at irira-art.com", $message);
  if ($mailSent) {
    header("Content-type: application/json");
    echo json_encode([
      "emailSent" => true,
      "user" => $user,
      "message" => $message,
    ]);
    exit;
  }
}

$pageContent = '
<section class="contacts">
    <h1>Contact me</h1>
    Feel free to contact me if you wish some commission art or if you have any questions or just to say Hi!
    <p>
      My email &mdash; <a href="javascript:;" data-email="' . base64_encode($email) . '" class="email"></a>
    </p>
    <form method="post">
      <input required name="username" placeholder="Your name" autofocus>
      <input id="antispam" type="email" name="email" placeholder="If you a human, please leave it empty" hidden>
      <textarea required name="message" placeholder="Message" rows="3"></textarea>
      <button type="submit"> Send</button>
    </form>
  </section>
  <script src="/js/contacts.js"></script>
';