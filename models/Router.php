<?php

class Router {

  private $viewsManager;

  function __construct(){
    $this->viewsManager = new ViewsManager();
  }

  function loadView($viewType){
    switch ($viewType) {

      # 1. Registrar el nombre de la URL desde donde se va a acceder
      # 2. Ver ViewsManager.php para el paso 2
      # 3. Llamar método previamente creado en el viewsManager y salir del switch

      case "login":
      $this->viewsManager->loadLogin();
      break;

      case "home":
      $this->viewsManager->loadHome();
      break;

      case "registro":
      $this->viewsManager->loadRegistro();
      break;
      
      default:
      $this->viewsManager->loadLogin();
      break;
    }
  }
}
?>
