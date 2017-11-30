const routes = [
  {
    method: 'GET',
    url: '/api/users',
    response: {
      code: 401,
      status: 'NOT_AUTHORIZED'
    }
  },
  {
    method: 'GET',
    url: '/api/storage/items',
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          name: 'abc',
          price: 2000,
          description: 'reasdf'
        },
        {
          name: 'abc',
          price: 2000,
          description: 'reasdf'
        },
        {
          name: 'abc',
          price: 2000,
          description: 'reasdf'
        },
        {
          name: 'abc',
          price: 2000,
          description: 'reasdf'
        }
      ]
    }
  }
 ]

