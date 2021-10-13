

const routes = {
  '/': home,
  '/result': result,
  '/form': form,
}

// render page when index initially loaded - pass html to root div in index.html
const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

// render section according to the pathname - method
// use history api: 3 parameters: state, title, route to push - push current route into a history object so we can navigate with forward/backward
// call onNavigate method on onClick event in the nav menu
const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  rootDiv.innerHTML = routes[pathname]
}

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
}
