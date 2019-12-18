# Project Name

Swaggy Threadz

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

This is an implementation of a product webpage for an ecommerce website.  It contains the following components:
1) A NavBar with title and search bar to search for products in the database.
2) A product details component that consists of the following:
  - An image carousel with images of the current product and style
  - Product description
  - A style selector to switch between styles on the current product
  - A size selector that will only show sizes that are available in inventory
  - A quantity selector that maxes out at the number of that size currently available in inventory
3) A related products card carousel that consists of the following:
  - A brief overview of the given product and a default picture
  - The ability to click on the card to navigate to that item's page
  - A star button that when clicked will bring up a window that compares the current product to the related product clicked
4) An outfit card carousel that consists of the following:
  - A button to add the current product to your outfit
  - A delete button to remove a card from your outfit 
  - The ability to click on the card to navigate to that item's page
  - Browser persistence to maintain the current outfit after closing the browser
5) A Questions and Answers section that consists of the following:
  - FILL ME IN
6) A Ratings and Reviews section that consists of the following:
  - FILL ME IN
  
## Photos

NavBar and Product Details




## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

### Installing Dependencies

From within the root directory:

```
npm install
npm run start

```
