# Sanepar API

Expose the current reservoir levels in a JSON format by scrapping it.

## Overview

This service only have one endpoint:

`/api`

Expected response:

```
{
 "date": "2021-12-10 07:54",
 "dams": [
    {
      "name": "Barragem Iraí",
      "level": "63,15%",
      "value": 63.15,
      "type": "single"
    },
    {
      "name": "Barragem Passaúna",
      "level": "62,04%",
      "value": 62.04,
      "type": "single"
    },
    {
      "name": "Barragem Piraquara 1",
      "level": "79,48%",
      "value": 79.48,
      "type": "single"
    },
    {
      "name": "Barragem Piraquara 2",
      "level": "78,15%",
      "value": 78.15,
      "type": "single"
    },
    {
      "name": "Total SAIC*",
      "level": "67,35%",
      "value": 67.35,
      "type": "system"
    }
  ]
}
```

## Running locally

Copy `.env.example` to `.env`

If you want to run on your local virtualenv you will need a have a Node up and running

```
yarn develop
```
