import { Router } from "./router.js";

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/exploracao", "/pages/exploracao.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle(); //Voltar e Avançar do navegador funcionarem
window.route = () => router.route();
