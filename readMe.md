# curriculum overview

1. creating a server
2. sending status codes (200, 404)
3. setting headers
4. handling request/response
5. filtering data
6. extracting path/query params

## The request object

- req.body = data from the request body
- req.params - search params eg api/:continent/:country
- req.method - HTTP method eg POST, GET DELETE
- req.ip - client's ip
- req.query - query params eg api?name=peter&status=married
