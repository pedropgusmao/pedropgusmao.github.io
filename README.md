# portobgusmao.com

Personal academic site. Plain Jekyll with no custom plugins, external fonts or scripts. A GitHub Actions workflow builds it and publishes to `gh-pages`.

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

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site and publishes it to the `gh-pages` branch, which GitHub Pages serves (Settings → Pages: "Deploy from a branch", `gh-pages`, `/ (root)`). The `CNAME` file is copied into the build, so the custom domain is kept.
