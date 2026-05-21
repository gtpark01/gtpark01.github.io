source "https://rubygems.org"

# Use modern Jekyll for local preview. GitHub Pages builds the site
# server-side with its own bundle regardless of what is pinned here.
gem "jekyll", "~> 4.3"

group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-sass-converter", "~> 3.0"
end

# Performance booster for watching directories on Windows
gem "wdm", "~> 0.1.1", platforms: [:mingw, :mswin, :x64_mingw]
# Windows / JRuby lack zoneinfo data
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
