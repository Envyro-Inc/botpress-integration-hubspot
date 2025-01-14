
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
    - [Deals](#deals-1)
    - [Example with Multiple Filter Groups](#example-with-multiple-filter-groups-andor-logic)
7. [Properties](#properties)

---

## Introduction

This guide provides instructions on using HubSpot CRM integration to manage various CRM operations, such as creating, updating, deleting, and searching for contacts, companies, tickets, and deals.

---

## Seeing Property IDs

To view the internal property names for HubSpot properties, refer to the following link: [Internal HubSpot Property Names](https://community.hubspot.com/t5/APIs-Integrations/Internal-HubSpot-property-name-for-Contact-Owner/m-p/952044).

---

## Finding Property IDs

You can find the properties and their IDs at this link: [HubSpot Property Settings](https://app.hubspot.com/property-settings/46425249/properties?type=0-1&eschref=%2Fcontacts%2F46425249%2Fobjects%2F0-1%2Frestore).

---

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
- Update Deal Stage
- Search Deals

### Other

- Make an API Call

---

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
  "sorts": ["createdate"],
  "limit": 10
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
  "sorts": ["createdate"],
  "limit": 10
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
  "sorts": ["createdate"],
  "limit": 10
}
```

### Search for Deals

```json
{
  "filterGroups": [
    {
      "filters": [
        {
          "propertyName": "amount",
          "operator": "GT",
          "value": "5000"
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

---

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

```json
{
  "properties": {
    "email": "example@gmail.com",
    "firstname": "John",
    "lastname": "Doe",
    "phone": "123-456-7890"
  }
}
```

#### Delete a Contact

```json
{
  "contactId": "12345"
}
```

#### Update a Contact

```json
{
  "contactId": "12345",
  "properties": {
    "phone": "123-456-7891"
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

---

### Properties

Properties are the specific fields you want to retrieve for each record. Example:

```json
"properties": ["createdate", "amount", "dealname", "dealstage"]
```

---

### Example with Multiple Filter Groups

#### Example 1: AND Logic

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

---
