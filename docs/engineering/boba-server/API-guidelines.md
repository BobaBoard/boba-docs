# API guidelines

These rules must be followed when creating new API endpoint in BobaServer. They're a subset of the excellent [Zalando RESTful API guidelines](https://opensource.zalando.com/restful-api-guidelines/).

## The Golden Rule

1. **MUST** document every endpoint using the OpenAPI format (see [How to Write Documentation](./API-endpoints.md#documentation)).

## Response Format

2. **MUST** use standard HTTP status codes. [(link)](https://opensource.zalando.com/restful-api-guidelines/#150)
3. **MUST** always return JSON objects as top-level data structures. [(link)](https://opensource.zalando.com/restful-api-guidelines/#110)
4. **MUST** follow all of the Zalando JSON Guidelines. [(link)](https://opensource.zalando.com/restful-api-guidelines/#json-guidelines) Particularly:
   - **SHOULD** pluralize array names.
   - **MUST** use ASCII snake*case for property names (and never camelCase): `^[a-z*][a-z_0-9]\*$`.
   - **SHOULD** not use null for empty arrays.
   - **MUST** not use null for boolean properties.
   - **SHOULD** name date/time properties with _\_at_ suffix.
   - **MUST** use same semantics for null and absent properties.
5. **MUST** use standard data formats. [(link)](https://opensource.zalando.com/restful-api-guidelines/#238)

## Request Format

6. **MUST** use HTTP methods correctly. [(link)](https://opensource.zalando.com/restful-api-guidelines/#148)
   - For a more compact explanation see [this guide](https://www.restapitutorial.com/lessons/httpmethods.html).
   - See full list at [httpstatuses.com](https://httpstatuses.com/).
7. **MUST** avoid actions — think about resources. [(link)](https://opensource.zalando.com/restful-api-guidelines/#138)
   - See [RESTful API Design: nouns are good, verbs are bad](https://cloud.google.com/blog/products/api-management/restful-api-design-nouns-are-good-verbs-are-bad) for an explanation.
8. **MUST** pluralize resource names. [(link)](https://opensource.zalando.com/restful-api-guidelines/#134)
9. **MUST** use lowercase separate words with hyphens for path segments. [(link)](https://opensource.zalando.com/restful-api-guidelines/#129)
10. **MUST** use snake_case (never camelCase) for query parameters. [(link)](https://opensource.zalando.com/restful-api-guidelines/#130)
11. **MUST** stick to conventional query parameters [(link)](https://opensource.zalando.com/restful-api-guidelines/#137). This is relevant to operations like searching, sorting, filtering, and paginating.
