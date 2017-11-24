

  app.get('/api/v1/users/', (req, res) => res.send({
     users: users
  }));

 
  app.all('api/v1/centers/', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
    }));git 