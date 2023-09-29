# What's this?<!-- omit from toc -->
This is a wrapper for the [Nova.Money API](https://app.swaggerhub.com/apis-docs/coyosoftware/Nova.Money/v1).

Please note that this package is in constant development and does not support all API endpoints yet.

# What's in this document?<!-- omit from toc -->
- [Installation](#installation)
- [Basic example](#basic-example)
- [Supported endpoints](#supported-endpoints)
  - [Companies](#companies)
    - [Attachments](#attachments)
    - [List](#list)
    - [Statement](#statement)
    - [Shareholders](#shareholders)
  - [Public](#public)
    - [SignIn](#signin)
  - [Users](#users)
    - [SignIn](#signin-1)
    - [Subdomains](#subdomains)
- [License](#license)

# Installation
Installation is simple - just run:

    npm i @coyosoftware/nova-api

# Basic example
Just initialize a new NovaApi instance passing your Nova.Money subdomain:

```javascript
import NovaApi from '@coyosoftware/nova-api';

const api = new NovaApi('YOUR_SUBDOMAIN', 'USER_API_KEY');
```

Please note that the **USER_API_KEY** parameter is not required. If you initialize the client without it, you will have access only to the [public endpoints](#public) and [user sign in endpoint](#signin-1).

With the api client instance you can use any of the [supported endpoints](#supported-endpoints).

The response for all methods in the API client is an axios response object. Please refer to [Axios](https://github.com/axios/axios) documentation for further information about it.

# Supported endpoints

## Companies

### Attachments
```javascript
import NovaApi from '@coyosoftware/nova-api';

const api = new NovaApi('YOUR_SUBDOMAIN', 'USER_API_KEY');

api.companies.attachments(companyIds);
```

### List
```javascript
import NovaApi from '@coyosoftware/nova-api';

const api = new NovaApi('YOUR_SUBDOMAIN', 'USER_API_KEY');

api.companies.list();
```

### Statement
```javascript
import NovaApi from '@coyosoftware/nova-api';

const api = new NovaApi('YOUR_SUBDOMAIN', 'USER_API_KEY');

api.companies.statement(companyIds, date);
```

### Shareholders
```javascript
import NovaApi from '@coyosoftware/nova-api';

const api = new NovaApi('YOUR_SUBDOMAIN', 'USER_API_KEY');

api.companies.shareholders(companyId);
```

## Public

### SignIn
```javascript
import NovaApi from '@coyosoftware/nova-api';

const api = new NovaApi('YOUR_SUBDOMAIN');

api.public.signIn(email, password);
```

## Users

### SignIn
```javascript
import NovaApi from '@coyosoftware/nova-api';

const api = new NovaApi('YOUR_SUBDOMAIN');

api.users.signIn(email, password);
```

The difference between Public and Users sign in the that the Users sign in performs an additional check to see if the user found with the given email and password has access to the specified subdomain before returning the api token, while the Public Sign In just returns the api token without any further check.
The Public Sign In is useful when you have the same user for multiple subdomains and want to perform operations on them (because the api token is valid across the subdomains).

### Subdomains
```javascript
import NovaApi from '@coyosoftware/nova-api';

const api = new NovaApi('YOUR_SUBDOMAIN', 'USER_API_KEY');

api.users.subdomain();
```

# License
MIT License, [https://opensource.org/license/mit/](https://opensource.org/license/mit/)