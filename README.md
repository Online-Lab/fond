For starting project:

for load all dependencies

```bash
    $ bower install
    $ npm install
```


Then, FIRSTLY start JSON Server (if [JSON Server](https://github.com/typicode/json-server) installed)

```bash
$ json-server --watch db.json
```

In the SECOND start [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

```bash
$ gulp serve || gulp
```