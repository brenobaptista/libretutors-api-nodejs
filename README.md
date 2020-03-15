# LibreTutors API

> API for LibreTutors made using Node.js

## Table of Contents

- [Features](#features)
- [Future](#future)
- [Documentation](#documentation)
  * [Tutors](#tutors)
  * [Georeferencing](#georeferencing)
  * [Schemas](#schemas)
- [Support](#support)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

## Features

* CRUD for tutors.
* Georeferencing (latitude and longitude).

## Future

* Sign up and Login
* Pusher Chatkit
* Unit Testing (Jest)

## Documentation

This is a project of an API made so I can use it on my other project [LibreTutors](https://github.com/brenobaptista/libretutors-react-native).

API URL: not deployed to Heroku yet

### Endpoints:

#### Tutors

```
  get('/tutors')

  post('/tutors')

  put('/tutors/:id')

  delete('/tutors/:id')
```

#### Georeferencing

```
  get('/search')
```

### Schemas:

```
Tutors: name, bio, avatarUrl, subjects, latitude, longitude, email
Georeferencing: latitude, longitude, subjects (get from Tutors)
```

## Support

Please [open an issue](../../issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](../../compare?expand=1).

1. Fork this repository.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

## Author

| [![brenobaptista](https://avatars1.githubusercontent.com/u/47641641?s=120&v=4)](https://github.com/brenobaptista) |
| ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [Breno Baptista](https://github.com/brenobaptista) |

## License

This project is licensed under the [GPL-3.0 License](/LICENSE)