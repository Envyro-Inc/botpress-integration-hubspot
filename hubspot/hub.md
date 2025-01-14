# HubSpot CRM Integration

This integration allows you to connect Botpress with HubSpot CRM, enabling various CRM operations directly through your chatbot.


## Table of Contents

1. [Introduction](#introduction)
2. [Seeing Property IDs](#seeing-property-ids)
3. [Finding Property IDs](#finding-property-ids)
4. [Actions](#actions)
    - [Contacts](#contacts)
    - [Companies](#companies)
    - [Tickets](#tickets)
    - [Deals](#deals)
    - [Other](#other)
5. [Search](#search)
    - [Search for Companies](#search-for-companies)
    - [Search for Contacts](#search-for-contacts)
    - [Search for Tickets](#search-for-tickets)
    - [Search for Deals](#search-for-deals)
6. [Using Actions](#using-actions)
    - [Contacts](#contacts-1)
    - [Companies](#companies-1)
    - [Tickets](#tickets-1)
    - [Example with Multiple Filter Groups](#example-with-multiple-filter-groups-andor-logic)
        - [Example 1: Using AND logic within a filter group](#example-1-using-and-logic-within-a-filter-group)
        - [Example 2: Using OR logic between filter groups](#example-2-using-or-logic-between-filter-groups)
        - [Example 3: Combining AND and OR logic](#example-3-combining-and-and-or-logic)
7. [Properties](#properties)

## Introduction

This guide provides instructions on using HubSpot CRM integration to manage various CRM operations, such as creating, updating, deleting, and searching for contacts, companies, and tickets.

## Seeing Property IDs

To view the internal property names for HubSpot properties, refer to the following link: [Internal HubSpot Property Names](https://community.hubspot.com/t5/APIs-Integrations/Internal-HubSpot-property-name-for-Contact-Owner/m-p/952044).

## Finding Property IDs

You can find the properties and their IDs at this link: [HubSpot Property Settings](https://app.hubspot.com/property-settings/46425249/properties?type=0-1&eschref=%2Fcontacts%2F46425249%2Fobjects%2F0-1%2Frestore).

## Actions

### Contacts

- Get a Contact
- Create a Contact
- Delete a Contact
- Update a Contact
- Search Contacts

### Companies

- Get a Company
- Create a Company
- Delete a Company
- Update a Company
- Search Companies

### Tickets

- Get a Ticket
- Create a Ticket
- Delete a Ticket
- Update a Ticket
- Search Tickets

### Deals

- Get a Deal
- Create a Deal
- Delete a Deal
- Update a Deal
- Search Deal

### Other

- Make an API Call

## Search

### Search for Companies

```json
{
  "filterGroups": [
    {
      "filters": [
        {
          "propertyName": "industry",
          "operator": "EQ",
          "value": "Technology"
        }
      ]
    }
  ],
  "sorts": [
    {
      "propertyName": "createdate",
      "direction": "DESCENDING"
    }
  ],
  "properties": ["name", "industry", "annualrevenue"],
  "limit": 100,
  "after": 0
}
```

### Search for Contacts

```json
{
  "filterGroups": [
    {
      "filters": [
        {
          "propertyName": "email",
          "operator": "EQ",
          "value": "example@hubspot.com"
        }
      ]
    }
  ],
  "sorts": [
    {
      "propertyName": "createdate",
      "direction": "DESCENDING"
    }
  ],
  "properties": ["createdate", "firstname", "lastname", "email"],
  "limit": 100,
  "after": 0
}
```

### Search for Tickets

```json
{
  "filterGroups": [
    {
      "filters": [
        {
          "propertyName": "subject",
          "operator": "EQ",
          "value": "Support Needed"
        }
      ]
    }
  ],
  "sorts": [
    {
      "propertyName": "createdate",
      "direction": "DESCENDING"
    }
  ],
  "properties": ["createdate", "subject", "content", "status"],
  "limit": 100,
  "after": 0
}
```

#### Search for Deals

```json
{
  "filterGroups": [
    {
      "filters": [
        {
          "propertyName": "amount",
          "operator": "GT",
          "value": "10000"
        },
        {
          "propertyName": "dealstage",
          "operator": "EQ",
          "value": "closedwon"
        }
      ]
    }
  ],
  "sorts": ["amount"],
  "limit": 10
}
```

## Using Actions

### Contacts

#### Get a Contact

To get a contact, simply provide the contact ID.

```json
{
  "contactId": "12345"
}
```

#### Create a Contact

When creating a new contact, you should include at least one of the following properties: email, firstname, or lastname. It is recommended to always include email to avoid duplicate contacts in HubSpot.

```json
{
  "properties": {
    "email": "milosarsic14@gmail.com",
    "firstname": "Milos",
    "lastname": "Arsik",
    "phone": "(226) 700-0079",
    "company": "HubSpot",
    "hubspot_owner_id": "117816668"
  }
}
```

#### Delete a Contact

To delete a contact, simply provide the contact ID.

```json
{
  "contactId": "12345"
}
```

#### Update a Contact

Perform a partial update of a contact identified by `{contactId}`. `{contactId}` refers to the internal object ID. Provided property values will be overwritten. Read-only and non-existent properties will be ignored.

```json
{
  "contactId": "12345",
  "properties": {
    "phone": "(226) 700-0080",
    "company": "HubSpot Inc."
  }
}
```

### Companies

#### Get a Company

To get a company, simply provide the company ID.

```json
{
  "companyId": "67890"
}
```

#### Create a Company

When creating a new company, include relevant properties.

```json
{
  "properties": {
    "name": "HubSpot",
    "industry": "Technology",
    "annualrevenue": "1000000"
  }
}
```

#### Delete a Company

To delete a company, simply provide the company ID.

```json
{
  "companyId": "67890"
}
```

#### Update a Company

Perform a partial update of a company identified by `{companyId}`. `{companyId}` refers to the internal object ID. Provided property values will be overwritten. Read-only and non-existent properties will be ignored.

```json
{
  "companyId": "67890",
  "properties": {
    "annualrevenue": "1500000"
  }
}
```

### Tickets

#### Get a Ticket

To get a ticket, simply provide the ticket ID.

```json
{
  "ticketId": "54321"
}
```

#### Create a Ticket

When creating a new ticket, include relevant properties.

```json
{
  "properties": {
    "subject": "Need help with integration",
    "content": "Details about the issue...",
    "status": "open"
  }
}
```

#### Delete a Ticket

To delete a ticket, simply provide the ticket ID.

```json
{
  "ticketId": "54321"
}
```

#### Update a Ticket

Perform a partial update of a ticket identified by `{ticketId}`. `{ticketId}` refers to the internal object ID. Provided property values will be overwritten. Read-only and non-existent properties will be ignored.

```json
{
  "ticketId": "54321",
  "properties": {
    "status": "closed"
  }
}
```

### Deals

#### Get a Deal

To get a deal, provide the deal ID.

```json
{
  "dealId": "32032106769"
}
```

#### Create a Deal

```json
{
  "properties": {
    "dealname": "New Deal",
    "amount": "10000",
    "dealstage": "qualifiedtobuy",
    "closedate": "2025-12-31"
  }
}
```

#### Delete a Deal

```json
{
  "dealId": "32032106769"
}
```

#### Update a Deal

```json
{
  "dealId": "32032106769",
  "properties": {
    "dealname": "Updated Deal Name",
    "amount": "15000"
  }
}
```

#### Update Deal Stage

```json
{
  "dealId": "32032106769",
  "stage": "closedwon"
}
```

## Properties

Properties are the specific fields you want to retrieve for each record. You can specify which properties to include in the response. In the examples above, properties like `createdate`, `firstname`, and `lastname` are requested. You can customize this based on the fields available in your HubSpot account.

Example:

```json
"properties": ["createdate", "firstname", "lastname", "email", "phone"]
```

### Example with Multiple Filter Groups (AND/OR logic)

#### Example 1: Using AND logic within a filter group
```json
{
  "filterGroups": [
    {
      "filters": [
        {
          "propertyName": "createdate",
          "operator": "GTE",
          "value": "1622505600000"
        },
        {
          "propertyName": "email",
          "operator": "EQ",
          "value": "example@hubspot.com"
        }
      ]
    }
  ],
  "sorts": [
    {
      "propertyName": "createdate",
      "direction": "DESCENDING"
    }
  ],
  "properties": ["createdate", "firstname", "lastname"],
  "limit": 100,
  "after": 0
}
```

#### Example 2: Using OR logic between filter groups
```json
{
  "filterGroups": [
    {
      "filters": [
        {
          "propertyName": "createdate",
          "operator": "GTE",
          "value": "1622505600000"
        }
      ]
    },
    {
      "filters": [
        {
          "propertyName": "email",
          "operator": "EQ",
          "value": "example@hubspot.com"
        }
      ]
    }
  ],
  "sorts": [
    {
      "propertyName": "createdate",
      "direction": "DESCENDING"
    }
  ],
  "properties": ["createdate", "firstname", "lastname"],
  "limit": 100,
  "after": 0
}
```

#### Example 3: Combining AND and OR logic
```json
{
  "filterGroups": [
    {
      "filters": [
        {
          "propertyName": "createdate",
          "operator": "GTE",
          "value": "1622505600000"
        },
        {
          "propertyName": "email",
          "operator": "EQ",
          "value": "example@hubspot.com"
        }
      ]
    },
    {
      "filters": [
        {
          "propertyName": "firstname",
          "operator": "EQ",
          "value": "Jane"
        }
      ]
    }
  ],
  "sorts": [
    {
      "propertyName": "createdate",
      "direction": "DESCENDING"
    }
  ],
  "properties": ["createdate", "firstname", "lastname"],
  "limit": 100,
  "after": 0
}
```