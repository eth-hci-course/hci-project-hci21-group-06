export const getPageNumber = (page) => {
    switch(page){
      case '/dashboard':
        return 0
      case '/rankings':
        return 1
      case '/shopA/purchases':
      case '/shopA/store':
      case '/shopB':
        return 2
      case '/analytics':
        return 3
      case '/settings':
        return 4
      default:
        return -1
    } 
  }