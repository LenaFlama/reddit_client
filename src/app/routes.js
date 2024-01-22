const ROUTES = {
  homeRoute: () => '/r/pics',
  newRoute: () => '/new',
  popularRoute: () => '/r/popular/',
  searchRoute: (searchTerm) => `/search/${searchTerm}`,
  categoriesRoute: () => ''
}

export default ROUTES;