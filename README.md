to test ssg:

```sh
npm run build && docker build . -t ssg_test:latest && docker run -it -p 8080:80 --rm ssg_test:latest
```