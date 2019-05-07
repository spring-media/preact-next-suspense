# preact-next-suspense

As of version 8.x Next does not work together with Preact anymore because it utilizes Suspense.

[@sventschui](https://github.com/sventschui) is currently [working on a PR](https://github.com/developit/preact/pull/1593) to implement Suspense for Preact.

This project is a monorepo with 3 packages

- **next**
  which is a Next.js project that uses next-with-preact-x as a plugin
- **next-with-preact-x**
  which is a re-implementation of @zeit/next-preact using the PR branch of Preact X containing Suspense
- **preact**
  which is a git submodule pointing to the branch of Preact X containing Suspense

now if you run

```console
yarn && cd next && yarn dev
```

It should run next using preact from the submodule and @sventschui implenentation of suspense and you
should be able to see `<div>Welcome to Next.js!</div>` as a rendered page.

Unfortunately this does not quite work yet, we end up having a page that says

```html
<!DOCTYPE html><undefined></undefined>
```

# 🔥 UPDATE 🔥

[@sventschui](https://github.com/sventschui) found that the problem is / was the usage of `preact-render-to-string@4.x`. Upgrading to `5.x` / `@next` fixed this bug.
