# API guidelines

These rules must be followed when creating new API endpoint in BobaServer. They're a subset of the excellent [Zalando RESTful API guidelines](https://opensource.zalando.com/restful-api-guidelines/).

## The Golden Rule

1. **MUST** document every endpoint using the OpenAPI format.

## Response Format

2. [**MUST** always return JSON objects as top-level data structures.](https://opensource.zalando.com/restful-api-guidelines/#110)
3. [**MUST** follow all of the Zalando JSON Guidelines.](https://opensource.zalando.com/restful-api-guidelines/#json-guidelines) Particularly:
   - **SHOULD** pluralize array names
   - **MUST** use ASCII snake*case for property names (and never camelCase): `^[a-z*][a-z_0-9]\*$`
   - **SHOULD** not use null for empty arrays
   - **SHOULD** name date/time properties with _\_at_ suffix
   - **MUST** use same semantics for null and absent properties
4. [**MUST** use standard data formats.](https://opensource.zalando.com/restful-api-guidelines/#238)

## Request Format

5. [**MUST** use HTTP methods correctly.](https://opensource.zalando.com/restful-api-guidelines/#148)
   - For a more compact explanation see [this guide](https://www.restapitutorial.com/lessons/httpmethods.html) or google "REST HTTP methods".
6. [**MUST** use standard HTTP status codes.](https://opensource.zalando.com/restful-api-guidelines/#150)
   - See full list at [httpstatuses.com](https://httpstatuses.com/).
7. [**MUST** avoid actions — think about resources.](https://opensource.zalando.com/restful-api-guidelines/#138).
   - See [RESTful API Design: nouns are good, verbs are bad](https://cloud.google.com/blog/products/api-management/restful-api-design-nouns-are-good-verbs-are-bad) for an explanation.
8. [**MUST** pluralize resource names.](https://opensource.zalando.com/restful-api-guidelines/#134)
9. [**MUST** use lowercase separate words with hyphens for path segments.](https://opensource.zalando.com/restful-api-guidelines/#129)
10. [**MUST** use snake_case (never camelCase) for query parameters](https://opensource.zalando.com/restful-api-guidelines/#130).
11. [**MUST** stick to conventional query parameters.](https://opensource.zalando.com/restful-api-guidelines/#137) This is relevant to operations like searching, sorting, filtering, and paginating.
