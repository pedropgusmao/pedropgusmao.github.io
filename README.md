# portobgusmao.com

Personal academic site. Plain Jekyll, built by GitHub Pages directly: no custom plugins, no GitHub Actions, no external fonts or scripts.

## Editing content

| What | Where |
| --- | --- |
| Name, role, email, photo | `_config.yml` (`author:`) |
| Bio and research themes | `index.html` |
| News | `_data/news.yml` (newest first) |
| Publications | `_data/publications.yml` (newest first; `selected: true` puts a paper on the home page) |
| Profile links | `_data/links.yml` |
| Teaching | `teaching.md` |

Your name is bolded in author lists when it matches an entry in `self_names` in `_config.yml`.

## Local preview

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Deploying

Push to the `main` branch of `pedropgusmao/pedropgusmao.github.io`. In the repository's Settings → Pages, set the source to "Deploy from a branch", branch `main`, folder `/ (root)`. The `CNAME` file keeps the custom domain.
