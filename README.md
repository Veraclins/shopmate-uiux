# shopmate-uiux

My implementation of the Turing ui/ux challenge

## Architecture

This implementation is focused sole on the design of the pages. Therefore, only a minimal setup was done. The goal of this setup is to make the design easy and optimize the build for performance.

### Language (HTML/CSS)

The whole implementation was done using HTML and css only

### Framework (Tailwindcss)

[Tailwindcss](https://tailwindcss.com/) is a utility-first CSS framework for rapidly building custom designs. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.

### Performance Improvement (Postcss/Purge css/cssnano)

Tailwind is awesome but it comes with turns of utility classes that one may not use in the design. Luckily, there are many ways to strip these unused classes from the final bundle. I used the combination of a custom config, purge css and css nano to specify the utility classes I needed, and strip out the unused ones as will as formatting and comments to result in a much smaller final file (from the original 477.6kb to about 13kb).

## Deployment

The application is hosted on Github pages: [click here](https://veraclins.github.io/shopmate-uiux/). To see the item page, click any of the products on the home page (any of the cards). To see the cart, click the shopping cart icon

## Time Spent

I spent a total of five (4) days on this project. This is due largely to my decision to use Tailwind css. Tailwind css has been gaining traction in the last few years and I have always wanted to give it a try but I never really go around to it until now. I decided to use this opportunity to try out to framework and I must confess that I am so glad I did. Using tailwind has been so much fun. I like to use every project I work on to learn something new and this has been such an awesome experience!
