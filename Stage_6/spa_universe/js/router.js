export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    const route = event.target.getAttribute("href");

    if (route) {
      window.history.pushState({}, "", route);
      this.handle();
      console.log("window", window);
    }
  }
  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
        console.log(pathname);
      });
  }
}
